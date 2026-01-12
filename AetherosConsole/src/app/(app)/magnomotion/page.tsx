import { MagnomotionTrackingMap } from "@/app/components/magnomotion/tracking-map";

export default function MagnomotionPage() {
    return (
        <div className="flex-1 flex flex-col space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight font-headline">
                    Magnomotion Tracking
                </h2>
            </div>
            <p className="text-muted-foreground">
                Real-time tracking of the magnomotion bullet trains on the station's torus network.
            </p>
            <div className="flex-1 flex items-stretch justify-center">
              <MagnomotionTrackingMap />
            </div>
        </div>
    );
}
