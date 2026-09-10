'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, ChevronDown, FileText, CheckSquare, UserCheck, XCircle, Percent,
  Search, Filter, Eye, Download, MoreVertical, Copy, Upload
} from 'lucide-react';

export default function EstimatesPage() {
  const estimates = [
    { id: 'EST-2025-0852', patient: 'John Doe', date: '31 May 2025', validTill: '14 Jun 2025', amount: '₹ 12,450.00', status: 'Approved', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'EST-2025-0851', patient: 'Jane Smith', date: '31 May 2025', validTill: '14 Jun 2025', amount: '₹ 8,750.00', status: 'Converted', sColor: 'text-teal-500 bg-teal-500/10 border-teal-500/20' },
    { id: 'EST-2025-0850', patient: 'Robert Brown', date: '30 May 2025', validTill: '13 Jun 2025', amount: '₹ 15,240.00', status: 'Approved', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'EST-2025-0849', patient: 'Emily Davis', date: '30 May 2025', validTill: '13 Jun 2025', amount: '₹ 6,120.00', status: 'Pending', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { id: 'EST-2025-0848', patient: 'Michael Wilson', date: '29 May 2025', validTill: '12 Jun 2025', amount: '₹ 9,800.00', status: 'Expired', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { id: 'EST-2025-0847', patient: 'Sarah Johnson', date: '29 May 2025', validTill: '12 Jun 2025', amount: '₹ 18,670.00', status: 'Converted', sColor: 'text-teal-500 bg-teal-500/10 border-teal-500/20' },
    { id: 'EST-2025-0846', patient: 'David Miller', date: '28 May 2025', validTill: '11 Jun 2025', amount: '₹ 4,500.00', status: 'Approved', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Estimates
          </h1>
          <p className="text-sm text-foreground mt-0.5">Create and manage treatment cost estimates</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Create Estimate
          </button>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-mainlue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <FileText className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Estimates</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">852</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 11.3% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <CheckSquare className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Approved</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">412</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">48.4%</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shrink-0">
            <UserCheck className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Converted</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">326</span>
              <span className="text-xs text-orange-500 font-medium mb-0.5">38.3%</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30 shrink-0">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Expired</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">114</span>
              <span className="text-xs text-red-500 font-medium mb-0.5">13.3%</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
            <Percent className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Conversion Rate</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">38.3%</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 4.8% <span className="text-foreground font-normal">from last month</span></span>
            </div>
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
              placeholder="Search estimates by ID, patient..." 
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
                <th className="font-medium p-4 whitespace-nowrap">Estimate ID</th>
                <th className="font-medium p-4 whitespace-nowrap">Patient Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Date</th>
                <th className="font-medium p-4 whitespace-nowrap">Valid Till</th>
                <th className="font-medium p-4 whitespace-nowrap">Amount</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {estimates.map((est, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{est.id}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{est.patient}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{est.date}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{est.validTill}</td>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{est.amount}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${est.sColor}`}>
                      {est.status}
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
          <span className="text-xs text-foreground">Showing 1 to 7 of 852 estimates</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 rotate-90" /></button>
            <button className="w-6 h-6 rounded bg-purple-600 text-white flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <span className="text-foreground text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">122</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 -rotate-90" /></button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
