"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Shield } from "lucide-react";
import Link from "next/link";

export function RoleSelector() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-headline text-primary mb-2">Welcome to Aetheros Console</h1>
                <p className="text-muted-foreground text-lg">Please select your role to proceed.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                <Link href="/dashboard?role=admin">
                    <Card className="hover:bg-accent hover:border-primary/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                        <CardHeader className="flex flex-col items-center justify-center text-center p-8">
                            <Shield className="w-16 h-16 mb-4 text-primary" />
                            <CardTitle className="text-2xl font-headline">Admin</CardTitle>
                            <CardDescription>Access the full station management dashboard and system controls.</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
                <Link href="/dashboard?role=personnel">
                    <Card className="hover:bg-accent hover:border-primary/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                        <CardHeader className="flex flex-col items-center justify-center text-center p-8">
                            <User className="w-16 h-16 mb-4 text-primary" />
                            <CardTitle className="text-2xl font-headline">Personnel</CardTitle>
                            <CardDescription>View your schedule, tasks, and station announcements.</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
