'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Download, Calendar as CalendarIcon, Users, UserPlus, Stethoscope, Star, CheckCircle2
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar
} from 'recharts';

export default function AnalyticsPage() {
  const lineData = [
    { date: '1 May', consultations: 65, new: 45 },
    { date: '8 May', consultations: 75, new: 55 },
    { date: '15 May', consultations: 55, new: 40 },
    { date: '22 May', consultations: 85, new: 60 },
    { date: '31 May', consultations: 70, new: 50 },
  ];

  const pieData = [
    { name: 'Male', value: 658, color: '#1e3a8a' }, // Deep Blue
    { name: 'Female', value: 564, color: '#9333ea' }, // Purple
    { name: 'Other', value: 26, color: '#ec4899' }, // Pink
  ];

  const barData = [
    { name: 'Dec', val: 200 },
    { name: 'Jan', val: 250 },
    { name: 'Feb', val: 320 },
    { name: 'Mar', val: 400 },
    { name: 'Apr', val: 420 },
    { name: 'May', val: 450 },
  ];

  const ageData = [
    { name: '0-18', val: 50 },
    { name: '19-30', val: 220 },
    { name: '31-45', val: 300 },
    { name: '46-60', val: 380 },
    { name: '60+', val: 200 },
  ];

  const conditions = [
    { name: 'Hypertension', count: 328, pct: '26.3%', color: 'bg-purple-500' },
    { name: 'Diabetes Type 2', count: 246, pct: '19.7%', color: 'bg-blue-500' },
    { name: 'Asthma', count: 184, pct: '14.7%', color: 'bg-green-500' },
    { name: 'Thyroid Disorder', count: 126, pct: '10.1%', color: 'bg-indigo-500' },
    { name: 'High Cholesterol', count: 98, pct: '7.8%', color: 'bg-emerald-500' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Analytics
          </h1>
          <p className="text-sm text-foreground mt-0.5">Gain insights into your practice and patient outcomes</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            01 May 2025 - 31 May 2025 <CalendarIcon className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-card hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-border-main text-foreground text-sm font-medium rounded-lg transition-colors">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
        </div>
      </div>

      {/* 5 Top Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="card p-4 border-border-main flex flex-col bg-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <Users className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Total Patients</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-[20px] font-bold text-foreground leading-none">1,248</span>
          </div>
          <span className="text-xs text-green-500 font-medium mt-1">↑ 14% <span className="text-foreground font-normal">from last month</span></span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center border border-green-500/30">
              <Stethoscope className="w-4 h-4 text-green-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Total Consultations</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-[20px] font-bold text-foreground leading-none">312</span>
          </div>
          <span className="text-xs text-green-500 font-medium mt-1">↑ 9% <span className="text-foreground font-normal">from last month</span></span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
              <UserPlus className="w-4 h-4 text-amber-500" />
            </div>
            <span className="text-sm text-foreground font-medium">New Patients</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-[20px] font-bold text-foreground leading-none">128</span>
          </div>
          <span className="text-xs text-green-500 font-medium mt-1">↑ 9% <span className="text-foreground font-normal">from last month</span></span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <Star className="w-4 h-4 text-purple-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Avg. Satisfaction</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-[20px] font-bold text-foreground leading-none">4.8</span>
            <span className="text-sm text-foreground font-medium mb-0.5">/ 5</span>
          </div>
          <span className="text-xs text-green-500 font-medium mt-1">↑ 6% <span className="text-foreground font-normal">from last month</span></span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <span className="text-sm text-foreground font-medium">Follow-ups Completed</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-[20px] font-bold text-foreground leading-none">214</span>
          </div>
          <span className="text-xs text-green-500 font-medium mt-1">↑ 10% <span className="text-foreground font-normal">from last month</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Consultations Overview (Line Chart) */}
        <div className="lg:col-span-2 card p-5 border-border-main bg-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-foreground">Consultations Overview</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9333ea]"></div>
                <span className="text-xs text-foreground">Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                <span className="text-xs text-foreground">New Patients</span>
              </div>
              <select className="ml-2 pl-3 pr-8 py-1.5 bg-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none">
                <option>Daily</option>
              </select>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dx={-10} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="consultations" stroke="#9333ea" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#101423' }} activeDot={{ r: 6, fill: '#9333ea' }} />
                <Line type="monotone" dataKey="new" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#101423' }} activeDot={{ r: 6, fill: '#3b82f6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Patient Gender Distribution (Donut Chart) */}
        <div className="card p-5 border-border-main bg-card">
          <h2 className="text-lg font-medium text-foreground mb-2">Patient Gender Distribution</h2>
          <div className="relative h-[180px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
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
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
              <span className="text-[18px] font-bold text-foreground leading-tight">1,248</span>
              <span className="text-xs text-foreground">Total Patients</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4 px-4">
            {pieData.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-foreground">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground">{item.value}</span>
                  <span className="text-xs text-foreground w-10 text-right">({((item.value / 1248) * 100).toFixed(1)}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Top Conditions */}
        <div className="card p-5 border-border-main bg-card">
          <h2 className="text-lg font-medium text-foreground mb-6">Top Conditions</h2>
          <div className="flex flex-col gap-5">
            {conditions.map((cond, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full border border-current ${cond.color.replace('bg-', 'text-')}`}></div>
                    <span className="text-sm text-foreground">{cond.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{cond.count}</span>
                    <span className="text-xs text-foreground w-10 text-right">({cond.pct})</span>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${cond.color} rounded-full`} style={{ width: cond.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Consultation Trend */}
        <div className="card p-5 border-border-main bg-card">
          <h2 className="text-lg font-medium text-foreground mb-6">Monthly Consultation Trend</h2>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dx={-10} />
                <RechartsTooltip 
                  cursor={{ fill: '#1e293b' }}
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                />
                <Bar dataKey="val" fill="#9333ea" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Patient Age Distribution */}
        <div className="card p-5 border-border-main bg-card">
          <h2 className="text-lg font-medium text-foreground mb-6">Patient Age Distribution</h2>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dx={-10} />
                <RechartsTooltip 
                  cursor={{ fill: '#1e293b' }}
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                />
                <Bar dataKey="val" fill="#9333ea" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
