import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Thermometer, Wind } from 'lucide-react';

export function LifeSupportCard() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Life Support</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 12c-3.333 0-6 2.686-6 6" />
          <path d="M18 18c0-3.314-2.686-6-6-6" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground flex items-center">
              <Droplets className="mr-1.5 h-4 w-4" /> O₂ Level
            </div>
            <div className="text-2xl font-bold">20.9%</div>
            <p className="text-xs text-muted-foreground">Status: Optimal</p>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm2 4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
              </svg>
              CO₂ Level
            </div>
            <div className="text-2xl font-bold">0.04%</div>
            <p className="text-xs text-muted-foreground">Status: Nominal</p>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground flex items-center">
              <Thermometer className="mr-1.5 h-4 w-4" /> Cabin Temp
            </div>
            <div className="text-2xl font-bold">22.1°C</div>
            <p className="text-xs text-muted-foreground">Status: Stable</p>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground flex items-center">
              <Wind className="mr-1.5 h-4 w-4" /> Humidity
            </div>
            <div className="text-2xl font-bold">45%</div>
            <p className="text-xs text-muted-foreground">Status: Comfortable</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
