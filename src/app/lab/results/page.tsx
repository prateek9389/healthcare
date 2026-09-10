'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  FileDigit, CheckCircle2, AlertTriangle, AlertOctagon, Clock,
  Search, Filter, Eye, Download, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function TestResultsPage() {
  const results = [
    { id: 'RPT-250531-001', patient: 'Rahul Verma', tests: 'CBC, ESR', reportedOn: '31 May 2025, 09:30 AM', status: 'Verified', summary: 'All Parameters Normal' },
    { id: 'RPT-250531-002', patient: 'Neha Gupta', tests: 'LFT', reportedOn: '31 May 2025, 10:05 AM', status: 'Verified', summary: 'All Parameters Normal' },
    { id: 'RPT-250531-003', patient: 'Amit Kumar', tests: 'Blood Sugar (F)', reportedOn: '31 May 2025, 10:20 AM', status: 'Pending Review', summary: 'High Glucose (126 mg/dL)' },
    { id: 'RPT-250531-004', patient: 'Sunita Reddy', tests: 'Thyroid Profile', reportedOn: '31 May 2025, 10:45 AM', status: 'Pending Review', summary: 'Low TSH (0.22 µIU/mL)' },
    { id: 'RPT-250531-005', patient: 'Vikram Patel', tests: 'Urine Routine', reportedOn: '31 May 2025, 11:05 AM', status: 'Verified', summary: 'All Parameters Normal' },
    { id: 'RPT-250531-006', patient: 'Pooja Sharma', tests: 'Lipid Profile', reportedOn: '31 May 2025, 11:25 AM', status: 'Abnormal', summary: 'High Cholesterol (240)' },
    { id: 'RPT-250531-007', patient: 'Rakesh Yadav', tests: 'KFT', reportedOn: '31 May 2025, 11:45 AM', status: 'Verified', summary: 'All Parameters Normal' },
    { id: 'RPT-250531-008', patient: 'Anjali Singh', tests: 'Urine Routine', reportedOn: '31 May 2025, 12:00 PM', status: 'Abnormal', summary: 'Protein Detected (+1)' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Verified': return <span className="text-green-500 text-sm font-bold">Verified</span>;
      case 'Pending Review': return <span className="text-amber-500 text-sm font-bold">Pending Review</span>;
      case 'Abnormal': return <span className="text-red-500 text-sm font-bold">Abnormal</span>;
      default: return null;
    }
  };

  const getSummaryColor = (status: string, summary: string) => {
    if (status === 'Verified' && summary.includes('Normal')) return 'text-foreground';
    if (status === 'Pending Review') return 'text-amber-500';
    if (status === 'Abnormal') return 'text-red-500';
    return 'text-foreground';
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Test Results
          </h1>
          <p className="text-sm text-muted mt-0.5">View and verify test results</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block w-[250px]">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by patient name, report ID..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5 text-muted" /> Filters
          </button>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
            <FileDigit className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Results Generated</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">98</span>
            <span className="text-[9px] text-muted font-bold mt-0.5">Today</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Verified</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">76</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Pending Review</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">18</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Abnormal</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">22</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <AlertOctagon className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Critical</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">6</span>
          </div>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        
        {/* Tabs */}
        <div className="p-4 border-b border-border-main flex items-center gap-6 bg-main border border-border-main overflow-x-auto hide-scrollbar">
          <button className="text-sm font-medium text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 pb-1 whitespace-nowrap">All Results</button>
          <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">Pending Review</button>
          <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">Verified</button>
          <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">Abnormal</button>
          <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">Critical</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-muted uppercase tracking-wider bg-main border border-border-main">
                <th className="font-bold p-4 whitespace-nowrap">Report ID</th>
                <th className="font-bold p-4 whitespace-nowrap">Patient Name</th>
                <th className="font-bold p-4 whitespace-nowrap">Tests</th>
                <th className="font-bold p-4 whitespace-nowrap">Reported On</th>
                <th className="font-bold p-4 whitespace-nowrap">Status</th>
                <th className="font-bold p-4 whitespace-nowrap">Result Summary</th>
                <th className="font-bold p-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, i) => (
                <tr key={i} className="border-b border-border-main/50 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5 text-sm text-foreground font-bold">{res.id}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{res.patient}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{res.tests}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{res.reportedOn}</td>
                  <td className="p-4 py-3.5">{getStatusBadge(res.status)}</td>
                  <td className={`p-4 py-3.5 text-sm font-bold ${getSummaryColor(res.status, res.summary)}`}>{res.summary}</td>
                  <td className="p-4 py-3.5">
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
        <div className="p-4 flex justify-between items-center bg-main border border-border-main">
          <span className="text-xs text-muted">Showing 1 to 8 of 98 results</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#2563eb] text-white flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground text-xs">3</button>
            <span className="text-muted text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground text-xs">13</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
