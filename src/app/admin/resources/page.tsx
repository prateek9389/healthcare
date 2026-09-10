'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Plus, ChevronDown, Eye, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from 'recharts';

export default function AdminHospitalResourcesPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Rooms', 'Beds', 'Equipment', 'Facilities'];

  // --- Overview Data ---
  const bedsByDept = [
    { name: 'ICU', value: 120, color: '#3b82f6', percent: '21.1%' },
    { name: 'General Ward', value: 200, color: '#10b981', percent: '35.2%' },
    { name: 'Semi Private', value: 148, color: '#f59e0b', percent: '26.1%' },
    { name: 'Private', value: 60, color: '#ef4444', percent: '10.6%' },
    { name: 'Others', value: 40, color: '#8b5cf6', percent: '7.0%' },
  ];

  const occupancyTrend = Array.from({ length: 21 }, (_, i) => ({
    date: `May ${i + 1}`,
    rate: Math.floor(Math.random() * (90 - 65 + 1)) + 65
  }));

  const deptSummary = [
    { name: 'ICU', rooms: 10, beds: 120, occupied: 98, available: 22, utilization: 81.7 },
    { name: 'Cardiology', rooms: 15, beds: 80, occupied: 62, available: 18, utilization: 77.5 },
    { name: 'Neurology', rooms: 12, beds: 70, occupied: 48, available: 22, utilization: 68.6 },
    { name: 'Orthopedics', rooms: 18, beds: 100, occupied: 72, available: 28, utilization: 72.0 },
  ];

  // --- Other Tabs Data ---
  const roomsList = [
    { id: 'R-101', type: 'ICU Room', dept: 'ICU', floor: '1st Floor', cap: 2, status: 'Occupied', statusColor: 'bg-red-500/10 text-red-400 border-red-500/20' },
    { id: 'R-102', type: 'ICU Room', dept: 'ICU', floor: '1st Floor', cap: 2, status: 'Available', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { id: 'R-201', type: 'General Ward', dept: 'General', floor: '2nd Floor', cap: 6, status: 'Occupied', statusColor: 'bg-red-500/10 text-red-400 border-red-500/20' },
    { id: 'R-202', type: 'General Ward', dept: 'General', floor: '2nd Floor', cap: 6, status: 'Available', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { id: 'R-301', type: 'Private Room', dept: 'Cardiology', floor: '3rd Floor', cap: 1, status: 'Occupied', statusColor: 'bg-red-500/10 text-red-400 border-red-500/20' },
  ];

  const bedsList = [
    { id: 'B-1001', room: 'R-101', type: 'ICU', patient: 'John Doe', status: 'Occupied', statusColor: 'bg-red-500/10 text-red-400 border-red-500/20' },
    { id: 'B-1002', room: 'R-101', type: 'ICU', patient: 'Robert Wilson', status: 'Occupied', statusColor: 'bg-red-500/10 text-red-400 border-red-500/20' },
    { id: 'B-1003', room: 'R-102', type: 'ICU', patient: '-', status: 'Available', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { id: 'B-2001', room: 'R-201', type: 'General', patient: 'Emily Davis', status: 'Occupied', statusColor: 'bg-red-500/10 text-red-400 border-red-500/20' },
    { id: 'B-2002', room: 'R-201', type: 'General', patient: 'Michael Brown', status: 'Occupied', statusColor: 'bg-red-500/10 text-red-400 border-red-500/20' },
  ];

  const eqList = [
    { id: 'EQP-001', name: 'MRI Machine', dept: 'Radiology', status: 'In Use', condition: 'Good', statColor: 'bg-green-500/10 text-green-400 border-green-500/20', condColor: 'text-green-500' },
    { id: 'EQP-002', name: 'X-Ray Machine', dept: 'Radiology', status: 'In Use', condition: 'Good', statColor: 'bg-green-500/10 text-green-400 border-green-500/20', condColor: 'text-green-500' },
    { id: 'EQP-003', name: 'Ventilator', dept: 'ICU', status: 'Available', condition: 'Excellent', statColor: 'bg-green-500/10 text-green-400 border-green-500/20', condColor: 'text-green-500' },
    { id: 'EQP-004', name: 'ECG Machine', dept: 'Cardiology', status: 'In Use', condition: 'Good', statColor: 'bg-green-500/10 text-green-400 border-green-500/20', condColor: 'text-green-500' },
    { id: 'EQP-005', name: 'Ultrasound', dept: 'Gynecology', status: 'Maintenance', condition: 'Fair', statColor: 'bg-red-500/10 text-red-400 border-red-500/20', condColor: 'text-red-500' },
  ];

  const facList = [
    { name: 'Operating Theatre', desc: 'Modular OT with laminar air flow', avail: '4/6', status: 'Available', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { name: 'Pharmacy', desc: '24x7 Pharmacy', avail: 'Open', status: 'Available', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { name: 'Laboratory', desc: 'Pathology & Diagnostic Lab', avail: 'Open', status: 'Available', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { name: 'Blood Bank', desc: '24x7 Blood Bank', avail: 'Available', status: 'Available', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { name: 'Cafeteria', desc: 'Patient & Staff Cafeteria', avail: 'Open', status: 'Available', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-medium text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          Add Resource
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-border-main pb-2 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap ${
              activeTab === tab 
                ? 'bg-white/10 text-foreground' 
                : 'text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === 'Overview' && (
        <div className="space-y-6">
          {/* Stats Row */}
          <div className="card grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="p-5">
              <p className="text-[13px] font-medium text-foreground mb-1">Total Rooms</p>
              <p className="text-[28px] font-bold text-foreground leading-tight">128</p>
            </div>
            <div className="p-5">
              <p className="text-[13px] font-medium text-foreground mb-1">Total Beds</p>
              <p className="text-[28px] font-bold text-foreground leading-tight">568</p>
            </div>
            <div className="p-5">
              <p className="text-[13px] font-medium text-foreground mb-1">Occupied Beds</p>
              <p className="text-[28px] font-bold text-foreground leading-tight">412</p>
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-[13px] font-bold text-green-500">72.5%</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-[13px] font-medium text-foreground mb-1">Available Beds</p>
              <p className="text-[28px] font-bold text-foreground leading-tight">156</p>
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="text-[13px] font-bold text-red-500">27.5%</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-[13px] font-medium text-foreground mb-1">Utilization Rate</p>
              <p className="text-[28px] font-bold text-foreground leading-tight">72.5%</p>
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-[13px] font-bold text-green-500">5.3%</span>
                <span className="text-[13px] font-semibold text-foreground">from last month</span>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-5 border border-border-main">
              <h2 className="text-[16px] font-bold text-foreground mb-6">Beds by Department</h2>
              <div className="flex items-center gap-8 justify-center">
                <div className="relative w-[180px] h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={bedsByDept}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={85}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {bedsByDept.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff', fontSize: '12px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-1">
                    <span className="text-[28px] font-bold text-foreground leading-none">568</span>
                    <span className="text-[13px] font-semibold text-foreground mt-1">Total Beds</span>
                  </div>
                </div>
                <div className="space-y-3 flex-1 max-w-[200px]">
                  {bedsByDept.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: item.color }}></div>
                        <span className="text-[13px] font-semibold text-foreground w-20">{item.name}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[13px] font-semibold text-foreground w-6 text-right">{item.value}</span>
                        <span className="text-[13px] font-semibold text-foreground w-10 text-right">({item.percent})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-5 border border-border-main">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[16px] font-bold text-foreground">Bed Occupancy Trend</h2>
                <button className="flex items-center gap-1 text-[13px] font-semibold text-foreground hover:text-foreground bg-transparent border border-border-main px-2 py-1 rounded">
                  This Month <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={occupancyTrend} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} dy={10} interval={4} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(val) => `${val}%`} domain={[0, 100]} />
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff', fontSize: '12px' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="#8b5cf6" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorOccupancy)" 
                      activeDot={{ r: 6, fill: '#8b5cf6', stroke: '#fff', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Department Wise Summary Table */}
          <div className="card border border-border-main overflow-hidden">
            <div className="p-4 border-b border-border-main">
              <h2 className="text-[16px] font-bold text-foreground">Department Wise Summary</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                    <th className="py-3 px-6 font-medium">Department</th>
                    <th className="py-3 px-6 font-medium">Rooms</th>
                    <th className="py-3 px-6 font-medium">Total Beds</th>
                    <th className="py-3 px-6 font-medium">Occupied</th>
                    <th className="py-3 px-6 font-medium">Available</th>
                    <th className="py-3 px-6 font-medium">Utilization</th>
                  </tr>
                </thead>
                <tbody>
                  {deptSummary.map((dept, i) => (
                    <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-6 text-[14px] font-semibold text-foreground">{dept.name}</td>
                      <td className="py-3 px-6 text-[13px] font-medium text-foreground">{dept.rooms}</td>
                      <td className="py-3 px-6 text-[13px] font-medium text-foreground">{dept.beds}</td>
                      <td className="py-3 px-6 text-[13px] font-medium text-foreground">{dept.occupied}</td>
                      <td className="py-3 px-6 text-[13px] font-medium text-foreground">{dept.available}</td>
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-[13px] font-semibold text-foreground w-8">{dept.utilization}%</span>
                          <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${dept.utilization > 80 ? 'bg-red-500' : 'bg-green-500'}`}
                              style={{ width: `${dept.utilization}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ROOMS TAB */}
      {activeTab === 'Rooms' && (
        <div className="card border border-border-main overflow-hidden">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <div>
              <h2 className="text-[14px] font-semibold text-foreground">Rooms</h2>
              <p className="text-[13px] font-semibold text-foreground mt-0.5">Hospital Resources &gt; Rooms</p>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-bold text-white shadow-[0_0_10px_rgba(79,70,229,0.3)]">
              <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              Add Room
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                  <th className="py-3 px-6 font-medium">Room ID</th>
                  <th className="py-3 px-6 font-medium">Room Type</th>
                  <th className="py-3 px-6 font-medium">Department</th>
                  <th className="py-3 px-6 font-medium">Floor</th>
                  <th className="py-3 px-6 font-medium">Capacity</th>
                  <th className="py-3 px-6 font-medium">Status</th>
                  <th className="py-3 px-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roomsList.map((room, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-6 text-[14px] font-semibold text-foreground">{room.id}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{room.type}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{room.dept}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{room.floor}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{room.cap}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 rounded text-[14px] font-medium border ${room.statusColor}`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="p-4 border-t border-border-main flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[13px] font-medium text-foreground">Showing 1 to 5 of 128 results</p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-7 h-7 rounded bg-[#4f46e5] text-white flex items-center justify-center text-[14px] font-medium shadow-[0_0_10px_rgba(79,70,229,0.3)]">
                1
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                2
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                3
              </button>
              <span className="px-1 text-slate-600 text-[14px]">...</span>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                25
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BEDS TAB */}
      {activeTab === 'Beds' && (
        <div className="card border border-border-main overflow-hidden">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <div>
              <h2 className="text-[14px] font-semibold text-foreground">Beds</h2>
              <p className="text-[13px] font-semibold text-foreground mt-0.5">Hospital Resources &gt; Beds</p>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-bold text-white shadow-[0_0_10px_rgba(79,70,229,0.3)]">
              <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              Add Bed
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                  <th className="py-3 px-6 font-medium">Bed ID</th>
                  <th className="py-3 px-6 font-medium">Room ID</th>
                  <th className="py-3 px-6 font-medium">Bed Type</th>
                  <th className="py-3 px-6 font-medium">Patient</th>
                  <th className="py-3 px-6 font-medium">Status</th>
                  <th className="py-3 px-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bedsList.map((bed, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-6 text-[14px] font-semibold text-foreground">{bed.id}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{bed.room}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{bed.type}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{bed.patient}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 rounded text-[14px] font-medium border ${bed.statusColor}`}>
                        {bed.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="p-4 border-t border-border-main flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[13px] font-medium text-foreground">Showing 1 to 5 of 568 results</p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-7 h-7 rounded bg-[#4f46e5] text-white flex items-center justify-center text-[14px] font-medium shadow-[0_0_10px_rgba(79,70,229,0.3)]">
                1
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                2
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                3
              </button>
              <span className="px-1 text-slate-600 text-[14px]">...</span>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                114
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EQUIPMENT TAB */}
      {activeTab === 'Equipment' && (
        <div className="card border border-border-main overflow-hidden">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <div>
              <h2 className="text-[14px] font-semibold text-foreground">Equipment</h2>
              <p className="text-[13px] font-semibold text-foreground mt-0.5">Hospital Resources &gt; Equipment</p>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-bold text-white shadow-[0_0_10px_rgba(79,70,229,0.3)]">
              <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              Add Equipment
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                  <th className="py-3 px-6 font-medium">Equipment ID</th>
                  <th className="py-3 px-6 font-medium">Equipment Name</th>
                  <th className="py-3 px-6 font-medium">Department</th>
                  <th className="py-3 px-6 font-medium">Status</th>
                  <th className="py-3 px-6 font-medium">Condition</th>
                  <th className="py-3 px-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {eqList.map((eq, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-6 text-[14px] font-semibold text-foreground">{eq.id}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{eq.name}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{eq.dept}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 rounded text-[14px] font-medium border ${eq.statColor}`}>
                        {eq.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <span className={`text-[14px] font-medium ${eq.condColor}`}>{eq.condition}</span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="p-4 border-t border-border-main flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[13px] font-medium text-foreground">Showing 1 to 5 of 245 results</p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-7 h-7 rounded bg-[#4f46e5] text-white flex items-center justify-center text-[14px] font-medium shadow-[0_0_10px_rgba(79,70,229,0.3)]">
                1
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                2
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                3
              </button>
              <span className="px-1 text-slate-600 text-[14px]">...</span>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                49
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FACILITIES TAB */}
      {activeTab === 'Facilities' && (
        <div className="card border border-border-main overflow-hidden">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <div>
              <h2 className="text-[14px] font-semibold text-foreground">Facilities</h2>
              <p className="text-[13px] font-semibold text-foreground mt-0.5">Hospital Resources &gt; Facilities</p>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-bold text-white shadow-[0_0_10px_rgba(79,70,229,0.3)]">
              <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              Add Facility
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                  <th className="py-3 px-6 font-medium">Facility</th>
                  <th className="py-3 px-6 font-medium">Description</th>
                  <th className="py-3 px-6 font-medium">Availability</th>
                  <th className="py-3 px-6 font-medium">Status</th>
                  <th className="py-3 px-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {facList.map((fac, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-6 text-[14px] font-semibold text-foreground">{fac.name}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{fac.desc}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{fac.avail}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 rounded text-[14px] font-medium border ${fac.statusColor}`}>
                        {fac.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </DashboardLayout>
  );
}
