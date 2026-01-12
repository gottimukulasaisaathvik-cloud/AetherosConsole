'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { WaterProductionDashboard } from '../water-production/water-production-dashboard';
import { WaterRecycleDashboard } from '../water-recycle/water-recycle-dashboard';

export function WaterDashboard() {

  return (
    <div className="grid gap-4">
        <Card>
            <CardHeader>
                <CardTitle>Water Production</CardTitle>
                <CardDescription>Monitoring of the station's water synthesis from various sources, including comet-ice harvesting, Sabatier reactors, and crew reclamation.</CardDescription>
            </CardHeader>
            <CardContent>
                <WaterProductionDashboard />
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Water Recycling</CardTitle>
                <CardDescription>Real-time monitoring of the station's closed-loop water reclamation system, which processes all wastewater, including from the crew.</CardDescription>
            </CardHeader>
            <CardContent>
                <WaterRecycleDashboard />
            </CardContent>
        </Card>
    </div>
  );
}
