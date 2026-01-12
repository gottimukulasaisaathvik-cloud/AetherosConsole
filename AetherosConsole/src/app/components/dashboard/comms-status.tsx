import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Satellite, CheckCircle2 } from 'lucide-react';

export function CommsStatusCard() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Communications</CardTitle>
        <Satellite className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
           <div className="flex items-center justify-between">
                <div>
                    <p className="text-lg font-semibold">Mission Control Link</p>
                    <p className="text-xs text-muted-foreground">Via Deep Space Network</p>
                </div>
                <Badge variant="outline" className="text-green-400 border-green-400/50">
                    <CheckCircle2 className="mr-1.5 h-3 w-3" />
                    Online
                </Badge>
           </div>
           <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                    <p className="text-xs text-muted-foreground">Signal Strength</p>
                    <p className="text-xl font-bold">98.7%</p>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">Latency</p>
                    <p className="text-xl font-bold">2.3 sec</p>
                </div>
           </div>
        </div>
      </CardContent>
    </Card>
  );
}
