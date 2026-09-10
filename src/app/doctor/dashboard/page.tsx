'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Calendar, UserPlus, Video, PenTool, Clock, MessageSquare, Star, 
  ChevronRight, CheckCircle2, ChevronDown, Activity, User, FileText, Pill
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip
} from 'recharts';

export default function DoctorDashboardPage() {
  const patientOverviewData = [
    { name: 'New Patients', value: 312, color: '#22c55e' },
    { name: 'Regular Patients', value: 624, color: '#3b82f6' },
    { name: 'Follow Up Patients', value: 218, color: '#f97316' },
    { name: 'Inactive Patients', value: 94, color: '#8b5cf6' },
  ];

  const demographicsData = [
    { age: '0-18', value: 84 },
    { age: '19-30', value: 192 },
    { age: '31-45', value: 284 },
    { age: '46-60', value: 356 },
    { age: '60+', value: 332 },
  ];

  const schedule = [
    { time: '09:00 AM', patient: 'John Doe', type: 'Follow-up Consultation', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { time: '10:00 AM', patient: 'Jane Smith', type: 'Chest Pain', status: 'In Consultation', sColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20', icon: true },
    { time: '11:00 AM', patient: 'Robert Brown', type: 'Regular Checkup', status: 'Upcoming', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20', icon: true },
    { time: '12:00 PM', patient: 'Emily Davis', type: 'ECG & Consultation', status: 'Upcoming', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20', icon: true },
    { time: '02:00 PM', patient: 'Michael Wilson', type: 'Blood Pressure Check', status: 'Upcoming', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20', icon: true },
  ];

  const upcoming = [
    { time: '10:00 AM', name: 'Jane Smith', issue: 'Chest Pain', eta: 'Now' },
    { time: '11:00 AM', name: 'Robert Brown', issue: 'Regular Checkup', eta: '45m' },
    { time: '12:00 PM', name: 'Emily Davis', issue: 'ECG & Consultation', eta: '1h 45m' },
    { time: '02:00 PM', name: 'Michael Wilson', issue: 'BP Check', eta: '3h 45m' },
    { time: '03:00 PM', name: 'Sarah Johnson', issue: 'Follow-up', eta: '4h 45m' },
  ];

  const recent = [
    { name: 'John Doe', id: 'INV-2025-1248', time: 'Today, 09:15 AM', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Jane Smith', id: 'INV-2025-1247', time: 'Today, 10:20 AM', status: 'In Consultation', sColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
    { name: 'Robert Brown', id: 'INV-2025-1246', time: 'Yesterday, 04:30 PM', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Emily Davis', id: 'INV-2025-1245', time: 'Yesterday, 03:15 PM', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Michael Wilson', id: 'INV-2025-1244', time: '29 May 2025, 02:45 PM', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-sm text-foreground mb-1 block">Welcome back,</span>
          <h1 className="text-[24px] font-bold text-foreground tracking-wide flex items-center gap-2">
            Dr. Rahul Sharma 👋
          </h1>
          <p className="text-sm text-foreground mt-1">Here's what's happening with your practice today.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#5b21b6] hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Calendar className="w-4 h-4" /> New Appointment
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
            <UserPlus className="w-4 h-4" /> Add Patient
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#065f46] hover:bg-emerald-800 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-emerald-500/20">
            <Video className="w-4 h-4" /> Start Consultation
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#78350f] hover:bg-amber-800 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-amber-500/20">
            <PenTool className="w-4 h-4" /> Write Prescription
          </button>
        </div>
      </div>

      {/* 6 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-1">Today's Appointments</span>
            <div className="flex flex-col gap-1">
              <span className="text-[22px] font-bold text-foreground leading-none">12</span>
              <span className="text-xs text-green-500 font-medium">↑ 20% <span className="text-foreground font-normal">from yesterday</span></span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shrink-0">
            <Calendar className="w-4 h-4 text-indigo-500" />
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-1">Patients Consulted</span>
            <div className="flex flex-col gap-1">
              <span className="text-[22px] font-bold text-foreground leading-none">8</span>
              <span className="text-xs text-green-500 font-medium">↑ 14% <span className="text-foreground font-normal">from yesterday</span></span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <UserPlus className="w-4 h-4 text-blue-500" />
          </div>
        </div>

        <div className="card p-4 border-border-main flex flex-col justify-between bg-card">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col">
              <span className="text-xs text-foreground font-medium mb-1">Pending Follow Ups</span>
              <span className="text-[22px] font-bold text-foreground leading-none">15</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shrink-0">
              <Clock className="w-4 h-4 text-orange-500" />
            </div>
          </div>
          <button className="text-xs text-purple-400 hover:text-purple-300 text-left mt-2 flex items-center gap-1 transition-colors">
            View follow up list <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="card p-4 border-border-main flex flex-col justify-between bg-card">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col">
              <span className="text-xs text-foreground font-medium mb-1">Unread Messages</span>
              <span className="text-[22px] font-bold text-foreground leading-none">6</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
              <MessageSquare className="w-4 h-4 text-purple-500" />
            </div>
          </div>
          <button className="text-xs text-purple-400 hover:text-purple-300 text-left mt-2 flex items-center gap-1 transition-colors">
            View messages <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-1">Total Patients</span>
            <div className="flex flex-col gap-1">
              <span className="text-[22px] font-bold text-foreground leading-none">1,248</span>
              <span className="text-xs text-green-500 font-medium">↑ 8% <span className="text-foreground font-normal">this month</span></span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shrink-0">
            <UserPlus className="w-4 h-4 text-emerald-500" />
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-1">Avg. Rating</span>
            <div className="flex flex-col gap-1">
              <span className="text-[22px] font-bold text-foreground leading-none">4.8</span>
              <span className="text-xs text-foreground font-normal">Based on 120 reviews</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/30 shrink-0">
            <Star className="w-4 h-4 text-amber-500" />
          </div>
        </div>
      </div>

      {/* Main Grid - Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Today's Schedule */}
        <div className="card p-0 border-border-main flex flex-col bg-card">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground">Today's Schedule</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">View Calendar</button>
          </div>
          <div className="p-4 flex flex-col gap-4">
            {schedule.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-sm text-foreground font-medium w-[60px] shrink-0">{item.time}</span>
                <div className="h-[30px] w-0.5 bg-slate-800 rounded-full relative">
                  {i === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>}
                </div>
                <div className="flex-1 flex justify-between items-center bg-main p-2.5 rounded-lg border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{item.patient}</span>
                    <span className="text-xs text-foreground">{item.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${item.sColor}`}>
                      {item.status}
                    </span>
                    {item.icon && <CheckCircle2 className={`w-4 h-4 ${item.sColor.split(' ')[0]}`} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="text-xs text-purple-400 hover:text-purple-300 py-3 border-t border-border-main flex items-center justify-center gap-1 transition-colors">
            View all appointments <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Patient Overview */}
        <div className="card p-0 border-border-main flex flex-col bg-card">
          <div className="p-4 border-b border-border-main">
            <h2 className="text-lg font-medium text-foreground">Patient Overview</h2>
          </div>
          <div className="p-4 flex-1 flex flex-col items-center justify-center gap-6">
            <div className="w-[180px] h-[180px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={patientOverviewData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {patientOverviewData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[20px] font-bold text-foreground">1,248</span>
                <span className="text-xs text-foreground">Total Patients</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 w-full px-4">
              {patientOverviewData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-foreground">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">{item.value}</span>
                    <span className="text-xs text-foreground w-8 text-right">({Math.round((item.value / 1248) * 100)}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="text-xs text-purple-400 hover:text-purple-300 py-3 border-t border-border-main flex items-center justify-center gap-1 transition-colors mt-auto">
            View all patients <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Upcoming Appointments */}
        <div className="card p-0 border-border-main flex flex-col bg-card">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground">Upcoming Appointments</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">View All</button>
          </div>
          <div className="p-4 flex flex-col gap-4">
            {upcoming.map((up, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-border-main last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground font-medium w-[60px]">{up.time}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm text-foreground font-medium">
                    {up.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{up.name}</span>
                    <span className="text-xs text-foreground">{up.issue}</span>
                  </div>
                </div>
                <span className={`text-xs font-medium ${up.eta === 'Now' ? 'text-purple-400' : 'text-foreground'}`}>
                  {up.eta}
                </span>
              </div>
            ))}
          </div>
          <button className="text-xs text-purple-400 hover:text-purple-300 py-3 border-t border-border-main flex items-center justify-center gap-1 transition-colors mt-auto">
            View full schedule <ChevronRight className="w-3 h-3" />
          </button>
        </div>

      </div>

      {/* Main Grid - Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Recent Consultations */}
        <div className="card p-0 border-border-main flex flex-col bg-card">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground">Recent Consultations</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">View All</button>
          </div>
          <div className="p-4 flex flex-col gap-4">
            {recent.map((rec, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-border-main last:border-0 last:pb-0">
                <div className="flex items-center gap-3 w-[140px]">
                  <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs text-foreground font-medium shrink-0">
                    {rec.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-foreground truncate">{rec.name}</span>
                </div>
                <span className="text-xs text-foreground">{rec.id}</span>
                <span className="text-xs text-foreground">{rec.time}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium border ${rec.sColor}`}>
                  {rec.status}
                </span>
              </div>
            ))}
          </div>
          <button className="text-xs text-purple-400 hover:text-purple-300 py-3 border-t border-border-main flex items-center justify-center gap-1 transition-colors mt-auto">
            View all consultations <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Patient Demographics */}
        <div className="card p-0 border-border-main flex flex-col bg-card">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground">Patient Demographics</h2>
            <button className="flex items-center gap-1 text-sm text-foreground hover:text-foreground transition-colors">
              This Month <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="p-4 h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demographicsData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }} barSize={24}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
                <XAxis dataKey="age" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                <RechartsTooltip 
                  cursor={{fill: '#ffffff0a'}}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]}>
                  {/* Adding value labels above bars */}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <button className="text-xs text-purple-400 hover:text-purple-300 py-3 border-t border-border-main flex items-center justify-center gap-1 transition-colors mt-auto">
            View full analytics <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Quick Information */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-medium text-foreground mb-1">Quick Information</h2>
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="card p-4 border-border-main bg-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <FileText className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-foreground">Prescriptions</span>
                <span className="text-xs text-foreground">Today</span>
                <span className="text-[16px] font-bold text-foreground mt-1">9</span>
              </div>
            </div>
            
            <div className="card p-4 border-border-main bg-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <Activity className="w-5 h-5 text-purple-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-foreground">Lab Orders</span>
                <span className="text-xs text-foreground">Today</span>
                <span className="text-[16px] font-bold text-foreground mt-1">7</span>
              </div>
            </div>

            <div className="card p-4 border-border-main bg-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                <FileText className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-foreground">Radiology Orders</span>
                <span className="text-xs text-foreground">Today</span>
                <span className="text-[16px] font-bold text-foreground mt-1">5</span>
              </div>
            </div>

            <div className="card p-4 border-border-main bg-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <User className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-foreground">Referrals</span>
                <span className="text-xs text-foreground">This Month</span>
                <span className="text-[16px] font-bold text-foreground mt-1">12</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Grid - Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Notifications */}
        <div className="card p-0 border-border-main flex flex-col bg-card">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground">Notifications</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">View All</button>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Activity className="w-4 h-4 text-red-500" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-sm text-foreground">Lab report for <strong>John Doe</strong> is ready</span>
                <span className="text-xs text-foreground mt-1">30 May 2025, 10:30 AM</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Pill className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-sm text-foreground">Pharmacy request from <strong>Jane Smith</strong></span>
                <span className="text-xs text-foreground mt-1">30 May 2025, 09:15 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Calendar className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-sm text-foreground">New appointment booked with you</span>
                <span className="text-xs text-foreground mt-1">30 May 2025, 08:45 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Feedback */}
        <div className="card p-0 border-border-main flex flex-col bg-card">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-medium text-foreground">Patient Feedback</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">View All</button>
          </div>
          <div className="p-5 flex flex-col flex-1 justify-center relative group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-lg text-foreground font-bold">
                J
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-foreground">John Doe</span>
                <div className="flex items-center gap-0.5 mt-0.5">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground italic mb-4">
              "Dr. Rahul Sharma is very knowledgeable and explains everything clearly."
            </p>
            <span className="text-xs text-foreground mt-auto">30 May 2025</span>
            
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-main flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Your Activity */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-lg font-medium text-foreground">Your Activity</h2>
            <button className="flex items-center gap-1 text-sm text-foreground hover:text-foreground transition-colors">
              This Week <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 h-full">
            <div className="card p-4 border-border-main bg-card flex flex-col justify-between">
              <User className="w-4 h-4 text-foreground mb-2" />
              <div className="flex flex-col">
                <span className="text-xs text-foreground mb-1">Consultations</span>
                <div className="flex items-end gap-1">
                  <span className="text-[16px] font-bold text-foreground leading-none">48</span>
                  <span className="text-xs text-green-500">↑ 12%</span>
                </div>
              </div>
            </div>
            
            <div className="card p-4 border-border-main bg-card flex flex-col justify-between">
              <Clock className="w-4 h-4 text-purple-400 mb-2" />
              <div className="flex flex-col">
                <span className="text-xs text-foreground mb-1">Working Hours</span>
                <div className="flex items-end gap-1">
                  <span className="text-[16px] font-bold text-foreground leading-none">32h 45m</span>
                  <span className="text-xs text-green-500">↑ 8%</span>
                </div>
              </div>
            </div>

            <div className="card p-4 border-border-main bg-card flex flex-col justify-between">
              <UserPlus className="w-4 h-4 text-orange-400 mb-2" />
              <div className="flex flex-col">
                <span className="text-xs text-foreground mb-1">Patients Seen</span>
                <div className="flex items-end gap-1">
                  <span className="text-[16px] font-bold text-foreground leading-none">42</span>
                  <span className="text-xs text-green-500">↑ 10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
