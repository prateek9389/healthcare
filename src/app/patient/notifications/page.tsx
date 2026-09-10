'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Calendar, Droplet, FlaskConical, Shield, Activity, Settings, CheckCircle2, ChevronRight, Bell } from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    {
      group: 'Today',
      items: [
        {
          title: 'Appointment Reminder',
          desc: 'You have an appointment with Dr. Amit Mehta tomorrow at 10:30 AM.',
          time: '10:00 AM',
          icon: <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
          iconBg: 'bg-purple-500/10 border border-purple-500/20'
        },
        {
          title: 'Medication Reminder',
          desc: 'Time to take your medicine Amoxicillin 500mg',
          time: '09:00 AM',
          icon: <Droplet className="w-4 h-4 text-green-600 dark:text-green-400" />, // Represents pill
          iconBg: 'bg-green-500/10 border border-green-500/20'
        },
        {
          title: 'Lab Report Available',
          desc: 'Your Blood Test report is now available.',
          time: '08:30 AM',
          icon: <FlaskConical className="w-4 h-4 text-red-600 dark:text-red-400" />,
          iconBg: 'bg-red-500/10 border border-red-500/20'
        }
      ]
    },
    {
      group: 'Yesterday',
      items: [
        {
          title: 'Health Tip',
          desc: 'Drink plenty of water and stay hydrated.',
          time: '07:00 PM',
          icon: <Bell className="w-4 h-4 text-amber-600 dark:text-amber-400 fill-amber-400/20" />,
          iconBg: 'bg-amber-500/10 border border-amber-500/20'
        },
        {
          title: 'Security Alert',
          desc: 'Login detected on a new device.',
          time: '06:15 PM',
          icon: <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
          iconBg: 'bg-blue-500/10 border border-blue-500/20'
        }
      ]
    },
    {
      group: '25 May 2025',
      items: [
        {
          title: 'System Update',
          desc: 'We have updated our privacy policy. Please review the changes.',
          time: '11:30 AM',
          icon: <Activity className="w-4 h-4 text-foreground" />,
          iconBg: 'bg-slate-500/10 border border-slate-500/20'
        }
      ]
    }
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            Notifications
          </h1>
          <p className="text-sm text-foreground mt-1">Stay updated with your health alerts</p>
        </div>
      </div>

      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
        
        {/* Top Bar */}
        <div className="p-4 border-b border-border-main flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-2">
            <button className="px-4 py-1.5 text-sm font-medium bg-[#5b21b6] text-foreground rounded-md">All</button>
            <button className="px-4 py-1.5 text-sm font-bold text-foreground bg-white/5 border border-border-main rounded-md hover:text-foreground transition-colors">Appointments</button>
            <button className="px-4 py-1.5 text-sm font-bold text-foreground bg-white/5 border border-border-main rounded-md hover:text-foreground transition-colors">Medications</button>
            <button className="px-4 py-1.5 text-sm font-bold text-foreground bg-white/5 border border-border-main rounded-md hover:text-foreground transition-colors">Reports</button>
            <button className="px-4 py-1.5 text-sm font-bold text-foreground bg-white/5 border border-border-main rounded-md hover:text-foreground transition-colors">System</button>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-purple-600 dark:text-purple-400 flex items-center gap-1.5 hover:text-purple-300">
              <CheckCircle2 className="w-3.5 h-3.5" /> Mark all as read
            </button>
            <button className="text-foreground hover:text-foreground">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col p-4 gap-6">
          {notifications.map((group, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-foreground px-2">{group.group}</h3>
              
              <div className="flex flex-col gap-2">
                {group.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-4 p-4 rounded-xl border border-border-main bg-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-base font-bold text-foreground">{item.title}</span>
                      <span className="text-sm text-foreground mt-0.5">{item.desc}</span>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-foreground">{item.time}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5b21b6] mr-4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}
