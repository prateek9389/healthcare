'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  FileText, FlaskConical, TestTube2, ClipboardCheck, AlertTriangle, 
  Calendar, Bell, ChevronDown, ChevronRight, Activity, ShieldAlert
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  BarChart, Bar
} from 'recharts';

export default function LabDashboardPage() {
  const lineDataTrend = [
    { date: '25 May', val: 54 },
    { date: '26 May', val: 72 },
    { date: '27 May', val: 84 },
    { date: '28 May', val: 102 },
    { date: '29 May', val: 82 },
    { date: '30 May', val: 98 },
    { date: '31 May', val: 132 },
  ];

  const pieData = [
    { name: 'Hematology', value: 36, color: '#9333ea', pct: '28.6%' },
    { name: 'Biochemistry', value: 28, color: '#3b82f6', pct: '22.2%' },
    { name: 'Microbiology', value: 20, color: '#f59e0b', pct: '15.9%' },
    { name: 'Immunology', value: 16, color: '#22c55e', pct: '12.7%' },
    { name: 'Urinalysis', value: 14, color: '#06b6d4', pct: '11.1%' },
    { name: 'Others', value: 12, color: '#64748b', pct: '9.5%' },
  ];

  const barData = [
    { date: '25 May', val: 74 },
    { date: '26 May', val: 85 },
    { date: '27 May', val: 92 },
    { date: '28 May', val: 110 },
    { date: '29 May', val: 102 },
    { date: '30 May', val: 120 },
    { date: '31 May', val: 112 },
  ];

  const recentRequests = [
    { id: 'REQ-250531-001', patient: 'Rahul Verma', test: 'Complete Blood Count (CBC)', category: 'Hematology', priority: 'High', status: 'In Progress', date: '31 May 2025, 08:30 AM' },
    { id: 'REQ-250531-002', patient: 'Neha Gupta', test: 'Liver Function Test (LFT)', category: 'Biochemistry', priority: 'High', status: 'In Progress', date: '31 May 2025, 09:15 AM' },
    { id: 'REQ-250531-003', patient: 'Amit Kumar', test: 'Blood Sugar (Fasting)', category: 'Biochemistry', priority: 'Medium', status: 'Completed', date: '31 May 2025, 09:40 AM' },
    { id: 'REQ-250531-004', patient: 'Sunita Reddy', test: 'Thyroid Profile', category: 'Immunology', priority: 'Medium', status: 'Pending', date: '31 May 2025, 10:05 AM' },
    { id: 'REQ-250531-005', patient: 'Vikram Patel', test: 'Urine Routine & Microscopy', category: 'Urinalysis', priority: 'Low', status: 'Pending', date: '31 May 2025, 10:20 AM' },
  ];

  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case 'High': return <span className="px-2.5 py-1 rounded bg-red-100 dark:bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20">High</span>;
      case 'Medium': return <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/20">Medium</span>;
      case 'Low': return <span className="px-2.5 py-1 rounded bg-green-100 dark:bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">Low</span>;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Completed': return <span className="px-2.5 py-1 rounded bg-green-100 dark:bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">Completed</span>;
      case 'In Progress': return <span className="px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">In Progress</span>;
      case 'Pending': return <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/20">Pending</span>;
      default: return null;
    }
  };

  const getInvBadge = (status: string) => {
    switch(status) {
      case 'Sufficient': return <span className="px-2.5 py-1 rounded bg-green-100 dark:bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">Sufficient</span>;
      case 'Low Stock': return <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/20">Low Stock</span>;
      case 'Critical': return <span className="px-2.5 py-1 rounded bg-red-100 dark:bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20">Critical</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Dashboard
          </h1>
          <p className="text-sm text-muted mt-0.5">Overview of laboratory operations and activities</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
            <Calendar className="w-3.5 h-3.5 text-muted" /> 31 May 2025, Saturday <ChevronDown className="w-3.5 h-3.5 text-muted ml-1" />
          </button>

          <div className="flex items-center gap-3 shrink-0 ml-2">
            <button className="relative p-2 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-foreground" />
              <span className="absolute 1 top-1.5 right-1.5 w-4 h-4 bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-background">
                5
              </span>
            </button>
            <div className="w-px h-8 bg-border-main mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-border-main bg-slate-800">
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-sm font-bold text-foreground">Lab Incharge</span>
                <span className="text-xs text-foreground">Hematology Lab</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Test Requests</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">126</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-muted">Today</span>
            </div>
            <span className="text-[9px] text-green-500 font-bold mt-1">↑ 18.4% <span className="text-muted font-normal">from yesterday</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
            <TestTube2 className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Samples Collected</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">112</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-muted">Today</span>
            </div>
            <span className="text-[9px] text-green-500 font-bold mt-1">↑ 15.6% <span className="text-muted font-normal">from yesterday</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center shrink-0">
            <FlaskConical className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Tests Completed</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">98</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-muted">Today</span>
            </div>
            <span className="text-[9px] text-green-500 font-bold mt-1">↑ 16.2% <span className="text-muted font-normal">from yesterday</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
            <ClipboardCheck className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Reports Generated</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">92</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-muted">Today</span>
            </div>
            <span className="text-[9px] text-green-500 font-bold mt-1">↑ 21.3% <span className="text-muted font-normal">from yesterday</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-bold mb-0.5 whitespace-nowrap">Critical Alerts</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">4</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-muted">Active</span>
            </div>
            <span className="text-[9px] text-red-500 font-bold mt-1">↓ 11.1% <span className="text-muted font-normal">from yesterday</span></span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        
        {/* Test Requests Trend */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-foreground">Test Requests Trend</h2>
            <select className="pl-3 pr-8 py-1 bg-main border border-border-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none">
              <option>This Week</option>
            </select>
          </div>
          <div className="flex-1 w-full min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineDataTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dx={-10} domain={[0, 160]} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="val" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4, fill: '#101423', stroke: '#8b5cf6', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tests by Category */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <h2 className="text-lg font-bold text-foreground mb-2">Tests by Category</h2>
          
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-36 h-36 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={68}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-1">
                <span className="text-[18px] font-bold text-foreground leading-none">126</span>
                <span className="text-[9px] text-muted mt-1">Total Requests</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              {pieData.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs text-foreground">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted w-8">{item.value}</span>
                    <span className="text-xs font-bold text-foreground w-10 text-right">({item.pct})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Turnaround Time (TAT) */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-foreground">Turnaround Time (TAT)</h2>
            <select className="pl-3 pr-8 py-1 bg-main border border-border-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none">
              <option>This Week</option>
            </select>
          </div>
          
          <div className="flex flex-col mb-6">
            <span className="text-sm text-foreground">Average TAT</span>
            <span className="text-[24px] font-bold text-foreground leading-tight mt-0.5">2h 35m</span>
            <span className="text-xs text-green-500 font-bold mt-1">↓ 8.7% <span className="text-muted font-normal">from last week</span></span>
          </div>

          <div className="flex flex-col gap-3.5 flex-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-3.5 h-3.5 text-purple-500" />
                <span className="text-sm text-foreground">Hematology</span>
              </div>
              <span className="text-sm font-bold text-foreground">1h 40m</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TestTube2 className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-sm text-foreground">Biochemistry</span>
              </div>
              <span className="text-sm font-bold text-foreground">2h 20m</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-sm text-foreground">Microbiology</span>
              </div>
              <span className="text-sm font-bold text-foreground">3h 05m</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-green-500" />
                <span className="text-sm text-foreground">Immunology</span>
              </div>
              <span className="text-sm font-bold text-foreground">2h 45m</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-3.5 h-3.5 text-cyan-500" />
                <span className="text-sm text-foreground">Urinalysis</span>
              </div>
              <span className="text-sm font-bold text-foreground">1h 25m</span>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col xl:flex-row gap-4 mb-4">
        
        {/* Recent Test Requests */}
        <div className="card p-0 border-border-main flex flex-col bg-card xl:w-2/3">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-bold text-foreground">Recent Test Requests</h2>
            <button className="text-xs text-blue-500 font-medium">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs text-muted uppercase tracking-wider bg-main border border-border-main">
                  <th className="font-bold p-4 whitespace-nowrap">Request ID</th>
                  <th className="font-bold p-4 whitespace-nowrap">Patient Name</th>
                  <th className="font-bold p-4 whitespace-nowrap">Test Name</th>
                  <th className="font-bold p-4 whitespace-nowrap">Category</th>
                  <th className="font-bold p-4 whitespace-nowrap">Priority</th>
                  <th className="font-bold p-4 whitespace-nowrap">Status</th>
                  <th className="font-bold p-4 whitespace-nowrap">Requested On</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((req, i) => (
                  <tr key={i} className="border-b border-border-main/50 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 py-3.5 text-sm text-foreground font-bold">{req.id}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{req.patient}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{req.test}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{req.category}</td>
                    <td className="p-4 py-3.5">{getPriorityBadge(req.priority)}</td>
                    <td className="p-4 py-3.5">{getStatusBadge(req.status)}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{req.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="card p-0 border-border-main flex flex-col bg-card xl:w-1/3">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-bold text-foreground">Critical Alerts</h2>
            <button className="text-xs text-blue-500 font-medium">View All</button>
          </div>
          
          <div className="flex flex-col">
            <div className="p-4 border-b border-border-main/50 flex items-start justify-between gap-4 bg-red-500/5 hover:bg-red-100 dark:hover:bg-red-500/10 transition-colors cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-foreground">Critical result: Hb (6.2 g/dL)</span>
                  <span className="text-xs text-foreground">Patient: Rahul Verma | CBC</span>
                </div>
              </div>
              <span className="text-xs text-muted whitespace-nowrap">10:25 AM</span>
            </div>

            <div className="p-4 border-b border-border-main/50 flex items-start justify-between gap-4 bg-red-500/5 hover:bg-red-100 dark:hover:bg-red-500/10 transition-colors cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-foreground">Critical result: Potassium (6.1 mmol/L)</span>
                  <span className="text-xs text-foreground">Patient: Amit Kumar | RFT</span>
                </div>
              </div>
              <span className="text-xs text-muted whitespace-nowrap">09:50 AM</span>
            </div>

            <div className="p-4 border-b border-border-main/50 flex items-start justify-between gap-4 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-foreground">Sample Rejection</span>
                  <span className="text-xs text-foreground">Reason: Hemolysis detected<br/>Sample ID: SMP-250531-021</span>
                </div>
              </div>
              <span className="text-xs text-muted whitespace-nowrap">09:30 AM</span>
            </div>

            <div className="p-4 flex items-start justify-between gap-4 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-foreground">Instrument Alert</span>
                  <span className="text-xs text-foreground">Microscope #2 requires maintenance</span>
                </div>
              </div>
              <span className="text-xs text-muted whitespace-nowrap">09:10 AM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Sample Collection Overview */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-foreground">Sample Collection Overview</h2>
            <select className="pl-3 pr-8 py-1 bg-main border border-border-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none">
              <option>This Week</option>
            </select>
          </div>
          <div className="flex-1 w-full min-h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dx={-10} domain={[0, 160]} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ fill: '#1e293b' }}
                />
                <Bar dataKey="val" fill="#3b82f6" barSize={20} radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#fff', fontSize: 10, dy: -5 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Requested Tests */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-foreground">Top Requested Tests</h2>
            <select className="pl-3 pr-8 py-1 bg-main border border-border-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none">
              <option>This Week</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-5 flex-1 mt-2">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-bold">1</span>
                  <span className="text-sm text-foreground font-bold">Complete Blood Count (CBC)</span>
                </div>
                <span className="text-sm font-bold text-foreground">36</span>
              </div>
              <div className="w-full h-1 bg-slate-200 dark:bg-black/40 rounded-full overflow-hidden ml-5" style={{ width: 'calc(100% - 20px)' }}>
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-bold">2</span>
                  <span className="text-sm text-foreground font-bold">Liver Function Test (LFT)</span>
                </div>
                <span className="text-sm font-bold text-foreground">28</span>
              </div>
              <div className="w-full h-1 bg-slate-200 dark:bg-black/40 rounded-full overflow-hidden ml-5" style={{ width: 'calc(100% - 20px)' }}>
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-bold">3</span>
                  <span className="text-sm text-foreground font-bold">Kidney Function Test (KFT)</span>
                </div>
                <span className="text-sm font-bold text-foreground">20</span>
              </div>
              <div className="w-full h-1 bg-slate-200 dark:bg-black/40 rounded-full overflow-hidden ml-5" style={{ width: 'calc(100% - 20px)' }}>
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-bold">4</span>
                  <span className="text-sm text-foreground font-bold">Thyroid Profile</span>
                </div>
                <span className="text-sm font-bold text-foreground">16</span>
              </div>
              <div className="w-full h-1 bg-slate-200 dark:bg-black/40 rounded-full overflow-hidden ml-5" style={{ width: 'calc(100% - 20px)' }}>
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-bold">5</span>
                  <span className="text-sm text-foreground font-bold">Urine Routine & Microscopy</span>
                </div>
                <span className="text-sm font-bold text-foreground">14</span>
              </div>
              <div className="w-full h-1 bg-slate-200 dark:bg-black/40 rounded-full overflow-hidden ml-5" style={{ width: 'calc(100% - 20px)' }}>
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button className="text-xs text-blue-500 font-medium flex items-center gap-1">View All <ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>

        {/* Inventory Status */}
        <div className="card p-0 border-border-main flex flex-col bg-card">
          <div className="p-5 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-bold text-foreground">Inventory Status</h2>
            <button className="text-xs text-blue-500 font-medium flex items-center gap-1">View All <ChevronRight className="w-3 h-3" /></button>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-[9px] text-muted uppercase tracking-wider bg-main border border-border-main">
                  <th className="font-bold p-4 py-3 whitespace-nowrap">Item</th>
                  <th className="font-bold p-4 py-3 whitespace-nowrap">Stock</th>
                  <th className="font-bold p-4 py-3 whitespace-nowrap text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-main/50 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                  <td className="p-4 py-3.5 text-sm text-foreground">Vacutainer Tubes</td>
                  <td className="p-4 py-3.5 text-sm text-foreground font-bold">82%</td>
                  <td className="p-4 py-3.5 text-right">{getInvBadge('Sufficient')}</td>
                </tr>
                <tr className="border-b border-border-main/50 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                  <td className="p-4 py-3.5 text-sm text-foreground">Reagents</td>
                  <td className="p-4 py-3.5 text-sm text-foreground font-bold">65%</td>
                  <td className="p-4 py-3.5 text-right">{getInvBadge('Sufficient')}</td>
                </tr>
                <tr className="border-b border-border-main/50 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                  <td className="p-4 py-3.5 text-sm text-foreground">Blood Collection Bags</td>
                  <td className="p-4 py-3.5 text-sm text-foreground font-bold">40%</td>
                  <td className="p-4 py-3.5 text-right">{getInvBadge('Low Stock')}</td>
                </tr>
                <tr className="border-b border-border-main/50 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                  <td className="p-4 py-3.5 text-sm text-foreground">Microscope Slides</td>
                  <td className="p-4 py-3.5 text-sm text-foreground font-bold">28%</td>
                  <td className="p-4 py-3.5 text-right">{getInvBadge('Low Stock')}</td>
                </tr>
                <tr className="hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                  <td className="p-4 py-3.5 text-sm text-foreground">Cuvettes</td>
                  <td className="p-4 py-3.5 text-sm text-foreground font-bold">18%</td>
                  <td className="p-4 py-3.5 text-right">{getInvBadge('Critical')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
