'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  ChevronLeft, ChevronRight, Calendar as CalendarIcon, ChevronDown, 
  Moon, Sun, Clock, MapPin, ArrowRightLeft, FileText, PieChart, CalendarDays
} from 'lucide-react';

export default function MySchedulePage() {
  const scheduleData = [
    { date: '26 May 2025', day: 'Mon', shift: 'Day Shift', type: 'day', time: '07:00 AM - 03:00 PM', dept: 'General Ward', status: 'Completed' },
    { date: '27 May 2025', day: 'Tue', shift: 'Night Shift', type: 'night', time: '03:00 PM - 11:00 PM', dept: 'Hematology Ward', status: 'Today' },
    { date: '28 May 2025', day: 'Wed', shift: 'Off', type: 'off', time: '--', dept: '--', status: 'Off' },
    { date: '29 May 2025', day: 'Thu', shift: 'Day Shift', type: 'day', time: '07:00 AM - 03:00 PM', dept: 'General Ward', status: 'Scheduled' },
    { date: '30 May 2025', day: 'Fri', shift: 'Night Shift', type: 'night', time: '03:00 PM - 11:00 PM', dept: 'ICU', status: 'Scheduled' },
    { date: '31 May 2025', day: 'Sat', shift: 'Day Shift', type: 'day', time: '07:00 AM - 03:00 PM', dept: 'General Ward', status: 'Scheduled' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Completed': return <span className="text-green-500 text-xs font-medium px-2 py-0.5 rounded bg-green-500/10">Completed</span>;
      case 'Today': return <span className="text-purple-600 dark:text-purple-400 text-xs font-medium px-2 py-0.5 rounded bg-purple-500/10">Today</span>;
      case 'Scheduled': return <span className="text-blue-500 text-xs font-medium px-2 py-0.5 rounded bg-blue-500/10">Scheduled</span>;
      case 'Off': return <span className="text-foreground text-xs font-medium px-2 py-0.5 rounded bg-slate-500/10">Off</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            My Schedule
          </h1>
          <p className="text-sm text-foreground mt-0.5">View your shifts and schedule</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 p-1 bg-card border border-border-main rounded-lg">
            <button className="px-3 py-1.5 text-sm text-foreground hover:text-foreground transition-colors">Today</button>
            <div className="w-px h-4 bg-border-main mx-1"></div>
            <button className="p-1.5 text-foreground hover:text-foreground transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            <button className="p-1.5 text-foreground hover:text-foreground transition-colors"><ChevronRight className="w-4 h-4" /></button>
            <div className="w-px h-4 bg-border-main mx-1"></div>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-foreground hover:text-foreground transition-colors">
              <CalendarIcon className="w-3.5 h-3.5" /> 25 May - 31 May 2025 <ChevronDown className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <CalendarDays className="w-3.5 h-3.5" /> Request Leave
          </button>
        </div>
      </div>

      {/* Week Overview Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
        <div className="card p-3 border-border-main bg-card flex flex-col gap-1 items-center justify-center text-center opacity-60">
          <span className="text-sm font-bold text-foreground">Sun</span>
          <span className="text-xs text-foreground">25 May</span>
          <span className="text-sm font-bold text-foreground mt-2">--</span>
        </div>
        <div className="card p-3 border-border-main bg-card flex flex-col gap-1 items-center justify-center text-center">
          <span className="text-sm font-bold text-foreground">Mon</span>
          <span className="text-xs text-foreground">26 May</span>
          <span className="text-sm font-medium text-green-500 mt-2">Day Shift</span>
          <span className="text-[9px] text-foreground">07:00 AM - 03:00 PM</span>
        </div>
        <div className="card p-3 border-purple-500/50 bg-[#5b21b6]/20 flex flex-col gap-1 items-center justify-center text-center ring-1 ring-purple-500">
          <span className="text-sm font-bold text-foreground">Tue</span>
          <span className="text-xs text-purple-200">27 May</span>
          <span className="text-sm font-bold text-purple-600 dark:text-purple-400 mt-2">Night Shift</span>
          <span className="text-[9px] text-purple-300/70">03:00 PM - 11:00 PM</span>
        </div>
        <div className="card p-3 border-border-main bg-card flex flex-col gap-1 items-center justify-center text-center">
          <span className="text-sm font-bold text-foreground">Wed</span>
          <span className="text-xs text-foreground">28 May</span>
          <span className="text-sm font-bold text-foreground mt-2">Off</span>
        </div>
        <div className="card p-3 border-border-main bg-card flex flex-col gap-1 items-center justify-center text-center">
          <span className="text-sm font-bold text-foreground">Thu</span>
          <span className="text-xs text-foreground">29 May</span>
          <span className="text-sm font-medium text-green-500 mt-2">Day Shift</span>
          <span className="text-[9px] text-foreground">07:00 AM - 03:00 PM</span>
        </div>
        <div className="card p-3 border-border-main bg-card flex flex-col gap-1 items-center justify-center text-center">
          <span className="text-sm font-bold text-foreground">Fri</span>
          <span className="text-xs text-foreground">30 May</span>
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-2">Night Shift</span>
          <span className="text-[9px] text-foreground">03:00 PM - 11:00 PM</span>
        </div>
        <div className="card p-3 border-border-main bg-card flex flex-col gap-1 items-center justify-center text-center">
          <span className="text-sm font-bold text-foreground">Sat</span>
          <span className="text-xs text-foreground">31 May</span>
          <span className="text-sm font-medium text-green-500 mt-2">Day Shift</span>
          <span className="text-[9px] text-foreground">07:00 AM - 03:00 PM</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-12 gap-4">
        
        {/* Left Col - Shift Details */}
        <div className="flex flex-col gap-4 lg:col-span-1 xl:col-span-3">
          
          {/* Upcoming Shift */}
          <div className="card p-5 border-border-main bg-card flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <h2 className="text-lg font-bold text-foreground mb-4">Upcoming Shift</h2>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Moon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-lg font-bold text-foreground">Night Shift</span>
                <span className="text-[9px] font-medium px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-400 ml-auto">Today</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-sm">03:00 PM - 11:00 PM (8 hrs)</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-sm">Hematology Ward - 3rd Floor</span>
              </div>
            </div>
          </div>

          {/* Shift Details Key-Value */}
          <div className="card p-5 border-border-main bg-card flex flex-col flex-1">
            <h2 className="text-lg font-bold text-foreground mb-4">Shift Details</h2>
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Shift Type</span>
                <span className="text-sm font-bold text-foreground">Night Shift</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Date</span>
                <span className="text-sm font-bold text-foreground">27 May 2025, Tuesday</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Shift Time</span>
                <span className="text-sm font-bold text-foreground">03:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Duration</span>
                <span className="text-sm font-bold text-foreground">8 Hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Break Time</span>
                <span className="text-sm font-bold text-foreground">07:00 PM - 07:30 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Reporting Time</span>
                <span className="text-sm font-bold text-foreground">02:45 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Reporting To</span>
                <span className="text-sm font-bold text-foreground">Senior Nurse Priya Singh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Col - Schedule Overview Table */}
        <div className="lg:col-span-2 xl:col-span-6 card p-0 border-border-main bg-card flex flex-col">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-bold text-foreground">My Schedule Overview</h2>
            <button className="text-xs text-purple-600 dark:text-purple-400 font-medium">View Full Calendar</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground tracking-wider bg-main">
                  <th className="font-medium p-4 whitespace-nowrap">Date</th>
                  <th className="font-medium p-4 whitespace-nowrap">Day</th>
                  <th className="font-medium p-4 whitespace-nowrap">Shift</th>
                  <th className="font-medium p-4 whitespace-nowrap">Time</th>
                  <th className="font-medium p-4 whitespace-nowrap">Department</th>
                  <th className="font-medium p-4 whitespace-nowrap">Status</th>
                  <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, i) => (
                  <tr key={i} className={`border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group ${row.status === 'Today' ? 'bg-purple-500/5' : ''}`}>
                    <td className="p-4 py-3.5 text-sm text-foreground font-medium whitespace-nowrap">{row.date}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{row.day}</td>
                    <td className="p-4 py-3.5">
                      <div className="flex items-center gap-2">
                        {row.type === 'day' ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : row.type === 'night' ? <Moon className="w-3.5 h-3.5 text-purple-500" /> : <span className="w-3.5 h-3.5"></span>}
                        <span className={`text-sm font-medium ${row.type === 'off' ? 'text-foreground' : 'text-foreground'}`}>{row.shift}</span>
                      </div>
                    </td>
                    <td className="p-4 py-3.5 text-sm text-foreground whitespace-nowrap">{row.time}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground whitespace-nowrap">{row.dept}</td>
                    <td className="p-4 py-3.5">{getStatusBadge(row.status)}</td>
                    <td className="p-4 py-3.5">
                      {row.type !== 'off' && (
                        <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors" title="View Schedule">
                            <CalendarIcon className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-purple-500/5 border-t border-border-main flex items-center gap-2 mt-auto">
            <PieChart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-foreground">You have <span className="text-purple-600 dark:text-purple-400 font-medium">2 shifts</span> this week and <span className="text-blue-600 dark:text-blue-400 font-medium">5 shifts</span> this month.</span>
          </div>
        </div>

        {/* Right Col - Quick Actions & Leave Balance */}
        <div className="flex flex-col gap-4 lg:col-span-1 xl:col-span-3">
          
          {/* Quick Actions */}
          <div className="card p-5 border-border-main bg-card flex flex-col">
            <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
            
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 p-3 rounded-lg bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group text-left">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                  <ArrowRightLeft className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors">Swap Shift</span>
                  <span className="text-xs text-foreground">Request to swap your shift</span>
                </div>
              </button>

              <button className="flex items-center gap-3 p-3 rounded-lg bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group text-left">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <CalendarIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground group-hover:text-blue-600 dark:text-blue-400 transition-colors">Request Leave</span>
                  <span className="text-xs text-foreground">Apply for leave or time off</span>
                </div>
              </button>

              <button className="flex items-center gap-3 p-3 rounded-lg bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group text-left">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                  <PieChart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors">My Leave Balance</span>
                  <span className="text-xs text-foreground">View your leave balance</span>
                </div>
              </button>
            </div>
          </div>

          {/* Leave Balance */}
          <div className="card p-5 border-border-main bg-card flex flex-col flex-1">
            <h2 className="text-lg font-bold text-foreground mb-6">Leave Balance</h2>
            
            <div className="flex flex-col gap-5 flex-1">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Casual Leave</span>
                  <span className="text-xs text-foreground">6 / 10 days</span>
                </div>
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Sick Leave</span>
                  <span className="text-xs text-foreground">8 / 10 days</span>
                </div>
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Earned Leave</span>
                  <span className="text-xs text-foreground">12 / 20 days</span>
                </div>
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            <button className="text-xs text-purple-600 dark:text-purple-400 font-medium text-center mt-6 hover:text-purple-300 transition-colors">
              View Leave History
            </button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
