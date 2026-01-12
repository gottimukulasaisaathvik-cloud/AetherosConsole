import { MainLabDashboard } from "@/app/components/main-lab/main-lab-dashboard";

export default function MainLabPage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight font-headline">
                    Main Lab
                </h2>
            </div>
            <p className="text-muted-foreground">
                Overview of current experiments and lab status.
            </p>
            <MainLabDashboard />
        </div>
    );
}
