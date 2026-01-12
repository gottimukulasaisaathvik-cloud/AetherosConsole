'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { waterProductionData } from '@/lib/placeholder-data';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Factory, Droplets, Gem, Users, Asteroid } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const chartConfig = {
  production: {
    label: 'Production',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function WaterProductionDashboard() {
  const currentStatus = waterProductionData[waterProductionData.length - 1];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-1 lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hydrogen Reformation Rate</CardTitle>
                <Factory className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">8,500 Liters/hr</div>
                <p className="text-xs text-muted-foreground">Sabatier reactor at 95% capacity</p>
                <Progress value={95} className="mt-2 h-2" />
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ice Harvesting Drone</CardTitle>
                <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">Standby</div>
                <p className="text-xs text-muted-foreground">Next mission in 48 hours</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Crew Reclamation</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-xs text-muted-foreground">Of recycled water is from crew</p>
                 <div className="text-xs mt-2">
                    <span className="font-semibold">Urine:</span> 45%, <span className="font-semibold">Sweat:</span> 23%
                 </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Comet-Ice Harvesting</CardTitle>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground"><path d="m19.5 14.5-4-4L8 18l-2-2 4.5-4.5L2 7l5 5L14.5 2.5l5 5Z"/><path d="m19 15 2.5 2.5"/><path d="m21.5 17.5 2.5 2.5"/><path d="M9 13c-2.5 2.5-2.5 5.5 0 8s5.5 2.5 8 0"/></svg>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">32%</div>
                <p className="text-xs text-muted-foreground">Of new water is from ice</p>
                 <div className="text-xs mt-2">
                    <span className="font-semibold">Last Haul:</span> 150,000 Liters
                 </div>
            </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-4">
            <CardHeader>
                <CardTitle>Water Production (Last 24 Hours)</CardTitle>
                <CardDescription>
                    Total volume of new water synthesized. (in Millions of Liters)
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] w-full">
                <ChartContainer config={chartConfig}>
                <LineChart
                    accessibilityLayer
                    data={waterProductionData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="time"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 5)}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `${value}M`}
                        domain={[0.8, 1.0]}
                     />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                    <Line
                        dataKey="production"
                        type="monotone"
                        stroke="var(--color-production)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    </div>
  );
}
