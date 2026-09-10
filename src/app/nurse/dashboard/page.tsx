'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Users, ClipboardList, ActivitySquare, Pill, Clipboard, 
  Calendar, Bell, ChevronDown, MoreVertical, CheckCircle2,
  HeartPulse, FileEdit, Coffee, UserRound, PhoneCall, FileText, Activity
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip
} from 'recharts';

export default function NurseDashboardPage() {
  const patients = [
    { name: 'Rahul Verma', initials: 'RV', room: 'Room 101 / Bed 1', condition: 'Stable', bp: '120/80', hr: '78 bpm', plan: 'Active' },
    { name: 'Neha Gupta', initials: 'NG', room: 'Room 102 / Bed 2', condition: 'Improving', bp: '118/76', hr: '82 bpm', plan: 'Active' },
    { name: 'Amit Kumar', initials: 'AK', room: 'Room 103 / Bed 1', condition: 'Critical', bp: '90/60', hr: '110 bpm', plan: 'Active' },
    { name: 'Sunita Reddy', initials: 'SR', room: 'Room 104 / Bed 2', condition: 'Stable', bp: '122/80', hr: '76 bpm', plan: 'Active' },
    { name: 'Vikram Patel', initials: 'VP', room: 'Room 105 / Bed 1', condition: 'Improving', bp: '110/70', hr: '88 bpm', plan: 'Active' },
  ];

  const schedule = [
    { time: '08:00 AM', title: 'Shift Start & Handover', desc: 'Report from Night Nurse', completed: true },
    { time: '08:30 AM', title: 'Medication Round', desc: 'Allotted Patients', completed: true },
    { time: '10:00 AM', title: 'Vitals Monitoring', desc: 'Check all patients', completed: false },
    { time: '12:00 PM', title: 'Lunch Break', desc: '12:00 PM - 01:00 PM', completed: true },
    { time: '02:00 PM', title: 'Doctor Rounds', desc: 'Accompany Dr. Mehta', completed: false },
    { time: '04:00 PM', title: 'Medication Round', desc: 'Evening Medications', completed: false },
    { time: '06:30 PM', title: 'Shift Handover', desc: 'To Night Nurse', completed: false },
  ];

  const lineData = [
    { date: '25 May', bp: 120, hr: 78, spo2: 98 },
    { date: '26 May', bp: 118, hr: 80, spo2: 97 },
    { date: '27 May', bp: 122, hr: 76, spo2: 99 },
    { date: '28 May', bp: 110, hr: 85, spo2: 95 },
    { date: '29 May', bp: 125, hr: 75, spo2: 98 },
    { date: '30 May', bp: 115, hr: 82, spo2: 96 },
    { date: '31 May', bp: 120, hr: 78, spo2: 98 },
  ];

  const pieData = [
    { name: 'Completed', value: 14, color: '#22c55e', pct: '50%' },
    { name: 'In Progress', value: 6, color: '#3b82f6', pct: '21%' },
    { name: 'Pending', value: 8, color: '#f59e0b', pct: '29%' },
  ];

  const getConditionBadge = (condition: string) => {
    switch(condition) {
      case 'Stable': return <span className="text-green-500 text-sm font-medium">Stable</span>;
      case 'Improving': return <span className="text-blue-500 text-sm font-medium">Improving</span>;
      case 'Critical': return <span className="text-red-500 text-sm font-medium">Critical</span>;
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
          <p className="text-sm text-foreground mt-0.5">Welcome back, Neha Sharma <span role="img" aria-label="wave">👋</span></p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
            <Calendar className="w-3.5 h-3.5 text-foreground" /> 31 May 2025, Saturday <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
          </button>

          <div className="flex items-center gap-3 shrink-0 ml-2">
            <button className="relative p-2 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-foreground" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-purple-600 text-foreground text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-background">
                12
              </span>
            </button>
            <div className="w-px h-8 bg-border-main mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-border-main bg-slate-800">
                <img src="https://i.pravatar.cc/150?img=9" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-sm font-bold text-foreground">Neha Sharma</span>
                <span className="text-xs text-foreground">Staff Nurse</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">My Patients</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">16</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-foreground">Under My Care</span>
            </div>
            <span className="text-[9px] text-green-500 font-medium mt-1">↑ 2 new today</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
            <ClipboardList className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Tasks Pending</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">8</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-foreground">Pending Tasks</span>
            </div>
            <span className="text-[9px] text-green-500 font-medium mt-1">↓ 3 from yesterday</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
            <ActivitySquare className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Vitals Alerts</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">5</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-foreground">Require Attention</span>
            </div>
            <span className="text-[9px] text-red-500 font-medium mt-1">↑ 1 high priority</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
            <Pill className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Medications Due</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">7</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-foreground">Next 2 Hours</span>
            </div>
            <span className="text-[9px] text-blue-500 font-medium mt-1 cursor-pointer">View Schedule</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
            <Clipboard className="w-5 h-5 text-pink-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Care Plans</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">14</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-foreground">Active Plans</span>
            </div>
            <span className="text-[9px] text-blue-500 font-medium mt-1 cursor-pointer">View All</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        
        {/* My Patients Overview */}
        <div className="card p-0 border-border-main flex flex-col bg-card lg:w-[45%]">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-bold text-foreground">My Patients Overview</h2>
            <button className="text-xs text-blue-500 font-medium">View All</button>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-[9px] text-foreground uppercase tracking-wider bg-main">
                  <th className="font-medium p-4 py-3 whitespace-nowrap">Patient</th>
                  <th className="font-medium p-4 py-3 whitespace-nowrap">Room / Bed</th>
                  <th className="font-medium p-4 py-3 whitespace-nowrap">Condition</th>
                  <th className="font-medium p-4 py-3 whitespace-nowrap">Last Vitals</th>
                  <th className="font-medium p-4 py-3 whitespace-nowrap">Care Plan</th>
                  <th className="font-medium p-4 py-3 whitespace-nowrap w-8"></th>
                </tr>
              </thead>
              <tbody>
                {patients.map((pt, i) => (
                  <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                    <td className="p-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[9px] font-medium text-foreground shrink-0">
                          {pt.initials}
                        </div>
                        <span className="text-sm text-foreground whitespace-nowrap">{pt.name}</span>
                      </div>
                    </td>
                    <td className="p-4 py-3.5 text-xs text-foreground whitespace-nowrap">{pt.room}</td>
                    <td className="p-4 py-3.5">{getConditionBadge(pt.condition)}</td>
                    <td className="p-4 py-3.5">
                      <div className="flex flex-col">
                        <span className="text-xs text-foreground">BP {pt.bp}</span>
                        <span className="text-[9px] text-foreground">HR {pt.hr}</span>
                      </div>
                    </td>
                    <td className="p-4 py-3.5 text-sm text-green-500">{pt.plan}</td>
                    <td className="p-4 py-3.5 text-right">
                      <button className="text-foreground hover:text-foreground transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="card p-0 border-border-main flex flex-col bg-card lg:w-[30%]">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-lg font-bold text-foreground">Today's Schedule</h2>
            <button className="text-xs text-blue-500 font-medium">View Full Schedule</button>
          </div>
          
          <div className="p-4 flex-1 flex flex-col relative overflow-hidden">
            <div className="absolute left-[72px] top-6 bottom-6 w-px bg-border-main"></div>
            
            <div className="flex flex-col gap-5 overflow-y-auto pr-2 custom-scrollbar">
              {schedule.map((item, i) => (
                <div key={i} className="flex gap-4 relative z-10 group">
                  <div className="w-[50px] text-right shrink-0 pt-0.5">
                    <span className="text-xs font-medium text-foreground">{item.time}</span>
                  </div>
                  
                  <div className="relative shrink-0 flex justify-center w-6">
                    <div className={`w-3.5 h-3.5 rounded-full mt-1 border-[2px] z-10 bg-card flex items-center justify-center ${item.completed ? 'border-green-500' : 'border-slate-500'}`}>
                      {item.completed && <CheckCircle2 className="w-2.5 h-2.5 text-green-500 absolute" />}
                    </div>
                  </div>
                  
                  <div className="flex flex-col pb-2">
                    <span className={`text-sm font-medium ${item.completed ? 'text-foreground' : 'text-foreground'} group-hover:text-blue-600 dark:text-blue-400 transition-colors`}>{item.title}</span>
                    <span className="text-xs text-foreground mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Notifications */}
        <div className="flex flex-col gap-4 lg:w-[25%]">
          <div className="card p-4 border-border-main flex flex-col bg-card">
            <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <HeartPulse className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-[9px] text-foreground text-center leading-tight">Add Vitals</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <FileEdit className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-[9px] text-foreground text-center leading-tight">Add Note</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <Coffee className="w-4 h-4 text-green-600 dark:text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="text-[9px] text-foreground text-center leading-tight">Record Intake</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <Pill className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:text-amber-300 transition-colors" />
                <span className="text-[9px] text-foreground text-center leading-tight">Medication Given</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                <Clipboard className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-[9px] text-foreground text-center leading-tight">New Task</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-colors group">
                <PhoneCall className="w-4 h-4 text-red-500 group-hover:text-red-600 dark:text-red-400 transition-colors" />
                <span className="text-[9px] text-red-500 font-medium text-center leading-tight">Emergency Call</span>
              </button>
            </div>
          </div>

          <div className="card p-0 border-border-main flex flex-col bg-card flex-1">
            <div className="p-4 border-b border-border-main flex justify-between items-center">
              <h2 className="text-lg font-bold text-foreground">Notifications</h2>
              <button className="text-xs text-blue-500 font-medium">View All</button>
            </div>
            <div className="flex flex-col">
              <div className="p-3 border-b border-border-main flex justify-between gap-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-3 h-3 text-red-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">High BP Alert</span>
                    <span className="text-xs text-foreground">Amit Kumar (Room 103)</span>
                  </div>
                </div>
                <span className="text-[9px] text-foreground whitespace-nowrap mt-1">10 min ago</span>
              </div>
              <div className="p-3 border-b border-border-main flex justify-between gap-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Pill className="w-3 h-3 text-amber-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">Medication Due</span>
                    <span className="text-xs text-foreground">7 medications due in next 2 hours</span>
                  </div>
                </div>
                <span className="text-[9px] text-foreground whitespace-nowrap mt-1">20 min ago</span>
              </div>
              <div className="p-3 flex justify-between gap-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-3 h-3 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">New Lab Report</span>
                    <span className="text-xs text-foreground">Rahul Verma - CBC Report</span>
                  </div>
                </div>
                <span className="text-[9px] text-foreground whitespace-nowrap mt-1">1 hr ago</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        
        {/* Vitals Summary */}
        <div className="card p-5 border-border-main bg-card flex flex-col lg:w-[45%]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-foreground">Vitals Summary</h2>
            <select className="pl-3 pr-8 py-1 bg-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none">
              <option>This Week</option>
            </select>
          </div>
          
          <div className="flex items-center gap-6 mb-4 justify-center">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-xs text-foreground">BP (mmHg)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs text-foreground">HR (bpm)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-foreground">SpO₂ (%)</span>
            </div>
          </div>

          <div className="flex-1 w-full min-h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dx={-10} domain={[0, 160]} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="bp" stroke="#a855f7" strokeWidth={2} dot={{ r: 3, fill: '#101423', stroke: '#a855f7' }} />
                <Line type="monotone" dataKey="hr" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, fill: '#101423', stroke: '#3b82f6' }} />
                <Line type="monotone" dataKey="spo2" stroke="#22c55e" strokeWidth={2} dot={{ r: 3, fill: '#101423', stroke: '#22c55e' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tasks Overview */}
        <div className="card p-5 border-border-main bg-card flex flex-col lg:w-[25%]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-foreground">Tasks Overview</h2>
            <select className="pl-3 pr-8 py-1 bg-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none">
              <option>This Week</option>
            </select>
          </div>
          
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-28 h-28 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={50}
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
                <span className="text-[18px] font-bold text-foreground leading-none">28</span>
                <span className="text-[8px] text-foreground mt-1">Total Tasks</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              {pieData.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs text-foreground">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-medium text-foreground">{item.value}</span>
                    <span className="text-[9px] text-foreground">({item.pct})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patient Care Activities */}
        <div className="card p-5 border-border-main bg-card flex flex-col lg:w-[30%]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-foreground">Patient Care Activities</h2>
            <select className="pl-3 pr-8 py-1 bg-main border border-border-main rounded text-xs text-foreground appearance-none focus:outline-none">
              <option>This Week</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-4 flex-1 mt-2">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Vitals Recorded</span>
                <span className="text-sm font-bold text-foreground">48/60</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Medications Given</span>
                <span className="text-sm font-bold text-foreground">36/50</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Intake/Output Recorded</span>
                <span className="text-sm font-bold text-foreground">22/30</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '73%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Care Notes Added</span>
                <span className="text-sm font-bold text-foreground">18/25</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Patient Education</span>
                <span className="text-sm font-bold text-foreground">12/20</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Handover Notes */}
      <div className="card p-0 border-border-main bg-card mb-4">
        <div className="p-4 border-b border-border-main flex justify-between items-center">
          <h2 className="text-lg font-bold text-foreground">Handover Notes</h2>
          <button className="text-xs text-blue-500 font-medium">View All</button>
        </div>
        
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border-main">
          
          <div className="p-5 flex-1 flex flex-col gap-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-bold text-foreground">From Night Shift</h3>
              <span className="text-xs text-foreground">31 May 2025, 06:45 AM</span>
            </div>
            <ul className="text-sm text-foreground space-y-2 list-disc pl-4 flex-1 marker:text-foreground">
              <li>Amit Kumar (Room 103) had high BP at 5:30 AM.</li>
              <li>Neha Gupta (Room 102) slept well.</li>
              <li>All medications given on time.</li>
            </ul>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border-main">
              <img src="https://i.pravatar.cc/150?img=5" alt="Night Nurse" className="w-5 h-5 rounded-full object-cover" />
              <span className="text-xs text-foreground">Night Nurse: <span className="text-foreground">Pooja Singh</span></span>
            </div>
          </div>

          <div className="p-5 flex-1 flex flex-col gap-3 bg-amber-500/5 hover:bg-amber-500/10 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-medium text-amber-500">Important Notes</h3>
            </div>
            <ul className="text-sm text-foreground space-y-2 list-disc pl-4 flex-1 marker:text-amber-500/50">
              <li>Monitor Amit Kumar BP closely.</li>
              <li>Neha Gupta scheduled for physiotherapy at 11 AM.</li>
              <li>New admission expected in Room 106.</li>
            </ul>
          </div>

          <div className="p-5 flex-1 flex flex-col gap-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-bold text-foreground">To Next Shift</h3>
              <span className="text-xs text-foreground">31 May 2025, 06:45 PM</span>
            </div>
            <ul className="text-sm text-foreground space-y-2 list-disc pl-4 flex-1 marker:text-foreground">
              <li>Continue monitoring Amit Kumar.</li>
              <li>Evening medication round at 6 PM.</li>
            </ul>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border-main">
              <img src="https://i.pravatar.cc/150?img=5" alt="Next Nurse" className="w-5 h-5 rounded-full object-cover opacity-50 grayscale" />
              <span className="text-xs text-foreground">To Night Nurse: <span className="text-foreground">Pooja Singh</span></span>
            </div>
          </div>

        </div>
      </div>
      
    </DashboardLayout>
  );
}
