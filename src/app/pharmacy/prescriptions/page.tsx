'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  FileText, Search, Filter, Calendar, 
  Clock, CheckCircle2, XCircle, Eye,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export default function PrescriptionsPage() {
  const prescriptions = [
    { id: 'RX# 10048', patient: 'Rahul Verma', phone: '+91 98765 43210', date: '31 May 2025', time: '09:30 AM', meds: 3, status: 'Dispensed', statusColor: 'text-green-600 dark:text-green-400' },
    { id: 'RX# 10047', patient: 'Neha Sharma', phone: '+91 91234 56789', date: '31 May 2025', time: '09:15 AM', meds: 2, status: 'Dispensed', statusColor: 'text-green-600 dark:text-green-400' },
    { id: 'RX# 10046', patient: 'Vikram Patel', phone: '+91 99887 76655', date: '31 May 2025', time: '08:45 AM', meds: 4, status: 'Pending', statusColor: 'text-amber-600 dark:text-amber-400' },
    { id: 'RX# 10045', patient: 'Anita Singh', phone: '+91 90011 22334', date: '30 May 2025', time: '05:30 PM', meds: 3, status: 'Pending', statusColor: 'text-amber-600 dark:text-amber-400' },
    { id: 'RX# 10044', patient: 'Suresh Kumar', phone: '+91 88776 65544', date: '30 May 2025', time: '02:00 PM', meds: 2, status: 'Dispensed', statusColor: 'text-green-600 dark:text-green-400' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            Prescriptions
          </h1>
          <p className="text-sm text-foreground mt-1">View and manage all patient prescriptions</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search by patient name or RX ID..." className="w-64 bg-card border border-border-main rounded-lg pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-purple-500/50" />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main text-foreground text-sm font-medium rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main text-foreground rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Calendar className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-bold text-foreground">Total Prescriptions</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">48</span>
            <span className="text-xs text-foreground mt-1">↑ <span className="text-purple-600 dark:text-purple-400 font-medium">18%</span> from yesterday</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-bold text-foreground">Pending</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">12</span>
            <span className="text-xs text-foreground mt-1">↻ <span className="text-amber-600 dark:text-amber-400 font-medium">25%</span> of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-bold text-foreground">Dispensed</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">32</span>
            <span className="text-xs text-foreground mt-1">✓ <span className="text-green-600 dark:text-green-400 font-medium">67%</span> of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-bold text-foreground">Cancelled</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">4</span>
            <span className="text-xs text-foreground mt-1">✕ <span className="text-red-600 dark:text-red-400 font-medium">8%</span> of total</span>
          </div>
        </div>

      </div>

      {/* Table */}
      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
        
        {/* Tabs */}
        <div className="p-4 border-b border-border-main flex items-center gap-2">
          <button className="px-4 py-1.5 text-sm font-medium bg-[#5b21b6] text-foreground rounded-md">All</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Pending</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Dispensed</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Cancelled</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-sm font-bold text-foreground">
                <th className="p-4 font-medium pl-6">Prescription</th>
                <th className="p-4 font-medium">Patient</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Medicines</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main/50">
              {prescriptions.map((rx, i) => (
                <tr key={i} className="hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-base font-medium text-foreground">{rx.id}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{rx.patient}</span>
                      <span className="text-xs text-foreground mt-0.5">{rx.phone}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-foreground">{rx.date}</span>
                      <span className="text-xs text-foreground mt-0.5">{rx.time}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-foreground">{rx.meds} items</span>
                  </td>
                  <td className="p-4">
                    <span className={`text-sm font-medium ${rx.statusColor}`}>
                      {rx.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="w-8 h-8 rounded-lg bg-white/5 border border-border-main inline-flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border-main flex items-center justify-between text-sm text-foreground bg-main">
          <span>Showing 1 to 5 of 48 prescriptions</span>
          
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">4</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">5</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-foreground">10 / page</span>
            <ChevronRight className="w-3 h-3 text-foreground rotate-90" />
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
