'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  FileText, FilePlus, ChevronDown, ChevronLeft, ChevronRight, Eye, Download, Share2, Trash2,
  FileBarChart, FileSpreadsheet, ArrowRight
} from 'lucide-react';

export default function AdminReportsPage() {
  const tabs = ['All Reports', 'Patient Reports', 'Operational Reports', 'Financial Reports', 'Clinical Reports', 'AI Reports'];

  const stats = [
    { title: 'Total Reports', val: '156', trend: '18.2%', isUp: true, icon: FileText, color: 'text-purple-500', bg: 'bg-purple-500/20' },
    { title: 'Generated This Month', val: '42', trend: '23.5%', isUp: true, icon: FilePlus, color: 'text-blue-500', bg: 'bg-blue-500/20' },
    { title: 'Scheduled Reports', val: '28', trend: '15.8%', isUp: true, icon: FileText, color: 'text-green-500', bg: 'bg-green-500/20' },
    { title: 'Downloaded Reports', val: '98', trend: '19.4%', isUp: true, icon: Download, color: 'text-orange-500', bg: 'bg-orange-500/20' },
    { title: 'Shared Reports', val: '34', trend: '12.6%', isUp: true, icon: Share2, color: 'text-pink-500', bg: 'bg-pink-500/20' },
  ];

  const recentReports = [
    { name: 'Patient Registration Report', cat: 'Patient Reports', type: 'Summary', genBy: 'Admin User', genOn: 'May 21, 2025 10:30 AM', range: 'May 15 - May 21, 2025', format: 'PDF', status: 'Completed' },
    { name: 'Appointments Analysis Report', cat: 'Operational Reports', type: 'Analytics', genBy: 'Admin User', genOn: 'May 21, 2025 09:15 AM', range: 'May 15 - May 21, 2025', format: 'Excel', status: 'Completed' },
    { name: 'Revenue Summary Report', cat: 'Financial Reports', type: 'Summary', genBy: 'Admin User', genOn: 'May 21, 2025 08:45 AM', range: 'May 1 - May 21, 2025', format: 'PDF', status: 'Completed' },
    { name: 'AI Risk Analysis Report', cat: 'AI Reports', type: 'Analytics', genBy: 'Admin User', genOn: 'May 21, 2025 07:30 AM', range: 'May 15 - May 21, 2025', format: 'PDF', status: 'Completed' },
    { name: 'Department Performance Report', cat: 'Operational Reports', type: 'Performance', genBy: 'Admin User', genOn: 'May 20, 2025 06:20 PM', range: 'May 1 - May 20, 2025', format: 'Excel', status: 'Completed' },
  ];

  const quickActions = [
    { title: 'Daily Summary', desc: 'Get today\'s overview report', icon: FileText },
    { title: 'Weekly Analysis', desc: 'Get this week\'s comprehensive report', icon: FileBarChart },
    { title: 'Monthly Report', desc: 'Get this month\'s detailed report', icon: FileSpreadsheet },
    { title: 'Custom Date Range', desc: 'Select custom date range report', icon: FilePlus },
  ];

  const scheduledReports = [
    { title: 'Daily Patient Summary', desc: 'Every day at 09:00 AM', active: true },
    { title: 'Weekly Analytics Report', desc: 'Every Monday at 08:00 AM', active: true },
    { title: 'Monthly Revenue Report', desc: '1st day of every month at 10:00 AM', active: true },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
          <p className="text-[13px] font-medium text-foreground mt-0.5">Generate and manage comprehensive reports</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-medium text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
          <FilePlus className="w-4 h-4" />
          Generate Custom Report
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-border-main pb-2 overflow-x-auto hide-scrollbar">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap ${
              i === 0 
                ? 'bg-[#4f46e5] text-white shadow-[0_0_10px_rgba(79,70,229,0.3)]' 
                : 'text-foreground hover:text-white hover:bg-[#7caaaf] dark:hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="card p-4 border border-border-main flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[13px] font-semibold text-foreground leading-tight pr-2">{stat.title}</p>
              <div className={`p-1.5 rounded-lg flex-shrink-0 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[24px] font-bold text-foreground mb-1">{stat.val}</p>
            <div className={`flex items-center gap-1 text-[14px] font-medium ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={stat.isUp ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
              </svg>
              {stat.trend}
              <span className="text-foreground font-normal">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Left Table & Right Sidebars */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* LEFT PANEL: Recent Reports */}
        <div className="xl:col-span-8 2xl:col-span-9 flex flex-col">
          <div className="card border border-border-main overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-border-main">
              <h2 className="text-[16px] font-bold text-foreground">Recent Reports</h2>
            </div>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                    <th className="py-3 px-4 font-medium">Report Name</th>
                    <th className="py-3 px-4 font-medium">Category</th>
                    <th className="py-3 px-4 font-medium">Report Type</th>
                    <th className="py-3 px-4 font-medium">Generated By</th>
                    <th className="py-3 px-4 font-medium">Generated On</th>
                    <th className="py-3 px-4 font-medium">Date Range</th>
                    <th className="py-3 px-4 font-medium text-center">Format</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                    <th className="py-3 px-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentReports.map((report, i) => (
                    <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-foreground" />
                          <p className="text-[13px] font-semibold text-foreground">{report.name}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-[13px] font-semibold text-foreground">{report.cat}</td>
                      <td className="py-3 px-4 text-[13px] font-semibold text-foreground">{report.type}</td>
                      <td className="py-3 px-4 text-[13px] font-semibold text-foreground">{report.genBy}</td>
                      <td className="py-3 px-4 text-[13px] font-semibold text-foreground">{report.genOn}</td>
                      <td className="py-3 px-4 text-[13px] font-semibold text-foreground">{report.range}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-medium border ${
                          report.format === 'PDF' 
                            ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                            : 'bg-green-500/10 text-green-400 border-green-500/20'
                        }`}>
                          {report.format}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[13px] text-green-500 font-medium">{report.status}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-1">
                          <button className="text-foreground hover:text-foreground transition-colors p-1"><Eye className="w-3.5 h-3.5" /></button>
                          <button className="text-foreground hover:text-foreground transition-colors p-1"><Download className="w-3.5 h-3.5" /></button>
                          <button className="text-foreground hover:text-foreground transition-colors p-1"><Share2 className="w-3.5 h-3.5" /></button>
                          <button className="text-foreground hover:text-foreground transition-colors p-1"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="p-4 border-t border-border-main flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[13px] font-medium text-foreground">Showing 1 to 5 of 156 results</p>
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-7 h-7 rounded bg-[#4f46e5] text-white flex items-center justify-center text-[14px] font-medium shadow-[0_0_10px_rgba(79,70,229,0.3)]">1</button>
                <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">2</button>
                <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">3</button>
                <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">4</button>
                <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">5</button>
                <span className="px-1 text-slate-600 text-[14px]">...</span>
                <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">32</button>
                <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Quick Actions & Schedules */}
        <div className="xl:col-span-4 2xl:col-span-3 flex flex-col gap-6">
          
          {/* Quick Report Actions */}
          <div className="card border border-border-main p-4">
            <h2 className="text-[13px] font-medium text-foreground mb-4">Quick Report Actions</h2>
            <div className="flex flex-col gap-2">
              {quickActions.map((action, i) => (
                <button key={i} className="flex items-center justify-between p-3 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-white/5 text-foreground group-hover:text-[#4f46e5] group-hover:bg-[#4f46e5]/10 transition-colors">
                      <action.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-foreground group-hover:text-foreground transition-colors">{action.title}</p>
                      <p className="text-[14px] text-foreground">{action.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#4f46e5] transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Scheduled Reports */}
          <div className="card border border-border-main p-4 flex-1 flex flex-col">
            <h2 className="text-[13px] font-medium text-foreground mb-4">Scheduled Reports</h2>
            <div className="flex flex-col gap-3 mb-4">
              {scheduledReports.map((report, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-main/50 border border-border-main">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-white/5 text-foreground">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-foreground">{report.title}</p>
                      <p className="text-[14px] text-foreground">{report.desc}</p>
                    </div>
                  </div>
                  {/* Toggle Switch Mock */}
                  <div className={`w-7 h-4 rounded-full flex items-center p-0.5 cursor-pointer ${report.active ? 'bg-green-500' : 'bg-slate-700'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform ${report.active ? 'translate-x-3' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-auto w-full py-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors text-[14px] font-medium">
              View All Scheduled
            </button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
