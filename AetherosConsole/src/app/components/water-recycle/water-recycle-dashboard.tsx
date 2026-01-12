'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { waterRecycleData } from '@/lib/placeholder-data';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Droplets, Gauge, TestTube2, Percent, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const chartConfig = {
  reserves: {
    label: 'Reserves',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function WaterRecycleDashboard() {
  const currentStatus = waterRecycleData[waterRecycleData.length - 1];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Water Reserves</CardTitle>
                <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">4.2M Liters</div>
                <p className="text-xs text-muted-foreground">84% of maximum capacity</p>
                <Progress value={84} className="mt-2 h-2" />
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recycling Efficiency</CardTitle>
                <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">99.2%</div>
                <p className="text-xs text-muted-foreground">Last cycle efficiency</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Water Purity</CardTitle>
                <TestTube2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">12 PPM</div>
                <p className="text-xs text-muted-foreground">Total Dissolved Solids</p>
            </CardContent>
        </Card>
        

        <Card className="col-span-1 lg:col-span-4">
            <CardHeader>
                <CardTitle>Water Reserves (Last 24 Hours)</CardTitle>
                <CardDescription>
                    Total volume of potable water in storage, reclaimed from all sources.
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] w-full">
                <ChartContainer config={chartConfig}>
                <AreaChart
                    accessibilityLayer
                    data={waterRecycleData}
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
                        domain={[3.5, 4.5]}
                     />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                    <Area
                        dataKey="reserves"
                        type="natural"
                        fill="var(--color-reserves)"
                        fillOpacity={0.4}
                        stroke="var(--color-reserves)"
                        stackId="a"
                    />
                </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    </div>
  );
}
