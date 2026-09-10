'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  User, Lock, Bell, Shield, Globe, ChevronRight
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
          Settings
        </h1>
        <p className="text-sm text-foreground mt-0.5">Manage your account and preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Sidebar Nav */}
        <div className="w-full md:w-[240px] shrink-0 flex flex-col gap-1">
          <button className="flex justify-between items-center p-3 rounded-lg bg-[#5b21b6]/10 border border-purple-500/20 text-left group">
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Profile</span>
                <span className="text-xs text-foreground">Manage your profile</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </button>

          <button className="flex justify-between items-center p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-transparent transition-colors text-left group">
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors">Account</span>
                <span className="text-xs text-foreground">Change password and security</span>
              </div>
            </div>
          </button>

          <button className="flex justify-between items-center p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-transparent transition-colors text-left group">
            <div className="flex items-center gap-3">
              <Bell className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors">Preferences</span>
                <span className="text-xs text-foreground">Notification and appearance</span>
              </div>
            </div>
          </button>

          <button className="flex justify-between items-center p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-transparent transition-colors text-left group">
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors">Privacy</span>
                <span className="text-xs text-foreground">Manage your privacy</span>
              </div>
            </div>
          </button>

          <button className="flex justify-between items-center p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-transparent transition-colors text-left group">
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors">Language</span>
                <span className="text-xs text-foreground">Choose your language</span>
              </div>
            </div>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Profile Information */}
          <div className="card p-6 border-border-main bg-card flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg font-bold text-foreground">Profile Information</h2>
              <button className="px-4 py-1.5 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors">
                Edit Profile
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border-main">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-800 border border-border-main shrink-0">
                <img src="https://i.pravatar.cc/150?img=9" alt="Neha Sharma" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-bold text-foreground mb-0.5">Neha Sharma</span>
                <span className="text-sm text-foreground mb-1">Staff Nurse</span>
                <div className="flex items-center gap-4 text-xs text-foreground">
                  <span>Email: neha.sharma@hospital.com</span>
                  <span>Phone: +91 98765 43210</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-foreground">Employee ID</span>
                <span className="text-sm font-bold text-foreground">NUR1024</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-foreground">Department</span>
                <span className="text-sm font-bold text-foreground">Nursing</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-foreground">Join Date</span>
                <span className="text-sm font-bold text-foreground">15 Jan 2024</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-foreground">Shift</span>
                <span className="text-sm font-bold text-foreground">Night Shift</span>
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <span className="text-xs text-foreground">Reporting To</span>
                <span className="text-sm font-bold text-foreground">Senior Nurse Priya Singh</span>
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="card p-6 border-border-main bg-card flex flex-col">
            <h2 className="text-lg font-bold text-foreground mb-6">Change Password</h2>
            
            <div className="flex flex-col gap-4 max-w-md">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground w-32 shrink-0">Current Password</span>
                <input 
                  type="password" 
                  placeholder="Enter current password" 
                  className="flex-1 bg-main border border-border-main rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground w-32 shrink-0">New Password</span>
                <input 
                  type="password" 
                  placeholder="Enter new password" 
                  className="flex-1 bg-main border border-border-main rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground w-32 shrink-0">Confirm New Password</span>
                <input 
                  type="password" 
                  placeholder="Confirm new password" 
                  className="flex-1 bg-main border border-border-main rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              
              <div className="flex justify-end mt-2">
                <button className="px-5 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
