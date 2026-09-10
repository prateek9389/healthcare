'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return null;
}
