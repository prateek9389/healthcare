'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Truck, CheckCircle2, Activity, Wrench, AlertTriangle, ChevronDown, ChevronRight
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function AmbulanceStatusPage() {
  const stats = [
    { title: 'Total Ambulances', val: '32', sub: 'In Fleet', icon: Truck, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { title: 'Available', val: '18', sub: '56.3%', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10' },
    { title: 'On Duty', val: '8', sub: '25.0%', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Busy', val: '4', sub: '12.5%', icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'Maintenance', val: '2', sub: '6.2%', icon: Wrench, color: 'text-red-500', bg: 'bg-red-500/10' },
  ];

  const ambulanceList = [
    { id: 'AMB-101', driver: 'Vikas Sharma', status: 'Available', location: 'Connaught Place', updated: '1 min ago', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'AMB-102', driver: 'Pooja Mehta', status: 'On Duty', location: 'Saket, Delhi', updated: '2 mins ago', sColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { id: 'AMB-103', driver: 'Ramesh Kumar', status: 'Busy', location: 'AIIMS Hospital', updated: '3 mins ago', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { id: 'AMB-104', driver: 'Deepak Singh', status: 'On Duty', location: 'Rohini, Delhi', updated: '4 mins ago', sColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { id: 'AMB-105', driver: 'Anita Patel', status: 'Maintenance', location: 'Workshop', updated: '10 mins ago', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { id: 'AMB-106', driver: 'Suresh Yadav', status: 'Available', location: 'Dwarka, Delhi', updated: '1 min ago', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'AMB-107', driver: 'Kavita Joshi', status: 'On Duty', location: 'Karol Bagh', updated: '2 mins ago', sColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { id: 'AMB-108', driver: 'Mohd. Arif', status: 'Available', location: 'Shahdara', updated: '3 mins ago', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  const donutData = [
    { name: 'Available', value: 18, color: '#10b981' },
    { name: 'On Duty', value: 8, color: '#3b82f6' },
    { name: 'Busy', value: 4, color: '#f97316' },
    { name: 'Maintenance', value: 2, color: '#ef4444' },
  ];

  const maintenanceAlerts = [
    { id: 'AMB-105', msg: 'Regular service due', due: 'Due in 2 days' },
    { id: 'AMB-107', msg: 'Oil change required', due: 'Due in 5 days' },
    { id: 'AMB-103', msg: 'Brake inspection due', due: 'Due in 7 days' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-red-500/20 text-red-500">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground tracking-wide">
              Ambulance Status
            </h1>
            <p className="text-sm text-foreground mt-0.5">Monitor real-time status and availability of all ambulances</p>
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Ambulance List */}
        <div className="lg:col-span-8 card p-4 flex flex-col border-border-main min-h-[500px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-foreground">Ambulance List</h2>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground">
                  <th className="py-2.5 font-medium">Ambulance ID</th>
                  <th className="py-2.5 font-medium">Driver</th>
                  <th className="py-2.5 font-medium">Status</th>
                  <th className="py-2.5 font-medium">Location</th>
                  <th className="py-2.5 font-medium text-right">Last Update</th>
                </tr>
              </thead>
              <tbody>
                {ambulanceList.map((amb, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-black/5 transition-colors">
                    <td className="py-3 pr-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-card border border-border-main flex items-center justify-center shrink-0">
                          <Truck className="w-3.5 h-3.5 text-foreground" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{amb.id}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-sm text-foreground">{amb.driver}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${amb.sColor}`}>
                        {amb.status}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{amb.location}</span>
                    </td>
                    <td className="py-3 pl-2 text-right">
                      <span className="text-xs text-foreground">{amb.updated}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full mt-3 py-1.5 text-center text-xs text-blue-500 hover:text-blue-400 font-medium transition-colors flex items-center justify-center gap-1 border-t border-border-main pt-3">
            View All Ambulances <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right Stack */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Fleet Status Chart */}
          <div className="card p-4 border-border-main flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium text-foreground">Fleet Status</h2>
            </div>
            <div className="flex items-center justify-between">
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
                      <span className="text-xs text-foreground w-8">({(d.value/32*100).toFixed(1)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Maintenance Alerts */}
          <div className="card p-4 border-border-main flex flex-col flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium text-foreground">Maintenance Alerts</h2>
            </div>
            <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
              {maintenanceAlerts.map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-main border border-white/5 hover:bg-main transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                      <Wrench className="w-3 h-3 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-red-500">{alert.id}</p>
                      <p className="text-xs text-foreground">{alert.msg}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-foreground">{alert.due}</span>
                    <ChevronRight className="w-3 h-3 text-foreground" />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-3 py-1.5 text-center text-xs text-blue-500 hover:text-blue-400 font-medium transition-colors border-t border-border-main pt-3">
              View All Alerts
            </button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
