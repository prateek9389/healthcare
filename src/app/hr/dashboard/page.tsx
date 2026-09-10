'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Search, Calendar, Bell, RefreshCcw, Users, UserCheck, 
  UserMinus, Plane, Building2, ChevronDown, Check, ArrowRight,
  Sun, Moon, Sunset, CalendarX, UserCog
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip 
} from 'recharts';

export default function HRDashboardPage() {
  const pieData = [
    { name: 'Doctors', value: 312, color: '#9333ea', pct: '25.0%' },
    { name: 'Nurses', value: 456, color: '#3b82f6', pct: '36.5%' },
    { name: 'Technicians', value: 186, color: '#22c55e', pct: '14.9%' },
    { name: 'Administrative', value: 204, color: '#eab308', pct: '16.3%' },
    { name: 'Support Staff', value: 90, color: '#06b6d4', pct: '7.2%' },
  ];

  const lineData = [
    { date: '1 May', present: 740, absent: 240, late: 50 },
    { date: '8 May', present: 730, absent: 260, late: 55 },
    { date: '15 May', present: 750, absent: 220, late: 45 },
    { date: '22 May', present: 760, absent: 240, late: 50 },
    { date: '31 May', present: 720, absent: 280, late: 60 },
  ];

  const deptAttendance = [
    { name: 'Cardiology', val: 92, color: 'bg-green-500' },
    { name: 'General Medicine', val: 88, color: 'bg-green-500' },
    { name: 'Orthopedics', val: 84, color: 'bg-green-500' },
    { name: 'Pediatrics', val: 81, color: 'bg-amber-500' },
    { name: 'Emergency', val: 76, color: 'bg-red-500' },
  ];

  const leavePieData = [
    { name: 'Casual Leave', value: 18, color: '#9333ea', pct: '38.3%' },
    { name: 'Sick Leave', value: 12, color: '#3b82f6', pct: '25.5%' },
    { name: 'Earned Leave', value: 11, color: '#22c55e', pct: '23.4%' },
    { name: 'Maternity Leave', value: 4, color: '#eab308', pct: '8.5%' },
    { name: 'Other Leave', value: 2, color: '#06b6d4', pct: '4.3%' },
  ];

  const activities = [
    { user: 'Rahul Verma', action: 'marked attendance for today', time: 'Today, 09:15 AM', icon: <UserCheck className="w-4 h-4 text-blue-500" />, bg: 'bg-blue-500/20' },
    { user: 'Priya Singh', action: 'applied for Casual Leave', time: 'Today, 08:45 AM', icon: <Plane className="w-4 h-4 text-purple-500" />, bg: 'bg-purple-500/20' },
    { user: 'Amit Kumar\'s', action: 'leave approved by you', time: 'Yesterday, 06:20 PM', icon: <Check className="w-4 h-4 text-green-500" />, bg: 'bg-green-500/20' },
    { user: 'Night shift', action: 'published for next week', time: 'Yesterday, 05:00 PM', icon: <Calendar className="w-4 h-4 text-foreground" />, bg: 'bg-slate-700/50' },
    { user: 'New employee', action: 'Neha Gupta joined', time: 'Yesterday, 10:30 AM', icon: <UserCog className="w-4 h-4 text-amber-500" />, bg: 'bg-amber-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Dashboard
          </h1>
          <p className="text-sm text-foreground mt-0.5">Overview of your organization's HR activities</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          <div className="relative flex-1 xl:w-[300px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search employees, departments..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
            <Calendar className="w-3.5 h-3.5 text-foreground" /> 31 May 2025, Saturday <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
          </button>

          <div className="flex items-center gap-2 shrink-0">
            <button className="relative w-9 h-9 flex items-center justify-center bg-card border border-border-main rounded-lg hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              <Bell className="w-4 h-4 text-foreground" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-background">
                8
              </span>
            </button>
            <button className="w-9 h-9 flex items-center justify-center bg-card border border-border-main rounded-lg hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              <RefreshCcw className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Employees</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">1,248</span>
            <span className="text-xs text-green-500 font-medium mt-0.5">↑ 12% <span className="text-foreground font-normal">from last month</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
            <UserCheck className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">Present Today</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">982</span>
            <span className="text-xs text-green-500 font-medium mt-0.5">78.7% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
            <UserMinus className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">Absent Today</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">178</span>
            <span className="text-xs text-red-500 font-medium mt-0.5">14.3% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
            <Plane className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">On Leave</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">88</span>
            <span className="text-xs text-amber-500 font-medium mt-0.5">7.0% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">Departments</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">18</span>
            <span className="text-xs text-blue-500 font-medium mt-0.5">Active Departments</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        
        {/* Employee Overview */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <h2 className="text-lg font-medium text-foreground mb-2">Employee Overview</h2>
          <div className="flex flex-col h-full items-center justify-center pb-4">
            <div className="relative h-[220px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
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
                <span className="text-[22px] font-bold text-foreground leading-none">1,248</span>
                <span className="text-xs text-foreground mt-1">Total Employees</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2.5 mt-2 px-2">
              {pieData.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-foreground">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                    <span className="text-xs text-foreground w-10 text-right">({item.pct})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            <button className="text-sm text-blue-500 font-medium hover:text-blue-400 transition-colors flex items-center gap-1">
              View full report <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Attendance Overview Chart */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-medium text-foreground">Attendance Overview</h2>
              <span className="text-sm text-foreground">(This Month)</span>
            </div>
            <select className="pl-3 pr-8 py-1.5 bg-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none hidden sm:block">
              <option>May 2025</option>
            </select>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 rounded-full bg-green-500"></div>
              <span className="text-xs text-foreground">Present</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 rounded-full bg-red-500"></div>
              <span className="text-xs text-foreground">Absent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 rounded-full bg-amber-500"></div>
              <span className="text-xs text-foreground">Late</span>
            </div>
          </div>

          <div className="h-[220px] w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dx={-10} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="present" stroke="#22c55e" strokeWidth={2} dot={{ r: 3, fill: '#101423' }} activeDot={{ r: 5, fill: '#22c55e' }} />
                <Line type="monotone" dataKey="absent" stroke="#ef4444" strokeWidth={2} dot={{ r: 3, fill: '#101423' }} activeDot={{ r: 5, fill: '#ef4444' }} />
                <Line type="monotone" dataKey="late" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3, fill: '#101423' }} activeDot={{ r: 5, fill: '#f59e0b' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-auto flex justify-between items-center">
            <button className="text-sm text-blue-500 font-medium hover:text-blue-400 transition-colors flex items-center gap-1">
              View attendance report <ArrowRight className="w-3 h-3" />
            </button>
            <select className="pl-3 pr-8 py-1.5 bg-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none sm:hidden">
              <option>May 2025</option>
            </select>
          </div>
        </div>

        {/* Right Column Stack */}
        <div className="flex flex-col gap-4">
          
          {/* Today's Attendance Snapshot */}
          <div className="card p-5 border-border-main bg-card">
            <h2 className="text-lg font-medium text-foreground mb-6">Today's Attendance Snapshot</h2>
            <div className="flex items-center justify-between">
              <div className="relative w-28 h-28 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[{ value: 78.7 }, { value: 21.3 }]}
                      cx="50%"
                      cy="50%"
                      innerRadius={38}
                      outerRadius={48}
                      startAngle={90}
                      endAngle={-270}
                      dataKey="value"
                      stroke="none"
                    >
                      <Cell fill="#22c55e" />
                      <Cell fill="#1e293b" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[16px] font-bold text-foreground leading-tight">78.7%</span>
                  <span className="text-[8px] text-foreground">Present</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-1 ml-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-foreground">Present</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">982</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm text-foreground">Absent</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">178</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm text-foreground">Late</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">88</span>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance By Department */}
          <div className="card p-5 border-border-main bg-card flex-1">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-medium text-foreground">Attendance By Department</h2>
              <button className="text-xs text-blue-500 font-medium">View all</button>
            </div>
            
            <div className="flex flex-col gap-4">
              {deptAttendance.map((dept, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">{dept.name}</span>
                    <span className="text-sm font-medium text-foreground">{dept.val}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-main rounded-full overflow-hidden">
                    <div className={`h-full ${dept.color} rounded-full`} style={{ width: `${dept.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Upcoming Shifts */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-foreground">Upcoming Shifts</h2>
            <button className="text-xs text-blue-500 font-medium">View full schedule</button>
          </div>
          
          <div className="flex flex-col gap-4 pb-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-main border border-border-main">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <Moon className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-foreground">Night Shift</span>
                  <span className="text-xs text-foreground">10:00 PM - 06:00 AM</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-xs text-foreground">Today</span>
                <div className="flex items-end gap-1">
                  <span className="text-[16px] font-bold text-foreground leading-none">42</span>
                  <span className="text-xs text-foreground pb-0.5">Staff</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg bg-main border border-border-main">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5 text-amber-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-foreground">Morning Shift</span>
                  <span className="text-xs text-foreground">06:00 AM - 02:00 PM</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-xs text-foreground">Tomorrow</span>
                <div className="flex items-end gap-1">
                  <span className="text-[16px] font-bold text-foreground leading-none">38</span>
                  <span className="text-xs text-foreground pb-0.5">Staff</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg bg-main border border-border-main">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Sunset className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-foreground">Evening Shift</span>
                  <span className="text-xs text-foreground">02:00 PM - 10:00 PM</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-xs text-foreground">Tomorrow</span>
                <div className="flex items-end gap-1">
                  <span className="text-[16px] font-bold text-foreground leading-none">35</span>
                  <span className="text-xs text-foreground pb-0.5">Staff</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg bg-main border border-border-main">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center shrink-0">
                  <CalendarX className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-foreground">Off Duty</span>
                  <span className="text-xs text-foreground">Full Day</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-xs text-foreground">Today</span>
                <div className="flex items-end gap-1">
                  <span className="text-[16px] font-bold text-foreground leading-none">12</span>
                  <span className="text-xs text-foreground pb-0.5">Staff</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
            <button className="text-sm text-blue-500 font-medium hover:text-blue-400 transition-colors flex items-center gap-1">
              View all shifts <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Leave Summary */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-foreground">Leave Summary</h2>
            <button className="text-xs text-blue-500 font-medium">View all</button>
          </div>
          
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-main border border-border-main gap-1">
              <span className="text-xs text-foreground font-medium text-center leading-tight">Total Requests</span>
              <div className="flex items-center gap-1">
                <Plane className="w-3 h-3 text-foreground" />
                <span className="text-lg font-bold text-foreground">47</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-green-500/5 border border-green-500/20 gap-1">
              <span className="text-xs text-green-500 font-medium text-center leading-tight">Approved</span>
              <span className="text-[16px] font-bold text-green-500">32</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-amber-500/5 border border-amber-500/20 gap-1">
              <span className="text-xs text-amber-500 font-medium text-center leading-tight">Pending</span>
              <span className="text-[16px] font-bold text-amber-500">10</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-red-500/5 border border-red-500/20 gap-1">
              <span className="text-xs text-red-500 font-medium text-center leading-tight">Rejected</span>
              <span className="text-[16px] font-bold text-red-500">5</span>
            </div>
          </div>

          <h3 className="text-sm font-medium text-foreground mb-4">Leave Type Distribution</h3>
          
          <div className="flex items-center justify-between gap-4 pb-4">
            <div className="relative w-28 h-28 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leavePieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={45}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {leavePieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex flex-col gap-2.5 flex-1">
              {leavePieData.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs text-foreground">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-foreground">{item.value}</span>
                    <span className="text-xs text-foreground w-8 text-right">({item.pct})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex justify-end">
            <button className="text-sm text-blue-500 font-medium hover:text-blue-400 transition-colors flex items-center gap-1">
              Go to Leave Management <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="card p-5 border-border-main bg-card flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-foreground">Recent Activities</h2>
            <button className="text-xs text-blue-500 font-medium">View all</button>
          </div>
          
          <div className="flex flex-col gap-6 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-border-main">
            {activities.map((act, i) => (
              <div key={i} className="flex items-start gap-4 relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-4 border-[#101423] ${act.bg}`}>
                  {act.icon}
                </div>
                <div className="flex flex-col pt-1">
                  <p className="text-sm text-foreground leading-snug">
                    <span className="font-semibold text-foreground">{act.user}</span> {act.action}
                  </p>
                  <span className="text-xs text-foreground mt-1">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
