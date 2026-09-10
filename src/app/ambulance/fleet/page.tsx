'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Truck, CheckCircle2, Activity, Wrench, AlertTriangle, ChevronDown, Plus, Eye, Edit2, Search, Clock
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function AmbulanceFleetPage() {
  const stats = [
    { title: 'Total Ambulances', val: '32', sub: '100% of Fleet', icon: Truck, color: 'text-red-500', bg: 'bg-red-500/10' },
    { title: 'Available', val: '18', sub: '56.3%', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10' },
    { title: 'On Duty', val: '8', sub: '25.0%', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Busy', val: '4', sub: '12.5%', icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'Maintenance', val: '2', sub: '6.2%', icon: Wrench, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  const fleetList = [
    { id: 'AMB-101', no: 'DL 1A AB 1234', type: 'Advanced Life Support', driver: 'Vikas Sharma', status: 'On Duty', loc: 'Connaught Place, Delhi', updated: '2 mins ago', miles: '45,230 km', sColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { id: 'AMB-102', no: 'DL 1A AB 5678', type: 'Advanced Life Support', driver: 'Pooja Mehta', status: 'On Duty', loc: 'Saket, Delhi', updated: '1 min ago', miles: '38,450 km', sColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { id: 'AMB-103', no: 'DL 1A AB 9012', type: 'Basic Life Support', driver: 'Ramesh Kumar', status: 'Busy', loc: 'AIIMS Hospital, Delhi', updated: 'Just now', miles: '52,180 km', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { id: 'AMB-104', no: 'DL 1A AB 3456', type: 'Advanced Life Support', driver: 'Deepak Singh', status: 'Available', loc: 'Dwarka, Delhi', updated: '3 mins ago', miles: '41,760 km', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'AMB-105', no: 'DL 1A AB 7890', type: 'Basic Life Support', driver: 'Suresh Yadav', status: 'Maintenance', loc: 'Service Center, Delhi', updated: '1 hour ago', miles: '33,120 km', sColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20' },
  ];

  const donutData = [
    { name: 'Available', value: 18, color: '#10b981' },
    { name: 'On Duty', value: 8, color: '#3b82f6' },
    { name: 'Busy', value: 4, color: '#f97316' },
    { name: 'Maintenance', value: 2, color: '#a855f7' },
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
              Ambulance Fleet
            </h1>
            <p className="text-sm text-foreground mt-0.5">Manage and monitor all ambulances in your fleet</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input type="text" placeholder="Search fleet, vehicle number, type..." className="w-[300px] bg-main border border-white/5 rounded-lg pl-9 pr-4 py-1.5 text-sm text-foreground focus:outline-none focus:border-red-500/50 transition-colors" />
          </div>
          <span className="text-sm font-medium text-foreground bg-card border border-border-main px-3 py-1.5 rounded-lg">
            May 21, 2025 <ChevronDown className="w-3.5 h-3.5 inline ml-1" />
          </span>
          <button className="flex items-center gap-1.5 px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors">
            <Plus className="w-3.5 h-3.5" /> Add Ambulance
          </button>
        </div>
      </div>

      {/* Top Stats Row */}
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
              <p className="text-xs text-foreground">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        
        {/* Fleet List */}
        <div className="xl:col-span-8 card p-4 flex flex-col border-border-main min-h-[500px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-foreground">Fleet List</h2>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground">
                  <th className="py-2.5 font-medium">Ambulance ID</th>
                  <th className="py-2.5 font-medium">Vehicle Number</th>
                  <th className="py-2.5 font-medium">Type</th>
                  <th className="py-2.5 font-medium">Driver</th>
                  <th className="py-2.5 font-medium">Status</th>
                  <th className="py-2.5 font-medium">Location</th>
                  <th className="py-2.5 font-medium">Last Updated</th>
                  <th className="py-2.5 font-medium">Mileage</th>
                  <th className="py-2.5 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {fleetList.map((amb, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-black/5 transition-colors">
                    <td className="py-3 pr-2">
                      <span className="text-sm font-medium text-foreground">{amb.id}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{amb.no}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{amb.type}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{amb.driver}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${amb.sColor}`}>
                        {amb.status}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{amb.loc}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{amb.updated}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs font-medium text-foreground">{amb.miles}</span>
                    </td>
                    <td className="py-3 pl-2 text-right">
                      <div className="flex justify-end gap-1">
                        <button className="p-1.5 rounded text-foreground hover:text-foreground bg-main border border-white/5 transition-colors">
                          <Eye className="w-3 h-3" />
                        </button>
                        <button className="p-1.5 rounded text-foreground hover:text-foreground bg-main border border-white/5 transition-colors">
                          <Edit2 className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Stack */}
        <div className="xl:col-span-4 flex flex-col gap-4">
          
          <div className="grid grid-cols-2 gap-4">
            {/* Fleet Utilization */}
            <div className="card p-4 border-border-main flex flex-col justify-center">
              <h2 className="text-sm font-medium text-foreground mb-4">Fleet Utilization</h2>
              <div className="flex items-center justify-center mb-4">
                <div className="w-[80px] h-[80px] relative">
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
                    <span className="text-lg font-bold text-foreground leading-none">62%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {donutData.map((d, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }}></div>
                      <span className="text-xs text-foreground">{d.name}</span>
                    </div>
                    <span className="text-xs font-bold text-foreground">{(d.value/32*100).toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card p-4 border-border-main flex flex-col justify-center">
              <h2 className="text-sm font-medium text-foreground mb-4">Quick Stats</h2>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-xs text-foreground">
                    <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> Total Distance Today</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-foreground">512.4 km</span>
                    <span className="text-xs text-green-500">↑ 12%</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-xs text-foreground">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Total Trips Today</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-foreground">48</span>
                    <span className="text-xs text-green-500">↑ 15%</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-xs text-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Avg Response Time</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-foreground">8m 24s</span>
                    <span className="text-xs text-green-500">↓ 12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fleet Location Map */}
          <div className="card p-0 border-border-main flex flex-col flex-1 min-h-[250px] relative overflow-hidden bg-white dark:bg-[#0a0f1a]">
            <div className="absolute top-3 left-4 z-10">
              <h2 className="text-base font-medium text-foreground drop-shadow-md">Fleet Location Map</h2>
            </div>
            
            {/* Map Mockup Background */}
            <div className="flex-1 relative w-full h-full bg-white dark:bg-[#0a0f1a]">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-60 pointer-events-none" style={{ backgroundImage: 'url("/images/map-bg.jpg")', filter: 'grayscale(100%)' }}></div>

              {/* Neighborhood Labels */}
              <span className="absolute top-[20%] left-[30%] text-[7px] text-foreground font-bold tracking-widest uppercase">ROHINI</span>
              <span className="absolute top-[30%] right-[25%] text-[7px] text-foreground font-bold tracking-widest uppercase">CONNAUGHT PLACE</span>
              <span className="absolute bottom-[35%] left-[20%] text-[7px] text-foreground font-bold tracking-widest uppercase">DWARKA</span>
              <span className="absolute bottom-[20%] right-[30%] text-[7px] text-foreground font-bold tracking-widest uppercase">SAKET</span>
              <span className="absolute bottom-[40%] right-[10%] text-[7px] text-foreground font-bold tracking-widest uppercase">NOIDA</span>

              {/* Ambulance Markers */}
              {/* Green - Available */}
              <div className="absolute top-[35%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-5 h-5 bg-green-500/20 border border-green-500/40 rounded flex items-center justify-center shadow-lg"><Truck className="w-2.5 h-2.5 text-green-500" /></div>
              </div>
              <div className="absolute top-[60%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-5 h-5 bg-green-500/20 border border-green-500/40 rounded flex items-center justify-center shadow-lg"><Truck className="w-2.5 h-2.5 text-green-500" /></div>
              </div>
              {/* Blue - On Duty */}
              <div className="absolute top-[25%] right-[20%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)] border border-blue-500/30"><Truck className="w-2.5 h-2.5 text-white" /></div>
              </div>
              {/* Orange - Busy */}
              <div className="absolute top-[45%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.5)] border border-orange-500/30"><Truck className="w-2.5 h-2.5 text-white" /></div>
              </div>
              {/* Red - Emergency/Maintenance? Actually red is usually emergency, purple is maintenance. Image shows red */}
              <div className="absolute top-[50%] right-[35%] transform -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse">
                <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.7)] border border-red-500/40"><Truck className="w-3 h-3 text-white" /></div>
              </div>

            </div>

            {/* Map Controls */}
            <div className="absolute right-3 bottom-3 flex flex-col gap-1 z-10">
              <button className="w-5 h-5 bg-main/80 border border-border-main rounded flex items-center justify-center text-foreground hover:bg-main"><span className="text-sm leading-none">+</span></button>
              <button className="w-5 h-5 bg-main/80 border border-border-main rounded flex items-center justify-center text-foreground hover:bg-main"><span className="text-sm leading-none">-</span></button>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
