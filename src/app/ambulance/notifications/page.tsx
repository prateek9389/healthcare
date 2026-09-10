'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Bell, Check, Settings, AlertTriangle, UserPlus, CheckCircle2, Wrench, 
  PackageMinus, Clock, Phone, Navigation, Car, Eye, MapPin, Activity, Calendar, Building2
} from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    { id: 1, type: 'emergency', title: 'High Priority Emergency', desc: 'New high priority emergency request assigned to you.', time: '10:24 AM', isNew: true, icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/30' },
    { id: 2, type: 'hospital', title: 'Patient Admitted', desc: 'Patient has been admitted to AIIMS Hospital, Delhi.', time: '10:15 AM', isNew: true, icon: Activity, color: 'text-purple-500', bg: 'bg-purple-500/10 border-purple-500/30' },
    { id: 3, type: 'success', title: 'Trip Completed', desc: 'Trip TRP-1256 has been completed successfully.', time: '09:58 AM', isNew: true, icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10 border-green-500/30' },
    { id: 4, type: 'warning', title: 'Maintenance Due', desc: 'AMB-102 is due for maintenance in 2 days.', time: '09:42 AM', isNew: false, icon: Wrench, color: 'text-orange-500', bg: 'bg-orange-500/10 border-orange-500/30' },
    { id: 5, type: 'info', title: 'Inventory Low', desc: 'Oxygen Cylinder is running low in stock.', time: '09:30 AM', isNew: false, icon: PackageMinus, color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/30' },
    { id: 6, type: 'team', title: 'New Team Member', desc: 'Pooja Mehta has joined your team.', time: 'Yesterday', isNew: false, icon: UserPlus, color: 'text-purple-500', bg: 'bg-purple-500/10 border-purple-500/30' },
    { id: 7, type: 'system', title: 'System Update', desc: 'System maintenance scheduled for May 25, 2025.', time: 'Yesterday', isNew: false, icon: Settings, color: 'text-white', bg: 'bg-slate-500/10 border-slate-500/30' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-red-500/20 text-red-500">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground tracking-wide">
              Notifications
            </h1>
            <p className="text-sm text-foreground mt-0.5">Stay updated with important alerts and updates</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-1.5 bg-card border border-border-main hover:bg-main text-foreground hover:text-foreground text-sm font-medium rounded-lg transition-colors">
            <Check className="w-3.5 h-3.5" /> Mark all as read
          </button>
          <button className="flex items-center gap-1.5 px-4 py-1.5 bg-card border border-border-main hover:bg-main text-foreground hover:text-foreground text-sm font-medium rounded-lg transition-colors">
            <Settings className="w-3.5 h-3.5" /> Settings
          </button>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 h-[calc(100vh-160px)] min-h-[600px]">
        
        {/* Left Col: Notification Feed */}
        <div className="xl:col-span-4 card p-0 border-border-main flex flex-col overflow-hidden">
          <div className="flex px-4 py-3 border-b border-border-main text-sm font-medium gap-4">
            <button className="text-red-500 border-b-2 border-red-500 pb-3 -mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-3 h-3" /> All
            </button>
            <button className="text-foreground hover:text-foreground pb-3 -mb-3 flex items-center gap-1.5">
              Unread <span className="px-1.5 rounded-full bg-red-500 text-white text-xs leading-[14px]">12</span>
            </button>
            <button className="text-foreground hover:text-foreground pb-3 -mb-3">Alerts</button>
            <button className="text-foreground hover:text-foreground pb-3 -mb-3">Updates</button>
            <button className="text-foreground hover:text-foreground pb-3 -mb-3">System</button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {notifications.map((notif) => (
              <div key={notif.id} className={`flex items-start gap-3 p-4 border-b border-border-main cursor-pointer transition-colors ${notif.id === 1 ? 'bg-red-500/5 border-l-2 border-l-red-500' : 'hover:bg-[#7caaaf] dark:hover:bg-white/5 border-l-2 border-l-transparent'}`}>
                <div className={`w-8 h-8 rounded border flex items-center justify-center shrink-0 ${notif.bg} ${notif.color}`}>
                  <notif.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`text-sm truncate ${notif.id === 1 || notif.isNew ? 'font-bold text-foreground' : 'font-medium text-foreground'}`}>{notif.title}</h3>
                    <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                      <span className={`text-xs ${notif.id === 1 ? 'text-red-400 font-medium' : 'text-foreground'}`}>{notif.time}</span>
                      {notif.isNew && (
                        <span className="px-1.5 rounded bg-red-500/20 text-red-500 border border-red-500/30 text-xs font-medium leading-[14px]">New</span>
                      )}
                    </div>
                  </div>
                  <p className={`text-sm ${notif.isNew ? 'text-foreground' : 'text-foreground'} leading-snug`}>{notif.desc}</p>
                </div>
              </div>
            ))}
            <div className="p-4 text-center">
              <button className="text-sm text-foreground hover:text-foreground transition-colors">Load More <span className="ml-1">›</span></button>
            </div>
          </div>
        </div>

        {/* Middle Col: Notification Details */}
        <div className="xl:col-span-5 card p-0 border-border-main flex flex-col overflow-hidden">
          {/* Detail Header */}
          <div className="p-6 border-b border-border-main flex gap-4 bg-gradient-to-r from-red-500/10 to-transparent">
            <div className="w-10 h-10 rounded border bg-red-500/10 border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">High Priority Emergency</h2>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Clock className="w-3.5 h-3.5" /> Today, 10:24 AM
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            
            {/* Grid Details */}
            <div className="grid grid-cols-2 gap-6">
              {/* Emergency Details */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3 border-b border-border-main pb-2">Emergency Details</h3>
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground">Emergency ID</span>
                    <span className="text-sm text-foreground font-medium">ER-2025-05121</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground">Location</span>
                    <span className="text-sm text-foreground font-medium text-right">Connaught Place, Delhi</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Priority</span>
                    <span className="px-2 py-0.5 rounded text-xs font-medium border text-red-500 bg-red-500/10 border-red-500/20">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground">Patient</span>
                    <span className="text-sm text-foreground font-medium">Male, 58 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground">Condition</span>
                    <span className="text-sm text-foreground font-medium text-right">Chest Pain, Breathing Difficulty</span>
                  </div>
                </div>
              </div>

              {/* Assigned To */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3 border-b border-border-main pb-2">Assigned To</h3>
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground">Ambulance</span>
                    <span className="text-sm text-foreground font-medium">AMB-102</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground">Driver</span>
                    <span className="text-sm text-foreground font-medium">Vikas Sharma</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground">EMT</span>
                    <span className="text-sm text-foreground font-medium">Pooja Mehta</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Required Box */}
            <div className="p-4 rounded-xl !bg-white dark:!bg-[#1a2333] border border-border-main shadow-sm">
              <h3 className="text-sm font-bold text-foreground mb-1">Action Required</h3>
              <p className="text-sm text-foreground mb-4 leading-relaxed">Please respond to this emergency request as soon as possible.</p>
              
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors text-sm font-medium shadow-lg shadow-red-500/20">
                  <AlertTriangle className="w-4 h-4" /> Accept Request
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white dark:bg-card border border-border-main text-foreground hover:bg-slate-50 dark:hover:bg-main transition-colors text-sm font-medium">
                  <Eye className="w-4 h-4" /> View Details
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white dark:bg-card border border-border-main text-foreground hover:bg-slate-50 dark:hover:bg-main transition-colors text-sm font-medium">
                  <Navigation className="w-4 h-4" /> Share Location
                </button>
              </div>
            </div>

            {/* Related Actions */}
            <div className="mt-auto">
              <h3 className="text-sm font-medium text-foreground mb-3">Related Actions</h3>
              <div className="grid grid-cols-4 gap-3">
                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border-main hover:bg-main transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors"><Phone className="w-4 h-4" /></div>
                  <span className="text-xs font-medium text-foreground">Call Patient</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border-main hover:bg-main transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-slate-500/10 flex items-center justify-center text-foreground group-hover:bg-[#7caaaf]0 group-hover:text-foreground transition-colors"><Building2 className="w-4 h-4" /></div>
                  <span className="text-xs font-medium text-foreground">Call Hospital</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border-main hover:bg-main transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors"><Navigation className="w-4 h-4" /></div>
                  <span className="text-xs font-medium text-foreground">Navigate</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border-main hover:bg-main transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors"><Car className="w-4 h-4" /></div>
                  <span className="text-xs font-medium text-foreground">Request Backup</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Right Col: Stats */}
        <div className="xl:col-span-3 flex flex-col gap-4">
          
          <div className="card p-4 border-border-main">
            <h3 className="text-base font-medium text-foreground mb-4">Notification Stats</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center pb-4 border-b border-border-main">
                <div>
                  <div className="flex items-center gap-2 text-sm text-foreground mb-1">
                    <Bell className="w-3.5 h-3.5" /> Total Notifications
                  </div>
                  <div className="text-xs text-green-500 font-medium">↑ 12% from last week</div>
                </div>
                <span className="text-2xl font-bold text-foreground">156</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-4 h-4 rounded bg-red-500/20 text-red-500 flex items-center justify-center"><Bell className="w-2.5 h-2.5" /></div>
                  Unread
                </div>
                <span className="text-sm font-bold text-foreground">12</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-4 h-4 rounded bg-orange-500/20 text-orange-500 flex items-center justify-center"><AlertTriangle className="w-2.5 h-2.5" /></div>
                  Alerts
                </div>
                <span className="text-sm font-bold text-foreground">8</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-4 h-4 rounded bg-green-500/20 text-green-500 flex items-center justify-center"><Activity className="w-2.5 h-2.5" /></div>
                  Updates
                </div>
                <span className="text-sm font-bold text-foreground">42</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-4 h-4 rounded bg-purple-500/20 text-purple-500 flex items-center justify-center"><Settings className="w-2.5 h-2.5" /></div>
                  System
                </div>
                <span className="text-sm font-bold text-foreground">94</span>
              </div>
            </div>
          </div>

          <div className="card p-4 border-border-main flex-1">
            <h3 className="text-base font-medium text-foreground mb-4">Quick Filters</h3>
            <div className="flex flex-col gap-2">
              <button className="flex justify-between items-center p-3 rounded-lg bg-white dark:bg-card border border-border-main hover:bg-slate-50 dark:hover:bg-main transition-colors">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> High Priority
                </div>
                <span className="text-sm font-bold text-foreground">8</span>
              </button>
              <button className="flex justify-between items-center p-3 rounded-lg bg-white dark:bg-card border border-border-main hover:bg-slate-50 dark:hover:bg-main transition-colors">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Clock className="w-3.5 h-3.5 text-blue-500" /> Today
                </div>
                <span className="text-sm font-bold text-foreground">24</span>
              </button>
              <button className="flex justify-between items-center p-3 rounded-lg bg-white dark:bg-card border border-border-main hover:bg-slate-50 dark:hover:bg-main transition-colors">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Calendar className="w-3.5 h-3.5 text-orange-500" /> This Week
                </div>
                <span className="text-sm font-bold text-foreground">56</span>
              </button>
              <button className="flex justify-between items-center p-3 rounded-lg bg-white dark:bg-card border border-border-main hover:bg-slate-50 dark:hover:bg-main transition-colors">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Calendar className="w-3.5 h-3.5 text-purple-500" /> This Month
                </div>
                <span className="text-sm font-bold text-foreground">156</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
