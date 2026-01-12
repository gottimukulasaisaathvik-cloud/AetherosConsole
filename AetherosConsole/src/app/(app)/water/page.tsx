import { WaterDashboard } from "@/app/components/water/water-dashboard";

export default function WaterPage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight font-headline">
                    Water Management
                </h2>
            </div>
            <p className="text-muted-foreground">
                Overview of water production, recycling, and reserves.
            </p>
            <WaterDashboard />
        </div>
    );
}
