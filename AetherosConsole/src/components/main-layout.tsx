import { AppSidebar } from '@/components/app-sidebar';
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar collapsible="icon">
          <AppSidebar />
        </Sidebar>
        <SidebarInset className="min-h-screen">
            {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
