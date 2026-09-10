'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  User, Bell, Palette, Shield, Lock, Plug, Database, ChevronRight, ChevronDown
} from 'lucide-react';

export default function SettingsPage() {
  const tabs = [
    { name: 'Account', icon: <User className="w-4 h-4" />, active: true },
    { name: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { name: 'Appearance', icon: <Palette className="w-4 h-4" /> },
    { name: 'Security', icon: <Shield className="w-4 h-4" /> },
    { name: 'Privacy', icon: <Lock className="w-4 h-4" /> },
    { name: 'Integrations', icon: <Plug className="w-4 h-4" /> },
    { name: 'Data & Storage', icon: <Database className="w-4 h-4" /> },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
          Settings
        </h1>
        <p className="text-sm text-foreground mt-0.5">Manage your account and application preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar Menu */}
        <div className="w-full lg:w-[240px] shrink-0 flex flex-col gap-2">
          {tabs.map((tab, i) => (
            <button 
              key={i} 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                tab.active 
                  ? 'bg-[#5b21b6] text-foreground shadow-lg shadow-purple-500/20' 
                  : 'text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5'
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-6">
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            
            {/* Left Col of Main Area */}
            <div className="flex flex-col gap-6">
              
              {/* Account Settings */}
              <div className="card p-6 border-border-main flex flex-col bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-6">Account Settings</h3>
                
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-foreground font-medium ml-1">Name</label>
                    <input type="text" defaultValue="Dr. Rahul Sharma" className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
                  </div>
                  
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-sm text-foreground font-medium ml-1">Email</label>
                    <input type="email" defaultValue="rahul.sharma@citycarehospital.com" className="w-full pl-4 pr-16 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
                    <span className="absolute right-3 top-[28px] text-xs font-medium text-green-500">Verified</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-sm text-foreground font-medium ml-1">Phone</label>
                    <input type="text" defaultValue="+91 98765 43210" className="w-full pl-4 pr-16 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
                    <span className="absolute right-3 top-[28px] text-xs font-medium text-green-500">Verified</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-foreground font-medium ml-1">Password</label>
                    <div className="flex gap-3">
                      <input type="password" defaultValue="••••••••" className="flex-1 px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" readOnly />
                      <button className="px-4 py-2.5 bg-[#1e3a8a]/20 hover:bg-[#1e3a8a]/40 border border-[#1e3a8a]/50 text-blue-400 text-sm font-medium rounded-lg transition-colors whitespace-nowrap">
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="card p-6 border-border-main flex flex-col bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-6">Notification Preferences</h3>
                
                <div className="flex flex-col gap-6">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <Bell className="w-4 h-4 text-foreground mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Email Notifications</span>
                        <span className="text-xs text-foreground mt-0.5">Receive updates on your email</span>
                      </div>
                    </div>
                    {/* Toggle switch placeholder */}
                    <div className="w-8 h-4 bg-purple-600 rounded-full relative cursor-pointer">
                      <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <Bell className="w-4 h-4 text-foreground mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">SMS Notifications</span>
                        <span className="text-xs text-foreground mt-0.5">Receive important alerts via SMS</span>
                      </div>
                    </div>
                    {/* Toggle switch placeholder */}
                    <div className="w-8 h-4 bg-purple-600 rounded-full relative cursor-pointer">
                      <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <Bell className="w-4 h-4 text-foreground mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Appointment Reminders</span>
                        <span className="text-xs text-foreground mt-0.5">Get reminders for upcoming appointments</span>
                      </div>
                    </div>
                    <div className="w-8 h-4 bg-purple-600 rounded-full relative cursor-pointer">
                      <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <Bell className="w-4 h-4 text-foreground mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Follow-up Reminders</span>
                        <span className="text-xs text-foreground mt-0.5">Get reminded about patient follow-ups</span>
                      </div>
                    </div>
                    <div className="w-8 h-4 bg-slate-700 rounded-full relative cursor-pointer border border-border-main">
                      <div className="w-3 h-3 bg-slate-400 rounded-full absolute left-0.5 top-0.5"></div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Col of Main Area */}
            <div className="flex flex-col gap-6">
              
              {/* Appearance */}
              <div className="card p-6 border-border-main flex flex-col bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-6">Appearance</h3>
                
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-sm text-foreground font-medium ml-1">Theme</label>
                    <select className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                      <option>Dark</option>
                      <option>Light</option>
                      <option>System</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-[28px] pointer-events-none" />
                  </div>
                  
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-sm text-foreground font-medium ml-1">Language</label>
                    <select className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-[28px] pointer-events-none" />
                  </div>

                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-sm text-foreground font-medium ml-1">Date Format</label>
                    <select className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                      <option>DD MMM YYYY</option>
                      <option>MM/DD/YYYY</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-[28px] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="card p-6 border-border-main flex flex-col bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-6">Security</h3>
                
                <div className="flex flex-col gap-6">
                  
                  <div className="flex items-center justify-between pb-5 border-b border-border-main">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">Two-Factor Authentication</span>
                      <span className="text-xs text-foreground mt-0.5">Add an extra layer of security</span>
                    </div>
                    <div className="w-8 h-4 bg-purple-600 rounded-full relative cursor-pointer">
                      <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">Active Sessions</span>
                      <span className="text-xs text-foreground mt-0.5">Manage your active sessions</span>
                    </div>
                    <span className="text-xs font-medium text-green-500">3 Active</span>
                  </div>

                </div>
              </div>

              {/* Danger Zone */}
              <div className="card p-6 border-red-500/30 flex flex-col bg-card">
                <h3 className="text-lg font-semibold text-red-500 mb-6">Danger Zone</h3>
                
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col cursor-pointer group">
                    <span className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors">Log Out</span>
                    <span className="text-xs text-foreground mt-0.5">Sign out from your account</span>
                  </div>

                  <div className="flex flex-col cursor-pointer group">
                    <span className="text-sm font-medium text-red-500 group-hover:text-red-400 transition-colors">Delete Account</span>
                    <span className="text-xs text-red-500/70 mt-0.5">Permanently delete your account</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
