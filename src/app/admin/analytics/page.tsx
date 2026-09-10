'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Calendar as CalendarIcon, ChevronDown, Users, UserPlus, Calendar, CheckSquare, AlertTriangle, Clock } from 'lucide-react';
import { AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

export default function AdminAnalyticsPage() {
  const tabs = ['Overview', 'Patient Analytics', 'Clinical Analytics', 'Operational Analytics', 'Financial Analytics', 'AI Insights'];

  const stats = [
    { title: 'Total Patients', val: '3,456', trend: '12.5%', isUp: true, icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/20' },
    { title: 'New Patients', val: '248', trend: '14.2%', isUp: true, icon: UserPlus, color: 'text-green-500', bg: 'bg-green-500/20' },
    { title: 'Total Appointments', val: '1,248', trend: '18.7%', isUp: true, icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-500/20' },
    { title: 'Completed Appointments', val: '1,056', trend: '16.3%', isUp: true, icon: CheckSquare, color: 'text-teal-500', bg: 'bg-teal-500/20' },
    { title: 'Emergency Cases', val: '312', trend: '3.2%', isUp: false, icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/20' },
    { title: 'Avg. Stay Duration', val: '2.4 days', trend: '8.9%', isUp: false, icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/20' },
  ];

  // --- Chart Data ---
  const patientGrowthData = Array.from({ length: 6 }, (_, i) => ({
    name: ['Dec \'24', 'Jan \'25', 'Feb \'25', 'Mar \'25', 'Apr \'25', 'May \'25'][i],
    value: [1500, 2200, 1800, 2500, 2100, 3100][i],
  }));

  const ageGroupData = [
    { name: '0-18 Years', value: 458, color: '#8b5cf6', percent: '13.2%' },
    { name: '19-35 Years', value: 845, color: '#3b82f6', percent: '24.5%' },
    { name: '36-60 Years', value: 1456, color: '#10b981', percent: '42.1%' },
    { name: '60+ Years', value: 697, color: '#eab308', percent: '20.2%' },
  ];

  const apptTypeData = [
    { name: 'Consultation', value: 720, color: '#8b5cf6', percent: '57.7%' },
    { name: 'Follow-up', value: 320, color: '#3b82f6', percent: '25.6%' },
    { name: 'Emergency', value: 128, color: '#ef4444', percent: '10.3%' },
    { name: 'Others', value: 80, color: '#eab308', percent: '6.4%' },
  ];

  const revenueData = Array.from({ length: 21 }, (_, i) => ({
    name: `May ${i + 1}`,
    value: Math.floor(Math.random() * 30000) + 10000,
  }));

  const deptData = [
    { name: 'Cardiology', value: 1245, max: 1500, color: 'bg-purple-500' },
    { name: 'Neurology', value: 856, max: 1500, color: 'bg-blue-500' },
    { name: 'Orthopedics', value: 642, max: 1500, color: 'bg-green-500' },
    { name: 'Pediatrics', value: 458, max: 1500, color: 'bg-orange-500' },
    { name: 'General Medicine', value: 255, max: 1500, color: 'bg-red-500' },
  ];

  const diseaseData = [
    { name: 'Hypertension', value: 1234, color: '#8b5cf6', percent: '28.5%' },
    { name: 'Diabetes', value: 987, color: '#3b82f6', percent: '22.8%' },
    { name: 'Heart Disease', value: 654, color: '#ef4444', percent: '15.1%' },
    { name: 'Respiratory', value: 543, color: '#eab308', percent: '12.5%' },
    { name: 'Others', value: 905, color: '#10b981', percent: '21.1%' },
  ];

  const genderData = [
    { name: 'Male', value: 1856, color: '#3b82f6', percent: '53.7%' },
    { name: 'Female', value: 1600, color: '#f43f5e', percent: '46.3%' },
  ];

  const riskData = [
    { name: 'Low Risk', value: 1245, color: '#10b981', percent: '36.0%' },
    { name: 'Medium Risk', value: 1456, color: '#f59e0b', percent: '42.1%' },
    { name: 'High Risk', value: 755, color: '#ef4444', percent: '21.9%' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
          <p className="text-[13px] font-medium text-foreground mt-0.5">Comprehensive insights into hospital performance and healthcare analytics</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
            <CalendarIcon className="w-3.5 h-3.5 text-foreground" />
            May 15, 2025 - May 21, 2025
            <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-border-main pb-2 overflow-x-auto hide-scrollbar">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap ${
              i === 0 
                ? 'bg-[#4f46e5] text-white shadow-[0_0_10px_rgba(79,70,229,0.3)]' 
                : 'text-foreground hover:text-white hover:bg-[#7caaaf] dark:hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="card p-4 border border-border-main flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[13px] font-semibold text-foreground leading-tight pr-2">{stat.title}</p>
              <div className={`p-1.5 rounded-lg flex-shrink-0 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[24px] font-bold text-foreground mb-1">{stat.val}</p>
            <div className={`flex items-center gap-1 text-[14px] font-medium ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={stat.isUp ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
              </svg>
              {stat.trend}
              <span className="text-foreground font-normal">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Row Charts (4 columns on lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        
        {/* Patient Growth Trend */}
        <div className="card p-4 border border-border-main flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-[13px] font-medium text-foreground">Patient Growth Trend</h2>
              <p className="text-[14px] text-foreground mt-0.5">Monthly patient registration trend</p>
            </div>
            <button className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border-main text-[14px] text-foreground hover:text-foreground">
              Last 6 Months <ChevronDown className="w-2.5 h-2.5" />
            </button>
          </div>
          <div className="h-[140px] flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={patientGrowthData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 9 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 9 }} tickFormatter={(val) => `${val/1000}k`} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff', fontSize: '11px' }}
                />
                <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorGrowth)" activeDot={{ r: 4 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Patients by Age Group */}
        <div className="card p-4 border border-border-main flex flex-col">
          <div className="mb-4">
            <h2 className="text-[13px] font-medium text-foreground">Patients by Age Group</h2>
            <p className="text-[14px] text-foreground mt-0.5">Distribution across age groups</p>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="relative w-[110px] h-[110px] flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={ageGroupData} cx="50%" cy="50%" innerRadius={42} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none">
                    {ageGroupData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)' }} itemStyle={{ color: '#fff', fontSize: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-0.5">
                <span className="text-[14px] font-bold text-foreground leading-none">3,456</span>
                <span className="text-[9px] text-foreground mt-0.5">Total</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-4 w-full">
              {ageGroupData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[14px] text-foreground whitespace-nowrap">{item.name}</span>
                  </div>
                  <div className="flex gap-2 text-right">
                    <span className="text-[14px] font-medium text-foreground min-w-[20px]">{item.value}</span>
                    <span className="text-[9px] text-foreground min-w-[35px]">({item.percent})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Appointments by Type */}
        <div className="card p-4 border border-border-main flex flex-col">
          <div className="mb-4">
            <h2 className="text-[13px] font-medium text-foreground">Appointments by Type</h2>
            <p className="text-[14px] text-foreground mt-0.5">Distribution of appointment types</p>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="relative w-[110px] h-[110px] flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={apptTypeData} cx="50%" cy="50%" innerRadius={42} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none">
                    {apptTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)' }} itemStyle={{ color: '#fff', fontSize: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-0.5">
                <span className="text-[14px] font-bold text-foreground leading-none">1,248</span>
                <span className="text-[9px] text-foreground mt-0.5">Total</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-4 w-full">
              {apptTypeData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[14px] text-foreground whitespace-nowrap">{item.name}</span>
                  </div>
                  <div className="flex gap-2 text-right">
                    <span className="text-[14px] font-medium text-foreground min-w-[20px]">{item.value}</span>
                    <span className="text-[9px] text-foreground min-w-[35px]">({item.percent})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Overview */}
        <div className="card p-4 border border-border-main flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-[13px] font-medium text-foreground">Revenue Overview</h2>
              <p className="text-[14px] text-foreground mt-0.5">Financial performance analysis</p>
            </div>
            <button className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border-main text-[14px] text-foreground hover:text-foreground">
              This Month <ChevronDown className="w-2.5 h-2.5" />
            </button>
          </div>
          <div className="mb-2">
            <p className="text-[18px] font-bold text-foreground">₹ 24,78,600</p>
            <div className="flex items-center gap-1 mt-0.5 text-[9px] text-green-500">
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              <span className="font-medium">16.2%</span>
              <span className="text-foreground">from last month</span>
            </div>
          </div>
          <div className="h-[90px] flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 8 }} dy={5} interval={6} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 8 }} tickFormatter={(val) => `${val/1000}k`} />
                <RechartsTooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff', fontSize: '10px' }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Bottom Row Charts (4 columns on lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        
        {/* Top 5 Departments */}
        <div className="card p-4 border border-border-main flex flex-col">
          <div className="mb-4">
            <h2 className="text-[13px] font-medium text-foreground">Top 5 Departments by Patients</h2>
            <p className="text-[14px] text-foreground mt-0.5">Department wise patient distribution</p>
          </div>
          <div className="flex flex-col gap-3 flex-1 justify-center">
            {deptData.map((dept, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex justify-between text-[14px]">
                  <span className="text-foreground">{dept.name}</span>
                  <span className="font-medium text-foreground">{dept.value}</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${dept.color}`}
                    style={{ width: `${(dept.value / dept.max) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disease Distribution */}
        <div className="card p-4 border border-border-main flex flex-col">
          <div className="mb-4">
            <h2 className="text-[13px] font-medium text-foreground">Disease Distribution</h2>
            <p className="text-[14px] text-foreground mt-0.5">Distribution of major diseases</p>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="relative w-[110px] h-[110px] flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={diseaseData} cx="50%" cy="50%" innerRadius={42} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none">
                    {diseaseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)' }} itemStyle={{ color: '#fff', fontSize: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col gap-2 ml-2 w-full">
              {diseaseData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[14px] text-foreground whitespace-nowrap">{item.name}</span>
                  </div>
                  <div className="flex gap-2 text-right">
                    <span className="text-[14px] font-medium text-foreground min-w-[20px]">{item.value}</span>
                    <span className="text-[9px] text-foreground min-w-[35px]">({item.percent})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patient Gender Distribution */}
        <div className="card p-4 border border-border-main flex flex-col">
          <div className="mb-4">
            <h2 className="text-[13px] font-medium text-foreground">Patient Gender Distribution</h2>
            <p className="text-[14px] text-foreground mt-0.5">Gender-wise patient distribution</p>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="relative w-[110px] h-[110px] flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={genderData} cx="50%" cy="50%" innerRadius={42} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none">
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)' }} itemStyle={{ color: '#fff', fontSize: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-0.5">
                <span className="text-[14px] font-bold text-foreground leading-none">3,456</span>
                <span className="text-[9px] text-foreground mt-0.5">Total</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 ml-4 w-full">
              {genderData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[14px] text-foreground whitespace-nowrap">{item.name}</span>
                  </div>
                  <div className="flex gap-2 text-right">
                    <span className="text-[14px] font-medium text-foreground min-w-[20px]">{item.value}</span>
                    <span className="text-[9px] text-foreground min-w-[35px]">({item.percent})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Risk Score Distribution */}
        <div className="card p-4 border border-border-main flex flex-col">
          <div className="mb-4">
            <h2 className="text-[13px] font-medium text-foreground">AI Risk Score Distribution</h2>
            <p className="text-[14px] text-foreground mt-0.5">Patients by AI risk category</p>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="relative w-[110px] h-[110px] flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={riskData} cx="50%" cy="50%" innerRadius={42} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none">
                    {riskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)' }} itemStyle={{ color: '#fff', fontSize: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-0.5">
                <span className="text-[14px] font-bold text-foreground leading-none">3,456</span>
                <span className="text-[9px] text-foreground mt-0.5">Total</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 ml-4 w-full">
              {riskData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[14px] text-foreground whitespace-nowrap">{item.name}</span>
                  </div>
                  <div className="flex gap-2 text-right">
                    <span className="text-[14px] font-medium text-foreground min-w-[20px]">{item.value}</span>
                    <span className="text-[9px] text-foreground min-w-[35px]">({item.percent})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </DashboardLayout>
  );
}
