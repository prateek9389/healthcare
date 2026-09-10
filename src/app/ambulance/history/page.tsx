'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  FileText, Clock, Navigation, CheckCircle2, ChevronDown, CheckSquare, Search, Filter, Lock, Unlock, Upload
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function TripHistoryPage() {
  const stats = [
    { title: 'Total Trips', val: '48', sub: 'This Week', icon: CheckSquare, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Completed Trips', val: '42', sub: '87.5%', sub2: '↑ 10% vs last week', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'Total Distance', val: '512.4 km', sub: '↑ 15% vs last week', icon: Navigation, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { title: 'Avg Response Time', val: '8m 24s', sub: '↓ 12% vs last week', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'Avg Trip Duration', val: '24m 15s', sub: '↓ 8% vs last week', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  const tripHistory = [
    { id: 'TRIP-101', patient: 'Rajesh Verma', from: 'AIIMS Hospital', to: 'Max Hospital', amb: 'AMB-101', driver: 'Vikas Sharma', status: 'Completed', start: '09:15 AM', duration: '18m 24s', sColor: 'text-green-500' },
    { id: 'TRIP-102', patient: 'Pooja Mehta', from: 'Saket, Delhi', to: 'BLK Hospital', amb: 'AMB-102', driver: 'Pooja Mehta', status: 'Completed', start: '08:45 AM', duration: '22m 15s', sColor: 'text-green-500' },
    { id: 'TRIP-103', patient: 'Amit Singh', from: 'Dwarka, Delhi', to: 'Safdarjung Hospital', amb: 'AMB-103', driver: 'Ramesh Kumar', status: 'Cancelled', start: '08:20 AM', duration: '25m 30s', sColor: 'text-red-500' },
    { id: 'TRIP-104', patient: 'Neha Gupta', from: 'Rohini, Delhi', to: 'Fortis Hospital', amb: 'AMB-104', driver: 'Deepak Singh', status: 'Completed', start: '07:50 AM', duration: '20m 45s', sColor: 'text-green-500' },
    { id: 'TRIP-105', patient: 'Sunita Devi', from: 'Karol Bagh', to: 'Sir Ganga Ram', amb: 'AMB-105', driver: 'Suresh Yadav', status: 'Completed', start: '07:25 AM', duration: '18m 30s', sColor: 'text-green-500' },
    { id: 'TRIP-106', patient: 'Mohd. Arif', from: 'Shahdara', to: 'AIIMS Hospital', amb: 'AMB-106', driver: 'Mohd. Arif', status: 'Completed', start: '08:18 AM', duration: '21m 10s', sColor: 'text-green-500' },
  ];

  const overviewData = [
    { name: 'Mon', completed: 6, cancelled: 1 },
    { name: 'Tue', completed: 8, cancelled: 0 },
    { name: 'Wed', completed: 5, cancelled: 2 },
    { name: 'Thu', completed: 9, cancelled: 1 },
    { name: 'Fri', completed: 7, cancelled: 0 },
    { name: 'Sat', completed: 4, cancelled: 1 },
    { name: 'Sun', completed: 3, cancelled: 0 },
  ];

  const donutData = [
    { name: 'Emergency', value: 32, color: '#3b82f6' },
    { name: 'Transfer', value: 10, color: '#ef4444' },
    { name: 'Routine', value: 6, color: '#10b981' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-red-500/20 text-red-500">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground tracking-wide">
              Trip History
            </h1>
            <p className="text-sm text-foreground mt-0.5">View and analyze all completed trips and performance</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-foreground bg-card border border-border-main px-3 py-1.5 rounded-full">
            May 21, 2025 • 10:24 AM
          </span>
        </div>
      </div>

      {/* Top Controls & Stats */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border-main rounded-lg text-sm text-foreground hover:text-foreground">
            Date Range: <span className="font-medium text-foreground">This Week</span> <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border-main rounded-lg text-sm text-foreground hover:text-foreground">
            Status: <span className="font-medium text-foreground">All</span> <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border-main rounded-lg text-sm text-foreground hover:text-foreground">
            Ambulance: <span className="font-medium text-foreground">All</span> <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:text-foreground">
            <Filter className="w-3 h-3" /> Filters
          </button>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:text-foreground">
          <Upload className="w-3 h-3" /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="card p-4 flex flex-col justify-between group">
            <div className="flex items-start justify-between mb-3">
              <p className="text-sm text-foreground leading-tight">{stat.title}</p>
              <div className={`p-1.5 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <p className="text-[22px] font-bold text-foreground leading-none mb-1">{stat.val}</p>
              <div className="flex items-center gap-2">
                {stat.sub && <p className="text-xs text-foreground">{stat.sub}</p>}
                {stat.sub2 && <p className="text-xs text-green-500">{stat.sub2}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Trip History Table */}
        <div className="lg:col-span-8 card p-4 flex flex-col border-border-main min-h-[500px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-foreground">Trip History</h2>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-xs uppercase tracking-wider text-foreground">
                  <th className="py-2.5 font-medium">Trip ID</th>
                  <th className="py-2.5 font-medium">Patient</th>
                  <th className="py-2.5 font-medium">From</th>
                  <th className="py-2.5 font-medium">To</th>
                  <th className="py-2.5 font-medium">Ambulance</th>
                  <th className="py-2.5 font-medium">Driver</th>
                  <th className="py-2.5 font-medium">Status</th>
                  <th className="py-2.5 font-medium">Start Time</th>
                  <th className="py-2.5 font-medium">Duration</th>
                  <th className="py-2.5 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tripHistory.map((trip, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-black/5 transition-colors">
                    <td className="py-3 pr-2">
                      <span className="text-xs font-medium text-foreground">{trip.id}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{trip.patient}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{trip.from}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{trip.to}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{trip.amb}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{trip.driver}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-0.5 rounded-full text-[8px] font-medium border ${
                        trip.status === 'Completed' ? 'text-green-500 bg-green-500/10 border-green-500/20' : 'text-red-500 bg-red-500/10 border-red-500/20'
                      }`}>
                        {trip.status}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{trip.start}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs font-medium text-foreground">{trip.duration}</span>
                    </td>
                    <td className="py-3 pl-2 text-right">
                      <button className="p-1 rounded text-foreground hover:text-foreground bg-main border border-white/5 transition-colors">
                        <FileText className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full mt-3 py-1.5 text-center text-xs text-blue-500 hover:text-blue-400 font-medium transition-colors flex items-center justify-center gap-1 border-t border-border-main pt-3">
            View All Trips <ChevronDown className="w-3 h-3 -rotate-90" />
          </button>
        </div>

        {/* Right Stack */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Trips Overview Chart */}
          <div className="card p-4 border-border-main flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-medium text-foreground">Trips Overview</h2>
              <button className="flex items-center gap-1 text-xs text-foreground hover:text-foreground">
                This Week <ChevronDown className="w-2.5 h-2.5" />
              </button>
            </div>
            <div className="h-[140px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={overviewData} barGap={2} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(150,150,150,0.1)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 8 }} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 8 }} ticks={[0, 5, 10]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#151C2C', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '10px' }}
                    itemStyle={{ fontSize: '10px' }}
                    cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                  />
                  <Bar dataKey="completed" fill="#10b981" radius={[2, 2, 0, 0]} barSize={8} name="Completed" />
                  <Bar dataKey="cancelled" fill="#ef4444" radius={[2, 2, 0, 0]} barSize={8} name="Cancelled" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-[#10b981]"></div><span className="text-xs text-foreground">Completed</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-[#ef4444]"></div><span className="text-xs text-foreground">Cancelled</span></div>
            </div>
          </div>

          {/* Trip Distribution Donut */}
          <div className="card p-4 border-border-main flex flex-col flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-medium text-foreground">Trip Distribution</h2>
            </div>
            <div className="flex items-center justify-between flex-1">
              <div className="w-[100px] h-[100px] relative shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={donutData} innerRadius={35} outerRadius={45} paddingAngle={2} dataKey="value" stroke="none">
                      {donutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xl font-bold text-foreground leading-none">48</span>
                  <span className="text-xs text-foreground mt-0.5">Total</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1 pl-6">
                {donutData.map((d, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }}></div>
                      <span className="text-sm text-foreground">{d.name}</span>
                    </div>
                    <div className="text-right flex items-center gap-1.5">
                      <span className="text-sm font-bold" style={{ color: d.color }}>{d.value}</span>
                      <span className="text-xs text-foreground w-8">({(d.value/48*100).toFixed(1)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
