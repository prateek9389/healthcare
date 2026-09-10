'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';
import { NotificationProvider } from '@/context/NotificationContext';
import { DigitalTwinProvider } from '@/context/DigitalTwinContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <DigitalTwinProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </DigitalTwinProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}
