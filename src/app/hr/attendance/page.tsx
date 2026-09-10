'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  UserCheck, UserMinus, Clock, Plane, Users, 
  Search, Calendar, Filter, ChevronLeft, ChevronRight, ChevronDown, Download
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip 
} from 'recharts';

export default function AttendancePage() {
  const attendance = [
    { name: 'Dr. Priya Singh', dept: 'Cardiology', checkIn: '09:01 AM', checkOut: '06:02 PM', status: 'Present', hours: '9h 01m', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Rahul Verma', dept: 'Emergency', checkIn: '08:57 AM', checkOut: '05:58 PM', status: 'Present', hours: '9h 01m', avatar: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Amit Kumar', dept: 'Radiology', checkIn: '09:10 AM', checkOut: '06:05 PM', status: 'Present', hours: '8h 55m', avatar: 'https://i.pravatar.cc/150?img=15' },
    { name: 'Neha Gupta', dept: 'Administration', checkIn: '09:05 AM', checkOut: '06:03 PM', status: 'Present', hours: '8h 58m', avatar: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Vikram Patel', dept: 'Pharmacy', checkIn: '09:15 AM', checkOut: '06:10 PM', status: 'Late', hours: '8h 55m', avatar: 'https://i.pravatar.cc/150?img=12' },
    { name: 'Sunita Reddy', dept: 'Pediatrics', checkIn: '08:50 AM', checkOut: '05:40 PM', status: 'Present', hours: '8h 50m', avatar: 'https://i.pravatar.cc/150?img=20' },
    { name: 'Arjun Mehta', dept: 'Orthopedics', checkIn: '09:20 AM', checkOut: '--', status: 'Absent', hours: '0h 00m', avatar: 'https://i.pravatar.cc/150?img=33' },
    { name: 'Pooja Sharma', dept: 'Nursing', checkIn: '--', checkOut: '--', status: 'On Leave', hours: '0h 00m', avatar: 'https://i.pravatar.cc/150?img=47' },
  ];

  const pieData = [
    { name: 'Present', value: 982, color: '#22c55e', pct: '78.7%' },
    { name: 'Absent', value: 178, color: '#ef4444', pct: '14.3%' },
    { name: 'Late', value: 88, color: '#f59e0b', pct: '7.0%' },
    { name: 'On Leave', value: 62, color: '#3b82f6', pct: '5.0%' },
  ];

  const lineData = [
    { date: '25 May', present: 960, absent: 160, late: 90 },
    { date: '26 May', present: 970, absent: 150, late: 80 },
    { date: '27 May', present: 950, absent: 170, late: 85 },
    { date: '28 May', present: 980, absent: 140, late: 75 },
    { date: '29 May', present: 990, absent: 130, late: 70 },
    { date: '30 May', present: 975, absent: 145, late: 82 },
    { date: '31 May', present: 982, absent: 178, late: 88 },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Present': return <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">Present</span>;
      case 'Absent': return <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-500 text-xs font-medium border border-red-500/20">Absent</span>;
      case 'Late': return <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-medium border border-amber-500/20">Late</span>;
      case 'On Leave': return <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-500 text-xs font-medium border border-blue-500/20">On Leave</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Attendance
          </h1>
          <p className="text-sm text-foreground mt-0.5">Track and manage employee attendance</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5 text-foreground" /> May 2025 <Calendar className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Download className="w-3.5 h-3.5" /> Export Report
          </button>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
            <UserCheck className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Present Today</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">982</span>
            <span className="text-xs text-green-500 font-medium mt-0.5">78.7% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <UserMinus className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Absent Today</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">178</span>
            <span className="text-xs text-red-500 font-medium mt-0.5">14.3% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Late Today</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">88</span>
            <span className="text-xs text-amber-500 font-medium mt-0.5">7.0% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
            <Plane className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">On Leave Today</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">62</span>
            <span className="text-xs text-blue-500 font-medium mt-0.5">5.0% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Total Employees</span>
            <span className="text-[24px] font-bold text-foreground leading-tight">1,248</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Side: Main Data Area */}
        <div className="flex-1 card p-0 border-border-main flex flex-col bg-card">
          
          {/* Tabs & Controls */}
          <div className="p-4 border-b border-border-main flex flex-col lg:flex-row justify-between items-center gap-4 bg-main">
            
            <div className="flex items-center gap-6">
              <button className="text-sm font-medium text-purple-400 border-b-2 border-purple-500 pb-1">Daily Overview</button>
              <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors">Monthly Overview</button>
              <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors">Attendance Calendar</button>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground flex items-center gap-2">21 May 2025 <Calendar className="w-3.5 h-3.5 text-foreground" /></span>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-white/10 transition-colors">
                <Filter className="w-3.5 h-3.5 text-foreground" /> Filters
              </button>
            </div>
          </div>

          {/* Search/Filters within table */}
          <div className="p-4 border-b border-border-main flex flex-col lg:flex-row gap-4 items-center">
            <h2 className="text-lg font-medium text-foreground w-full lg:w-auto shrink-0">Today's Attendance</h2>
            
            <div className="flex items-center gap-3 w-full justify-end">
              <div className="relative w-full max-w-[200px]">
                <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search employees..." 
                  className="w-full pl-9 pr-4 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              
              <div className="relative">
                <select className="pl-3 pr-8 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                  <option>All Departments</option>
                </select>
                <ChevronDown className="w-3 h-3 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select className="pl-3 pr-8 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                  <option>All Status</option>
                </select>
                <ChevronDown className="w-3 h-3 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider bg-main">
                  <th className="font-medium p-4 whitespace-nowrap">Employee</th>
                  <th className="font-medium p-4 whitespace-nowrap">Department</th>
                  <th className="font-medium p-4 whitespace-nowrap">Check In</th>
                  <th className="font-medium p-4 whitespace-nowrap">Check Out</th>
                  <th className="font-medium p-4 whitespace-nowrap">Status</th>
                  <th className="font-medium p-4 whitespace-nowrap text-right">Work Hours</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((rec, i) => (
                  <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                    <td className="p-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full overflow-hidden border border-border-main shrink-0">
                          <img src={rec.avatar} alt={rec.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{rec.name}</span>
                      </div>
                    </td>
                    <td className="p-4 py-3 text-sm text-foreground">{rec.dept}</td>
                    <td className="p-4 py-3 text-sm text-foreground">{rec.checkIn}</td>
                    <td className="p-4 py-3 text-sm text-foreground">{rec.checkOut}</td>
                    <td className="p-4 py-3">
                      {getStatusBadge(rec.status)}
                    </td>
                    <td className="p-4 py-3 text-sm text-foreground text-right">{rec.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 flex justify-between items-center bg-main">
            <span className="text-xs text-foreground">Showing 1 to 8 of 1,248 employees</span>
            <div className="flex items-center gap-1">
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
              <span className="text-foreground text-xs px-1">...</span>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">156</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Right Side: Charts */}
        <div className="w-full xl:w-[320px] flex flex-col gap-6 shrink-0">
          
          {/* Attendance Summary */}
          <div className="card p-5 border-border-main bg-card flex flex-col">
            <h2 className="text-lg font-medium text-foreground mb-6">Attendance Summary</h2>
            
            <div className="flex items-center gap-6 pb-2">
              <div className="relative w-24 h-24 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={45}
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
              </div>

              <div className="flex flex-col gap-2 flex-1">
                {pieData.map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
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
          </div>

          {/* Weekly Trend */}
          <div className="card p-5 border-border-main bg-card flex-1 flex flex-col">
            <h2 className="text-lg font-medium text-foreground mb-6">Weekly Trend</h2>
            
            <div className="flex justify-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-foreground">Present</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-xs text-foreground">Absent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-xs text-foreground">Late</span>
              </div>
            </div>

            <div className="flex-1 w-full min-h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dx={-10} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="present" stroke="#22c55e" strokeWidth={2} dot={{ r: 2, fill: '#101423' }} />
                  <Line type="monotone" dataKey="absent" stroke="#ef4444" strokeWidth={2} dot={{ r: 2, fill: '#101423' }} />
                  <Line type="monotone" dataKey="late" stroke="#f59e0b" strokeWidth={2} dot={{ r: 2, fill: '#101423' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>

    </DashboardLayout>
  );
}
