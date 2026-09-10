'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Calendar, ChevronDown, Moon, Sun, 
  Eye, Download, CheckCircle2, AlertCircle, Info, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function ShiftHandoverPage() {
  const handovers = [
    { date: '27 May 2025, 11:10 PM', shift: 'Night Shift', type: 'night', dept: 'Hematology Ward', summary: '6 patients, stable vitals, 2 pending medications', status: 'Completed', to: 'Pooja Singh (Night Nurse)' },
    { date: '26 May 2025, 03:05 PM', shift: 'Day Shift', type: 'day', dept: 'General Ward', summary: '8 patients, all stable, rounds completed', status: 'Completed', to: 'Neha Sharma (You)' },
    { date: '25 May 2025, 11:15 PM', shift: 'Night Shift', type: 'night', dept: 'ICU', summary: '3 critical patients, monitor vitals closely', status: 'Completed', to: 'Pooja Singh (Night Nurse)' },
    { date: '25 May 2025, 03:10 PM', shift: 'Day Shift', type: 'day', dept: 'General Ward', summary: '7 patients, 1 new admission', status: 'Completed', to: 'Neha Sharma (You)' },
    { date: '24 May 2025, 11:05 PM', shift: 'Night Shift', type: 'night', dept: 'Hematology Ward', summary: '5 patients, medication given on time', status: 'Completed', to: 'Pooja Singh (Night Nurse)' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Shift Handover
          </h1>
          <p className="text-sm text-foreground mt-0.5">Create and review shift handover reports</p>
        </div>
        
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
          <Plus className="w-3.5 h-3.5" /> New Handover
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Main Content Area (Left) */}
        <div className="flex-1 flex flex-col gap-4">
          
          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-border-main">
            <button className="text-sm font-medium text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 pb-3 whitespace-nowrap">My Handovers</button>
            <button className="text-sm font-bold text-foreground hover:text-foreground border-b-2 border-transparent pb-3 transition-colors whitespace-nowrap">Received Handovers</button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 p-1.5 px-3 bg-card border border-border-main rounded-lg cursor-pointer hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              <span className="text-xs text-foreground">Date Range</span>
              <Calendar className="w-3.5 h-3.5 text-foreground ml-1" />
              <span className="text-sm text-foreground">25 May - 31 May 2025</span>
              <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
            </div>
            
            <div className="flex items-center gap-2 p-1.5 px-3 bg-card border border-border-main rounded-lg cursor-pointer hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              <span className="text-sm text-foreground flex items-center gap-2"><div className="w-3 h-3 border border-slate-500 rounded-sm"></div> All Shifts</span>
              <ChevronDown className="w-3.5 h-3.5 text-foreground ml-8" />
            </div>

            <div className="flex items-center gap-2 p-1.5 px-3 bg-card border border-border-main rounded-lg cursor-pointer hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              <span className="text-sm text-foreground">All Statuses</span>
              <ChevronDown className="w-3.5 h-3.5 text-foreground ml-12" />
            </div>
          </div>

          {/* Table */}
          <div className="card p-0 border-border-main bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border-main text-xs text-foreground tracking-wider bg-main">
                    <th className="font-medium p-4 whitespace-nowrap">Date</th>
                    <th className="font-medium p-4 whitespace-nowrap">Shift</th>
                    <th className="font-medium p-4 whitespace-nowrap">Department</th>
                    <th className="font-medium p-4 whitespace-nowrap">Summary</th>
                    <th className="font-medium p-4 whitespace-nowrap">Status</th>
                    <th className="font-medium p-4 whitespace-nowrap">Handover To</th>
                    <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {handovers.map((row, i) => (
                    <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                      <td className="p-4 py-4 text-sm text-foreground font-medium whitespace-nowrap">{row.date}</td>
                      <td className="p-4 py-4">
                        <div className="flex items-center gap-2">
                          {row.type === 'day' ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-purple-500" />}
                          <span className="text-sm font-bold text-foreground whitespace-nowrap">{row.shift}</span>
                        </div>
                      </td>
                      <td className="p-4 py-4 text-sm text-foreground whitespace-nowrap">{row.dept}</td>
                      <td className="p-4 py-4 text-sm text-foreground">{row.summary}</td>
                      <td className="p-4 py-4">
                        <span className="text-green-500 text-xs font-medium px-2 py-0.5 rounded border border-green-500/20">Completed</span>
                      </td>
                      <td className="p-4 py-4 text-sm text-foreground whitespace-nowrap">{row.to}</td>
                      <td className="p-4 py-4">
                        <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors" title="View Details">
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors" title="Download Report">
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 flex justify-between items-center bg-main border-t border-border-main">
              <span className="text-xs text-foreground">Showing 1 to 5 of 8 handovers</span>
              <div className="flex items-center gap-1">
                <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
                <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
                <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
                <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Right) */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col gap-6">
          
          {/* Handover Checklist */}
          <div className="card p-5 border-border-main bg-card flex flex-col">
            <h2 className="text-lg font-bold text-foreground mb-4">Handover Checklist</h2>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm text-foreground">Patient condition update</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm text-foreground">Vitals & observations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm text-foreground">Medications given</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm text-foreground">Pending tasks</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm text-foreground">Special instructions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm text-foreground">Equipment / supplies</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm text-foreground">Notes & remarks</span>
              </div>
            </div>
          </div>

          {/* Handover Guidelines */}
          <div className="card p-5 border-blue-500/20 bg-blue-500/5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-blue-500" />
              <h2 className="text-sm font-bold text-foreground">Handover Guidelines</h2>
            </div>
            
            <div className="flex items-start gap-2 text-foreground text-sm leading-relaxed">
              <Info className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
              <p>Ensure all important patient information is communicated clearly to the next shift for continuity of care.</p>
            </div>
            
            <button className="text-xs text-blue-600 dark:text-blue-400 font-medium self-start mt-2 hover:text-blue-300 transition-colors">
              View Guidelines
            </button>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
