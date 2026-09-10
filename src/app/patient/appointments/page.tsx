'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Calendar, MoreVertical, CalendarDays, HeadphonesIcon } from 'lucide-react';

export default function AppointmentsPage() {
  const appointments = [
    {
      day: '02', month: 'Jun', year: '2025',
      type: 'General Consultation', doctor: 'Dr. Amit Mehta',
      time: '10:30 AM', location: 'City Care Hospital, Room 101',
      status: 'Confirmed', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20',
      iconBg: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      day: '15', month: 'Jun', year: '2025',
      type: 'Follow-up Visit', doctor: 'Dr. Neha Sharma',
      time: '11:00 AM', location: 'City Care Hospital, Room 105',
      status: 'Confirmed', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20',
      iconBg: 'bg-pink-500/10 border-pink-500/20'
    },
    {
      day: '28', month: 'Jun', year: '2025',
      type: 'Physiotherapy Session', doctor: 'Dr. Priya Singh',
      time: '08:30 AM', location: 'City Care Hospital, Room 203',
      status: 'Pending', statusColor: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20',
      iconBg: 'bg-amber-500/10 border-amber-500/20'
    },
    {
      day: '10', month: 'Jul', year: '2025',
      type: 'Dental Check-up', doctor: 'Dr. Rohan Verma',
      time: '02:00 PM', location: 'City Care Hospital, Room 204',
      status: 'Pending', statusColor: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20',
      iconBg: 'bg-blue-500/10 border-blue-500/20'
    }
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            My Appointments
          </h1>
          <p className="text-sm text-foreground mt-1">View and manage your appointments</p>
        </div>
        
        <button className="flex items-center gap-1.5 px-4 py-2 bg-transparent border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-lg hover:bg-purple-500/10 transition-colors">
          <CalendarDays className="w-3.5 h-3.5" /> Book New Appointment
        </button>
      </div>

      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col mb-6">
        
        {/* Tabs */}
        <div className="p-4 border-b border-border-main flex items-center gap-4">
          <button className="px-4 py-1.5 text-sm font-medium bg-[#5b21b6] text-foreground rounded-md">Upcoming</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Completed</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Cancelled</button>
        </div>

        {/* List */}
        <div className="flex flex-col">
          {appointments.map((apt, i) => (
            <div key={i} className="flex gap-4 p-5 border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
              
              <div className="flex flex-col items-center justify-center shrink-0 w-[60px] h-[70px] rounded-xl border border-border-main bg-main group-hover:border-purple-500/30 transition-colors">
                <span className="text-[22px] font-bold text-purple-600 dark:text-purple-400 leading-none">{apt.day}</span>
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-1 uppercase">{apt.month}</span>
                <span className="text-[9px] text-foreground">{apt.year}</span>
              </div>

              <div className="flex items-start gap-4 flex-1 min-w-0 py-1">
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${apt.iconBg}`}>
                  <div className="w-5 h-5 rounded-full bg-current opacity-50"></div>
                </div>
                
                <div className="flex flex-col flex-1">
                  <span className="text-lg font-bold text-foreground">{apt.type}</span>
                  <span className="text-sm text-foreground mt-0.5">{apt.doctor}</span>
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-foreground">
                      <Calendar className="w-3 h-3 text-foreground" />
                      <span className="text-sm">{apt.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-foreground">
                      <span className="text-sm">{apt.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className={`text-xs font-medium px-3 py-1 rounded border ${apt.statusColor}`}>
                  {apt.status}
                </span>
                <button className="text-foreground hover:text-foreground transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Support Banner */}
      <div className="card p-5 border-border-main bg-gradient-to-r from-[#101423] to-[#1e1b4b]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
            <CalendarDays className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">Can't find your appointment?</span>
            <span className="text-sm text-foreground mt-0.5">Contact support if you need any help.</span>
          </div>
        </div>
        
        <button className="px-4 py-2 bg-transparent border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-lg hover:bg-purple-500/10 transition-colors whitespace-nowrap">
          Contact Support
        </button>
      </div>

    </DashboardLayout>
  );
}
