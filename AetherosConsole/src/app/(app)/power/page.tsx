import { PowerStatusCard } from "@/app/components/dashboard/power-status";

export default function PowerPage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight font-headline">
                    Power Systems
                </h2>
            </div>
            <p className="text-muted-foreground">
                Live and historical data for power generation and usage across the station.
            </p>
            <div className="grid grid-cols-1 gap-4">
                <PowerStatusCard className="col-span-1" />
            </div>
        </div>
    );
}
