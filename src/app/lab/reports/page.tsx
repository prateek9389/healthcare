'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  ClipboardList, Users, FileText, Calendar, 
  Download, FileDown, PieChart, ActivitySquare, AlertTriangle, AlertOctagon, PackageSearch, Filter, ChevronDown
} from 'lucide-react';

export default function LabReportsPage() {
  const reports = [
    { name: 'Daily Summary Report', type: 'Daily', generatedOn: '31 May 2025, 11:59 PM', generatedBy: 'Lab Incharge', format: 'PDF' },
    { name: 'Test Wise Summary', type: 'Test Wise', generatedOn: '31 May 2025, 11:59 PM', generatedBy: 'Lab Incharge', format: 'PDF' },
    { name: 'CBC Test Report', type: 'Test Wise', generatedOn: '31 May 2025, 11:30 PM', generatedBy: 'Priya Sharma', format: 'PDF' },
    { name: 'LFT Test Report', type: 'Test Wise', generatedOn: '31 May 2025, 11:10 PM', generatedBy: 'Amit Kumar', format: 'PDF' },
    { name: 'Monthly Summary Report', type: 'Monthly', generatedOn: '31 May 2025, 11:00 PM', generatedBy: 'Lab Incharge', format: 'PDF' },
    { name: 'Sample Rejection Report', type: 'Exception', generatedOn: '31 May 2025, 10:45 PM', generatedBy: 'Rohit Patel', format: 'PDF' },
    { name: 'Critical Results Report', type: 'Exception', generatedOn: '31 May 2025, 10:30 PM', generatedBy: 'Lab Incharge', format: 'PDF' },
    { name: 'Inventory Usage Report', type: 'Inventory', generatedOn: '31 May 2025, 10:15 PM', generatedBy: 'Lab Incharge', format: 'PDF' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Reports
          </h1>
          <p className="text-sm text-muted mt-0.5">Generate and download lab reports</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Calendar className="w-3.5 h-3.5 text-muted" /> 24 May 2025 - 31 May 2025 <ChevronDown className="w-3.5 h-3.5 text-muted ml-1" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5 text-muted" /> Filters
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
            <ClipboardList className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Total Reports</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">92</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Patient Reports</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-tight">66</span>
              <span className="text-sm text-muted mb-0.5">(72%)</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
            <FileText className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Test Wise Reports</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-tight">18</span>
              <span className="text-sm text-muted mb-0.5">(20%)</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
            <Calendar className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Daily Reports</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-tight">8</span>
              <span className="text-sm text-muted mb-0.5">(8%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Side: Reports List */}
        <div className="flex-1 card p-0 border-border-main flex flex-col bg-card">
          <div className="p-4 border-b border-border-main bg-main border border-border-main">
            <h2 className="text-lg font-bold text-foreground">Reports List</h2>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs text-muted uppercase tracking-wider bg-main border border-border-main">
                  <th className="font-bold p-4 py-3 whitespace-nowrap">Report Name</th>
                  <th className="font-bold p-4 py-3 whitespace-nowrap">Type</th>
                  <th className="font-bold p-4 py-3 whitespace-nowrap">Generated On</th>
                  <th className="font-bold p-4 py-3 whitespace-nowrap">Generated By</th>
                  <th className="font-bold p-4 py-3 whitespace-nowrap">Format</th>
                  <th className="font-bold p-4 py-3 whitespace-nowrap text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((rpt, i) => (
                  <tr key={i} className="border-b border-border-main/50 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                    <td className="p-4 py-3.5 text-sm text-foreground font-bold">{rpt.name}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{rpt.type}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{rpt.generatedOn}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{rpt.generatedBy}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{rpt.format}</td>
                    <td className="p-4 py-3.5">
                      <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors" title="Download">
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side: Quick Reports & Custom */}
        <div className="w-full xl:w-[280px] flex flex-col gap-6 shrink-0">
          
          <div className="card p-0 border-border-main bg-card flex flex-col">
            <div className="p-4 border-b border-border-main bg-main border border-border-main">
              <h2 className="text-lg font-bold text-foreground">Quick Reports</h2>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <button className="flex items-center justify-between p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0">
                    <PieChart className="w-3.5 h-3.5 text-purple-500" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Daily Summary</span>
                </div>
                <FileDown className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
              </button>

              <button className="flex items-center justify-between p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                    <ActivitySquare className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Test Wise Summary</span>
                </div>
                <FileDown className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
              </button>

              <button className="flex items-center justify-between p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-green-100 dark:bg-green-500/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Monthly Summary</span>
                </div>
                <FileDown className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
              </button>

              <button className="flex items-center justify-between p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Critical Results</span>
                </div>
                <FileDown className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
              </button>

              <button className="flex items-center justify-between p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/10 flex items-center justify-center shrink-0">
                    <AlertOctagon className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Sample Rejection</span>
                </div>
                <FileDown className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
              </button>

              <button className="flex items-center justify-between p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <PackageSearch className="w-3.5 h-3.5 text-cyan-500" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Inventory Usage</span>
                </div>
                <FileDown className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
              </button>
            </div>
          </div>

          <div className="card p-5 border-border-main bg-card flex flex-col items-start gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold text-foreground">Custom Report</h2>
              <p className="text-sm text-foreground leading-relaxed">Generate custom report based on filters.</p>
            </div>
            <button className="w-full py-2 bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
              Generate Report
            </button>
          </div>
          
        </div>
      </div>
    </DashboardLayout>
  );
}
