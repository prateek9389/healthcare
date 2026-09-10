'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Users, Pill, CheckSquare, Activity, Download, ChevronRight
} from 'lucide-react';

export default function ReportsPage() {
  const recentReports = [
    { name: 'Daily Patient Summary', type: 'Patient Report', date: '31 May 2025, 11:59 PM', by: 'Neha Sharma' },
    { name: 'Medication Administration Log', type: 'Medication Report', date: '31 May 2025, 11:00 PM', by: 'Neha Sharma' },
    { name: 'Task Completion Report', type: 'Task Report', date: '31 May 2025, 10:45 PM', by: 'Neha Sharma' },
    { name: 'Vitals Summary Report', type: 'Vitals Report', date: '31 May 2025, 10:30 PM', by: 'Neha Sharma' },
    { name: 'Weekly Patient Summary', type: 'Patient Report', date: '30 May 2025, 11:59 PM', by: 'Neha Sharma' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Reports
          </h1>
          <p className="text-sm text-foreground mt-0.5">View and generate reports</p>
        </div>
        
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
          <Plus className="w-3.5 h-3.5" /> Generate Report
        </button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        
        <div className="card p-5 border-border-main bg-card hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:text-blue-400 transition-colors">Patient Reports</span>
              <span className="text-sm text-foreground">View patient related reports</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
        </div>

        <div className="card p-5 border-border-main bg-card hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
              <Pill className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-lg font-bold text-foreground group-hover:text-purple-600 dark:text-purple-400 transition-colors">Medication Reports</span>
              <span className="text-sm text-foreground">Track medication administration</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
        </div>

        <div className="card p-5 border-border-main bg-card hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
              <CheckSquare className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-lg font-bold text-foreground group-hover:text-green-600 dark:text-green-400 transition-colors">Task Reports</span>
              <span className="text-sm text-foreground">View task completion reports</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
        </div>

        <div className="card p-5 border-border-main bg-card hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
              <Activity className="w-5 h-5 text-red-500" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-lg font-bold text-foreground group-hover:text-red-600 dark:text-red-400 transition-colors">Vitals Reports</span>
              <span className="text-sm text-foreground">Monitor vitals trends and history</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
        </div>

      </div>

      {/* Recent Reports Table */}
      <div className="card p-0 border-border-main bg-card flex flex-col">
        <div className="p-5 border-b border-border-main">
          <h2 className="text-lg font-bold text-foreground">Recent Reports</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground tracking-wider bg-main">
                <th className="font-medium p-4 whitespace-nowrap">Report Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Type</th>
                <th className="font-medium p-4 whitespace-nowrap">Generated On</th>
                <th className="font-medium p-4 whitespace-nowrap">Generated By</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5 text-sm text-foreground font-medium whitespace-nowrap">{report.name}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground whitespace-nowrap">{report.type}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground whitespace-nowrap">{report.date}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground whitespace-nowrap">{report.by}</td>
                  <td className="p-4 py-3.5">
                    <div className="flex justify-center">
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

        <div className="p-4 bg-main mt-auto">
          <button className="text-xs text-purple-600 dark:text-purple-400 font-medium hover:text-purple-300 transition-colors">
            View All Reports
          </button>
        </div>
      </div>

    </DashboardLayout>
  );
}
