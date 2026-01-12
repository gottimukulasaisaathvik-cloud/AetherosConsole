'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertTriangle, Rss, Radio, TowerControl, CalendarCheck2 } from 'lucide-react';
import { CommsStatusCard } from '../dashboard/comms-status';
import { commsHistoryData, type CommsHistoryData } from '@/lib/placeholder-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';


const statusConfig: Record<CommsHistoryData['externalStatus'] | CommsHistoryData['internalStatus'], { color: string }> = {
  'Online': { color: 'text-green-400' },
  'Optimal': { color: 'text-green-400' },
  'Degraded': { color: 'text-yellow-400' },
  'Offline': { color: 'text-red-500' },
};


export function CommsDashboard() {

  return (
    <div className="grid gap-6">
      <Card>
          <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                  <TowerControl className="h-6 w-6 text-primary" />
                  External Communications
              </CardTitle>
              <CardDescription>
                Status of communication links with off-station assets.
              </CardDescription>
          </CardHeader>
          <CardContent>
              <CommsStatusCard />
          </CardContent>
      </Card>
      
      <Card>
          <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                  <Radio className="h-6 w-6 text-primary" />
                  Internal Communications
              </CardTitle>
              <CardDescription>
                Status of the station's internal communication networks.
              </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold">Station-Wide Comms</p>
                      <Badge variant="outline" className="text-green-400 border-green-400/50">
                          <CheckCircle2 className="mr-1.5 h-3 w-3" />
                          Optimal
                      </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">All non-critical internal channels are operating normally.</p>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Active Channels: </span>
                    <span className="font-bold">1,284</span>
                  </div>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold">Emergency Channel</p>
                      <Badge variant="outline" className="text-green-400 border-green-400/50">
                          <CheckCircle2 className="mr-1.5 h-3 w-3" />
                          Standby
                      </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Priority channel is clear and ready for emergency use.</p>
                   <div className="text-sm">
                    <span className="text-muted-foreground">Last Test: </span>
                    <span className="font-bold">24h ago</span>
                  </div>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold">Intra-Ship LAN</p>
                      <Badge variant="outline" className="text-green-400 border-green-400/50">
                          <CheckCircle2 className="mr-1.5 h-3 w-3" />
                          Online
                      </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Local network is operating at full capacity.</p>
                   <div className="text-sm">
                    <span className="text-muted-foreground">Packet Loss: </span>
                    <span className="font-bold">0.001%</span>
                  </div>
              </div>
            </div>
          </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 font-headline">
            <CalendarCheck2 className="h-6 w-6 text-primary" />
            10-Day Communications Log
          </CardTitle>
          <CardDescription>
            Historical log of external and internal communication system performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>External Link</TableHead>
                <TableHead>Internal Network</TableHead>
                <TableHead className="text-right">Signal Strength</TableHead>
                <TableHead className="text-right">Latency</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {commsHistoryData.map((day) => (
                <TableRow key={day.date}>
                  <TableCell className="font-medium">{day.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={cn(statusConfig[day.externalStatus].color.replace('text-', 'border-') + "/50", statusConfig[day.externalStatus].color)}>
                      {day.externalStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                     <Badge variant="outline" className={cn(statusConfig[day.internalStatus].color.replace('text-', 'border-') + "/50", statusConfig[day.internalStatus].color)}>
                      {day.internalStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono">{day.signalStrength.toFixed(1)}%</TableCell>
                  <TableCell className="text-right font-mono">{day.latency.toFixed(1)}s</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
