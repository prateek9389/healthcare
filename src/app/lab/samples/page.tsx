'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  TestTube2, FlaskConical, Beaker, CheckCircle2, XCircle, Search, Filter, Eye, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function SamplesPage() {
  const samples = [
    { id: 'SMP-250531-001', patient: 'Rahul Verma', type: 'Blood', collectedOn: '31 May 2025, 08:35 AM', collectedBy: 'Priya Sharma', status: 'In Testing' },
    { id: 'SMP-250531-002', patient: 'Neha Gupta', type: 'Blood', collectedOn: '31 May 2025, 09:10 AM', collectedBy: 'Amit Kumar', status: 'In Lab' },
    { id: 'SMP-250531-003', patient: 'Amit Kumar', type: 'Blood', collectedOn: '31 May 2025, 09:35 AM', collectedBy: 'Priya Sharma', status: 'In Testing' },
    { id: 'SMP-250531-004', patient: 'Sunita Reddy', type: 'Serum', collectedOn: '31 May 2025, 10:00 AM', collectedBy: 'Amit Kumar', status: 'In Testing' },
    { id: 'SMP-250531-005', patient: 'Vikram Patel', type: 'Urine', collectedOn: '31 May 2025, 10:15 AM', collectedBy: 'Rohit Patel', status: 'In Lab' },
    { id: 'SMP-250531-006', patient: 'Pooja Sharma', type: 'Plasma', collectedOn: '31 May 2025, 10:30 AM', collectedBy: 'Priya Sharma', status: 'Tested' },
    { id: 'SMP-250531-007', patient: 'Rakesh Yadav', type: 'Whole Blood', collectedOn: '31 May 2025, 10:55 AM', collectedBy: 'Amit Kumar', status: 'In Testing' },
    { id: 'SMP-250531-008', patient: 'Anjali Singh', type: 'Urine', collectedOn: '31 May 2025, 11:10 AM', collectedBy: 'Rohit Patel', status: 'In Lab' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Tested': return <span className="text-green-500 text-sm font-bold">Tested</span>;
      case 'In Testing': return <span className="text-blue-500 text-sm font-bold">In Testing</span>;
      case 'In Lab': return <span className="text-purple-500 text-sm font-bold">In Lab</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Samples
          </h1>
          <p className="text-sm text-muted mt-0.5">Track and manage collected samples</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block w-[250px]">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by patient name, sample ID..." 
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
            <TestTube2 className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Samples Collected</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">112</span>
            <span className="text-[9px] text-muted font-bold mt-0.5">Today</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
            <FlaskConical className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">In Lab</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">74</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
            <Beaker className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">In Testing</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">30</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Tested</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">64</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Rejected</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">2</span>
          </div>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        
        {/* Tabs */}
        <div className="p-4 border-b border-border-main flex items-center gap-6 bg-main border border-border-main overflow-x-auto hide-scrollbar">
          <button className="text-sm font-medium text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 pb-1 whitespace-nowrap">All Samples</button>
          <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">In Lab</button>
          <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">In Testing</button>
          <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">Tested</button>
          <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">Rejected</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-muted uppercase tracking-wider bg-main border border-border-main">
                <th className="font-bold p-4 whitespace-nowrap">Sample ID</th>
                <th className="font-bold p-4 whitespace-nowrap">Patient Name</th>
                <th className="font-bold p-4 whitespace-nowrap">Sample Type</th>
                <th className="font-bold p-4 whitespace-nowrap">Collected On</th>
                <th className="font-bold p-4 whitespace-nowrap">Collected By</th>
                <th className="font-bold p-4 whitespace-nowrap">Status</th>
                <th className="font-bold p-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {samples.map((sm, i) => (
                <tr key={i} className="border-b border-border-main/50 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5 text-sm text-foreground font-bold">{sm.id}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{sm.patient}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{sm.type}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{sm.collectedOn}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{sm.collectedBy}</td>
                  <td className="p-4 py-3.5">{getStatusBadge(sm.status)}</td>
                  <td className="p-4 py-3.5">
                    <div className="flex justify-center gap-2">
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors">
                        <Eye className="w-3.5 h-3.5" />
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
          <span className="text-xs text-muted">Showing 1 to 8 of 112 samples</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#2563eb] text-white flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground text-xs">3</button>
            <span className="text-muted text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground text-xs">14</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
