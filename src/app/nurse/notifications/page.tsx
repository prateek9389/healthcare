'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Check, AlertTriangle, Pill, FileText, Calendar, CheckCircle2, Info, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'alert',
      icon: AlertTriangle,
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-500',
      title: 'High BP Alert',
      desc: 'Amit Kumar (Room 103) has high blood pressure: 160/100 mmHg',
      time: '10 min ago',
      unread: true
    },
    {
      id: 2,
      type: 'reminder',
      icon: Pill,
      iconBg: 'bg-amber-500/10',
      iconColor: 'text-amber-500',
      title: 'Medication Due',
      desc: '7 medications are due in next 2 hours',
      time: '20 min ago',
      unread: true
    },
    {
      id: 3,
      type: 'update',
      icon: FileText,
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
      title: 'New Lab Report',
      desc: 'Rahul Verma (Room 101) - CBC Report is available',
      time: '1 hr ago',
      unread: false
    },
    {
      id: 4,
      type: 'reminder',
      icon: Calendar,
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
      title: 'Shift Reminder',
      desc: 'Your Night Shift starts at 03:00 PM today',
      time: '2 hr ago',
      unread: false
    },
    {
      id: 5,
      type: 'update',
      icon: CheckCircle2,
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-500',
      title: 'Task Completed',
      desc: 'Vitals monitoring for Neha Gupta (Room 102) marked as completed',
      time: '3 hr ago',
      unread: false
    },
    {
      id: 6,
      type: 'system',
      icon: Info,
      iconBg: 'bg-slate-500/10',
      iconColor: 'text-foreground',
      title: 'System Update',
      desc: 'System maintenance scheduled on 2 Jun 2025, 02:00 AM - 04:00 AM',
      time: 'Yesterday',
      unread: false
    }
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
          Notifications
        </h1>
        <p className="text-sm text-foreground mt-0.5">Stay updated with important alerts and activities</p>
      </div>

      <div className="card p-0 border-border-main bg-card flex flex-col">
        
        {/* Tabs & Mark Read */}
        <div className="p-4 border-b border-border-main flex justify-between items-center bg-main">
          
          <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar">
            <button className="px-4 py-1.5 text-sm font-medium bg-[#5b21b6] text-foreground rounded-md whitespace-nowrap">All</button>
            <button className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Unread <span className="px-1.5 py-0.5 rounded text-[9px] bg-red-500 text-foreground font-bold">12</span>
            </button>
            <button className="text-sm font-bold text-foreground hover:text-foreground transition-colors whitespace-nowrap">Alerts</button>
            <button className="text-sm font-bold text-foreground hover:text-foreground transition-colors whitespace-nowrap">Reminders</button>
            <button className="text-sm font-bold text-foreground hover:text-foreground transition-colors whitespace-nowrap">Updates</button>
          </div>
          
          <button className="flex items-center gap-1.5 text-sm text-foreground hover:text-foreground transition-colors whitespace-nowrap">
            <Check className="w-3.5 h-3.5" /> Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex flex-col">
          {notifications.map((notif) => (
            <div key={notif.id} className={`p-4 border-b border-border-main flex gap-4 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer ${notif.unread ? 'bg-white/[0.02]' : ''}`}>
              
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notif.iconBg}`}>
                <notif.icon className={`w-5 h-5 ${notif.iconColor}`} />
              </div>

              <div className="flex flex-col flex-1 gap-1">
                <span className={`text-base ${notif.unread ? 'font-semibold text-foreground' : 'font-medium text-foreground'}`}>
                  {notif.title}
                </span>
                <span className="text-sm text-foreground leading-relaxed">
                  {notif.desc}
                </span>
              </div>

              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="text-xs text-foreground">{notif.time}</span>
                {notif.unread && (
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-1"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="p-4 flex justify-between items-center bg-main mt-auto">
          <span className="text-xs text-foreground">Showing 1 to 6 of 24 notifications</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">4</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
