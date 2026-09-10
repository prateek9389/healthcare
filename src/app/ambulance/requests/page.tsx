'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Activity, AlertTriangle, Truck, Plus, 
  MapPin, CheckCircle2, Navigation, AlertCircle, FileText, ChevronDown, Bell, CheckSquare, Search, Filter, Clock
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

export default function EmergencyRequestsPage() {
  const stats = [
    { title: 'Total Requests', val: '56', sub: 'Today', icon: CheckSquare, color: 'text-purple-500', bg: 'bg-purple-500/10', sparkData: [4,5,4,6,5,7,6,8], sparkColor: '#a855f7' },
    { title: 'High Priority', val: '12', sub: 'Pending', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10', sparkData: [2,3,2,4,3,5,4,6], sparkColor: '#ef4444' },
    { title: 'In Progress', val: '8', sub: 'Assigned', icon: Truck, color: 'text-blue-500', bg: 'bg-blue-500/10', sparkData: [5,6,5,7,6,8,7,9], sparkColor: '#3b82f6' },
    { title: 'Completed', val: '36', sub: 'Today', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10', sparkData: [3,4,3,5,4,6,5,7], sparkColor: '#10b981' },
    { title: 'Avg Response Time', val: '8m 24s', sub: '↓ 12% vs yesterday', subColor: 'text-green-500', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10', sparkData: [8,7,8,6,7,5,6,4], sparkColor: '#f97316' },
  ];

  const incomingRequests = [
    { name: 'Rajesh Kumar', info: 'Chest Pain • 58 Years', loc: 'Connaught Place, Delhi', time: '2 mins ago', severity: 'High' },
    { name: 'Priya Sharma', info: 'Breathing Difficulty • 32 Years', loc: 'Saket, Delhi', time: '5 mins ago', severity: 'High' },
    { name: 'Amit Singh', info: 'Accident • 45 Years', loc: 'Dwarka, Delhi', time: '12 mins ago', severity: 'Medium' },
    { name: 'Sunita Devi', info: 'High Fever • 29 Years', loc: 'Rohini, Delhi', time: '18 mins ago', severity: 'Medium' },
    { name: 'Mohd. Arif', info: 'General Weakness • 64 Years', loc: 'Karol Bagh, Delhi', time: '25 mins ago', severity: 'Low' },
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
              Emergency Requests
            </h1>
            <p className="text-sm text-foreground mt-0.5">Manage and respond to all incoming emergency requests</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-foreground bg-card border border-border-main px-3 py-1.5 rounded-full">
            May 21, 2025 • 10:24 AM
          </span>
        </div>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="card p-4 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex flex-col relative z-10 h-full">
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm text-foreground leading-tight">{stat.title}</p>
                <div className={`p-1.5 rounded-lg flex-shrink-0 ${stat.bg} ${stat.color}`}>
                  <stat.icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-[22px] font-bold text-foreground leading-none mb-1">{stat.val}</p>
                <div className="flex items-center justify-between">
                  <p className={`text-xs ${stat.subColor || 'text-foreground'}`}>{stat.sub}</p>
                  {stat.title === 'Total Requests' && <span className="text-xs text-green-500">↑ 18% vs yesterday</span>}
                  {stat.title === 'High Priority' && <span className="text-xs text-red-500">↑ 5% vs yesterday</span>}
                  {stat.title === 'In Progress' && <span className="text-xs text-green-500">↑ 12% vs yesterday</span>}
                  {stat.title === 'Completed' && <span className="text-xs text-green-500">↑ 20% vs yesterday</span>}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 pointer-events-none">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stat.sparkData.map((v, i) => ({ i, v }))}>
                  <Line type="monotone" dataKey="v" stroke={stat.sparkColor} strokeWidth={1.5} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Incoming Requests Feed */}
        <div className="card p-4 flex flex-col h-[500px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-foreground">Incoming Requests</h2>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-2 py-1 bg-main border border-border-main rounded text-xs text-foreground hover:bg-card">
                All Priority <ChevronDown className="w-3 h-3" />
              </button>
              <button className="flex items-center gap-1 px-2 py-1 bg-main border border-border-main rounded text-xs text-foreground hover:bg-card">
                <Filter className="w-3 h-3" /> Filters
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
            {incomingRequests.map((req, i) => (
              <div key={i} className="flex gap-3 items-center border border-border-main bg-main rounded-lg p-3 hover:bg-main transition-colors">
                <div className={`px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${
                  req.severity === 'High' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                  req.severity === 'Medium' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
                  'bg-green-500/10 text-green-500 border-green-500/20'
                }`}>
                  <AlertTriangle className="w-2.5 h-2.5" />
                  {req.severity}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium text-foreground truncate">{req.name}</p>
                    <span className="text-xs text-red-500 font-medium shrink-0">{req.time}</span>
                  </div>
                  <p className="text-xs text-foreground mt-0.5">{req.info}</p>
                  <p className="text-xs text-foreground mt-1 truncate">{req.loc}</p>
                </div>
                <button className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded text-xs font-medium transition-colors shrink-0">
                  Assign
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 py-1.5 text-center text-xs text-blue-500 hover:text-blue-400 font-medium transition-colors flex items-center justify-center gap-1 border-t border-border-main pt-3">
            View All Requests <ChevronDown className="w-3 h-3 -rotate-90" />
          </button>
        </div>

        {/* Live Ambulance Map (Center) */}
        <div className="card p-0 overflow-hidden relative h-[500px] bg-white dark:bg-[#0a0f1a] border-border-main flex flex-col">
          <div className="absolute top-4 left-4 z-10">
            <h2 className="text-base font-medium text-foreground drop-shadow-md">Request Locations</h2>
          </div>
          <div className="absolute top-4 right-4 z-10">
            <button className="p-1.5 bg-main/80 border border-border-main rounded text-foreground hover:bg-main">
              <MapPin className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Map Mockup Background */}
          <div className="flex-1 relative w-full h-full bg-white dark:bg-[#0a0f1a]">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-60 pointer-events-none" style={{ backgroundImage: 'url("/images/map-bg.jpg")', filter: 'grayscale(100%)' }}></div>
            
            {/* Neighborhood Labels */}
            <span className="absolute top-[20%] left-[30%] text-[8px] text-foreground font-bold tracking-widest uppercase">ROHINI</span>
            <span className="absolute top-[40%] right-[30%] text-[8px] text-foreground font-bold tracking-widest uppercase">SHAHDARA</span>
            <span className="absolute bottom-[40%] left-[20%] text-[8px] text-foreground font-bold tracking-widest uppercase">DWARKA</span>
            <span className="absolute top-[45%] left-[45%] text-xs text-foreground font-bold tracking-widest uppercase">NEW DELHI</span>
            <span className="absolute bottom-[20%] right-[40%] text-[8px] text-foreground font-bold tracking-widest uppercase">SAKET</span>

            {/* Markers */}
            <div className="absolute top-[40%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded flex items-center justify-center border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.5)] z-20 animate-pulse"><MapPin className="w-3.5 h-3.5 text-white" /></div>
            <div className="absolute top-[25%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded flex items-center justify-center border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.5)] z-20 animate-pulse"><MapPin className="w-3.5 h-3.5 text-white" /></div>
            <div className="absolute top-[55%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-orange-500 rounded flex items-center justify-center border border-orange-500/30 shadow-lg z-10"><MapPin className="w-3.5 h-3.5 text-white" /></div>
            <div className="absolute top-[65%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded flex items-center justify-center border border-green-500/30 shadow-lg z-10"><MapPin className="w-3.5 h-3.5 text-white" /></div>
            <div className="absolute top-[35%] right-[25%] transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-orange-500 rounded flex items-center justify-center border border-orange-500/30 shadow-lg z-10"><MapPin className="w-3.5 h-3.5 text-white" /></div>

          </div>

          {/* Map Controls */}
          <div className="absolute right-4 bottom-12 flex flex-col gap-1 z-10">
            <button className="w-6 h-6 bg-main/80 border border-border-main rounded flex items-center justify-center text-foreground hover:bg-main"><span className="text-lg leading-none">+</span></button>
            <button className="w-6 h-6 bg-main/80 border border-border-main rounded flex items-center justify-center text-foreground hover:bg-main"><span className="text-lg leading-none">-</span></button>
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-main/90 border-t border-border-main flex items-center justify-center gap-6 z-10">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500"></div><span className="text-xs text-foreground">High</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-500"></div><span className="text-xs text-foreground">Medium</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-xs text-foreground">Low</span></div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
