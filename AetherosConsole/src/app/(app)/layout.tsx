'use client';
import { MainLayout } from '@/components/main-layout';
import { useRole } from '@/contexts/role-provider';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const { setRole } = useRole();

  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam === 'admin' || roleParam === 'personnel') {
      setRole(roleParam);
      // Persist to session storage to handle reloads
      sessionStorage.setItem('userRole', roleParam);
    } else {
      // Fallback to session storage if no param
      const storedRole = sessionStorage.getItem('userRole');
      if (storedRole === 'admin' || storedRole === 'personnel') {
        setRole(storedRole);
      }
    }
  }, [searchParams, setRole]);

  return <MainLayout>{children}</MainLayout>;
}
