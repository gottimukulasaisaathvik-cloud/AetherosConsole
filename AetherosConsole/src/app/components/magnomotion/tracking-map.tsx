
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Building, TrainFront } from "lucide-react"
import React, { useState, useEffect, useMemo, useRef } from "react"
import { cn } from "@/lib/utils"

const NUM_TRAINS = 8
const NUM_STATIONS = 4
const SPEED = 0.0005 // Radians per millisecond
const STOP_DURATION = 500 // Milliseconds
const STOP_PROXIMITY = 0.02 // Radians

const colors = [
  '#f44336', '#9c27b0', '#3f51b5', '#03a9f4',
  '#009688', '#8bc34a', '#ffeb3b', '#ff9800'
]

type TrainState = 'moving' | 'stopped';

type Train = {
  id: number;
  angle: number; // Position in radians
  color: string;
  state: TrainState;
  stopTime: number; // Timestamp when it stopped
  stoppedAtStation: number | null; // ID of the station it's stopped at
};

const createTrain = (id: number): Train => ({
  id,
  angle: (id / NUM_TRAINS) * 2 * Math.PI,
  color: colors[id % colors.length],
  state: 'moving',
  stopTime: 0,
  stoppedAtStation: null,
});

type Station = {
  id: number,
  x: number,
  y: number,
  angle: number,
}

export function MagnomotionTrackingMap() {
  const [trains, setTrains] = useState<Train[]>(() =>
    Array.from({ length: NUM_TRAINS }, (_, i) => createTrain(i))
  )
  const lastTimestamp = useRef<number | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 450 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setDimensions({ width, height: height > 0 ? height : 450 });
      }
    });

    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2
  const trackRadius = Math.min(dimensions.width / 2 - 40, dimensions.height / 2 - 40)


  const stations = useMemo((): Station[] => {
    return Array.from({ length: NUM_STATIONS }, (_, i) => {
      const angle = (i / NUM_STATIONS) * 2 * Math.PI;
      return {
        id: i,
        angle,
        x: centerX + trackRadius * Math.cos(angle),
        y: centerY + trackRadius * Math.sin(angle),
      }
    })
  }, [centerX, centerY, trackRadius]);

  useEffect(() => {
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (lastTimestamp.current === null) {
        lastTimestamp.current = timestamp;
      }
      const deltaTime = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      setTrains(currentTrains => {
        const occupiedStationIds = new Set(
          currentTrains.filter(t => t.stoppedAtStation !== null).map(t => t.stoppedAtStation)
        );

        return currentTrains.map(train => {
          // Handle departure from station
          if (train.state === 'stopped') {
            if (timestamp - train.stopTime > STOP_DURATION) {
              return { ...train, state: 'moving', stoppedAtStation: null };
            }
            return train;
          }
          
          let newAngle = (train.angle + SPEED * deltaTime) % (2 * Math.PI);
          
          // Handle arrival at station
          for (const station of stations) {
            const currentAngle = newAngle % (2 * Math.PI);
            const stationAngle = station.angle;

            let distance = Math.abs(currentAngle - stationAngle);
            // Handle angle wrap around (e.g. from 2PI to 0)
            if (distance > Math.PI) {
              distance = 2 * Math.PI - distance;
            }

            if (distance < STOP_PROXIMITY && !occupiedStationIds.has(station.id)) {
                // Stop the train and occupy the station
                return {
                  ...train,
                  state: 'stopped',
                  stopTime: timestamp,
                  angle: station.angle, // Snap to station
                  stoppedAtStation: station.id,
                };
            }
          }

          // Keep moving
          return { ...train, angle: newAngle };
        })
      })
      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [stations])

  const getTrainPosition = (angle: number) => {
    return {
      x: centerX + trackRadius * Math.cos(angle),
      y: centerY + trackRadius * Math.sin(angle),
    }
  }

  // Calculate train velocity for rotation
  const getTrainVelocity = (angle: number) => {
    // Velocity vector is tangent to the circle
    return {
      vx: -Math.sin(angle),
      vy: Math.cos(angle)
    }
  }

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle>Torus Network Map</CardTitle>
        <CardDescription>Live feed of train movements across the primary torus track.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div
          ref={mapContainerRef}
          className="relative w-full flex-grow bg-muted/20 rounded-lg overflow-hidden border"
          style={{
            minHeight: '450px',
            backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        >
          <svg width="100%" height="100%" className="absolute inset-0">
            {/* Track */}
            <circle
              cx={centerX}
              cy={centerY}
              r={trackRadius - 3}
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 8"
            />
            <circle
              cx={centerX}
              cy={centerY}
              r={trackRadius + 3}
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 8"
            />
            {/* Stations */}
            {stations.map(station => (
              <g key={`station-group-${station.id}`}>
                <circle
                  key={`station-circle-${station.id}`}
                  cx={station.x}
                  cy={station.y}
                  r="12"
                  fill="hsl(var(--primary))"
                  stroke="hsl(var(--background))"
                  strokeWidth="3"
                />
                <Building
                  key={`station-icon-${station.id}`}
                  x={station.x - 9}
                  y={station.y - 9}
                  className="h-4.5 w-4.5"
                  color="hsl(var(--primary-foreground))"
                />
              </g>
            ))}
          </svg>

          {trains.map(train => {
            const { x, y } = getTrainPosition(train.angle);
            const { vx, vy } = getTrainVelocity(train.angle);
            return (
              <div
                key={train.id}
                className={cn(
                  "absolute transition-all duration-100",
                  train.state === 'stopped' && 'opacity-80'
                )}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) rotate(${Math.atan2(vy, vx) * 180 / Math.PI + 90}deg)`,
                  filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.5))'
                }}
              >
                <TrainFront
                  className="h-6 w-6"
                  style={{ color: train.color }}
                  aria-label={`Train ${train.id + 1}`}
                />
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-full text-white text-[10px] border border-background/50" style={{ backgroundColor: train.color }}>
                  {train.id + 1}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {trains.map(train => {
            const trackPercentage = Math.round((train.angle / (2 * Math.PI)) * 100)
            const station = train.stoppedAtStation !== null ? stations.find(s => s.id === train.stoppedAtStation) : null
            return (
              <div key={train.id} className="p-2 bg-muted/50 rounded-md flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: train.color }}></div>
                <div>
                  <div className="font-bold">Train {train.id + 1}</div>
                  <div className="text-xs text-muted-foreground">
                    {train.state === 'stopped' && station ? `Boarding at Station ${station.id + 1}` : `Track: ${trackPercentage}%`}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
