'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Settings, Save, ChevronDown } from 'lucide-react';

export default function AdminSettingsPage() {
  const tabs = ['General Settings', 'Security Settings', 'Email Settings', 'Notification Settings', 'Backup & Restore', 'Integration', 'System Maintenance'];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-purple-500/20 text-purple-400">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
            <p className="text-[13px] font-medium text-foreground mt-0.5">Manage system configuration, preferences and security settings</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-medium text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-border-main pb-2 overflow-x-auto hide-scrollbar">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap ${
              i === 0 
                ? 'bg-white/10 text-foreground' 
                : 'text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* General Information */}
        <div className="card p-5 border border-border-main flex flex-col">
          <h2 className="text-[16px] font-bold text-foreground mb-6">General Information</h2>
          
          <div className="space-y-4 flex-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">Hospital Name</label>
              <input type="text" defaultValue="AI Digital Twin Smart Healthcare" className="w-full bg-main border border-border-main rounded-md px-3 py-2 text-[14px] text-foreground focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">Hospital Code</label>
              <input type="text" defaultValue="ADTSH-2025" className="w-full bg-main border border-border-main rounded-md px-3 py-2 text-[14px] text-foreground focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">Address</label>
              <input type="text" defaultValue="123 Healthcare Avenue, Medical District, New Delhi, 110001" className="w-full bg-main border border-border-main rounded-md px-3 py-2 text-[14px] text-foreground focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">Phone Number</label>
              <input type="text" defaultValue="+91 98765 43210" className="w-full bg-main border border-border-main rounded-md px-3 py-2 text-[14px] text-foreground focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-[13px] font-semibold text-foreground">Timezone</label>
              <div className="relative">
                <select className="w-full bg-main border border-border-main rounded-md px-3 py-2 text-[14px] text-foreground focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                  <option>(GMT+05:30) Asia/Kolkata</option>
                  <option>(GMT+00:00) UTC</option>
                </select>
                <ChevronDown className="w-4 h-4 text-foreground absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-[13px] font-semibold text-foreground">Date Format</label>
              <div className="relative">
                <select className="w-full bg-main border border-border-main rounded-md px-3 py-2 text-[14px] text-foreground focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                  <option>May 21, 2025</option>
                  <option>21 May, 2025</option>
                  <option>2025-05-21</option>
                </select>
                <ChevronDown className="w-4 h-4 text-foreground absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <button className="mt-6 w-full py-2 rounded-md bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors text-[14px] font-medium border border-indigo-500/20">
            Update Information
          </button>
        </div>

        {/* System Preferences */}
        <div className="card p-5 border border-border-main flex flex-col">
          <h2 className="text-[16px] font-bold text-foreground mb-6">System Preferences</h2>
          
          <div className="space-y-6 flex-1">
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-foreground">Maintenance Mode</p>
                <p className="text-[14px] text-foreground mt-0.5">Put system in maintenance mode</p>
              </div>
              <div className="w-8 h-4 bg-slate-700 rounded-full flex items-center p-0.5 cursor-pointer">
                <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-foreground">Allow Patient Registration</p>
                <p className="text-[14px] text-foreground mt-0.5">Allow new patient registration</p>
              </div>
              <div className="w-8 h-4 bg-indigo-500 rounded-full flex items-center p-0.5 cursor-pointer justify-end">
                <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-foreground">Auto Logout</p>
                <p className="text-[14px] text-foreground mt-0.5">Automatically logout inactive users</p>
              </div>
              <div className="relative w-[100px]">
                <select className="w-full bg-main border border-border-main rounded-md px-2 py-1.5 text-[13px] text-foreground focus:outline-none focus:border-indigo-500 appearance-none">
                  <option>30 Minutes</option>
                  <option>1 Hour</option>
                </select>
                <ChevronDown className="w-3 h-3 text-foreground absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="pr-4">
                <p className="text-[14px] font-medium text-foreground">Enable Two-Factor Authentication</p>
                <p className="text-[14px] text-foreground mt-0.5">Require 2FA for admin accounts</p>
              </div>
              <div className="w-8 h-4 bg-indigo-500 rounded-full flex items-center p-0.5 cursor-pointer justify-end flex-shrink-0">
                <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-foreground">Session Timeout</p>
                <p className="text-[14px] text-foreground mt-0.5">Set maximum session duration</p>
              </div>
              <div className="relative w-[100px]">
                <select className="w-full bg-main border border-border-main rounded-md px-2 py-1.5 text-[13px] text-foreground focus:outline-none focus:border-indigo-500 appearance-none">
                  <option>8 Hours</option>
                  <option>12 Hours</option>
                </select>
                <ChevronDown className="w-3 h-3 text-foreground absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* System Configuration */}
        <div className="card p-5 border border-border-main flex flex-col">
          <h2 className="text-[16px] font-bold text-foreground mb-6">System Configuration</h2>
          
          <div className="space-y-6 flex-1">
            
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text-foreground">Default Language</p>
              <div className="relative w-[120px]">
                <select className="w-full bg-main border border-border-main rounded-md px-3 py-1.5 text-[13px] text-foreground focus:outline-none focus:border-indigo-500 appearance-none">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text-foreground">Currency</p>
              <div className="relative w-[120px]">
                <select className="w-full bg-main border border-border-main rounded-md px-3 py-1.5 text-[13px] text-foreground focus:outline-none focus:border-indigo-500 appearance-none">
                  <option>INR (₹)</option>
                  <option>USD ($)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text-foreground">Time Format</p>
              <div className="flex items-center gap-4 w-[120px]">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <div className="w-3 h-3 rounded-full border border-white/20 flex items-center justify-center"></div>
                  <span className="text-[13px] font-semibold text-foreground">12 Hour</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <div className="w-3 h-3 rounded-full border border-indigo-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  </div>
                  <span className="text-[13px] text-foreground">24 Hour</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text-foreground">Items per page</p>
              <div className="relative w-[120px]">
                <select className="w-full bg-main border border-border-main rounded-md px-3 py-1.5 text-[13px] text-foreground focus:outline-none focus:border-indigo-500 appearance-none">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text-foreground">Theme Mode</p>
              <div className="flex items-center gap-4 w-[120px]">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <div className="w-3 h-3 rounded-full border border-white/20 flex items-center justify-center"></div>
                  <span className="text-[13px] font-semibold text-foreground">Light</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <div className="w-3 h-3 rounded-full border border-indigo-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  </div>
                  <span className="text-[13px] text-foreground">Dark</span>
                </label>
              </div>
            </div>

          </div>
        </div>

        {/* System Information */}
        <div className="card p-5 border border-border-main flex flex-col">
          <h2 className="text-[16px] font-bold text-foreground mb-6">System Information</h2>
          
          <div className="space-y-4 flex-1">
            <div className="flex justify-between items-end pb-3 border-b border-border-main">
              <span className="text-[13px] font-medium text-foreground">System Version</span>
              <span className="text-[14px] font-medium text-foreground">v2.4.1</span>
            </div>
            
            <div className="flex justify-between items-end pb-3 border-b border-border-main">
              <span className="text-[13px] font-medium text-foreground">Build Number</span>
              <span className="text-[14px] font-medium text-foreground">20250521.1024</span>
            </div>
            
            <div className="flex justify-between items-end pb-3 border-b border-border-main">
              <span className="text-[13px] font-medium text-foreground">Release Date</span>
              <span className="text-[14px] font-medium text-foreground">May 21, 2025</span>
            </div>
            
            <div className="flex justify-between items-end pb-3 border-b border-border-main">
              <span className="text-[13px] font-medium text-foreground">Database Version</span>
              <span className="text-[14px] font-medium text-foreground">PostgreSQL 15.4</span>
            </div>
            
            <div className="flex justify-between items-end pb-3 border-b border-border-main">
              <span className="text-[13px] font-medium text-foreground">Server Environment</span>
              <span className="text-[14px] font-medium text-foreground">Production</span>
            </div>
            
            <div className="flex justify-between items-end pb-3 border-b border-border-main">
              <span className="text-[13px] font-medium text-foreground">System Status</span>
              <span className="text-[14px] font-medium text-green-500">All Systems Operational</span>
            </div>
            
            <div className="flex justify-between items-end pt-1">
              <span className="text-[13px] font-medium text-foreground">Last Updated</span>
              <span className="text-[13px] font-semibold text-foreground">May 21, 2025 10:24 AM</span>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </DashboardLayout>
  );
}
