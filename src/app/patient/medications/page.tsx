'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Bell, ChevronRight, FileText } from 'lucide-react';

export default function MedicationsPage() {
  const medications = [
    {
      name: 'Amoxicillin 500mg',
      instructions: '1 Capsule • After Breakfast',
      start: '25 May 2025',
      end: '01 Jun 2025',
      time: '08:00 AM',
      status: 'Active',
      statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20',
      iconColor: 'from-red-500 to-white'
    },
    {
      name: 'Paracetamol 650mg',
      instructions: '1 Tablet • After Lunch',
      start: '25 May 2025',
      end: '31 May 2025',
      time: '01:00 PM',
      status: 'Active',
      statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20',
      iconColor: 'from-blue-500 to-white'
    },
    {
      name: 'Vitamin D3 60K',
      instructions: '1 Tablet • Weekly (Every Sunday)',
      start: '20 May 2025',
      end: '20 Aug 2025',
      time: '09:00 AM',
      status: 'Active',
      statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20',
      iconColor: 'from-amber-500 to-white'
    },
    {
      name: 'Cetirizine 10mg',
      instructions: '1 Tablet • Before Bed',
      start: '20 May 2025',
      end: '27 May 2025',
      time: '10:00 PM',
      status: 'Completed',
      statusColor: 'text-foreground bg-slate-500/10 border-slate-500/20',
      iconColor: 'from-green-500 to-white'
    }
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            My Medications
          </h1>
          <p className="text-sm text-foreground mt-1">View your prescribed medications and schedule</p>
        </div>
        
        <button className="flex items-center gap-1.5 px-4 py-2 bg-transparent border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-lg hover:bg-purple-500/10 transition-colors">
          <Bell className="w-3.5 h-3.5" /> Medication Reminders
        </button>
      </div>

      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col mb-6">
        
        {/* Tabs */}
        <div className="p-4 border-b border-border-main flex items-center gap-4">
          <button className="px-4 py-1.5 text-sm font-medium bg-[#5b21b6] text-foreground rounded-md">All Medications</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Active</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Completed</button>
        </div>

        {/* List */}
        <div className="flex flex-col">
          {medications.map((med, i) => (
            <div key={i} className="flex items-center gap-4 p-5 border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group cursor-pointer">
              
              <div className="w-12 h-12 rounded-full bg-black/40 border border-border-main flex items-center justify-center shrink-0">
                <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${med.iconColor} transform -rotate-45`}></div>
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-lg font-bold text-foreground">{med.name}</span>
                <span className="text-sm text-foreground mt-0.5">{med.instructions}</span>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5 text-foreground">
                    <CalendarIcon />
                    <span className="text-xs">Start: {med.start}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-foreground">
                    <CalendarIcon />
                    <span className="text-xs">End: {med.end}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-foreground">
                    <ClockIcon />
                    <span className="text-xs">{med.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className={`text-xs font-medium px-3 py-1 rounded border ${med.statusColor}`}>
                  {med.status}
                </span>
                <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Support Banner */}
      <div className="card p-5 border-border-main bg-gradient-to-r from-[#101423] to-[#1e1b4b]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">Take your medications on time</span>
            <span className="text-sm text-foreground mt-0.5">Set reminders and never miss a dose.</span>
          </div>
        </div>
        
        <button className="px-4 py-2 bg-transparent border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-lg hover:bg-purple-500/10 transition-colors whitespace-nowrap">
          Set Reminder
        </button>
      </div>

    </DashboardLayout>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}
