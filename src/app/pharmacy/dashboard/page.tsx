'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  FileText, Pill, Package, AlertCircle, Calendar,
  ChevronRight, Activity, Search, Plus, BarChart2
} from 'lucide-react';
import { 
  AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, 
  PieChart, Pie, Cell
} from 'recharts';

export default function PharmacyDashboardPage() {
  const salesData = [
    { name: '25 May', sales: 18000 },
    { name: '26 May', sales: 25000 },
    { name: '27 May', sales: 21000 },
    { name: '28 May', sales: 30000 },
    { name: '29 May', sales: 22000 },
    { name: '30 May', sales: 28000 },
    { name: '31 May', sales: 32000 },
  ];

  const inventoryData = [
    { name: 'In Stock', value: 856, color: '#22c55e' }, // green
    { name: 'Low Stock', value: 214, color: '#3b82f6' }, // blue
    { name: 'Expiring Soon', value: 120, color: '#f59e0b' }, // orange
    { name: 'Out of Stock', value: 56, color: '#ef4444' }, // red
  ];

  const recentPrescriptions = [
    { name: 'Rahul Verma', doctor: 'Dr. Amit Mehta', time: '09:15 AM', id: 'RX12548', status: 'Pending', statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10' },
    { name: 'Neha Sharma', doctor: 'Dr. Neha Sharma', time: '08:45 AM', id: 'RX12547', status: 'Dispensed', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10', icon: true },
    { name: 'Vikram Patel', doctor: 'Dr. Priya Singh', time: '08:20 AM', id: 'RX12546', status: 'In Process', statusColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10' },
    { name: 'Anita Singh', doctor: 'Dr. Rohan Verma', time: 'Yesterday', id: 'RX12545', status: 'Dispensed', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10', icon: true },
    { name: 'Suresh Kumar', doctor: 'Dr. Amit Mehta', time: 'Yesterday', id: 'RX12544', status: 'Cancelled', statusColor: 'text-red-600 dark:text-red-400 bg-red-500/10' },
  ];

  const dispensingQueue = [
    { id: 1, name: 'Rahul Verma', meds: '5 medicines', time: '10:10 AM', status: 'Ready', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10' },
    { id: 2, name: 'Neha Sharma', meds: '3 medicines', time: '10:25 AM', status: 'Preparing', statusColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10' },
    { id: 3, name: 'Vikram Patel', meds: '4 medicines', time: '10:40 AM', status: 'Waiting', statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10' },
    { id: 4, name: 'Anita Singh', meds: '6 medicines', time: '10:55 AM', status: 'Waiting', statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10' },
  ];

  const expiryAlerts = [
    { name: 'Amoxicillin 500mg', date: 'Expires on 15 Jun 2025', units: 12 },
    { name: 'Paracetamol 650mg', date: 'Expires on 18 Jun 2025', units: 20 },
    { name: 'Cetirizine 10mg', date: 'Expires on 20 Jun 2025', units: 15 },
    { name: 'Vitamin D3 60K', date: 'Expires on 25 Jun 2025', units: 8 },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-foreground flex items-center gap-2">
            Dashboard <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </h1>
          <p className="text-sm text-foreground mt-1">Welcome back, Amit! Here's an overview of your pharmacy today.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border-main rounded-lg shadow-sm">
          <Calendar className="w-4 h-4 text-foreground" />
          <span className="text-sm text-foreground">31 May 2025, Saturday • 09:30 AM</span>
        </div>
      </div>

      {/* Top 5 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        
        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-sm font-bold text-foreground mt-0.5 leading-tight">Prescriptions<br/>Today</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">38</span>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">↑ 18% <span className="text-foreground font-normal">from yesterday</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Pill className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-bold text-foreground mt-0.5 leading-tight">Dispensed<br/>Today</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">29</span>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">↑ 12% <span className="text-foreground font-normal">from yesterday</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-bold text-foreground mt-0.5 leading-tight">Total Medicines<br/>In Stock</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">1,246</span>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">+32 <span className="text-foreground font-normal">new additions</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <span className="text-sm font-bold text-foreground mt-0.5 leading-tight">Expiry Alerts<br/><span className="text-xs text-foreground">(Next 30 Days)</span></span>
          </div>
          <div className="mt-2 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">14</span>
            <button className="text-xs text-amber-600 dark:text-amber-400 font-medium mt-1 w-fit hover:text-amber-300">View and manage</button>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <span className="text-[18px] font-bold text-blue-600 dark:text-blue-400 leading-none">₹</span>
            </div>
            <span className="text-sm font-bold text-foreground mt-0.5 leading-tight">Total Sales<br/><span className="text-transparent selection:text-transparent">.</span></span>
          </div>
          <div className="mt-2 flex flex-col">
            <span className="text-[24px] font-bold text-foreground leading-none tracking-tight">₹ 24,680</span>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">↑ 9% <span className="text-foreground font-normal">from yesterday</span></span>
          </div>
        </div>

      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Recent Prescriptions */}
        <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground">Recent Prescriptions</h2>
            <button className="px-3 py-1 bg-white/5 border border-border-main text-xs text-foreground rounded hover:bg-white/10 transition-colors">View All</button>
          </div>
          <div className="flex flex-col p-2">
            {recentPrescriptions.map((rx, i) => (
              <div key={i} className="flex items-center justify-between p-3 border-b border-border-main last:border-0 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{rx.name}</span>
                    <span className="text-xs text-foreground mt-0.5">{rx.doctor}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-foreground">{rx.time}</span>
                    <span className="text-xs text-foreground">ID: {rx.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-medium px-2 py-0.5 rounded flex items-center gap-1 ${rx.statusColor}`}>
                      {rx.icon && <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                      {rx.status}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border-main text-center">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-300 font-medium">View All Prescriptions →</button>
          </div>
        </div>

        {/* Dispensing Queue */}
        <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground">Dispensing Queue</h2>
            <button className="px-3 py-1 bg-white/5 border border-border-main text-xs text-foreground rounded hover:bg-white/10 transition-colors">View All</button>
          </div>
          <div className="flex flex-col p-4 gap-3 flex-1">
            {dispensingQueue.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border-main bg-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[#5b21b6] flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-foreground">{item.id}</span>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-sm font-bold text-foreground">{item.name}</span>
                  <span className="text-xs text-foreground mt-0.5">{item.meds}</span>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="text-xs text-foreground">{item.time}</span>
                  <span className={`text-[9px] font-medium px-2 py-0.5 rounded ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border-main text-center">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-300 font-medium">Go to Dispensing →</button>
          </div>
        </div>

        {/* Inventory Summary */}
        <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main">
            <h2 className="text-lg font-medium text-foreground">Inventory Summary</h2>
          </div>
          <div className="flex-1 flex items-center justify-center relative p-6">
            
            <div className="w-[160px] h-[160px] relative flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={inventoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    stroke="none"
                    dataKey="value"
                  >
                    {inventoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[18px] font-bold text-foreground">1,246</span>
                <span className="text-[9px] text-foreground">Total Items</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 ml-6">
              {inventoryData.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ backgroundColor: item.color }}></div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{item.name}</span>
                    <span className="text-xs text-foreground">{item.value} ({((item.value / 1246) * 100).toFixed(1)}%)</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="p-3 border-t border-border-main text-center">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-300 font-medium">View Inventory →</button>
          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Sales Overview */}
        <div className="lg:col-span-2 card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground flex items-center gap-2">
              Sales Overview <span className="text-sm text-foreground font-normal">(This Week)</span>
            </h2>
            <button className="text-sm text-foreground bg-white/5 border border-border-main px-2 py-1 rounded flex items-center gap-1">
              This Week <ChevronRight className="w-3 h-3 rotate-90" />
            </button>
          </div>
          <div className="p-4 flex-1 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dx={-10} tickFormatter={(val) => `₹ ${val/1000}K`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', fontSize: '11px', color: '#f8fafc' }}
                  itemStyle={{ fontSize: '11px' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="p-4 border-t border-border-main grid grid-cols-4 gap-4 divide-x divide-border-main">
            <div className="flex flex-col px-2">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-purple-600 dark:text-purple-400">₹</span>
                </div>
                <span className="text-xs text-foreground">Total Sales</span>
              </div>
              <span className="text-lg font-bold text-foreground">₹ 1,72,450</span>
            </div>
            <div className="flex flex-col px-4">
              <div className="flex items-center gap-1.5 mb-1">
                <BarChart2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="text-xs text-foreground">Average per Day</span>
              </div>
              <span className="text-lg font-bold text-foreground">₹ 24,635</span>
            </div>
            <div className="flex flex-col px-4">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-3.5 h-3.5 rounded-full border border-green-500 flex items-center justify-center">
                  <svg className="w-2 h-2 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-xs text-foreground">Orders Completed</span>
              </div>
              <span className="text-lg font-bold text-foreground">124</span>
            </div>
            <div className="flex flex-col px-4">
              <div className="flex items-center gap-1.5 mb-1">
                <svg className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span className="text-xs text-foreground">Patients Served</span>
              </div>
              <span className="text-lg font-bold text-foreground">96</span>
            </div>
          </div>
        </div>

        {/* Upcoming Expiry Alerts */}
        <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground">Upcoming Expiry Alerts</h2>
            <button className="px-3 py-1 bg-white/5 border border-border-main text-xs text-foreground rounded hover:bg-white/10 transition-colors">View All</button>
          </div>
          <div className="flex flex-col p-2">
            {expiryAlerts.map((alert, i) => (
              <div key={i} className="flex items-center justify-between p-3 border-b border-border-main last:border-0 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{alert.name}</span>
                    <span className="text-xs text-foreground">{alert.date}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-foreground leading-none">{alert.units}</span>
                  <span className="text-[9px] text-foreground mt-1">Units Left</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border-main text-center mt-auto">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-300 font-medium">Manage Expiry Alerts →</button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main">
            <h2 className="text-lg font-medium text-foreground">Quick Actions</h2>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3 flex-1 content-start">
            
            <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-border-main bg-main hover:bg-[#7caaaf] dark:hover:bg-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors text-center leading-tight">New<br/>Prescription</span>
            </button>

            <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-border-main bg-main hover:bg-[#7caaaf] dark:hover:bg-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mb-3">
                <Search className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors text-center leading-tight">Search<br/>Medicine</span>
            </button>

            <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-border-main bg-main hover:bg-[#7caaaf] dark:hover:bg-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center mb-3">
                <Plus className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors text-center leading-tight">Add New<br/>Medicine</span>
            </button>

            <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-border-main bg-main hover:bg-[#7caaaf] dark:hover:bg-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mb-3">
                <BarChart2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors text-center leading-tight">Generate<br/>Report</span>
            </button>

          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
