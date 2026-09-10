'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Upload, FileText, Download, ShieldCheck } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    {
      name: 'CBC Test',
      date: '30 May 2025',
      hospital: 'City Care Hospital',
      status: 'Normal',
      statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20'
    },
    {
      name: 'Blood Sugar (Fasting)',
      date: '29 May 2025',
      hospital: 'City Care Hospital',
      status: 'Normal',
      statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20'
    },
    {
      name: 'Thyroid Profile',
      date: '28 May 2025',
      hospital: 'City Care Hospital',
      status: 'Abnormal',
      statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20'
    },
    {
      name: 'Lipid Profile',
      date: '20 May 2025',
      hospital: 'City Care Hospital',
      status: 'Normal',
      statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20'
    },
    {
      name: 'X-Ray Chest',
      date: '15 May 2025',
      hospital: 'City Care Hospital',
      status: 'Normal',
      statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20'
    }
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            My Reports
          </h1>
          <p className="text-sm text-foreground mt-1">View and download your medical reports</p>
        </div>
        
        <button className="flex items-center gap-1.5 px-4 py-2 bg-transparent border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-lg hover:bg-purple-500/10 transition-colors">
          <Upload className="w-3.5 h-3.5" /> Upload Report
        </button>
      </div>

      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col mb-6">
        
        {/* Tabs */}
        <div className="p-4 border-b border-border-main flex items-center gap-4">
          <button className="px-4 py-1.5 text-sm font-medium bg-[#5b21b6] text-foreground rounded-md">All Reports</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Lab Reports</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Imaging</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Other</button>
        </div>

        {/* List */}
        <div className="flex flex-col p-2">
          {reports.map((report, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border-b border-border-main last:border-0 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
              
              <div className="flex items-center gap-4 flex-1">
                <FileText className="w-5 h-5 text-foreground" />
                <div className="flex flex-col">
                  <span className="text-base font-bold text-foreground">{report.name}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-foreground">{report.date}</span>
                    <span className="text-xs text-foreground">•</span>
                    <span className="text-xs text-foreground">{report.hospital}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className={`text-xs font-medium px-3 py-1 rounded border ${report.statusColor}`}>
                  {report.status}
                </span>
                <button className="text-foreground hover:text-foreground transition-colors p-1" title="Download">
                  <Download className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Support Banner */}
      <div className="card p-5 border-border-main bg-gradient-to-r from-[#101423] to-[#1e1b4b]/40 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">Your reports are secure</span>
            <span className="text-sm text-foreground mt-0.5">We ensure the privacy and security of your data.</span>
          </div>
        </div>
        
        <div className="opacity-20 pointer-events-none">
          <ShieldCheck className="w-16 h-16 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

    </DashboardLayout>
  );
}
