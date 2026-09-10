'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  ArrowLeft, FileText, ActivitySquare, Filter, Search, Eye, Download,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function LabsPage() {
  const tabs = ['All', 'Lab Reports', 'Imaging Reports'];

  const reports = [
    { date: '28 May 2025', type: 'Lab', name: 'Complete Blood Count (CBC)', doctor: 'Dr. Rahul Sharma', status: 'Normal', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { date: '25 May 2025', type: 'Lab', name: 'Lipid Profile', doctor: 'Dr. Rahul Sharma', status: 'High', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { date: '23 May 2025', type: 'Lab', name: 'Blood Sugar (Fasting)', doctor: 'Dr. Rahul Sharma', status: 'Normal', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { date: '21 May 2025', type: 'Imaging', name: 'Chest X-Ray', doctor: 'Dr. Rahul Sharma', status: 'Completed', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { date: '18 May 2025', type: 'Imaging', name: 'ECG', doctor: 'Dr. Rahul Sharma', status: 'Completed', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { date: '15 May 2025', type: 'Lab', name: 'Liver Function Test', doctor: 'Dr. Rahul Sharma', status: 'Normal', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { date: '10 May 2025', type: 'Lab', name: 'Kidney Function Test', doctor: 'Dr. Rahul Sharma', status: 'Normal', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { date: '05 May 2025', type: 'Imaging', name: 'Echocardiogram', doctor: 'Dr. Rahul Sharma', status: 'Completed', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-2">
          <Link href="/doctor/patients" className="flex items-center gap-1.5 text-sm text-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Patients
          </Link>
          <div>
            <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
              Lab & Imaging
            </h1>
            <p className="text-sm text-foreground mt-0.5">View and analyze laboratory tests and imaging reports</p>
          </div>
        </div>
      </div>

      {/* Patient Header */}
      <div className="card p-6 border-border-main flex flex-col bg-card mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-[20px] text-foreground font-bold shrink-0">
              J
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-bold text-foreground tracking-wide">John Doe</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-foreground">35 Years, Male</span>
                <span className="w-1 h-1 rounded-full bg-muted"></span>
                <span className="text-xs text-foreground">PID: PT-2025-1248</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-foreground">+91 98765 43210</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-main border border-border-main w-[160px]">
              <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <FileText className="w-4 h-4 text-purple-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground">Total Lab Reports</span>
                <span className="text-[16px] font-bold text-foreground leading-none mt-1">8</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-main border border-border-main w-[160px]">
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <ActivitySquare className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground">Total Imaging</span>
                <span className="text-[16px] font-bold text-foreground leading-none mt-1">5</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        {/* Tabs & Filters */}
        <div className="p-4 border-b border-border-main flex flex-col gap-4">
          
          <div className="flex items-center gap-6 overflow-x-auto pb-2 border-b border-border-main">
            {tabs.map((tab, i) => (
              <button 
                key={i} 
                className={`text-sm font-medium pb-2 whitespace-nowrap transition-colors -mb-[9px] ${
                  tab === 'All' 
                    ? 'text-purple-400 border-b-2 border-purple-500' 
                    : 'text-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-2">
            <div className="relative w-full max-w-[300px]">
              <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search reports..." 
                className="w-full pl-9 pr-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            <button className="flex items-center gap-2 px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
              <Filter className="w-3.5 h-3.5 text-foreground" /> Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Date</th>
                <th className="font-medium p-4 whitespace-nowrap">Type</th>
                <th className="font-medium p-4 whitespace-nowrap">Test / Report Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Ordered By</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((item, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3 text-sm text-foreground">{item.date}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.type}</td>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{item.name}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.doctor}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border inline-block ${item.sColor}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 py-3">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-border-main flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 8 of 13 reports</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#1e3a8a] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
