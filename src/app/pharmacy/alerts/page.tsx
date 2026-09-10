'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Search, Filter, Clock, AlertTriangle, Eye,
  ChevronLeft, ChevronRight, FileText
} from 'lucide-react';

export default function ExpiryAlertsPage() {
  const alerts = [
    { name: 'Amoxicillin 500mg', batch: 'AMX25', date: '15 Jun 2025', daysLeft: '15 days', stock: '12 strips', type: 'Expiring in 30 Days', typeColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10', daysColor: 'text-amber-600 dark:text-amber-400' },
    { name: 'Paracetamol 650mg', batch: 'PCM25', date: '20 Jun 2025', daysLeft: '20 days', stock: '18 strips', type: 'Expiring in 30 Days', typeColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10', daysColor: 'text-amber-600 dark:text-amber-400' },
    { name: 'Cetirizine 10mg', batch: 'CTZ24', date: '25 Jun 2025', daysLeft: '25 days', stock: '15 strips', type: 'Expiring in 30 Days', typeColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10', daysColor: 'text-amber-600 dark:text-amber-400' },
    { name: 'Ibuprofen 400mg', batch: 'IBU24', date: '30 Jun 2025', daysLeft: '30 days', stock: '8 strips', type: 'Expiring in 30 Days', typeColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10', daysColor: 'text-green-600 dark:text-green-400' },
    { name: 'Azithromycin 250mg', batch: 'AZT24', date: '10 Jul 2025', daysLeft: '40 days', stock: '10 strips', type: 'Expiring in 60 Days', typeColor: 'text-orange-600 dark:text-orange-400 bg-orange-500/10', daysColor: 'text-green-600 dark:text-green-400' },
    { name: 'Omeprazole 20mg', batch: 'OMP24', date: '15 Jul 2025', daysLeft: '45 days', stock: '20 strips', type: 'Expiring in 60 Days', typeColor: 'text-orange-600 dark:text-orange-400 bg-orange-500/10', daysColor: 'text-green-600 dark:text-green-400' },
    { name: 'Vitamin D3 60K', batch: 'VD360K', date: '18 May 2025', daysLeft: '-13 days', stock: '5 strips', type: 'Expired', typeColor: 'text-red-600 dark:text-red-400 bg-red-500/10', daysColor: 'text-red-600 dark:text-red-400' },
    { name: 'Cefixime 200mg', batch: 'CFX24', date: '22 May 2025', daysLeft: '-9 days', stock: '3 strips', type: 'Expired', typeColor: 'text-red-600 dark:text-red-400 bg-red-500/10', daysColor: 'text-red-600 dark:text-red-400' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            Expiry Alerts
          </h1>
          <p className="text-sm text-foreground mt-1">Medicines nearing expiry or expired</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search medicine..." className="w-64 bg-card border border-border-main rounded-lg pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-purple-500/50" />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main text-foreground text-sm font-medium rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
        </div>
      </div>

      {/* Top 3 Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        
        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center justify-between group">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Expiring in 30 Days</span>
            <span className="text-[32px] font-bold text-foreground leading-none mt-2">5</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center justify-between group">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Expiring in 60 Days</span>
            <span className="text-[32px] font-bold text-foreground leading-none mt-2">8</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center justify-between group">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Expired</span>
            <span className="text-[32px] font-bold text-foreground leading-none mt-2">2</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <FileText className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
        </div>

      </div>

      {/* Table */}
      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-sm font-bold text-foreground">
                <th className="p-4 font-medium pl-6">Medicine</th>
                <th className="p-4 font-medium">Batch No.</th>
                <th className="p-4 font-medium">Expiry Date</th>
                <th className="p-4 font-medium">Days Left</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium">Alert Type</th>
                <th className="p-4 font-medium pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main/50">
              {alerts.map((item, i) => (
                <tr key={i} className="hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 pl-6 text-base font-medium text-foreground">
                    {item.name}
                  </td>
                  <td className="p-4 text-sm text-foreground">
                    {item.batch}
                  </td>
                  <td className="p-4 text-sm text-foreground">
                    {item.date}
                  </td>
                  <td className={`p-4 text-sm font-medium ${item.daysColor}`}>
                    {item.daysLeft}
                  </td>
                  <td className="p-4 text-sm text-foreground">
                    {item.stock}
                  </td>
                  <td className="p-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded border border-current/20 ${item.typeColor}`}>{item.type}</span>
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
          <span>Showing 1 to 8 of 15 alerts</span>
          
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">2</button>
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
