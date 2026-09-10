'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  FileText, Clock, CheckCircle2, XCircle, Search, Filter, Plus, Eye, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function TestRequestsPage() {
  const requests = [
    { id: 'REQ-250531-001', patient: 'Rahul Verma', pid: 'P10023', tests: 'CBC, ESR', priority: 'High', date: '31 May 2025, 08:30 AM', status: 'In Progress' },
    { id: 'REQ-250531-002', patient: 'Neha Gupta', pid: 'P10045', tests: 'LFT', priority: 'High', date: '31 May 2025, 09:15 AM', status: 'In Progress' },
    { id: 'REQ-250531-003', patient: 'Amit Kumar', pid: 'P10067', tests: 'Blood Sugar (F)', priority: 'Medium', date: '31 May 2025, 09:40 AM', status: 'Pending' },
    { id: 'REQ-250531-004', patient: 'Sunita Reddy', pid: 'P10081', tests: 'Thyroid Profile', priority: 'Medium', date: '31 May 2025, 10:05 AM', status: 'Pending' },
    { id: 'REQ-250531-005', patient: 'Vikram Patel', pid: 'P10102', tests: 'Urine Routine', priority: 'Low', date: '31 May 2025, 10:20 AM', status: 'Pending' },
    { id: 'REQ-250531-006', patient: 'Pooja Sharma', pid: 'P10115', tests: 'Lipid Profile', priority: 'Low', date: '31 May 2025, 10:35 AM', status: 'Pending' },
    { id: 'REQ-250531-007', patient: 'Rakesh Yadav', pid: 'P10123', tests: 'KFT', priority: 'High', date: '31 May 2025, 11:00 AM', status: 'In Progress' },
    { id: 'REQ-250531-008', patient: 'Anjali Singh', pid: 'P10134', tests: 'Urine Routine', priority: 'Low', date: '31 May 2025, 11:15 AM', status: 'Pending' },
  ];

  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case 'High': return <span className="text-red-500 text-sm font-bold">High</span>;
      case 'Medium': return <span className="text-amber-500 text-sm font-bold">Medium</span>;
      case 'Low': return <span className="text-green-500 text-sm font-bold">Low</span>;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Completed': return <span className="text-green-500 text-sm font-bold">Completed</span>;
      case 'In Progress': return <span className="text-blue-500 text-sm font-bold">In Progress</span>;
      case 'Pending': return <span className="text-amber-500 text-sm font-bold">Pending</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Test Requests
          </h1>
          <p className="text-sm text-muted mt-0.5">View and manage all incoming test requests</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block w-[250px]">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by patient name, ID or request ID..." 
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
            <FileText className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Total Requests</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">126</span>
            <span className="text-[9px] text-muted font-bold mt-0.5">Today</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">In Progress</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">58</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Pending</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">42</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Completed</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">26</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Cancelled</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">0</span>
          </div>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        
        {/* Tabs & Controls */}
        <div className="p-4 border-b border-border-main flex justify-between items-center bg-main border border-border-main">
          
          <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar">
            <button className="text-sm font-medium text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 pb-1 whitespace-nowrap">All Requests</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">In Progress</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">Pending</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">Completed</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap">Cancelled</button>
          </div>
          
          <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20 shrink-0 ml-4">
            <Plus className="w-3.5 h-3.5" /> New Request
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-muted uppercase tracking-wider bg-main border border-border-main">
                <th className="font-bold p-4 whitespace-nowrap">Request ID</th>
                <th className="font-bold p-4 whitespace-nowrap">Patient Name</th>
                <th className="font-bold p-4 whitespace-nowrap">Patient ID</th>
                <th className="font-bold p-4 whitespace-nowrap">Tests</th>
                <th className="font-bold p-4 whitespace-nowrap">Priority</th>
                <th className="font-bold p-4 whitespace-nowrap">Requested On</th>
                <th className="font-bold p-4 whitespace-nowrap">Status</th>
                <th className="font-bold p-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, i) => (
                <tr key={i} className="border-b border-border-main/50 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5 text-sm text-foreground font-bold">{req.id}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{req.patient}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{req.pid}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{req.tests}</td>
                  <td className="p-4 py-3.5">{getPriorityBadge(req.priority)}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{req.date}</td>
                  <td className="p-4 py-3.5">{getStatusBadge(req.status)}</td>
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
          <span className="text-xs text-muted">Showing 1 to 8 of 126 requests</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#2563eb] text-white flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground text-xs">3</button>
            <span className="text-muted text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground text-xs">16</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
