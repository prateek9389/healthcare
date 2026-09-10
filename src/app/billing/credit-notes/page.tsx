'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, ChevronDown, FileMinus, CreditCard, CheckCircle, Clock, TrendingUp,
  Search, Filter, Eye, Download, MoreVertical
} from 'lucide-react';

export default function CreditNotesPage() {
  const creditNotes = [
    { id: 'CN-2025-0126', patient: 'John Doe', date: '31 May 2025', invoice: 'INV-2025-1248', amount: '₹ 1,250.00', status: 'Used', sColor: 'text-blue-500 bg-mainlue-500/10 border-blue-500/20' },
    { id: 'CN-2025-0125', patient: 'Jane Smith', date: '31 May 2025', invoice: 'INV-2025-1247', amount: '₹ 850.00', status: 'Used', sColor: 'text-blue-500 bg-mainlue-500/10 border-blue-500/20' },
    { id: 'CN-2025-0124', patient: 'Robert Brown', date: '30 May 2025', invoice: 'INV-2025-1246', amount: '₹ 2,240.00', status: 'Unused', sColor: 'text-foreground bg-slate-500/10 border-slate-500/20' },
    { id: 'CN-2025-0123', patient: 'Emily Davis', date: '30 May 2025', invoice: 'INV-2025-1245', amount: '₹ 620.00', status: 'Unused', sColor: 'text-foreground bg-slate-500/10 border-slate-500/20' },
    { id: 'CN-2025-0122', patient: 'Michael Wilson', date: '29 May 2025', invoice: 'INV-2025-1244', amount: '₹ 980.00', status: 'Unused', sColor: 'text-foreground bg-slate-500/10 border-slate-500/20' },
    { id: 'CN-2025-0121', patient: 'Sarah Johnson', date: '29 May 2025', invoice: 'INV-2025-1243', amount: '₹ 1,670.00', status: 'Used', sColor: 'text-blue-500 bg-mainlue-500/10 border-blue-500/20' },
    { id: 'CN-2025-0120', patient: 'David Miller', date: '28 May 2025', invoice: 'INV-2025-1242', amount: '₹ 450.00', status: 'Unused', sColor: 'text-foreground bg-slate-500/10 border-slate-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Credit Notes
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage issued credit notes and adjustments</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Create Credit Note
          </button>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <FileMinus className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-bold mb-1">Total Credit Notes</span>
            <span className="text-2xl font-bold text-foreground leading-none mb-1">126</span>
            <span className="text-xs text-green-500 font-medium">↑ 8.7% <span className="text-foreground font-normal">from last month</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center border border-teal-500/30 shrink-0">
            <CreditCard className="w-5 h-5 text-teal-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-bold mb-1">Total Amount</span>
            <span className="text-2xl font-bold text-foreground leading-none mb-1">₹2,45,780.00</span>
            <span className="text-xs text-green-500 font-medium">↑ 14.6% <span className="text-foreground font-normal">from last month</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-bold mb-1">Used</span>
            <span className="text-2xl font-bold text-foreground leading-none mb-1">98</span>
            <span className="text-xs text-green-500 font-medium">77.8% <span className="text-foreground font-normal">of total</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shrink-0">
            <Clock className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-bold mb-1">Unused</span>
            <span className="text-2xl font-bold text-foreground leading-none mb-1">28</span>
            <span className="text-xs text-orange-500 font-medium">22.2% <span className="text-foreground font-normal">of total</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-bold mb-1">Avg. Amount</span>
            <span className="text-2xl font-bold text-foreground leading-none mb-1">₹1,950.63</span>
            <span className="text-xs text-green-500 font-medium">↑ 6.1% <span className="text-foreground font-normal">from last month</span></span>
          </div>
        </div>
      </div>

      {/* Filters & Table */}
      <div className="card p-0 border-border-main flex flex-col bg-card">
        {/* Filters */}
        <div className="p-4 border-b border-border-main flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search credit notes by ID, patient..." 
              className="w-full pl-9 pr-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            All Status <ChevronDown className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            All Patients <ChevronDown className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            01 May 2025 - 31 May 2025 <ChevronDown className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5 text-foreground" /> Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Credit Note ID</th>
                <th className="font-medium p-4 whitespace-nowrap">Patient Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Date</th>
                <th className="font-medium p-4 whitespace-nowrap">Related Invoice</th>
                <th className="font-medium p-4 whitespace-nowrap">Amount</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {creditNotes.map((note, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{note.id}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{note.patient}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{note.date}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{note.invoice}</td>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{note.amount}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${note.sColor}`}>
                      {note.status}
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
                      <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                        <MoreVertical className="w-4 h-4" />
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
          <span className="text-xs text-foreground">Showing 1 to 7 of 126 credit notes</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 rotate-90" /></button>
            <button className="w-6 h-6 rounded bg-purple-600 text-white flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <span className="text-foreground text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">18</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 -rotate-90" /></button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
