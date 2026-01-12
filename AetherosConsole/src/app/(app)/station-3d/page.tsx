import { Station3dView } from "@/app/components/station-3d/station-3d-view";

export default function Station3DPage() {
    return (
        <div className="flex-1 flex flex-col space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight font-headline">
                    3D Station View
                </h2>
            </div>
             <p className="text-muted-foreground">
                A real-time animated visualization of the Aetheros station's position at the L4 Lagrange point.
            </p>
            <div className="flex-1 flex items-center justify-center p-4 bg-muted/20 rounded-lg border overflow-hidden">
                <Station3dView />
            </div>
        </div>
    );
}
