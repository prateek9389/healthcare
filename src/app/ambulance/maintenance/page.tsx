'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Truck, Calendar, Wrench, AlertTriangle, CheckCircle2, ChevronDown, Plus, Eye, MoreHorizontal, AlertCircle
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function MaintenancePage() {
  const stats = [
    { title: 'Total Vehicles', val: '32', sub: '100% of Fleet', icon: Truck, color: 'text-red-500', bg: 'bg-red-500/10' },
    { title: 'Due for Service', val: '5', sub: '15.6%', icon: Calendar, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'In Service', val: '2', sub: '6.2%', icon: Wrench, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Overdue', val: '3', sub: '9.4%', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10' },
    { title: 'Completed', val: '22', sub: '68.8%', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10' },
  ];

  const maintenanceRecords = [
    { id: 'AMB-101', no: 'DL 1A AB 1234', type: 'Engine Service', priority: 'High', scheduled: 'May 20, 2025', status: 'Completed', last: 'May 20, 2025', next: 'Aug 20, 2025', sColor: 'text-green-500 bg-green-500/10 border-green-500/20', pColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { id: 'AMB-102', no: 'DL 1A AB 5678', type: 'Engine Service', priority: 'High', scheduled: 'May 23, 2025', status: 'Due Soon', last: 'Feb 23, 2025', next: 'May 23, 2025', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20', pColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { id: 'AMB-103', no: 'DL 1A AB 9012', type: 'Brake Inspection', priority: 'Medium', scheduled: 'May 18, 2025', status: 'Overdue', last: 'Feb 18, 2025', next: 'May 18, 2025', sColor: 'text-red-500 bg-red-500/10 border-red-500/20', pColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { id: 'AMB-104', no: 'DL 1A AB 3456', type: 'General Service', priority: 'Medium', scheduled: 'May 24, 2025', status: 'Due Soon', last: 'Feb 24, 2025', next: 'May 24, 2025', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20', pColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { id: 'AMB-105', no: 'DL 1A AB 7890', type: 'AC Service', priority: 'Low', scheduled: 'May 15, 2025', status: 'Completed', last: 'May 15, 2025', next: 'Aug 15, 2025', sColor: 'text-green-500 bg-green-500/10 border-green-500/20', pColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  const donutData = [
    { name: 'Completed', value: 22, color: '#10b981' },
    { name: 'Due for Service', value: 5, color: '#f59e0b' },
    { name: 'In Service', value: 2, color: '#3b82f6' },
    { name: 'Overdue', value: 3, color: '#ef4444' },
  ];

  const upcomingServices = [
    { id: 'AMB-102', no: 'DL 1A AB 5678', type: 'Engine Service', date: 'May 23, 2025', status: 'Due Soon' },
    { id: 'AMB-104', no: 'DL 1A AB 3456', type: 'Brake Inspection', date: 'May 24, 2025', status: 'Due Soon' },
    { id: 'AMB-107', no: 'DL 1A AB 1122', type: 'General Service', date: 'May 25, 2025', status: 'Due Soon' },
  ];

  const maintenanceAlerts = [
    { id: 'AMB-103', no: 'DL 1A AB 9012', msg: 'Brake inspection overdue', time: '2 days overdue', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/20' },
    { id: 'AMB-106', no: 'DL 1A AB 2244', msg: 'Oil change due soon', time: '1 day left', icon: AlertCircle, color: 'text-orange-500', bg: 'bg-orange-500/10 border-orange-500/20' },
    { id: 'AMB-107', no: 'DL 1A AB 1122', msg: 'Tire rotation due', time: '3 days left', icon: Wrench, color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-red-500/20 text-red-500">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground tracking-wide">
              Maintenance
            </h1>
            <p className="text-sm text-foreground mt-0.5">Track and manage ambulance maintenance and service schedules</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors">
            <Plus className="w-3.5 h-3.5" /> Schedule Maintenance
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
              <p className={`text-xs ${stat.title === 'Overdue' ? 'text-red-500' : stat.title === 'Due for Service' ? 'text-orange-500' : stat.title === 'Completed' ? 'text-green-500' : 'text-foreground'}`}>{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        
        {/* Maintenance Records */}
        <div className="xl:col-span-8 card p-4 flex flex-col border-border-main min-h-[500px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-foreground">Maintenance Records</h2>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground">
                  <th className="py-2.5 font-medium">Ambulance ID</th>
                  <th className="py-2.5 font-medium">Vehicle Number</th>
                  <th className="py-2.5 font-medium">Service Type</th>
                  <th className="py-2.5 font-medium text-center">Priority</th>
                  <th className="py-2.5 font-medium">Scheduled Date</th>
                  <th className="py-2.5 font-medium text-center">Status</th>
                  <th className="py-2.5 font-medium">Last Service</th>
                  <th className="py-2.5 font-medium">Next Service Due</th>
                  <th className="py-2.5 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {maintenanceRecords.map((record, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-black/5 transition-colors">
                    <td className="py-3 pr-2">
                      <span className="text-sm font-medium text-foreground">{record.id}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{record.no}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{record.type}</span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${record.pColor}`}>
                        {record.priority}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{record.scheduled}</span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${record.sColor}`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-foreground">{record.last}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs font-medium text-foreground">{record.next}</span>
                    </td>
                    <td className="py-3 pl-2 text-right">
                      <div className="flex justify-end gap-1">
                        <button className="p-1.5 rounded text-foreground hover:text-foreground bg-main border border-white/5 transition-colors">
                          <Eye className="w-3 h-3" />
                        </button>
                        <button className="p-1.5 rounded text-foreground hover:text-foreground bg-main border border-white/5 transition-colors">
                          <MoreHorizontal className="w-3 h-3" />
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
            {/* Maintenance Overview */}
            <div className="card p-4 border-border-main flex flex-col justify-center">
              <h2 className="text-sm font-medium text-foreground mb-4">Maintenance Overview</h2>
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
                    <span className="text-lg font-bold text-foreground leading-none">32</span>
                    <span className="text-[7px] text-foreground mt-0.5">Total</span>
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

            {/* Upcoming Services */}
            <div className="card p-4 border-border-main flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-medium text-foreground">Upcoming Services</h2>
                <button className="text-xs text-blue-500 hover:text-blue-400">View All</button>
              </div>
              <div className="flex flex-col gap-4">
                {upcomingServices.map((srv, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                      <Truck className="w-3 h-3 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-0.5">
                        <p className="text-xs font-bold text-foreground">{srv.id}</p>
                        <span className="text-[8px] text-foreground">{srv.date}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-[8px] text-foreground truncate">{srv.no}</p>
                        <span className="px-1.5 py-0.5 rounded text-[8px] text-orange-500 bg-orange-500/10 border border-orange-500/20">{srv.status}</span>
                      </div>
                      <p className="text-xs text-foreground mt-0.5">{srv.type}</p>
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
              <button className="text-xs text-blue-500 hover:text-blue-400">View All</button>
            </div>
            <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1">
              {maintenanceAlerts.map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-main border border-white/5 hover:bg-main transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded flex items-center justify-center border shrink-0 ${alert.bg}`}>
                      <alert.icon className={`w-3.5 h-3.5 ${alert.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground mb-0.5">{alert.id} <span className="text-xs text-foreground font-normal ml-1">({alert.no})</span></p>
                      <p className="text-xs text-foreground">{alert.msg}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-medium ${alert.color}`}>{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
