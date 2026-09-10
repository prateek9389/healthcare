'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Search, ChevronDown, Save, Download, DownloadCloud, Trash2, FileText
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('General');

  const navItems = [
    'General', 'Business Profile', 'Invoice Settings', 'Payment Settings', 
    'Tax Settings', 'Notifications', 'Backup & Export'
  ];

  const InputField = ({ label, value, type = 'text' }: { label: string, value: string, type?: string }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-foreground">{label}</label>
      <input 
        type={type}
        defaultValue={value}
        className="w-full px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
      />
    </div>
  );

  const SelectField = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-foreground">{label}</label>
      <div className="relative">
        <select 
          defaultValue={value}
          className="w-full pl-3 pr-8 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors"
        >
          <option>{value}</option>
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );

  const Toggle = ({ label, defaultChecked }: { label: string, defaultChecked: boolean }) => {
    const [checked, setChecked] = useState(defaultChecked);
    return (
      <div className="flex justify-between items-center py-2">
        <span className="text-sm text-foreground">{label}</span>
        <button 
          onClick={() => setChecked(!checked)}
          className={`w-8 h-4.5 rounded-full relative transition-colors ${checked ? 'bg-purple-600' : 'bg-slate-700'}`}
        >
          <div className={`w-3.5 h-3.5 bg-white rounded-full absolute top-0.5 transition-transform ${checked ? 'left-[16px]' : 'left-0.5'}`}></div>
        </button>
      </div>
    );
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Settings
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage your billing system preferences</p>
        </div>
        <div className="relative w-full sm:w-[250px]">
          <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search settings..." 
            className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Nav */}
        <div className="w-full lg:w-[220px] shrink-0">
          <div className="card p-2 border-border-main flex flex-col bg-card">
            {navItems.map((item, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item 
                    ? 'bg-purple-600/10 text-purple-400 border border-purple-500/20' 
                    : 'text-white hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-transparent'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Center Content - General Settings */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="card p-6 border-border-main flex flex-col bg-card">
            <h2 className="text-lg font-medium text-foreground mb-6">General Settings</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-8">
              <InputField label="Business Name" value="City Care Hospital" />
              <SelectField label="Currency" value="Indian Rupee (₹)" />
              
              <SelectField label="Date Format" value="DD/MM/YYYY" />
              <SelectField label="Time Format" value="12 Hour (AM/PM)" />
              
              <SelectField label="Default Language" value="English" />
              <SelectField label="Timezone" value="(GMT+05:30) Asia/Kolkata" />
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-foreground">Default Due Days</label>
                <div className="relative">
                  <input 
                    type="number"
                    defaultValue="30"
                    className="w-full px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-foreground">days</span>
                </div>
              </div>
              <SelectField label="Financial Year Start" value="April" />
            </div>

            <div className="flex flex-col gap-2 max-w-[400px]">
              <Toggle label="Enable Item/Service Tax" defaultChecked={true} />
              <Toggle label="Enable Discount" defaultChecked={true} />
              <Toggle label="Enable Round Off" defaultChecked={true} />
              <Toggle label="Show Tax in Invoice" defaultChecked={true} />
            </div>

            <div className="mt-8 flex justify-end">
              <button className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - System Info & Actions */}
        <div className="w-full lg:w-[280px] shrink-0 flex flex-col gap-6">
          <div className="card p-5 border-border-main flex flex-col bg-card">
            <h2 className="text-lg font-medium text-foreground mb-4">System Info</h2>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-foreground">Version</span>
                <span className="text-sm font-medium text-foreground">v2.4.0</span>
              </div>
              
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-foreground">Last Updated</span>
                <span className="text-sm font-medium text-foreground">28 May 2025</span>
              </div>
              
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-foreground">Storage Used</span>
                    <span className="text-sm font-medium text-foreground">1.2 GB / 10 GB</span>
                  </div>
                  <span className="text-xs text-foreground">12%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[12%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-5 border-border-main flex flex-col bg-card">
            <h2 className="text-lg font-medium text-foreground mb-4">Quick Actions</h2>
            
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-left group">
                <DownloadCloud className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                <span className="text-sm font-medium text-purple-400 group-hover:text-purple-300">Backup Database</span>
              </button>
              
              <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-left group">
                <Download className="w-4 h-4 text-foreground group-hover:text-foreground" />
                <span className="text-sm font-medium text-foreground group-hover:text-foreground">Export Configuration</span>
              </button>
              
              <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-left group">
                <Trash2 className="w-4 h-4 text-foreground group-hover:text-foreground" />
                <span className="text-sm font-medium text-foreground group-hover:text-foreground">Clear Cache</span>
              </button>
              
              <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-left group">
                <FileText className="w-4 h-4 text-foreground group-hover:text-foreground" />
                <span className="text-sm font-medium text-foreground group-hover:text-foreground">System Logs</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
