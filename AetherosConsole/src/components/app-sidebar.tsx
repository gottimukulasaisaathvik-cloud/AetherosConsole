'use client';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Users2,
  LogOut,
  Settings,
  TrainTrack,
  Orbit,
  FlaskConical,
  Bot,
  Power,
  Satellite,
  Wind,
  Droplets,
  Trash2,
} from 'lucide-react';
import { AetherosLogo } from './icons/aetheros-logo';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { useRole } from '@/contexts/role-provider';
import { useMemo } from 'react';

const allNavItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', roles: ['admin', 'personnel'] },
  { href: '/power', icon: Power, label: 'Power', roles: ['admin', 'personnel'] },
  { href: '/comms', icon: Satellite, label: 'Comms', roles: ['admin', 'personnel'] },
  { href: '/atmosphere', icon: Wind, label: 'Atmosphere', roles: ['admin', 'personnel'] },
  { href: '/water', icon: Droplets, label: 'Water', roles: ['admin', 'personnel'] },
  { href: '/waste', icon: Trash2, label: 'Waste', roles: ['admin', 'personnel'] },
  { href: '/personnel', icon: Users2, label: 'Personnel', roles: ['admin', 'personnel'] },
  { href: '/magnomotion', icon: TrainTrack, label: 'Magnomotion', roles: ['admin', 'personnel'] },
  { href: '/station-3d', icon: Orbit, label: '3D Station View', roles: ['admin', 'personnel'] },
  { href: '/main-lab', icon: FlaskConical, label: 'Main Lab', roles: ['admin', 'personnel'] },
  { href: '/robotics', icon: Bot, label: 'Robotics', roles: ['admin', 'personnel'] },
];

export function AppSidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { role } = useRole();

  const navItems = useMemo(() => {
    return allNavItems.filter(item => item.roles.includes(role || ''));
  }, [role]);

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href || pathname === '/(app)/dashboard';
    }
    return pathname.startsWith(href);
  };

  const getLinkWithRole = (href: string) => {
    const params = new URLSearchParams(searchParams);
    if (role) {
      params.set('role', role);
    }
    return `${href}?${params.toString()}`;
  };
  
  const user = {
      admin: { name: 'Admin', email: 'eva.rostova@aetheros.io', avatar: 'https://picsum.photos/seed/admin/100/100', fallback: 'AD', hint: 'woman portrait' },
      personnel: { name: 'Personnel', email: 'kenji.tanaka@aetheros.io', avatar: 'https://picsum.photos/seed/personnel/100/100', fallback: 'PE', hint: 'man portrait' }
  }

  const currentUser = user[role || 'personnel'];


  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <AetherosLogo className="size-8 text-primary" />
          <h1 className="font-headline text-lg font-semibold text-primary">
            Aetheros 3.97
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Button
                asChild
                variant={isActive(item.href) ? 'default' : 'ghost'}
                className="w-full justify-start"
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                <Link href={getLinkWithRole(item.href)}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              <div className="flex w-full items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    data-ai-hint={currentUser.hint}
                  />
                  <AvatarFallback>{currentUser.fallback}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-left">
                  <p className="text-sm font-medium">{currentUser.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {currentUser.email}
                  </p>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {currentUser.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Link href="/" className="flex items-center w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </>
  );
}
