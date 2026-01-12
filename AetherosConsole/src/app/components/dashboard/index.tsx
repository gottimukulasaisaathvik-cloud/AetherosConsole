import { PowerStatusCard } from './power-status';
import { LifeSupportCard } from './life-support';
import { CommsStatusCard } from './comms-status';
import { RecentAlertsCard } from './recent-alerts';

export function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-headline">
          Station Dashboard
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <LifeSupportCard />
        <CommsStatusCard />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <PowerStatusCard className="col-span-1 lg:col-span-4" />
        <RecentAlertsCard className="col-span-1 lg:col-span-3" />
      </div>
    </div>
  );
}
