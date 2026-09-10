'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Users, Navigation, Clock, Activity, FileText, ChevronDown, CheckCircle2, Truck, Plus
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function ActiveTripsPage() {
  const stats = [
    { title: 'Patients Transported', val: '42', sub: 'Today', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { title: 'Patients Onboard', val: '40', sub: 'Today', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'Distance Covered', val: '32.4 km', sub: 'Total', icon: Navigation, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'Avg Transport Time', val: '24m 15s', sub: 'Today', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  const patientsOnboard = [
    { name: 'Rajesh Verma', details: '58 Years • Male', condition: 'Chest Pain', from: 'AIIMS Hospital', to: 'Max Hospital', status: 'Stable', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Priya Sharma', details: '32 Years • Female', condition: 'Breathing Difficulty', from: 'Saket, Delhi', to: 'BLK Hospital', status: 'Stable', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Neha Gupta', details: '29 Years • Female', condition: 'High Fever', from: 'Rohini, Delhi', to: 'Fortis Hospital', status: 'Stable', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Amit Singh', details: '45 Years • Male', condition: 'Accident', from: 'Dwarka, Delhi', to: 'Safdarjung Hospital', status: 'Critical', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
  ];

  const donutData = [
    { name: 'Completed', value: 32, color: '#10b981' },
    { name: 'In Progress', value: 6, color: '#3b82f6' },
    { name: 'Pending', value: 2, color: '#ef4444' },
  ];

  const perfData = [
    { name: 'Mon', val: 5 },
    { name: 'Tue', val: 6 },
    { name: 'Wed', val: 4 },
    { name: 'Thu', val: 7 },
    { name: 'Fri', val: 5 },
    { name: 'Sat', val: 8 },
    { name: 'Sun', val: 4 },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-red-500/20 text-red-500">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground tracking-wide">
              Patient Transport
            </h1>
            <p className="text-sm text-foreground mt-0.5">Manage patient transport and hospital handovers</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-foreground bg-card border border-border-main px-3 py-1.5 rounded-full">
            May 21, 2025 • 10:24 AM
          </span>
        </div>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {stats.map((stat, i) => (
          <div key={i} className="card p-4 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between mb-3">
              <p className="text-sm text-foreground leading-tight">{stat.title}</p>
              <div className={`p-1.5 rounded-lg flex-shrink-0 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-[22px] font-bold text-foreground leading-none mb-1">{stat.val}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-foreground">{stat.sub}</p>
                {stat.title === 'Patients Transported' && <span className="text-xs text-green-500">↑ 10% vs yesterday</span>}
                {stat.title === 'Patients Onboard' && <span className="text-xs text-green-500">↑ 16% vs yesterday</span>}
                {stat.title === 'Avg Transport Time' && <span className="text-xs text-green-500">↓ 10% vs yesterday</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        {/* Patients Onboard */}
        <div className="lg:col-span-8 card p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-foreground">Patients Onboard</h2>
            <button className="flex items-center gap-1 px-2 py-1 bg-main border border-white/5 rounded text-xs text-foreground hover:text-foreground">
              <FileText className="w-3 h-3" />
            </button>
          </div>
          
          <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
            {patientsOnboard.map((patient, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-b border-border-main pb-3 last:border-0 last:pb-0">
                <div className="flex items-start gap-3 w-[200px] shrink-0">
                  <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Users className="w-3.5 h-3.5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{patient.name}</p>
                    <p className="text-xs text-foreground">{patient.details}</p>
                    <p className="text-xs text-foreground">{patient.condition}</p>
                  </div>
                </div>
                
                <div className="flex-1 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-foreground mb-0.5">From</p>
                    <p className="text-xs text-foreground">{patient.from}</p>
                  </div>
                  <ChevronDown className="w-3 h-3 text-foreground -rotate-90 shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-foreground mb-0.5">To</p>
                    <p className="text-xs text-foreground">{patient.to}</p>
                  </div>
                </div>

                <div className="shrink-0 text-right w-[80px]">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${patient.sColor}`}>
                    {patient.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-3 py-1.5 text-center text-xs text-blue-500 hover:text-blue-400 font-medium transition-colors flex items-center justify-center gap-1 border-t border-border-main pt-3">
            View All Patients <ChevronDown className="w-3 h-3 -rotate-90" />
          </button>
        </div>

        {/* Handover Summary & Stats */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="card p-4 border-border-main flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-sm font-medium text-foreground">Handover Summary</h2>
              <button className="flex items-center gap-1 text-xs text-foreground hover:text-foreground">
                This Week <ChevronDown className="w-2.5 h-2.5" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="w-[80px] h-[80px] relative shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={donutData} innerRadius={28} outerRadius={38} paddingAngle={2} dataKey="value" stroke="none">
                      {donutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-lg font-bold text-foreground leading-none">40</span>
                  <span className="text-[7px] text-foreground mt-0.5">Total</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 pl-4">
                {donutData.map((d, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }}></div>
                      <span className="text-xs text-foreground">{d.name}</span>
                    </div>
                    <div className="text-right flex items-center gap-1">
                      <span className="text-xs font-bold" style={{ color: d.color }}>{d.value}</span>
                      <span className="text-xs text-foreground w-8">({(d.value/40*100).toFixed(0)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card p-4 border-border-main flex flex-col flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-medium text-foreground">Transport Stats</h2>
              <button className="flex items-center gap-1 text-xs text-foreground hover:text-foreground">
                This Week <ChevronDown className="w-2.5 h-2.5" />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <Navigation className="w-3.5 h-3.5" /> Total Distance
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground">256.8 km</span>
                  <span className="text-xs text-green-500">↑ 12%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <Clock className="w-3.5 h-3.5" /> Avg Transport Time
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground">24m 15s</span>
                  <span className="text-xs text-green-500">↑ 8%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Handover Success Rate
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground">97.6%</span>
                  <span className="text-xs text-green-500">↑ 4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Trip Performance Chart */}
        <div className="lg:col-span-9 card p-4 flex flex-col border-border-main">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-foreground">Trip Performance</h2>
            <button className="flex items-center gap-1 text-xs text-foreground hover:text-foreground">
              This Week <ChevronDown className="w-2.5 h-2.5" />
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="h-[120px] flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={perfData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTrips" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(150,150,150,0.1)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 8 }} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 8 }} ticks={[0, 5, 10]} />
                  <Area type="monotone" dataKey="val" stroke="#ef4444" strokeWidth={2} fill="url(#colorTrips)" activeDot={{ r: 3, fill: '#ef4444' }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="w-[1px] bg-border-main hidden md:block"></div>
            
            <div className="flex justify-between gap-6 px-2 w-[300px] shrink-0">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-foreground mb-0.5">Response Time (Avg)</p>
                  <p className="text-xl font-bold text-foreground">8m 24s</p>
                  <p className="text-xs text-green-500 mt-0.5">↑ 12%</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-foreground mb-0.5">Completion Rate</p>
                  <p className="text-xl font-bold text-foreground">96.8%</p>
                  <p className="text-xs text-green-500 mt-0.5">↑ 4%</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-foreground mb-0.5">On-Time Arrival</p>
                  <p className="text-xl font-bold text-foreground">92.5%</p>
                  <p className="text-xs text-green-500 mt-0.5">↑ 6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-3 card p-4 flex flex-col justify-center gap-3">
          <p className="text-sm font-medium text-foreground mb-1">Quick Actions</p>
          <button className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-3.5 h-3.5" /> Create New Trip
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 border border-blue-500/20 py-2 rounded-lg text-sm font-medium transition-colors">
            <Truck className="w-3.5 h-3.5" /> Assign Ambulance
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
