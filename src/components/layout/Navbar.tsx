'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import { Bell, Search, Sun, Moon, LogOut, User as UserIcon, Menu, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [showProfile, setShowProfile] = React.useState(false);

  return (
    <header className="h-[72px] bg-main flex items-center justify-between px-6 z-20 border-b border-border-main relative">
      
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-1.5 -ml-1.5 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {user?.role === 'admin' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome Admin</span>
            <span className="text-3xl">👋</span>
          </div>
        )}
        
        {user?.role === 'receptionist' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome Receptionist</span>
            <span className="text-3xl">👋</span>
          </div>
        )}

        {user?.role === 'pharmacist' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome Pharmacist</span>
            <span className="text-3xl">👋</span>
          </div>
        )}

        {user?.role === 'patient' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome Patient</span>
            <span className="text-3xl">👋</span>
          </div>
        )}

        {user?.role === 'nurse' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome Nurse</span>
            <span className="text-3xl">👋</span>
          </div>
        )}

        {user?.role === 'lab_technician' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome Lab</span>
            <span className="text-3xl">👋</span>
          </div>
        )}

        {user?.role === 'hr_management' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome HR</span>
            <span className="text-3xl">👋</span>
          </div>
        )}

        {user?.role === 'doctor' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome Doctor</span>
            <span className="text-3xl">👋</span>
          </div>
        )}

        {user?.role === 'billing_staff' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome to Billing</span>
            <span className="text-3xl">👋</span>
          </div>
        )}

        {user?.role === 'ambulance_staff' && (
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[22px] font-bold text-foreground tracking-wide">Welcome Ambulance</span>
            <span className="text-3xl">👋</span>
          </div>
        )}
      </div>

      {/* Middle Section - Centered Search Bar */}
      <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 w-full max-w-md">
        <Search className="w-[18px] h-[18px] absolute left-4 text-muted" strokeWidth={2} />
        <input 
          type="text" 
          placeholder="Search anything..." 
          className="w-full pl-11 pr-4 py-2.5 rounded-full bg-card border border-border-main text-[14px] text-foreground placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5 flex-1 justify-end">
        {/* Theme Toggle */}
        <div className="hidden sm:flex items-center bg-card rounded-full p-1 border border-border-main">
          <button 
            onClick={() => theme === 'dark' && toggleTheme()}
            className={`p-1.5 rounded-full transition-colors ${theme === 'light' ? 'bg-[#1E293B] text-white shadow-sm border border-border-main' : 'text-muted hover:text-foreground'}`}
          >
            <Sun className="w-4 h-4" />
          </button>
          <button 
            onClick={() => theme === 'light' && toggleTheme()}
            className={`p-1.5 rounded-full transition-colors ${theme === 'dark' ? 'bg-[#1E293B] text-white shadow-sm border border-border-main' : 'text-muted hover:text-foreground'}`}
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full text-muted hover:text-foreground transition-colors relative">
            <Bell className="w-[22px] h-[22px]" strokeWidth={1.5} />
            <span className="absolute top-1.5 right-1.5 w-[15px] h-[15px] bg-red-500 text-foreground text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-[#0B1120]">
              12
            </span>
          </button>

          <button className="p-2 rounded-full text-muted hover:text-foreground transition-colors">
            <Settings className="w-[22px] h-[22px]" strokeWidth={1.5} />
          </button>

          <div className="relative ml-1">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="w-[34px] h-[34px] rounded-full overflow-hidden border border-border-main"
            >
              <img src={user?.avatar || 'https://i.pravatar.cc/150?u=admin'} alt="Avatar" className="w-full h-full object-cover" />
            </button>

            <AnimatePresence>
              {showProfile && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 rounded-xl bg-card border border-border-main shadow-2xl overflow-hidden z-50"
                >
                  <div className="p-1">
                    <button 
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 rounded-lg flex items-center gap-2 mt-1"
                    >
                      <LogOut className="w-4 h-4" /> Sign out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};
