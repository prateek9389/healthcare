'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, ChevronDown, CreditCard, FileText, CheckCircle2, Clock, 
  AlertTriangle, TrendingUp, Download, Eye, FilePlus, UserPlus, FileSignature, Building2
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

export default function BillingDashboardPage() {
  const sparklineData1 = [{v: 10},{v: 15},{v: 12},{v: 18},{v: 25},{v: 22},{v: 30}];
  const sparklineData2 = [{v: 5},{v: 8},{v: 12},{v: 10},{v: 15},{v: 14},{v: 20}];
  const sparklineData3 = [{v: 10},{v: 12},{v: 11},{v: 15},{v: 14},{v: 18},{v: 20}];
  const sparklineData4 = [{v: 20},{v: 18},{v: 15},{v: 12},{v: 10},{v: 8},{v: 5}];
  const sparklineData5 = [{v: 5},{v: 10},{v: 15},{v: 25},{v: 30},{v: 35},{v: 40}];
  const sparklineData6 = [{v: 15},{v: 18},{v: 16},{v: 20},{v: 22},{v: 25},{v: 28}];

  const revenueData = [
    { name: 'May 01', val: 15000 },
    { name: 'May 06', val: 24000 },
    { name: 'May 11', val: 18000 },
    { name: 'May 16', val: 45000 },
    { name: 'May 21', val: 32000 },
    { name: 'May 26', val: 58000 },
    { name: 'May 31', val: 48000 },
  ];

  const invoiceStatusData = [
    { name: 'Paid', value: 986, color: '#10b981' }, // green
    { name: 'Pending', value: 184, color: '#f59e0b' }, // orange
    { name: 'Overdue', value: 54, color: '#ef4444' }, // red
    { name: 'Cancelled', value: 24, color: '#64748b' }, // slate
  ];

  const recentPayments = [
    { hospital: 'City Hospital', id: 'INV-2025-1248', amount: '$ 2,450.00', date: 'May 31, 2025', iconBg: 'bg-mainlue-500/10 text-blue-500' },
    { hospital: 'John Doe', id: 'INV-2025-1247', amount: '$ 1,850.00', date: 'May 31, 2025', iconBg: 'bg-green-500/10 text-green-500' },
    { hospital: 'HealthCare Clinic', id: 'INV-2025-1246', amount: '$ 3,240.00', date: 'May 30, 2025', iconBg: 'bg-purple-500/10 text-purple-500' },
    { hospital: 'Alice Smith', id: 'INV-2025-1245', amount: '$ 1,120.00', date: 'May 30, 2025', iconBg: 'bg-orange-500/10 text-orange-500' },
    { hospital: 'LifeCare Center', id: 'INV-2025-1244', amount: '$ 2,980.00', date: 'May 29, 2025', iconBg: 'bg-teal-500/10 text-teal-500' },
  ];

  const latestInvoices = [
    { id: 'INV-2025-1248', customer: 'City Hospital', date: 'May 31, 2025', due: 'Jun 14, 2025', amount: '$ 2,450.00', status: 'Paid', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'INV-2025-1247', customer: 'John Doe', date: 'May 31, 2025', due: 'Jun 14, 2025', amount: '$ 1,850.00', status: 'Paid', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'INV-2025-1246', customer: 'HealthCare Clinic', date: 'May 30, 2025', due: 'Jun 13, 2025', amount: '$ 3,240.00', status: 'Paid', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'INV-2025-1245', customer: 'Alice Smith', date: 'May 30, 2025', due: 'Jun 13, 2025', amount: '$ 1,120.00', status: 'Pending', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { id: 'INV-2025-1244', customer: 'LifeCare Center', date: 'May 29, 2025', due: 'Jun 12, 2025', amount: '$ 2,980.00', status: 'Overdue', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
  ];

  const topCustomers = [
    { rank: 1, name: 'City Hospital', rev: '$ 45,780.50', color: 'bg-purple-600' },
    { rank: 2, name: 'HealthCare Clinic', rev: '$ 38,450.00', color: 'bg-mainlue-600' },
    { rank: 3, name: 'LifeCare Center', rev: '$ 29,670.00', color: 'bg-green-600' },
    { rank: 4, name: 'Global Medical', rev: '$ 18,230.00', color: 'bg-orange-600' },
    { rank: 5, name: 'Sunrise Hospital', rev: '$ 16,890.00', color: 'bg-pink-600' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Billing Dashboard
          </h1>
          <p className="text-sm text-foreground mt-0.5">Overview of your billing activities and financial performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main text-sm font-medium rounded-lg text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <CalendarIcon className="w-3.5 h-3.5 text-foreground" /> May 01 - May 31, 2025 <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Create Invoice
          </button>
        </div>
      </div>

      {/* Top 6 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        
        {/* Total Revenue */}
        <div className="card p-4 border-border-main flex flex-col relative overflow-hidden bg-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <TrendingUp className="w-3.5 h-3.5 text-purple-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Total Revenue</span>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">$ 245,780.50</h2>
          <p className="text-xs text-green-500 font-medium">↑ 18.6% <span className="text-foreground font-normal">vs Apr 01 - Apr 30</span></p>
          <div className="h-10 mt-2 w-[120%] -ml-[10%]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData1}>
                <Line type="monotone" dataKey="v" stroke="#a855f7" strokeWidth={2} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Total Invoices */}
        <div className="card p-4 border-border-main flex flex-col relative overflow-hidden bg-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-full bg-mainlue-500/20 flex items-center justify-center border border-blue-500/30">
              <FileText className="w-3.5 h-3.5 text-blue-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Total Invoices</span>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">1,248</h2>
          <p className="text-xs text-green-500 font-medium">↑ 12.4% <span className="text-foreground font-normal">vs Apr 01 - Apr 30</span></p>
          <div className="h-10 mt-2 w-[120%] -ml-[10%]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData2}>
                <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Paid Invoices */}
        <div className="card p-4 border-border-main flex flex-col relative overflow-hidden bg-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Paid Invoices</span>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">986</h2>
          <p className="text-xs text-green-500 font-medium">79.0% <span className="text-foreground font-normal">of total invoices</span></p>
          <div className="h-10 mt-2 w-[120%] -ml-[10%]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData3}>
                <Line type="monotone" dataKey="v" stroke="#10b981" strokeWidth={2} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pending Invoices */}
        <div className="card p-4 border-border-main flex flex-col relative overflow-hidden bg-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Pending Invoices</span>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">184</h2>
          <p className="text-xs text-orange-500 font-medium">14.7% <span className="text-foreground font-normal">of total invoices</span></p>
          <div className="h-10 mt-2 w-[120%] -ml-[10%]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData4}>
                <Line type="monotone" dataKey="v" stroke="#f59e0b" strokeWidth={2} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Overdue Amount */}
        <div className="card p-4 border-border-main flex flex-col relative overflow-hidden bg-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Overdue Amount</span>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">$ 32,450.00</h2>
          <p className="text-xs text-red-500 font-medium">↑ 9.3% <span className="text-foreground font-normal">vs Apr 01 - Apr 30</span></p>
          <div className="h-10 mt-2 w-[120%] -ml-[10%]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData5}>
                <Line type="monotone" dataKey="v" stroke="#ef4444" strokeWidth={2} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Average Invoice Value */}
        <div className="card p-4 border-border-main flex flex-col relative overflow-hidden bg-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <FileSignature className="w-3.5 h-3.5 text-purple-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Average Invoice Value</span>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">$ 197.12</h2>
          <p className="text-xs text-green-500 font-medium">↑ 6.7% <span className="text-foreground font-normal">vs Apr 01 - Apr 30</span></p>
          <div className="h-10 mt-2 w-[120%] -ml-[10%]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData6}>
                <Line type="monotone" dataKey="v" stroke="#a855f7" strokeWidth={2} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Middle Row: Charts & Payments */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
        
        {/* Revenue Overview (Area Chart) */}
        <div className="xl:col-span-6 card p-5 border-border-main flex flex-col bg-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-medium text-foreground">Revenue Overview</h2>
            <button className="text-xs bg-main border border-white/5 px-2 py-1 rounded flex items-center gap-1 text-foreground hover:text-foreground transition-colors">
              This Month <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `$${(val/1000)}k`} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#0B1120', borderColor: '#ffffff1a', borderRadius: '8px', fontSize: '11px' }}
                  itemStyle={{ color: '#a855f7' }}
                  formatter={(value) => [`$ ${value}`, 'Revenue']}
                />
                <Area type="monotone" dataKey="val" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-border-main">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold text-foreground">$ 245,780.50</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-xs text-foreground">Total Revenue</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold text-foreground">$ 198,450.00</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span className="text-xs text-foreground">Paid Amount</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold text-foreground">$ 32,450.00</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <span className="text-xs text-foreground">Overdue Amount</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold text-foreground">$ 14,880.50</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-mainlue-500"></div>
                <span className="text-xs text-foreground">Discounts Given</span>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Status (Donut Chart) */}
        <div className="xl:col-span-3 card p-5 border-border-main flex flex-col bg-card">
          <h2 className="text-base font-medium text-foreground mb-2">Invoice Status</h2>
          
          <div className="flex-1 relative flex items-center justify-center">
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={invoiceStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {invoiceStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
              <span className="text-3xl font-bold text-foreground">1,248</span>
              <span className="text-xs text-foreground">Invoices</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 mt-4">
            {invoiceStatusData.map((stat, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stat.color }}></div>
                  <span className="text-foreground">{stat.name}</span>
                </div>
                <div className="flex gap-4 w-[100px] justify-between text-foreground">
                  <span>{stat.value}</span>
                  <span className="text-foreground">({Math.round((stat.value/1248)*100)}%)</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full text-center text-xs text-purple-500 hover:text-purple-400 mt-6 font-medium transition-colors">
            View All Invoices →
          </button>
        </div>

        {/* Recent Payments */}
        <div className="xl:col-span-3 card p-5 border-border-main flex flex-col bg-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-medium text-foreground">Recent Payments</h2>
            <button className="text-xs text-purple-500 hover:text-purple-400">View All</button>
          </div>
          <div className="flex flex-col gap-5 flex-1 justify-center">
            {recentPayments.map((pay, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${pay.iconBg}`}>
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground leading-tight">{pay.hospital}</span>
                    <span className="text-xs text-foreground">{pay.id}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-sm font-bold text-foreground">{pay.amount}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-foreground">{pay.date}</span>
                    <span className="text-xs text-green-500 font-medium">Paid</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
        
        {/* Latest Invoices Table */}
        <div className="xl:col-span-9 card p-0 border-border-main flex flex-col overflow-hidden bg-card">
          <div className="p-5 border-b border-border-main flex justify-between items-center">
            <h2 className="text-base font-medium text-foreground">Latest Invoices</h2>
            <button className="text-xs text-purple-500 hover:text-purple-400">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                  <th className="font-medium p-4 whitespace-nowrap">Invoice ID</th>
                  <th className="font-medium p-4 whitespace-nowrap">Customer</th>
                  <th className="font-medium p-4 whitespace-nowrap">Date</th>
                  <th className="font-medium p-4 whitespace-nowrap">Due Date</th>
                  <th className="font-medium p-4 whitespace-nowrap">Amount</th>
                  <th className="font-medium p-4 whitespace-nowrap">Status</th>
                  <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {latestInvoices.map((inv, i) => (
                  <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 py-3 text-sm text-foreground font-medium">{inv.id}</td>
                    <td className="p-4 py-3 text-sm text-foreground">{inv.customer}</td>
                    <td className="p-4 py-3 text-sm text-foreground">{inv.date}</td>
                    <td className="p-4 py-3 text-sm text-foreground">{inv.due}</td>
                    <td className="p-4 py-3 text-sm text-foreground font-medium">{inv.amount}</td>
                    <td className="p-4 py-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium border ${inv.sColor}`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="p-4 py-3">
                      <div className="flex justify-center gap-2">
                        <button className="p-1.5 rounded bg-main text-foreground hover:text-foreground border border-white/5 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded bg-main text-foreground hover:text-foreground border border-white/5 transition-colors">
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Customers */}
        <div className="xl:col-span-3 flex flex-col">
          <div className="card p-5 border-border-main flex-1 flex flex-col bg-card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-base font-medium text-foreground flex flex-col leading-tight">
                Top Customers by Revenue
              </h2>
              <button className="text-xs text-purple-500 hover:text-purple-400">View All</button>
            </div>
            <div className="flex flex-col gap-4">
              {topCustomers.map((cust, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-foreground ${cust.color}`}>
                      {cust.rank}
                    </div>
                    <span className="text-sm text-foreground font-medium">{cust.name}</span>
                  </div>
                  <span className="text-sm font-bold text-green-500">{cust.rev}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Quick Actions Row */}
      <div className="card p-2 border-border-main bg-card">
        <div className="flex flex-col sm:flex-row items-center gap-2 justify-between">
          <div className="px-4 py-2 text-base font-medium text-foreground border-r border-border-main hidden md:block w-[150px]">
            Quick Actions
          </div>
          <div className="flex-1 grid grid-cols-2 sm:flex sm:flex-row items-center justify-between w-full">
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group flex-1">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-foreground transition-colors shrink-0">
                <FilePlus className="w-4 h-4" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-foreground">Create Invoice</span>
                <span className="text-xs text-foreground">Generate new invoice</span>
              </div>
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group flex-1">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-foreground transition-colors shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-foreground">Record Payment</span>
                <span className="text-xs text-foreground">Add payment received</span>
              </div>
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group flex-1">
              <div className="p-2 rounded-lg bg-mainlue-500/10 text-blue-500 group-hover:bg-mainlue-500 group-hover:text-foreground transition-colors shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-foreground">Create Estimate</span>
                <span className="text-xs text-foreground">Generate estimate</span>
              </div>
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group flex-1">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-foreground transition-colors shrink-0">
                <UserPlus className="w-4 h-4" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-foreground">Add Customer</span>
                <span className="text-xs text-foreground">Register new customer</span>
              </div>
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group flex-1">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-foreground transition-colors shrink-0">
                <Download className="w-4 h-4" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-foreground">Download Report</span>
                <span className="text-xs text-foreground">Export billing reports</span>
              </div>
            </button>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}

// Add CalendarIcon import at the top missing component
import { Calendar as CalendarIcon } from 'lucide-react';
