'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { dailyPowerData } from '@/lib/placeholder-data';
import { Power } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartConfig = {
  generation: {
    label: 'Generation',
    color: 'hsl(var(--chart-1))',
  },
  usage: {
    label: 'Usage',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function PowerStatusCard({ className }: { className?: string }) {
  const latestData = dailyPowerData[dailyPowerData.length - 1];
  const avgGeneration = (dailyPowerData.reduce((acc, curr) => acc + (curr.generation ?? 0), 0) / dailyPowerData.length).toFixed(1);
  const surplus = (latestData.generation ?? 0) - (latestData.usage ?? 0);

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Power Status: Last 10 Days</CardTitle>
        <Power className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-center">
            <div>
                <p className="text-xs text-muted-foreground">Current Generation</p>
                <p className="text-xl font-bold">{latestData.generation} GW</p>
            </div>
            <div>
                <p className="text-xs text-muted-foreground">Current Usage</p>
                <p className="text-xl font-bold">{latestData.usage} GW</p>
            </div>
            <div>
                <p className="text-xs text-muted-foreground">Net Surplus</p>
                <p className={`text-xl font-bold ${surplus > 0 ? 'text-green-400' : 'text-red-400'}`}>{surplus.toFixed(1)} GW</p>
            </div>
            <div>
                <p className="text-xs text-muted-foreground">10-Day Avg. Generation</p>
                <p className="text-xl font-bold">{avgGeneration} GW</p>
            </div>
        </div>
        <div className="h-[250px] w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart data={dailyPowerData} accessibilityLayer>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                unit="GW"
              />
              <ChartTooltip
                content={<ChartTooltipContent indicator="dot" />}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="generation" fill="var(--color-generation)" radius={4} />
              <Bar dataKey="usage" fill="var(--color-usage)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}

    
