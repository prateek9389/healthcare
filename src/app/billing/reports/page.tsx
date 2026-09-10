'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, FileText, CheckCircle2, Download, Calendar, 
  BarChart2, CreditCard, Clock, Receipt, ShoppingBag, Users, TrendingUp, Settings,
  Eye
} from 'lucide-react';

export default function ReportsPage() {
  const recentReports = [
    { name: 'Sales Summary Report', type: 'Sales', date: '31 May 2025, 10:30 AM', period: 'May 2025', by: 'Billing Manager' },
    { name: 'Payment Summary Report', type: 'Payments', date: '31 May 2025, 09:15 AM', period: 'May 2025', by: 'Billing Manager' },
    { name: 'Aging Report', type: 'Aging', date: '30 May 2025, 06:40 PM', period: 'May 2025', by: 'Billing Manager' },
    { name: 'Tax Summary Report', type: 'Taxes', date: '30 May 2025, 03:20 PM', period: 'May 2025', by: 'Billing Manager' },
    { name: 'Item Wise Sales Report', type: 'Sales', date: '29 May 2025, 11:05 AM', period: 'May 2025', by: 'Billing Manager' },
  ];

  const popularReports = [
    { title: 'Sales Summary', desc: 'Overview of all sales', icon: <BarChart2 className="w-5 h-5" />, color: 'text-blue-500 bg-mainlue-500/20 border-blue-500/30' },
    { title: 'Payment Summary', desc: 'Summary of payments', icon: <CreditCard className="w-5 h-5" />, color: 'text-green-500 bg-green-500/20 border-green-500/30' },
    { title: 'Aging Report', desc: 'Customer outstanding', icon: <Clock className="w-5 h-5" />, color: 'text-orange-500 bg-orange-500/20 border-orange-500/30' },
    { title: 'Tax Summary', desc: 'Tax collected details', icon: <Receipt className="w-5 h-5" />, color: 'text-purple-500 bg-purple-500/20 border-purple-500/30' },
    { title: 'Item Wise Sales', desc: 'Sales by item/service', icon: <ShoppingBag className="w-5 h-5" />, color: 'text-cyan-500 bg-cyan-500/20 border-cyan-500/30' },
    { title: 'Customer Statement', desc: 'Customer wise report', icon: <Users className="w-5 h-5" />, color: 'text-teal-500 bg-teal-500/20 border-teal-500/30' },
    { title: 'Profit & Loss', desc: 'P&L statement', icon: <TrendingUp className="w-5 h-5" />, color: 'text-red-500 bg-red-500/20 border-red-500/30' },
    { title: 'Custom Report', desc: 'Build your own report', icon: <Settings className="w-5 h-5" />, color: 'text-foreground bg-slate-500/20 border-slate-500/30' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Reports
          </h1>
          <p className="text-sm text-foreground mt-0.5">Generate and download detailed financial reports</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Create Report
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
            <FileText className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Reports</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">48</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 12.8% <span className="text-foreground font-normal">this month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Generated This Month</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">26</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 8.3% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shrink-0">
            <Download className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Downloaded</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">22</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 11.1% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 shrink-0">
            <Calendar className="w-5 h-5 text-cyan-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Scheduled Reports</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">12</span>
              <span className="text-xs text-foreground font-medium mb-0.5">Active schedules</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Reports */}
      <div className="mb-6">
        <h2 className="text-lg font-medium text-foreground mb-4">Popular Reports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {popularReports.map((report, i) => (
            <div key={i} className="card p-4 border-border-main bg-card hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 transition-transform group-hover:scale-110 ${report.color}`}>
                {report.icon}
              </div>
              <div className="flex flex-col mt-0.5">
                <span className="text-sm font-medium text-foreground mb-0.5">{report.title}</span>
                <span className="text-xs text-foreground">{report.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <div className="card p-0 border-border-main flex flex-col bg-card">
        <div className="p-4 border-b border-border-main flex justify-between items-center">
          <h2 className="text-lg font-medium text-foreground">Recent Reports</h2>
          <button className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">
            View All Reports
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Report Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Type</th>
                <th className="font-medium p-4 whitespace-nowrap">Date Generated</th>
                <th className="font-medium p-4 whitespace-nowrap">Period</th>
                <th className="font-medium p-4 whitespace-nowrap">Generated By</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{report.name}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{report.type}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{report.date}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{report.period}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{report.by}</td>
                  <td className="p-4 py-3">
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
      </div>

    </DashboardLayout>
  );
}
