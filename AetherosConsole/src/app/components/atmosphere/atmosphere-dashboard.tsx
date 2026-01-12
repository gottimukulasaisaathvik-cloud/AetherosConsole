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
import { atmosphereData } from '@/lib/placeholder-data';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { Wind } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const chartConfig = {
  nitrogen: {
    label: 'Nitrogen',
    color: 'hsl(var(--chart-1))',
  },
  oxygen: {
    label: 'Oxygen',
    color: 'hsl(var(--chart-2))',
  },
  argon: {
    label: 'Argon',
    color: 'hsl(var(--chart-3))',
  },
  co2: {
    label: 'CO₂',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function AtmosphereDashboard() {
  const averageNitrogen = (atmosphereData.reduce((acc, curr) => acc + curr.nitrogen, 0) / atmosphereData.length).toFixed(2);
  const averageOxygen = (atmosphereData.reduce((acc, curr) => acc + curr.oxygen, 0) / atmosphereData.length).toFixed(2);
  const averageArgon = (atmosphereData.reduce((acc, curr) => acc + curr.argon, 0) / atmosphereData.length).toFixed(2);
  const averageCo2 = (atmosphereData.reduce((acc, curr) => acc + curr.co2, 0) / atmosphereData.length).toFixed(3);


  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Nitrogen</CardTitle>
            <span className="text-sm text-muted-foreground">N₂</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageNitrogen}%</div>
            <p className="text-xs text-muted-foreground">10-day average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Oxygen</CardTitle>
            <span className="text-sm text-muted-foreground">O₂</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageOxygen}%</div>
            <p className="text-xs text-muted-foreground">10-day average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Argon</CardTitle>
            <span className="text-sm text-muted-foreground">Ar</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageArgon}%</div>
            <p className="text-xs text-muted-foreground">10-day average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. CO₂</CardTitle>
            <span className="text-sm text-muted-foreground">CO₂</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageCo2}%</div>
            <p className="text-xs text-muted-foreground">10-day average</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Atmospheric Composition (Last 10 Days)</CardTitle>
          <CardDescription>Percentage of constituent gases in the station's breathable air.</CardDescription>
        </CardHeader>
        <CardContent className="h-[350px] w-full">
          <ChartContainer config={chartConfig}>
            <AreaChart
                data={atmosphereData}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis unit="%" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <ChartLegend content={<ChartLegendContent />} />
                <Area type="monotone" dataKey="nitrogen" stackId="1" stroke="var(--color-nitrogen)" fill="var(--color-nitrogen)" fillOpacity={0.4} />
                <Area type="monotone" dataKey="oxygen" stackId="1" stroke="var(--color-oxygen)" fill="var(--color-oxygen)" fillOpacity={0.4} />
                <Area type="monotone" dataKey="argon" stackId="1" stroke="var(--color-argon)" fill="var(--color-argon)" fillOpacity={0.4} />
                <Area type="monotone" dataKey="co2" stackId="1" stroke="var(--color-co2)" fill="var(--color-co2)" fillOpacity={0.4} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Gas Breakdown</CardTitle>
          <CardDescription>Detailed atmospheric readings for the past 10 days.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Nitrogen (N₂)</TableHead>
                <TableHead className="text-right">Oxygen (O₂)</TableHead>
                <TableHead className="text-right">Argon (Ar)</TableHead>
                <TableHead className="text-right">CO₂</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {atmosphereData.map((data) => (
                <TableRow key={data.date}>
                  <TableCell className="font-medium">{data.date}</TableCell>
                  <TableCell className="text-right">{data.nitrogen.toFixed(2)}%</TableCell>
                  <TableCell className="text-right">{data.oxygen.toFixed(2)}%</TableCell>
                  <TableCell className="text-right">{data.argon.toFixed(2)}%</TableCell>
                  <TableCell className="text-right">{data.co2.toFixed(3)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
