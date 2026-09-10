'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Download, Calendar, ChevronDown, CheckCircle2
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  BarChart, Bar, Legend
} from 'recharts';

export default function WorkforceAnalyticsPage() {
  const lineDataHeadcount = [
    { date: '1 May', val: 950 },
    { date: '8 May', val: 960 },
    { date: '15 May', val: 975 },
    { date: '22 May', val: 1050 },
    { date: '31 May', val: 1248 },
  ];

  const lineDataAttendance = [
    { date: '1 May', val: 75 },
    { date: '8 May', val: 82 },
    { date: '15 May', val: 88 },
    { date: '22 May', val: 78 },
    { date: '31 May', val: 92.4 },
  ];

  const pieData = [
    { name: 'Cardiology', value: 224, color: '#9333ea', pct: '18%' },
    { name: 'Emergency', value: 174, color: '#3b82f6', pct: '14%' },
    { name: 'Pediatrics', value: 174, color: '#eab308', pct: '14%' },
    { name: 'Radiology', value: 150, color: '#22c55e', pct: '12%' },
    { name: 'Orthopedics', value: 125, color: '#06b6d4', pct: '10%' },
    { name: 'Others', value: 376, color: '#64748b', pct: '30%' },
  ];

  const leaveTrendsData = [
    { name: '1 May', casual: 4, sick: 6, earned: 2, maternity: 0, other: 1 },
    { name: '8 May', casual: 8, sick: 10, earned: 4, maternity: 1, other: 2 },
    { name: '15 May', casual: 15, sick: 18, earned: 8, maternity: 2, other: 4 },
    { name: '22 May', casual: 12, sick: 14, earned: 6, maternity: 3, other: 2 },
    { name: '31 May', casual: 18, sick: 12, earned: 11, maternity: 4, other: 2 },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Workforce Analytics
          </h1>
          <p className="text-sm text-foreground mt-0.5">Insights and analytics about your workforce</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            01 May - 31 May 2025 <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-card border border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Headcount</span>
          <span className="text-[24px] font-bold text-green-500 leading-tight mb-0.5">1,248</span>
          <span className="text-xs text-green-500 font-medium">↑ 12 from last month</span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Average Attendance</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">92.4%</span>
          <span className="text-xs text-green-500 font-medium">↑ 4.2% from last month</span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Turnover Rate</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">2.1%</span>
          <span className="text-xs text-green-500 font-medium">↓ 0.8% from last month</span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Overtime Hours</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">128h 35m</span>
          <span className="text-xs text-red-500 font-medium">↑ 8.7% from last month</span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Employee Satisfaction</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">4.3 <span className="text-lg text-foreground font-normal">/ 5</span></span>
          <span className="text-xs text-green-500 font-medium">↑ 0.2 from last month</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        
        {/* Headcount Trend */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <h2 className="text-lg font-medium text-foreground mb-6">Headcount Trend</h2>
          <div className="flex-1 w-full min-h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineDataHeadcount} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dx={-10} tickFormatter={(v) => `${v/1000}k`} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="val" stroke="#9333ea" strokeWidth={2} dot={{ r: 3, fill: '#101423', stroke: '#9333ea' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Trend */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <h2 className="text-lg font-medium text-foreground mb-6">Attendance Trend</h2>
          <div className="flex-1 w-full min-h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineDataAttendance} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dx={-10} tickFormatter={(v) => `${v}%`} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="val" stroke="#22c55e" strokeWidth={2} dot={{ r: 3, fill: '#101423', stroke: '#22c55e' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Wise Headcount */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <h2 className="text-lg font-medium text-foreground mb-2">Department Wise Headcount</h2>
          
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-32 h-32 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={60}
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
                <span className="text-[16px] font-bold text-foreground leading-none">1,248</span>
                <span className="text-[8px] text-foreground mt-0.5">Total</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              {pieData.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs text-foreground">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-foreground">{item.pct}</span>
                    <span className="text-xs font-medium text-foreground">({item.value})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Top Overtime Departments */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <h2 className="text-lg font-medium text-foreground mb-6">Top Overtime Departments</h2>
          
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Emergency</span>
                <span className="text-sm font-medium text-foreground">45h 20m</span>
              </div>
              <div className="w-full h-1.5 bg-main rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">ICU</span>
                <span className="text-sm font-medium text-foreground">32h 15m</span>
              </div>
              <div className="w-full h-1.5 bg-main rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Cardiology</span>
                <span className="text-sm font-medium text-foreground">28h 30m</span>
              </div>
              <div className="w-full h-1.5 bg-main rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Pediatrics</span>
                <span className="text-sm font-medium text-foreground">12h 45m</span>
              </div>
              <div className="w-full h-1.5 bg-main rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Radiology</span>
                <span className="text-sm font-medium text-foreground">8h 15m</span>
              </div>
              <div className="w-full h-1.5 bg-main rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Leave Trends */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-foreground">Leave Trends</h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-purple-500"></div><span className="text-[8px] text-foreground">Casual</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-blue-500"></div><span className="text-[8px] text-foreground">Sick</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-green-500"></div><span className="text-[8px] text-foreground">Earned</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-amber-500"></div><span className="text-[8px] text-foreground">Maternity</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-slate-500"></div><span className="text-[8px] text-foreground">Other</span></div>
            </div>
          </div>
          <div className="flex-1 w-full min-h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leaveTrendsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dx={-10} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ fill: '#1e293b' }}
                />
                <Bar dataKey="casual" stackId="a" fill="#9333ea" barSize={12} />
                <Bar dataKey="sick" stackId="a" fill="#3b82f6" />
                <Bar dataKey="earned" stackId="a" fill="#22c55e" />
                <Bar dataKey="maternity" stackId="a" fill="#f59e0b" />
                <Bar dataKey="other" stackId="a" fill="#64748b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <h2 className="text-lg font-medium text-foreground mb-6">Insights</h2>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                Attendance improved by <span className="text-foreground font-medium">4.2%</span> compared to last month.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                Overtime hours increased by <span className="text-foreground font-medium">8.7%</span> mainly in Emergency department.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                Leave requests are <span className="text-foreground font-medium">15%</span> lower than last month.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                Employee satisfaction score improved by <span className="text-foreground font-medium">0.2</span> points.
              </p>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
