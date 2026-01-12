'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { WasteRecyclingDashboard } from '../waste-recycling/waste-recycling-dashboard';
import { GalacticpyroDashboard } from '../galacticpyro/galacticpyro-dashboard';

export function WasteDashboard() {

  return (
    <div className="grid gap-4">
        <Card>
            <CardHeader>
                <CardTitle>General Waste Recycling</CardTitle>
                <CardDescription>Monitoring of the station's solid and organic waste processing systems.</CardDescription>
            </CardHeader>
            <CardContent>
                <WasteRecyclingDashboard />
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Galacticpyro Waste Chamber</CardTitle>
                <CardDescription>Monitoring of the station's advanced plasma gasification waste disposal system.</CardDescription>
            </CardHeader>
            <CardContent>
                <GalacticpyroDashboard />
            </CardContent>
        </Card>
    </div>
  );
}
