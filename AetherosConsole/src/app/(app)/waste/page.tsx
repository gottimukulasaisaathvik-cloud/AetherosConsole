import { WasteDashboard } from "@/app/components/waste/waste-dashboard";

export default function WastePage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight font-headline">
                    Waste Management
                </h2>
            </div>
            <p className="text-muted-foreground">
                Comprehensive overview of all waste processing and recycling systems.
            </p>
            <WasteDashboard />
        </div>
    );
}
