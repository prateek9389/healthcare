'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Role } from '@/types';
import { mockUsers } from '@/data/mockUsers';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  login: (email: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Load user from localStorage on mount
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const getDashboardRoute = (role: Role) => {
    const roleRoutes: Record<Role, string> = {
      admin: '/admin/dashboard',
      doctor: '/doctor/dashboard',
      nurse: '/nurse/dashboard',
      receptionist: '/receptionist/dashboard',
      lab_technician: '/lab/dashboard',
      pharmacist: '/pharmacy/dashboard',
      ambulance_staff: '/ambulance/dashboard',
      hr_management: '/hr/dashboard',
      billing_staff: '/billing/dashboard',
      patient: '/patient/dashboard',
    };
    return roleRoutes[role];
  };

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      if (pathname !== '/login') {
        router.push('/login');
      }
    } else {
      const correctRoute = getDashboardRoute(user.role);
      const rolePrefix = `/${correctRoute.split('/')[1]}`;
      // Route protection: If user is logged in but tries to access wrong route
      if (pathname === '/login' || (pathname !== correctRoute && !pathname.startsWith(rolePrefix))) {
        router.push(correctRoute);
      }
    }
  }, [user, isLoading, pathname, router]);

  const login = (email: string): boolean => {
    const foundUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      router.push(getDashboardRoute(foundUser.role));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
