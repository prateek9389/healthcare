'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  ChevronDown, FileText, CheckCircle2, TrendingUp, AlertTriangle, Calendar
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';

export default function AnalyticsPage() {
  const revenueData = [
    { name: '01 May', value: 1200000 },
    { name: '08 May', value: 2500000 },
    { name: '15 May', value: 1800000 },
    { name: '22 May', value: 3800000 },
    { name: '31 May', value: 2457890 },
  ];

  const paymentData = [
    { name: 'UPI', value: 40.2, color: '#a855f7' },
    { name: 'Card', value: 25.4, color: '#3b82f6' },
    { name: 'Net Banking', value: 15.8, color: '#22c55e' },
    { name: 'Cash', value: 10.6, color: '#eab308' },
    { name: 'Others', value: 8.0, color: '#f97316' },
  ];

  const categoryData = [
    { name: 'Doctor Services', value: 750000 },
    { name: 'Lab Tests', value: 450000 },
    { name: 'Imaging', value: 380000 },
    { name: 'Pharmacy', value: 200000 },
    { name: 'Others', value: 100000 },
  ];

  const topCustomers = [
    { name: 'John Doe', revenue: '₹ 2,45,600', invoices: 12 },
    { name: 'Jane Smith', revenue: '₹ 1,85,400', invoices: 9 },
    { name: 'Robert Brown', revenue: '₹ 1,32,700', invoices: 7 },
    { name: 'Emily Davis', revenue: '₹ 1,12,450', invoices: 6 },
    { name: 'Michael Wilson', revenue: '₹ 98,750', invoices: 5 },
    { name: 'Sarah Johnson', revenue: '₹ 87,600', invoices: 4 },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Analytics
          </h1>
          <p className="text-sm text-foreground mt-0.5">View insights and trends for your business</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Calendar className="w-3.5 h-3.5 text-foreground" /> 01 May 2025 - 31 May 2025 <ChevronDown className="w-3.5 h-3.5 text-foreground" />
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
            <div className="w-5 h-5 rounded-full border-[3px] border-purple-500 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Revenue</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">₹ 24,57,890</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 10.6% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-mainlue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <div className="w-5 h-5 rounded-full border-[3px] border-blue-500 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-mainlue-500"></div></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Collections</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">₹ 18,75,640</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 15.7% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 shrink-0">
            <FileText className="w-5 h-5 text-cyan-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Average Invoice Value</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">₹ 2,430.50</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 5.2% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30 shrink-0">
            <div className="w-5 h-5 rounded-full border-[3px] border-red-500 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Outstanding Amount</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">₹ 5,82,250</span>
              <span className="text-xs text-red-500 font-medium mb-0.5">↓ 4.8% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Over Time Chart */}
        <div className="card p-5 border-border-main flex flex-col bg-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-foreground">Revenue Over Time</h2>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              Daily <ChevronDown className="w-3.5 h-3.5 text-foreground" />
            </button>
          </div>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/100000}L`} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment Method Distribution */}
        <div className="card p-5 border-border-main flex flex-col bg-card">
          <h2 className="text-lg font-medium text-foreground mb-6">Payment Method Distribution</h2>
          <div className="flex items-center justify-between h-[220px]">
            <div className="w-[200px] h-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={paymentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {paymentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-foreground">₹ 18,75,640</span>
                <span className="text-xs text-foreground">Total Collections</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 flex-1 px-4">
              {paymentData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-foreground">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Customers */}
        <div className="card p-0 border-border-main flex flex-col bg-card">
          <div className="p-4 border-b border-border-main">
            <h2 className="text-lg font-medium text-foreground">Top Customers by Revenue</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                  <th className="font-medium p-4 py-3 whitespace-nowrap">Customer</th>
                  <th className="font-medium p-4 py-3 whitespace-nowrap">Revenue</th>
                  <th className="font-medium p-4 py-3 whitespace-nowrap text-center">Invoices</th>
                </tr>
              </thead>
              <tbody>
                {topCustomers.map((cus, i) => (
                  <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 py-2.5 text-sm text-foreground font-medium">{cus.name}</td>
                    <td className="p-4 py-2.5 text-sm text-foreground">{cus.revenue}</td>
                    <td className="p-4 py-2.5 text-sm text-foreground text-center">{cus.invoices}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sales by Category Chart */}
        <div className="card p-5 border-border-main flex flex-col bg-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-foreground">Sales by Category</h2>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              This Month <ChevronDown className="w-3.5 h-3.5 text-foreground" />
            </button>
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={24}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/100000}L`} />
                <RechartsTooltip 
                  cursor={{fill: '#ffffff0a'}}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="value" fill="#a855f7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
