'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  User, MapPin, Phone, Heart, 
  Bell, Globe, Lock, LogOut, 
  ChevronRight, Shield, LockKeyhole
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            Profile & Settings
          </h1>
          <p className="text-sm text-foreground mt-1">Manage your profile and account settings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Column 1: Profile & Account Navigation */}
        <div className="flex flex-col gap-6">
          <div className="card p-6 border-border-main bg-card shadow-lg flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full border-2 border-border-main overflow-hidden mb-4 relative group cursor-pointer">
              <img src="https://i.pravatar.cc/150?img=11" alt="Rahul Verma" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium text-foreground">Change</span>
              </div>
            </div>
            <h2 className="text-[18px] font-semibold text-foreground">Rahul Verma</h2>
            <span className="text-sm text-foreground mt-1">Patient ID: P10045</span>
            <button className="mt-6 px-6 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors w-full">
              Edit Profile
            </button>
          </div>

          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main">
              <h3 className="text-base font-bold text-foreground">Account</h3>
            </div>
            <div className="flex flex-col p-2">
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors" />
                  <span className="text-base text-foreground group-hover:text-foreground transition-colors">Personal Information</span>
                </div>
                <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors" />
                  <span className="text-base text-foreground group-hover:text-foreground transition-colors">Address</span>
                </div>
                <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors" />
                  <span className="text-base text-foreground group-hover:text-foreground transition-colors">Emergency Contacts</span>
                </div>
                <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors" />
                  <span className="text-base text-foreground group-hover:text-foreground transition-colors">Health Information</span>
                </div>
                <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Preferences & Security */}
        <div className="flex flex-col gap-6">
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main">
              <h3 className="text-base font-bold text-foreground">Preferences</h3>
            </div>
            <div className="flex flex-col p-2">
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors" />
                  <span className="text-base text-foreground group-hover:text-foreground transition-colors">Notification Preferences</span>
                </div>
                <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors" />
                  <span className="text-base text-foreground group-hover:text-foreground transition-colors">Language</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground">English</span>
                  <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main">
              <h3 className="text-base font-bold text-foreground">Security</h3>
            </div>
            <div className="flex flex-col p-2">
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors" />
                  <span className="text-base text-foreground group-hover:text-foreground transition-colors">Change Password</span>
                </div>
                <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-red-500/5 rounded-lg transition-colors cursor-pointer group mt-2">
                <div className="flex items-center gap-3">
                  <LogOut className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span className="text-base text-red-600 dark:text-red-400">Logout</span>
                </div>
                <ChevronRight className="w-4 h-4 text-red-600 dark:text-red-400/50 group-hover:text-red-600 dark:text-red-400 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Quick Info */}
        <div className="flex flex-col gap-6">
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col h-full">
            <div className="p-4 border-b border-border-main">
              <h3 className="text-base font-bold text-foreground">Quick Info</h3>
            </div>
            <div className="flex flex-col p-5 gap-6 flex-1">
              <div className="flex flex-col">
                <span className="text-sm text-foreground">Email</span>
                <span className="text-base font-bold text-foreground mt-1">rahulverma@email.com</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-foreground">Phone</span>
                <span className="text-base font-bold text-foreground mt-1">+91 98765 43210</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-foreground">Blood Group</span>
                <span className="text-base font-bold text-foreground mt-1">O+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-foreground">Allergies</span>
                <span className="text-base font-bold text-foreground mt-1">None</span>
              </div>
              <div className="flex flex-col mt-auto pt-6 border-t border-border-main">
                <span className="text-sm text-foreground">Last Login</span>
                <span className="text-sm text-foreground mt-1">31 May 2025, 09:15 AM</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Banner */}
      <div className="card p-5 border-border-main bg-gradient-to-r from-[#101423] to-[#1e1b4b]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg overflow-hidden relative">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none"></div>
        <div className="flex flex-col relative z-10">
          <h3 className="text-lg font-bold text-foreground">Privacy & Data</h3>
          <p className="text-sm text-foreground mt-1 max-w-lg">We are committed to protecting your privacy and securing your personal health information. You can review our data handling practices at any time.</p>
          <button className="mt-4 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors w-fit">
            View Privacy Policy
          </button>
        </div>
        
        <div className="w-24 h-24 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 relative z-10 mr-4 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          <div className="w-16 h-16 rounded-full border border-purple-500/30 flex items-center justify-center">
             <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
             <div className="absolute inset-0 flex items-center justify-center">
               <LockKeyhole className="w-4 h-4 text-foreground mt-1" />
             </div>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
