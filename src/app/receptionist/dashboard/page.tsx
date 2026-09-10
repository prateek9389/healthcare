'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Search, Bell, Calendar, UserRound, ClipboardList, Users, Stethoscope,
  UserPlus, FileText, Clipboard, ActivitySquare, AlertCircle, Info, FileDigit, ChevronDown, CheckCircle2, ChevronRight
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

export default function ReceptionistDashboard() {
  const activityData = [
    { name: '25 May', value: 30 },
    { name: '26 May', value: 45 },
    { name: '27 May', value: 35 },
    { name: '28 May', value: 50 },
    { name: '29 May', value: 35 },
    { name: '30 May', value: 45 },
    { name: '31 May', value: 55 },
  ];

  const pieData = [
    { name: 'Consultation', value: 6, color: '#3b82f6' },
    { name: 'Follow-up', value: 4, color: '#22c55e' },
    { name: 'Lab Test', value: 3, color: '#f59e0b' },
    { name: 'Billing', value: 1, color: '#8b5cf6' },
  ];

  const appointments = [
    { time: '09:30 AM', patient: 'Rahul Verma', doctor: 'Dr. Amit Mehta | Cardiology', status: 'Checked-In', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20' },
    { time: '10:00 AM', patient: 'Neha Sharma', doctor: 'Dr. Neha Sharma | Physiotherapy', status: 'Checked-In', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20' },
    { time: '10:30 AM', patient: 'Vikram Patel', doctor: 'Dr. Pooja Iyer | Dermatology', status: 'Pending', statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { time: '11:00 AM', patient: 'Anita Singh', doctor: 'Dr. Amit Mehta | Cardiology', status: 'Pending', statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { time: '11:30 AM', patient: 'Suresh Kumar', doctor: 'Dr. Rajesh Gupta | Orthopedics', status: 'Scheduled', statusColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
  ];

  const registrations = [
    { time: '09:15 AM', name: 'Pooja Verma', desc: '32 Years, Female', phone: '+91 98765 43210' },
    { time: '09:05 AM', name: 'Mohit Agarwal', desc: '45 Years, Male', phone: '+91 91234 56789' },
    { time: '08:55 AM', name: 'Reena Gupta', desc: '29 Years, Female', phone: '+91 99887 66555' },
    { time: '08:45 AM', name: 'Ajay Kumar', desc: '38 Years, Male', phone: '+91 90011 22334' },
    { time: '08:30 AM', name: 'Kavita Rani', desc: '27 Years, Female', phone: '+91 80776 55443' },
  ];

  const doctors = [
    { dept: 'Cardiology', avail: 3, total: 5 },
    { dept: 'Physiotherapy', avail: 2, total: 4 },
    { dept: 'Dermatology', avail: 2, total: 3 },
    { dept: 'Orthopedics', avail: 3, total: 6 },
    { dept: 'General Medicine', avail: 8, total: 12 },
  ];

  const alerts = [
    { type: 'info', msg: 'Dr. Amit Mehta will be unavailable between 02:00 PM - 04:00 PM today.', time: '10:15 AM', color: 'text-blue-600 dark:text-blue-400' },
    { type: 'warning', msg: 'High patient load expected between 11:00 AM - 01:00 PM.', time: 'Yesterday', color: 'text-amber-600 dark:text-amber-400' },
    { type: 'info', msg: 'System maintenance scheduled on 02 June 2025, 01:00 AM - 03:00 AM.', time: '29 May 2025', color: 'text-blue-600 dark:text-blue-400' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[22px] font-semibold text-foreground flex items-center gap-2">
            Good Morning, Priya! <span className="text-2xl">👋</span>
          </h1>
          <p className="text-sm text-foreground mt-1">Here's what's happening at the front desk today.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search patient by name, phone or ID..." className="w-full bg-card border border-border-main rounded-lg pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>
          
          <div className="flex items-center gap-4 shrink-0">
            <button className="relative p-2 text-foreground hover:text-foreground transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-3 h-3 bg-red-500 border-2 border-[var(--background)] rounded-full text-[7px] font-bold text-foreground flex items-center justify-center leading-none">5</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-foreground bg-card border border-border-main rounded-lg px-3 py-2">
              <Calendar className="w-4 h-4 text-foreground" />
              31 May 2025, Saturday
              <span className="ml-2 font-bold text-foreground">09:30 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top 5 Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        
        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <UserRound className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-bold text-foreground leading-tight">Today's Registrations</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">42</span>
            <span className="text-xs text-foreground mt-2">↑ <span className="text-green-600 dark:text-green-400 font-medium">15%</span> from yesterday</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-bold text-foreground leading-tight">Today's Appointments</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">56</span>
            <span className="text-xs text-foreground mt-2">↑ <span className="text-green-600 dark:text-green-400 font-medium">12%</span> from yesterday</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ClipboardList className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <span className="text-sm font-bold text-foreground leading-tight">Checked-In Patients</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">28</span>
            <span className="text-xs text-foreground mt-2">↑ <span className="text-green-600 dark:text-green-400 font-medium">10%</span> from yesterday</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-sm font-bold text-foreground leading-tight">Patients in Queue</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">14</span>
            <span className="text-xs text-foreground mt-2">↓ <span className="text-red-600 dark:text-red-400 font-medium">5%</span> from yesterday</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col group justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <span className="text-sm font-bold text-foreground leading-tight">Available Doctors</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[28px] font-bold text-foreground leading-none">18</span>
            </div>
          </div>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-300 font-medium text-left mt-2">View availability</button>
        </div>

      </div>

      {/* Middle Section: 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Today's Appointments */}
        <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main flex items-center justify-between">
            <h2 className="text-lg font-medium text-foreground">Today's Appointments</h2>
            <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-300">View All</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[280px] custom-scrollbar">
            {appointments.map((apt, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-foreground w-16">{apt.time}</span>
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-foreground">{apt.patient}</span>
                    <span className="text-xs text-foreground mt-0.5">{apt.doctor}</span>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded border ${apt.statusColor}`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border-main text-center bg-main">
            <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1 w-full">
              View All Appointments <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Queue Overview */}
        <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main flex items-center justify-between">
            <h2 className="text-lg font-medium text-foreground">Queue Overview</h2>
            <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-300">View All</button>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-end gap-1">
                <span className="text-[36px] font-bold text-foreground leading-none">14</span>
                <span className="text-sm text-foreground pb-1">Patients in Queue</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-[120px] h-[120px] shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                {pieData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <span className="font-bold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-foreground mb-2">Next In Queue</p>
              <div className="flex items-center justify-between p-3 rounded-lg bg-main border border-border-main">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=a" alt="User" className="w-8 h-8 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">Arjun Mehta</span>
                    <span className="text-xs text-foreground mt-0.5">Token #15 • Follow-up</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-foreground">Est. Wait</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-0.5">15 min</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Recent Registrations */}
        <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main flex items-center justify-between">
            <h2 className="text-lg font-medium text-foreground">Recent Registrations</h2>
            <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-300">View All</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[280px] custom-scrollbar">
            {registrations.map((reg, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-foreground w-16">{reg.time}</span>
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-foreground">{reg.name}</span>
                    <span className="text-xs text-foreground mt-0.5">{reg.desc}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400">{reg.phone}</span>
                  <FileText className="w-3.5 h-3.5 text-foreground cursor-pointer hover:text-foreground" />
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border-main text-center bg-main">
            <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1 w-full">
              View All Registrations <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section: 3 Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        
        {/* Today's Activity Chart */}
        <div className="lg:col-span-5 card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main flex items-center justify-between">
            <h2 className="text-lg font-medium text-foreground">Today's Activity</h2>
            <div className="flex items-center gap-1 px-2 py-1 bg-main border border-border-main rounded text-sm text-foreground cursor-pointer">
              This Week <ChevronDown className="w-3 h-3" />
            </div>
          </div>
          
          <div className="p-4 h-[160px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B1120', borderColor: '#1f2937', fontSize: '11px' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorActivity)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="p-4 pt-2 grid grid-cols-4 gap-2 border-t border-border-main bg-main">
            <div>
              <p className="text-xs text-foreground mb-1">Registrations</p>
              <p className="text-[16px] font-bold text-foreground flex items-center gap-2">245 <span className="text-[9px] font-medium text-green-600 dark:text-green-400">↑ 18%</span></p>
            </div>
            <div>
              <p className="text-xs text-foreground mb-1">Appointments</p>
              <p className="text-[16px] font-bold text-foreground flex items-center gap-2">312 <span className="text-[9px] font-medium text-green-600 dark:text-green-400">↑ 14%</span></p>
            </div>
            <div>
              <p className="text-xs text-foreground mb-1">Check-Ins</p>
              <p className="text-[16px] font-bold text-foreground flex items-center gap-2">189 <span className="text-[9px] font-medium text-green-600 dark:text-green-400">↑ 16%</span></p>
            </div>
            <div>
              <p className="text-xs text-foreground mb-1">Queue Served</p>
              <p className="text-[16px] font-bold text-foreground flex items-center gap-2">176 <span className="text-[9px] font-medium text-green-600 dark:text-green-400">↑ 11%</span></p>
            </div>
          </div>
        </div>

        {/* Doctor Availability */}
        <div className="lg:col-span-3 card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main flex items-center justify-between">
            <h2 className="text-lg font-medium text-foreground">Doctor Availability (Today)</h2>
            <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-300">View All</button>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between">
            {doctors.map((doc, i) => (
              <div key={i} className="flex items-center justify-between mb-4 last:mb-0">
                <span className="text-sm font-bold text-foreground w-28 shrink-0">{doc.dept}</span>
                <div className="flex-1 flex items-center gap-3">
                  <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-green-500" 
                      style={{ width: `${(doc.avail / doc.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-foreground w-16 text-right">{doc.avail} / {doc.total} Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-4 card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main">
            <h2 className="text-lg font-medium text-foreground">Quick Actions</h2>
          </div>
          <div className="p-5 flex-1 grid grid-cols-3 gap-3">
            <button className="flex flex-col items-center justify-center p-3 bg-main border border-border-main rounded-xl hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
              <UserPlus className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-foreground text-center">Patient<br/>Registration</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 bg-main border border-border-main rounded-xl hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
              <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-foreground text-center">Book<br/>Appointment</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 bg-main border border-border-main rounded-xl hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
              <ClipboardList className="w-6 h-6 text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-foreground text-center">Check-In<br/>Patient</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 bg-main border border-border-main rounded-xl hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group col-span-1.5 w-[145%]">
              <Users className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-foreground text-center">Queue Management</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 bg-main border border-border-main rounded-xl hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group col-span-1.5 ml-auto w-[145%]">
              <Stethoscope className="w-6 h-6 text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-foreground text-center">Doctor Availability</span>
            </button>
          </div>
        </div>

      </div>

      {/* Notifications & Alerts */}
      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col mb-6">
        <div className="p-4 border-b border-border-main flex items-center justify-between">
          <h2 className="text-lg font-medium text-foreground">Notifications & Alerts</h2>
        </div>
        <div className="flex flex-col">
          {alerts.map((alert, i) => (
            <div key={i} className="flex items-center justify-between p-4 border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors last:border-0">
              <div className="flex items-center gap-3">
                {alert.type === 'info' ? (
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Info className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  </div>
                )}
                <span className="text-sm text-foreground">{alert.msg}</span>
              </div>
              <span className="text-sm text-foreground">{alert.time}</span>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-border-main text-right bg-main">
          <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-300 inline-flex items-center justify-center gap-1">
            View All Alerts <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </DashboardLayout>
  );
}
