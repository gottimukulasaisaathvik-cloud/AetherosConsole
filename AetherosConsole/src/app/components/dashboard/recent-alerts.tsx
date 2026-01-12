import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { recentAlerts, type Alert } from '@/lib/placeholder-data';
import { ShieldAlert } from 'lucide-react';

const severityStyles: Record<Alert['severity'], string> = {
    Low: 'border-blue-400/50 text-blue-400',
    Medium: 'border-yellow-400/50 text-yellow-400',
    High: 'border-red-500/50 text-red-500',
}

export function RecentAlertsCard({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <ShieldAlert className="mr-2" /> Recent Alerts
        </CardTitle>
        <CardDescription>
          A log of recent system anomalies and alerts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>System</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentAlerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>
                  <div className="font-medium">{alert.system}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {alert.message}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={severityStyles[alert.severity]}>
                    {alert.severity}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{alert.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
