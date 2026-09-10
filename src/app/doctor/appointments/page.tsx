'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Search, 
  Eye, Edit2, MoreVertical
} from 'lucide-react';

export default function AppointmentsPage() {
  const schedule = [
    { time: '09:00 AM', name: 'John Doe', type: 'Follow-up', reason: 'Blood Pressure Check', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { time: '10:00 AM', name: 'Jane Smith', type: 'Consultation', reason: 'Diabetes Review', status: 'In Progress', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { time: '11:00 AM', name: 'Robert Brown', type: 'New Patient', reason: 'Chest Pain', status: 'Confirmed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { time: '12:00 PM', name: 'Emily Davis', type: 'Consultation', reason: 'Asthma Control', status: 'Confirmed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { time: '02:00 PM', name: 'Michael Wilson', type: 'Follow-up', reason: 'Lung Function Test', status: 'Confirmed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { time: '03:00 PM', name: 'Sarah Johnson', type: 'Consultation', reason: 'Thyroid Check', status: 'Confirmed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { time: '04:00 PM', name: 'David Miller', type: 'Follow-up', reason: 'Cholesterol Review', status: 'Cancelled', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { time: '05:00 PM', name: 'Laura Taylor', type: 'Consultation', reason: 'Anxiety & Stress', status: 'Confirmed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  // Calendar dates for May 2025 (Starts Thursday)
  const calendarDays = [
    { day: '', current: false }, { day: '', current: false }, { day: '', current: false }, { day: '', current: false }, { day: '1', current: true }, { day: '2', current: true }, { day: '3', current: true },
    { day: '4', current: true }, { day: '5', current: true }, { day: '6', current: true }, { day: '7', current: true }, { day: '8', current: true }, { day: '9', current: true }, { day: '10', current: true },
    { day: '11', current: true }, { day: '12', current: true }, { day: '13', current: true }, { day: '14', current: true }, { day: '15', current: true }, { day: '16', current: true }, { day: '17', current: true },
    { day: '18', current: true }, { day: '19', current: true }, { day: '20', current: true }, { day: '21', current: true }, { day: '22', current: true }, { day: '23', current: true }, { day: '24', current: true },
    { day: '25', current: true }, { day: '26', current: true }, { day: '27', current: true }, { day: '28', current: true }, { day: '29', current: true }, { day: '30', current: true }, { day: '31', active: true, current: true },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Appointments
          </h1>
          <p className="text-sm text-foreground mt-0.5">View and manage your appointments</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            31 May 2025, Saturday <CalendarIcon className="w-3.5 h-3.5 text-foreground" />
          </button>
          
          <div className="flex items-center bg-card border border-border-main rounded-lg p-0.5">
            <button className="px-3 py-1.5 bg-[#1e3a8a] text-foreground rounded text-sm font-medium">Day</button>
            <button className="px-3 py-1.5 text-foreground hover:text-foreground rounded text-sm font-medium transition-colors">Week</button>
            <button className="px-3 py-1.5 text-foreground hover:text-foreground rounded text-sm font-medium transition-colors">Month</button>
          </div>
          
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
            <Plus className="w-3.5 h-3.5" /> New Appointment
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[260px] shrink-0 flex flex-col gap-6">
          
          {/* Calendar Widget */}
          <div className="card p-4 border-border-main bg-card">
            <div className="flex justify-between items-center mb-4">
              <button className="p-1 hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded"><ChevronLeft className="w-4 h-4 text-foreground" /></button>
              <span className="text-base font-medium text-foreground">May 2025</span>
              <button className="p-1 hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded"><ChevronRight className="w-4 h-4 text-foreground" /></button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-center text-xs font-medium text-foreground py-1">{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, i) => (
                <div key={i} className="aspect-square flex items-center justify-center">
                  {date.day && (
                    <button className={`w-7 h-7 rounded-full text-sm font-medium flex items-center justify-center transition-colors
                      ${date.active 
                        ? 'bg-[#1e3a8a] text-foreground' 
                        : 'text-foreground hover:bg-white/10'
                      }
                    `}>
                      {date.day}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Stats */}
          <div className="card p-4 border-border-main bg-card">
            <h2 className="text-base font-medium text-foreground mb-4">Appointment Stats</h2>
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-blue-100">Today</span>
                </div>
                <span className="text-sm font-bold text-foreground">12</span>
              </div>
              
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-green-100">Confirmed</span>
                </div>
                <span className="text-sm font-bold text-foreground">8</span>
              </div>
              
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-purple-100">Completed</span>
                </div>
                <span className="text-sm font-bold text-foreground">5</span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <span className="text-sm text-red-100">Cancelled</span>
                </div>
                <span className="text-sm font-bold text-foreground">1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Table */}
        <div className="flex-1 card p-0 border-border-main flex flex-col bg-card">
          
          <div className="p-4 border-b border-border-main flex justify-between items-center bg-main">
            <div className="relative w-full max-w-[300px]">
              <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search appointments..." 
                className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                  <th className="font-medium p-4 whitespace-nowrap">Time</th>
                  <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                  <th className="font-medium p-4 whitespace-nowrap">Type</th>
                  <th className="font-medium p-4 whitespace-nowrap">Reason</th>
                  <th className="font-medium p-4 whitespace-nowrap text-center">Status</th>
                  <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, i) => (
                  <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                    <td className="p-4 py-3.5 text-sm text-foreground font-medium">{item.time}</td>
                    <td className="p-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-sm text-foreground font-medium shrink-0">
                          {item.name.charAt(0)}
                        </div>
                        <span className="text-sm text-foreground font-medium whitespace-nowrap">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.type}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.reason}</td>
                    <td className="p-4 py-3.5 text-center">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium border inline-block ${item.sColor}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 py-3.5">
                      <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-border-main flex justify-between items-center bg-main mt-auto">
            <span className="text-xs text-foreground">Showing 1 to 8 of 12 appointments</span>
            <button className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
              View full schedule <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
