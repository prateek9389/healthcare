'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Activity, Clock, Users, Database, AlertTriangle, Truck, Plus, 
  MapPin, CheckCircle2, Navigation, AlertCircle, FileText, ChevronDown, Bell
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export default function AmbulanceDashboardPage() {
  const stats = [
    { title: 'Available Ambulances', val: '18', sub: '56.3% of total fleet', icon: Truck, color: 'text-blue-500', bg: 'bg-blue-500/10', sparkData: [4,5,4,6,5,7,6,8], sparkColor: '#3b82f6' },
    { title: 'Active Trips', val: '8', sub: '25.0% of total fleet', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10', sparkData: [5,6,5,7,6,8,7,9], sparkColor: '#3b82f6' },
    { title: 'Emergency Requests', val: '12', sub: 'High Priority', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10', sparkData: [2,3,2,4,3,5,4,6], sparkColor: '#ef4444' },
    { title: 'Patients Transported', val: '42', sub: 'Today', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10', sparkData: [4,4,5,4,6,5,4,5], sparkColor: '#a855f7' },
    { title: 'Completed Trips', val: '28', sub: 'Today', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10', sparkData: [3,4,3,5,4,6,5,7], sparkColor: '#10b981' },
    { title: 'Avg Response Time', val: '8m 24s', sub: '↓ 12% from yesterday', subColor: 'text-green-500', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10', sparkData: [8,7,8,6,7,5,6,4], sparkColor: '#f97316' },
  ];

  const emergencyRequests = [
    { name: 'Rajesh Kumar', info: 'Chest Pain • 58 Years', loc: 'Connaught Place, Delhi', time: '2 mins ago', severity: 'High' },
    { name: 'Priya Sharma', info: 'Breathing Difficulty • 32 Years', loc: 'Saket, Delhi', time: '5 mins ago', severity: 'High' },
    { name: 'Amit Singh', info: 'Accident • 45 Years', loc: 'Dwarka, Delhi', time: '12 mins ago', severity: 'Medium' },
    { name: 'Sunita Devi', info: 'High Fever • 29 Years', loc: 'Rohini, Delhi', time: '18 mins ago', severity: 'Medium' },
    { name: 'Mohd. Arif', info: 'General Weakness • 64 Years', loc: 'Karol Bagh, Delhi', time: '25 mins ago', severity: 'Low' },
  ];

  const donutData = [
    { name: 'Available', value: 18, color: '#10b981' },
    { name: 'On Duty', value: 8, color: '#3b82f6' },
    { name: 'Busy', value: 4, color: '#ef4444' },
    { name: 'Maintenance', value: 2, color: '#a855f7' },
  ];

  const quickActions = [
    { title: 'New Emergency', icon: Bell, color: 'text-red-500', border: 'border-red-500/20', bg: 'bg-red-500/10' },
    { title: 'Assign Ambulance', icon: Truck, color: 'text-blue-500', border: 'border-blue-500/20', bg: 'bg-blue-500/10' },
    { title: 'Patient Handover', icon: Users, color: 'text-purple-500', border: 'border-purple-500/20', bg: 'bg-purple-500/10' },
    { title: 'Update Status', icon: Activity, color: 'text-green-500', border: 'border-green-500/20', bg: 'bg-green-500/10' },
  ];

  const criticalAlerts = [
    { desc: 'High priority request pending', sub: 'Connaught Place, Delhi', time: '2 mins ago', icon: AlertTriangle, color: 'text-red-500' },
    { desc: 'Ambulance AMB-105 maintenance due', sub: 'Engine check required', time: '15 mins ago', icon: AlertCircle, color: 'text-orange-500' },
    { desc: 'Traffic congestion reported', sub: 'NH-48, Near IGI Airport', time: '25 mins ago', icon: AlertTriangle, color: 'text-orange-500' },
  ];

  const activeTrips = [
    { id: 'TRIP-101', patient: 'Rajesh Verma', from: 'Pitampura, Delhi', to: 'AIIMS Hospital', status: 'On The Way', eta: '6 mins', sColor: 'bg-blue-500/20 text-blue-400' },
    { id: 'TRIP-102', patient: 'Neha Gupta', from: 'Saket, Delhi', to: 'Max Hospital', status: 'Patient Picked Up', eta: '12 mins', sColor: 'bg-green-500/20 text-green-400' },
    { id: 'TRIP-103', patient: 'Mohit Singh', from: 'Dwarka, Delhi', to: 'Venkatesh Hospital', status: 'Transporting', eta: '18 mins', sColor: 'bg-purple-500/20 text-purple-400' },
    { id: 'TRIP-104', patient: 'Anita Patel', from: 'Rohini, Delhi', to: 'Batra Hospital', status: 'On The Way', eta: '8 mins', sColor: 'bg-blue-500/20 text-blue-400' },
    { id: 'TRIP-105', patient: 'Suresh Yadav', from: 'Karol Bagh, Delhi', to: 'Sir Ganga Ram', status: 'Transporting', eta: '15 mins', sColor: 'bg-purple-500/20 text-purple-400' },
  ];

  const recentTrips = [
    { id: 'TRIP-098', name: 'Vikas Sharma', time: '09:15 AM', duration: '25 mins' },
    { id: 'TRIP-097', name: 'Pooja Mehta', time: '08:45 AM', duration: '18 mins' },
    { id: 'TRIP-096', name: 'Ramesh Kumar', time: '08:20 AM', duration: '22 mins' },
    { id: 'TRIP-095', name: 'Kavita Joshi', time: '07:50 AM', duration: '30 mins' },
    { id: 'TRIP-094', name: 'Deepak Singh', time: '07:25 AM', duration: '16 mins' },
  ];

  const fleetStatus = [
    { id: 'AMB-101', plate: 'DL 1A AB 1234', status: 'Available', color: 'text-green-500' },
    { id: 'AMB-102', plate: 'DL 1A AB 5678', status: 'On Duty', color: 'text-blue-500' },
    { id: 'AMB-103', plate: 'DL 1A AB 9012', status: 'Busy', color: 'text-red-500' },
    { id: 'AMB-104', plate: 'DL 1A AB 3456', status: 'Maintenance', color: 'text-purple-500' },
    { id: 'AMB-105', plate: 'DL 1A AB 7890', status: 'Available', color: 'text-green-500' },
  ];

  const perfData = [
    { name: 'Mon', val: 5 },
    { name: 'Tue', val: 7 },
    { name: 'Wed', val: 9 },
    { name: 'Thu', val: 6 },
    { name: 'Fri', val: 8 },
    { name: 'Sat', val: 4 },
    { name: 'Sun', val: 6 },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-blue-500/20 text-blue-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground tracking-wide">
              Ambulance Dashboard
            </h1>
            <p className="text-sm text-foreground mt-0.5">Real-time overview of ambulance operations and emergency response</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-foreground bg-card border border-border-main px-3 py-1.5 rounded-full">
            May 21, 2025 • 10:24 AM
          </span>
        </div>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
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
                <p className={`text-xs ${stat.subColor || 'text-foreground'}`}>{stat.sub}</p>
              </div>
            </div>
            {/* Inline Sparkline */}
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

      {/* Middle Row */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mb-4">
        
        {/* Emergency Requests (Left) */}
        <div className="xl:col-span-3 card p-4 flex flex-col h-[380px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-foreground">Emergency Requests</h2>
            <button className="text-xs text-blue-500 hover:text-blue-400 font-medium">View All</button>
          </div>
          
          <div className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
            {emergencyRequests.map((req, i) => (
              <div key={i} className="flex gap-3 items-start border-b border-border-main pb-3 last:border-0 last:pb-0">
                <div className="mt-0.5">
                  {req.severity === 'High' ? <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> :
                   req.severity === 'Medium' ? <AlertTriangle className="w-3.5 h-3.5 text-orange-500" /> :
                   <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate leading-tight">{req.name}</p>
                  <p className="text-xs text-foreground mt-0.5">{req.info}</p>
                  <p className="text-xs text-foreground mt-1.5 truncate">{req.loc}</p>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className={`text-xs font-medium ${
                    req.severity === 'High' ? 'text-red-500' :
                    req.severity === 'Medium' ? 'text-orange-500' : 'text-green-500'
                  }`}>{req.severity}</span>
                  <span className="text-xs text-foreground">{req.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 py-1.5 text-center text-xs text-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1 border-t border-border-main pt-3">
            View All Requests <ChevronDown className="w-3 h-3 -rotate-90" />
          </button>
        </div>

        {/* Live Ambulance Map (Center) */}
        <div className="xl:col-span-6 card p-0 overflow-hidden relative h-[380px] bg-white dark:bg-[#0a0f1a] border-border-main flex flex-col">
          <div className="absolute top-4 left-4 z-10">
            <h2 className="text-base font-medium text-foreground drop-shadow-md">Live Ambulance Map</h2>
          </div>
          <div className="absolute top-4 right-4 z-10 flex gap-1 bg-main/80 backdrop-blur border border-border-main p-1 rounded-md">
            <button className="px-2 py-0.5 text-xs font-medium text-white bg-blue-500 rounded">Map</button>
            <button className="px-2 py-0.5 text-xs font-medium text-foreground hover:text-foreground">Satellite</button>
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
            {/* Center Active Marker */}
            <div className="absolute top-[45%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full animate-ping"></div>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center border border-blue-500/30 shadow-lg cursor-pointer">
                  <Truck className="w-3.5 h-3.5 text-white" />
                </div>
                {/* Popup Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-main border border-border-main rounded p-1.5 whitespace-nowrap shadow-xl z-30 flex flex-col items-center">
                  <span className="text-xs font-bold text-foreground">AMB-102</span>
                  <span className="text-[8px] text-blue-500">On The Way</span>
                  <span className="text-[8px] text-foreground">ETA: 6 mins</span>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-main border-l border-t border-border-main rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Other Markers */}
            <div className="absolute top-[30%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-red-500 rounded flex items-center justify-center border border-red-500/30 opacity-80"><Truck className="w-3 h-3 text-white" /></div>
            <div className="absolute top-[60%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded flex items-center justify-center border border-blue-500/30 opacity-80"><Truck className="w-3 h-3 text-white" /></div>
            <div className="absolute top-[40%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded flex items-center justify-center border border-green-500/30 opacity-80"><Truck className="w-3 h-3 text-white" /></div>
            <div className="absolute top-[25%] right-[25%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded flex items-center justify-center border border-green-500/30 opacity-80"><Truck className="w-3 h-3 text-white" /></div>
            <div className="absolute top-[55%] right-[35%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-purple-500 rounded flex items-center justify-center border border-purple-500/30 opacity-80"><Truck className="w-3 h-3 text-white" /></div>
            <div className="absolute bottom-[35%] right-[20%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded flex items-center justify-center border border-blue-500/30 opacity-80"><Truck className="w-3 h-3 text-white" /></div>
            <div className="absolute top-[45%] right-[25%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-red-500 rounded flex items-center justify-center border border-red-500/30 opacity-80"><Truck className="w-3 h-3 text-white" /></div>

          </div>

          {/* Map Controls */}
          <div className="absolute right-4 bottom-12 flex flex-col gap-1 z-10">
            <button className="w-6 h-6 bg-main/80 border border-border-main rounded flex items-center justify-center text-foreground hover:bg-main"><span className="text-lg leading-none">+</span></button>
            <button className="w-6 h-6 bg-main/80 border border-border-main rounded flex items-center justify-center text-foreground hover:bg-main"><span className="text-lg leading-none">-</span></button>
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-main/90 border-t border-border-main flex items-center justify-center gap-6 z-10">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-xs text-foreground">Available</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-xs text-foreground">On Duty</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500"></div><span className="text-xs text-foreground">Busy</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="text-xs text-foreground">Hospital</span></div>
          </div>
        </div>

        {/* Right Stack */}
        <div className="xl:col-span-3 flex flex-col gap-4 h-[380px]">
          
          {/* Ambulance Status */}
          <div className="card p-4 border-border-main flex flex-col flex-1">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-sm font-medium text-foreground">Ambulance Status</h2>
              <button className="text-xs text-blue-500 hover:text-blue-400 font-medium">View All</button>
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
                  <span className="text-xl font-bold text-foreground leading-none">32</span>
                  <span className="text-[8px] text-foreground mt-0.5">Ambulances</span>
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
                      <span className="text-xs text-foreground w-8">({(d.value/32*100).toFixed(1)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-foreground ml-1 mb-0.5">Quick Actions</p>
            <div className="grid grid-cols-4 gap-2">
              {quickActions.map((action, i) => (
                <button key={i} className={`flex flex-col items-center justify-center p-2 rounded-lg border ${action.border} ${action.bg} hover:brightness-110 transition-all gap-1.5 h-16`}>
                  <action.icon className={`w-4 h-4 ${action.color}`} />
                  <span className={`text-[8px] font-medium ${action.color} text-center leading-tight`}>{action.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Critical Alerts */}
          <div className="card p-3 border-border-main flex flex-col flex-1">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-medium text-foreground">Critical Alerts</h2>
              <button className="text-xs text-blue-500 hover:text-blue-400 font-medium">View All</button>
            </div>
            <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
              {criticalAlerts.map((alert, i) => (
                <div key={i} className="flex gap-2 items-start bg-border-main/30 rounded p-1.5">
                  <alert.icon className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${alert.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground font-medium truncate">{alert.desc}</p>
                    <p className="text-[8px] text-foreground truncate mt-0.5">{alert.sub}</p>
                  </div>
                  <span className="text-[8px] text-foreground whitespace-nowrap">{alert.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Active Trips */}
        <div className="lg:col-span-4 card p-4 flex flex-col border-border-main">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-medium text-foreground">Active Trips</h2>
            <button className="text-xs text-blue-500 hover:text-blue-400 font-medium">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-xs uppercase tracking-wider text-foreground">
                  <th className="py-2 font-medium">Trip ID / Patient</th>
                  <th className="py-2 font-medium">From / To</th>
                  <th className="py-2 font-medium">Status</th>
                  <th className="py-2 font-medium text-right">ETA</th>
                </tr>
              </thead>
              <tbody>
                {activeTrips.map((trip, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-black/5 transition-colors">
                    <td className="py-2 pr-2">
                      <div className="flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-blue-500" />
                        <div>
                          <p className="text-xs font-medium text-foreground">{trip.id}</p>
                          <p className="text-xs text-foreground">{trip.patient}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2">
                      <p className="text-xs text-foreground truncate max-w-[100px]">{trip.from}</p>
                      <p className="text-xs text-foreground truncate max-w-[100px]">to {trip.to}</p>
                    </td>
                    <td className="py-2 px-2">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${trip.sColor}`}>
                        {trip.status}
                      </span>
                    </td>
                    <td className="py-2 pl-2 text-right text-xs text-foreground font-medium">{trip.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Trips */}
        <div className="lg:col-span-3 card p-4 flex flex-col border-border-main">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-medium text-foreground">Recent Trips</h2>
            <button className="text-xs text-blue-500 hover:text-blue-400 font-medium">View All</button>
          </div>
          <div className="flex flex-col gap-3">
            {recentTrips.map((trip, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{trip.id}</p>
                    <p className="text-xs text-foreground">{trip.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-foreground">{trip.time}</p>
                  <p className="text-xs text-foreground">{trip.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Overview */}
        <div className="lg:col-span-3 card p-4 flex flex-col border-border-main">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-medium text-foreground">Performance Overview</h2>
            <button className="flex items-center gap-1 text-xs text-foreground hover:text-foreground">
              This Week <ChevronDown className="w-2.5 h-2.5" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-4 border-b border-border-main pb-3">
            <div>
              <p className="text-[8px] text-foreground mb-0.5">Response Time (Avg)</p>
              <p className="text-sm font-bold text-foreground">8m 24s</p>
              <p className="text-xs text-green-500 mt-0.5 flex items-center gap-0.5"><Activity className="w-2.5 h-2.5" /> 12%</p>
            </div>
            <div>
              <p className="text-[8px] text-foreground mb-0.5">Completion Rate</p>
              <p className="text-sm font-bold text-foreground">96.8%</p>
              <p className="text-xs text-green-500 mt-0.5 flex items-center gap-0.5"><Activity className="w-2.5 h-2.5" /> 4%</p>
            </div>
            <div>
              <p className="text-[8px] text-foreground mb-0.5">On-Time Arrival</p>
              <p className="text-sm font-bold text-foreground">92.5%</p>
              <p className="text-xs text-green-500 mt-0.5 flex items-center gap-0.5"><Activity className="w-2.5 h-2.5" /> 6%</p>
            </div>
          </div>

          <div className="h-[90px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={perfData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(150,150,150,0.1)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 8 }} dy={5} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 8 }} ticks={[0, 5, 10, 15]} tickFormatter={(v) => `${v}m`} />
                <Area type="monotone" dataKey="val" stroke="#3b82f6" strokeWidth={2} fill="url(#colorPerf)" activeDot={{ r: 3, fill: '#3b82f6' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fleet Status */}
        <div className="lg:col-span-2 card p-4 flex flex-col border-border-main">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-medium text-foreground">Fleet Status</h2>
            <button className="text-xs text-blue-500 hover:text-blue-400 font-medium">View All</button>
          </div>
          
          <div className="flex flex-col gap-3 flex-1">
            {fleetStatus.map((fleet, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded flex items-center justify-center bg-card border border-border-main ${fleet.color}`}>
                    <Truck className="w-3 h-3" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{fleet.id}</p>
                    <p className="text-[8px] text-foreground">{fleet.plate}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium ${fleet.color}`}>{fleet.status}</span>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-2 py-1.5 text-center text-xs text-foreground hover:text-foreground transition-colors border-t border-border-main pt-2 flex items-center justify-center gap-1">
            View Full Fleet <ChevronDown className="w-3 h-3 -rotate-90" />
          </button>
        </div>

      </div>
    </DashboardLayout>
  );
}
