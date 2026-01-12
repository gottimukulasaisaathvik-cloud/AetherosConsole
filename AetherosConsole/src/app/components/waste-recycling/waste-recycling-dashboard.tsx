'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { wasteRecyclingData } from '@/lib/placeholder-data';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Trash2, Percent, Leaf, Biohazard, Package, Wand, Recycle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const chartConfig = {
  processed: {
    label: 'Waste Processed',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function WasteRecyclingDashboard() {
  const latestData = wasteRecyclingData[wasteRecyclingData.length - 1];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Waste Processed</CardTitle>
                <Trash2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{latestData.totalProcessed} kg/day</div>
                <p className="text-xs text-muted-foreground">Across all waste streams</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recycling Efficiency</CardTitle>
                <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">97.8%</div>
                <p className="text-xs text-muted-foreground">Material reclamation rate</p>
                 <Progress value={97.8} className="mt-2 h-2" />
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Biomass Reclaimed</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">125 kg/day</div>
                <p className="text-xs text-muted-foreground">Converted to nutrient paste</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Methane Capture</CardTitle>
                <Biohazard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">45 m³/hr</div>
                <p className="text-xs text-muted-foreground">Used for supplemental power</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Plastics Recycled</CardTitle>
                <Recycle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">99.1%</div>
                <p className="text-xs text-muted-foreground">Returned to polymer stock</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Metals & Silicates</CardTitle>
                <Wand className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">94.5%</div>
                <p className="text-xs text-muted-foreground">Re-integrated into fabrication</p>
            </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-4 xl:col-span-6">
            <CardHeader>
                <CardTitle>Waste Processed (Last 24 Hours)</CardTitle>
                <CardDescription>
                    Total mass of waste processed by the recycling system (in kg).
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] w-full">
                <ChartContainer config={chartConfig}>
                <BarChart
                    accessibilityLayer
                    data={wasteRecyclingData}
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
                        tickFormatter={(value) => `${value}kg`}
                        domain={[800, 1000]}
                     />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                    <Bar
                        dataKey="processed"
                        fill="var(--color-processed)"
                        radius={4}
                    />
                </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    </div>
  );
}
