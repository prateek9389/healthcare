'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Plus, Eye, Edit2, Trash2, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

// Custom circular progress for stat cards
const CircularProgress = ({ percentage, color }: { percentage: number, color: string }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg className="w-10 h-10 transform -rotate-90">
        <circle cx="20" cy="20" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="none" />
        <circle 
          cx="20" cy="20" r={radius} 
          stroke={color} strokeWidth="3" fill="none" 
          strokeDasharray={circumference} 
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-[8px] font-bold text-foreground">{percentage}%</span>
    </div>
  );
};

export default function AdminAmbulancesPage() {
  const ambulanceData = [
    { name: 'Available', value: 18, color: '#10b981' },
    { name: 'On Duty', value: 8, color: '#3b82f6' },
    { name: 'Emergency', value: 4, color: '#ef4444' },
    { name: 'Maintenance', value: 2, color: '#f59e0b' },
  ];

  const fleetList = [
    { id: 'AMB-001', driver: 'Rajesh Kumar', status: 'Available', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20', location: 'Civil Hospital, Main Gate', time: '2 mins ago' },
    { id: 'AMB-002', driver: 'Amit Singh', status: 'On Duty', statusColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', location: 'City Center, MG Road', time: '1 min ago' },
    { id: 'AMB-003', driver: 'Vikram Patel', status: 'Emergency', statusColor: 'bg-red-500/10 text-red-400 border-red-500/20', location: 'Emergency - Sector 12', time: 'Just now' },
    { id: 'AMB-004', driver: 'Suresh Yadav', status: 'On Duty', statusColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', location: 'Patel Nagar, West Zone', time: '3 mins ago' },
    { id: 'AMB-005', driver: 'Ramesh Gupta', status: 'Maintenance', statusColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20', location: 'Workshop', time: '15 mins ago' },
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
          Add Ambulance
        </button>
      </div>

      {/* Top Stats Row */}
      <div className="card grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/5 mb-6">
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Total Ambulances</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">32</p>
        </div>
        <div className="p-5 flex justify-between items-center">
          <div>
            <p className="text-[13px] font-medium text-foreground mb-1">Available</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              <p className="text-[28px] font-bold text-foreground leading-tight">18</p>
            </div>
          </div>
          <CircularProgress percentage={56.3} color="#10b981" />
        </div>
        <div className="p-5 flex justify-between items-center">
          <div>
            <p className="text-[13px] font-medium text-foreground mb-1">On Duty</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
              <p className="text-[28px] font-bold text-foreground leading-tight">8</p>
            </div>
          </div>
          <CircularProgress percentage={25.0} color="#3b82f6" />
        </div>
        <div className="p-5 flex justify-between items-center">
          <div>
            <p className="text-[13px] font-medium text-foreground mb-1">Emergency</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
              <p className="text-[28px] font-bold text-foreground leading-tight">4</p>
            </div>
          </div>
          <CircularProgress percentage={12.5} color="#ef4444" />
        </div>
        <div className="p-5 flex justify-between items-center">
          <div>
            <p className="text-[13px] font-medium text-foreground mb-1">Maintenance</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
              <p className="text-[28px] font-bold text-foreground leading-tight">2</p>
            </div>
          </div>
          <CircularProgress percentage={6.2} color="#f59e0b" />
        </div>
      </div>

      {/* Middle Split Layout */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Left: Ambulance Status Donut Chart */}
        <div className="card w-full lg:w-[400px] flex-shrink-0 p-5 border border-border-main flex flex-col">
          <h2 className="text-[16px] font-bold text-foreground mb-6">Ambulance Status</h2>
          <div className="flex-1 flex items-center justify-center gap-6">
            <div className="relative w-[160px] h-[160px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ambulanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {ambulanceData.map((entry, index) => (
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
                <span className="text-[28px] font-bold text-foreground leading-none">32</span>
                <span className="text-[13px] font-semibold text-foreground mt-1">Total</span>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Available', value: '18 (56.3%)', color: 'bg-[#10b981]' },
                { label: 'On Duty', value: '8 (25.0%)', color: 'bg-[#3b82f6]' },
                { label: 'Emergency', value: '4 (12.5%)', color: 'bg-[#ef4444]' },
                { label: 'Maintenance', value: '2 (6.2%)', color: 'bg-[#f59e0b]' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-semibold text-foreground">{item.label}</span>
                    <span className="text-[14px] font-medium text-foreground">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Live Ambulance Map */}
        <div className="card flex-1 p-5 border border-border-main flex flex-col relative overflow-hidden min-h-[300px]">
          <h2 className="text-[16px] font-bold text-foreground mb-4 relative z-10">Live Ambulance Map</h2>
          
          {/* Mock Map Background Grid */}
          <div className="absolute inset-0 top-14 bg-main rounded-xl mx-5 mb-5 border border-border-main overflow-hidden flex items-center justify-center">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            {/* Mock Roads */}
            <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
              <path d="M0,100 Q200,150 400,50 T1000,200" stroke="#3b82f6" strokeWidth="4" fill="none" />
              <path d="M200,0 L300,400" stroke="#3b82f6" strokeWidth="3" fill="none" />
              <path d="M600,0 L500,400" stroke="#3b82f6" strokeWidth="3" fill="none" />
            </svg>

            {/* Pulsing Dots */}
            {/* Hospital */}
            <div className="absolute top-[40%] left-[50%] flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-purple-500/20 rounded-full animate-ping"></div>
              <div className="w-8 h-8 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.8)] z-10">
                <Plus className="w-4 h-4 text-foreground" strokeWidth={3} />
              </div>
            </div>

            {/* Ambulances */}
            <div className="absolute top-[20%] left-[20%] flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-green-500/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
              <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-[#0B1120] shadow-[0_0_10px_rgba(16,185,129,0.8)] z-10"></div>
            </div>
            
            <div className="absolute top-[60%] left-[30%] flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-[#0B1120] shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"></div>
            </div>

            <div className="absolute top-[70%] left-[70%] flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-red-500/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-[#0B1120] shadow-[0_0_10px_rgba(239,68,68,0.8)] z-10"></div>
            </div>

            <div className="absolute top-[30%] left-[80%] flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-green-500/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-[#0B1120] shadow-[0_0_10px_rgba(16,185,129,0.8)] z-10"></div>
            </div>

            {/* Legend inside map */}
            <div className="absolute bottom-4 left-4 flex gap-4 bg-card/80 backdrop-blur px-3 py-1.5 rounded-lg border border-border-main">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-[14px] text-foreground">Available</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-[14px] text-foreground">On Duty</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500"></div><span className="text-[14px] text-foreground">Emergency</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="text-[14px] text-foreground">Hospital</span></div>
            </div>

            <button className="absolute bottom-4 right-4 px-3 py-1.5 bg-[#4f46e5]/90 hover:bg-indigo-500 text-white text-[13px] font-bold rounded shadow-[0_0_10px_rgba(79,70,229,0.5)] transition-colors backdrop-blur z-20">
              View Full Map
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Table: Ambulance Fleet */}
      <div className="card border border-border-main overflow-hidden">
        <div className="p-4 border-b border-border-main flex justify-between items-center">
          <h2 className="text-[16px] font-bold text-foreground">Ambulance Fleet</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                <th className="py-3 px-6 font-medium">Ambulance ID</th>
                <th className="py-3 px-6 font-medium">Driver</th>
                <th className="py-3 px-6 font-medium">Status</th>
                <th className="py-3 px-6 font-medium">Location</th>
                <th className="py-3 px-6 font-medium">Last Updated</th>
                <th className="py-3 px-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fleetList.map((fleet, i) => (
                <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-6 text-[14px] font-semibold text-foreground">{fleet.id}</td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground">{fleet.driver}</td>
                  <td className="py-3 px-6">
                    <span className={`px-2 py-1 rounded text-[14px] font-medium border ${fleet.statusColor}`}>
                      {fleet.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground">{fleet.location}</td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground">{fleet.time}</td>
                  <td className="py-3 px-6">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                        <MapPin className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
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
          <p className="text-[13px] font-medium text-foreground">Showing 1 to 5 of 32 results</p>
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
              7
            </button>
            <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
