import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonnelTable } from "@/app/components/personnel/personnel-table";
import { JobsTable } from "@/app/components/jobs/jobs-table";
import { Users, Briefcase } from "lucide-react";

export default function PersonnelPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-headline">
          Personnel Management
        </h2>
      </div>
      <p className="text-muted-foreground">
        Manage and review all personnel, job roles, and payroll information.
      </p>
      <Tabs defaultValue="roster" className="space-y-4">
        <TabsList>
          <TabsTrigger value="roster">
            <Users className="mr-2" />
            Personnel Roster
          </TabsTrigger>
          <TabsTrigger value="jobs">
            <Briefcase className="mr-2" />
            Job Roles & Payroll
          </TabsTrigger>
        </TabsList>
        <TabsContent value="roster">
          <PersonnelTable />
        </TabsContent>
        <TabsContent value="jobs">
          <JobsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
