'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, ChevronDown, FileText, ActivitySquare, Clock, 
  Eye, Download, Calendar as CalendarIcon, FileDigit
} from 'lucide-react';

export default function MyReportsPage() {
  const reports = [
    { name: 'Complete Blood Count (CBC)', patient: 'John Doe', type: 'Lab Report', date: '30 May 2025', status: 'Normal', sColor: 'text-green-500 border-green-500/20 bg-green-500/10' },
    { name: 'Lipid Profile', patient: 'Jane Smith', type: 'Lab Report', date: '28 May 2025', status: 'High', sColor: 'text-red-500 border-red-500/20 bg-red-500/10' },
    { name: 'Chest X-Ray', patient: 'Robert Brown', type: 'Imaging Report', date: '27 May 2025', status: 'Normal', sColor: 'text-green-500 border-green-500/20 bg-green-500/10' },
    { name: 'Echocardiogram', patient: 'Emily Davis', type: 'Imaging Report', date: '26 May 2025', status: 'Abnormal', sColor: 'text-red-500 border-red-500/20 bg-red-500/10' },
    { name: 'Thyroid Profile', patient: 'Michael Wilson', type: 'Lab Report', date: '24 May 2025', status: 'Normal', sColor: 'text-green-500 border-green-500/20 bg-green-500/10' },
    { name: 'Liver Function Test', patient: 'Sarah Johnson', type: 'Lab Report', date: '22 May 2025', status: 'Normal', sColor: 'text-green-500 border-green-500/20 bg-green-500/10' },
    { name: 'MRI Brain', patient: 'David Miller', type: 'Imaging Report', date: '20 May 2025', status: 'Abnormal', sColor: 'text-red-500 border-red-500/20 bg-red-500/10' },
    { name: 'HbA1c Test', patient: 'Laura Taylor', type: 'Lab Report', date: '18 May 2025', status: 'High', sColor: 'text-red-500 border-red-500/20 bg-red-500/10' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            My Reports
          </h1>
          <p className="text-sm text-foreground mt-0.5">View, download and share your medical reports</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-3.5 h-3.5" /> New Report
        </button>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
            <FileText className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Total Reports</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">124</span>
              <span className="text-xs text-green-500 font-medium">↑ 10% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <FileDigit className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Lab Reports</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">68</span>
              <span className="text-xs text-green-500 font-medium">↑ 12% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <ActivitySquare className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Imaging Reports</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">36</span>
              <span className="text-xs text-green-500 font-medium">↑ 22% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/30 shrink-0">
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Consultation Reports</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">20</span>
              <span className="text-xs text-green-500 font-medium">↑ 8% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        {/* Filters */}
        <div className="p-4 border-b border-border-main flex flex-col xl:flex-row gap-4 justify-between items-center bg-main">
          
          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <div className="relative flex-1 xl:flex-none">
              <select className="w-full xl:w-[150px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Patients</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
            <div className="relative flex-1 xl:flex-none">
              <select className="w-full xl:w-[150px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Types</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
            <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              <CalendarIcon className="w-3.5 h-3.5 text-foreground" /> 01 May 2025 - 31 May 2025
            </button>
          </div>
          
          <div className="relative w-full xl:w-[250px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search reports..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Report Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                <th className="font-medium p-4 whitespace-nowrap">Type</th>
                <th className="font-medium p-4 whitespace-nowrap">Date</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((item, i) => (
                <tr key={i} className={`border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group ${i===0 ? 'bg-white/5' : ''}`}>
                  <td className="p-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded bg-[#1e3a8a]/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <FileText className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{item.name}</span>
                    </div>
                  </td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{item.patient}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{item.type}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{item.date}</td>
                  <td className="p-4 py-3.5">
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
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border-main flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 8 of 124 reports</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground">&lt;</button>
            <button className="w-6 h-6 rounded bg-[#1e3a8a] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <span className="text-foreground text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">16</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground">&gt;</button>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
