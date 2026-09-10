'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Activity, Heart, ActivitySquare, CheckCircle2, Filter, Eye, ChevronLeft, ChevronRight
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

export default function VitalsMonitorPage() {
  const vitals = [
    { name: 'Rahul Verma', avatar: 'https://i.pravatar.cc/150?img=11', time: '10:30 AM', bp: '120/80', hr: '72', spo2: '98', temp: '36.8', status: 'Normal' },
    { name: 'Neha Gupta', avatar: 'https://i.pravatar.cc/150?img=9', time: '10:20 AM', bp: '135/90', hr: '102', spo2: '95', temp: '37.1', status: 'High BP' },
    { name: 'Amit Kumar', avatar: 'https://i.pravatar.cc/150?img=15', time: '10:15 AM', bp: '90/60', hr: '114', spo2: '92', temp: '37.6', status: 'Tachycardia' },
    { name: 'Sunita Reddy', avatar: 'https://i.pravatar.cc/150?img=20', time: '10:10 AM', bp: '118/76', hr: '78', spo2: '97', temp: '36.8', status: 'Normal' },
    { name: 'Vikram Patel', avatar: 'https://i.pravatar.cc/150?img=12', time: '10:05 AM', bp: '110/70', hr: '85', spo2: '96', temp: '37.0', status: 'Normal' },
    { name: 'Pooja Sharma', avatar: 'https://i.pravatar.cc/150?img=47', time: '10:00 AM', bp: '140/95', hr: '105', spo2: '93', temp: '37.2', status: 'High BP' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Normal': return 'text-green-500';
      case 'High BP': return 'text-red-500';
      case 'Tachycardia': return 'text-red-500';
      default: return 'text-foreground';
    }
  };

  const MiniTrend = ({ status }: { status: string }) => {
    const data = status === 'Normal' 
      ? [{v:3},{v:4},{v:3},{v:5},{v:4},{v:3},{v:4}]
      : status === 'High BP'
      ? [{v:4},{v:5},{v:6},{v:5},{v:7},{v:8},{v:7}]
      : [{v:4},{v:8},{v:3},{v:9},{v:4},{v:7},{v:5}];

    const color = status === 'Normal' ? '#22c55e' : '#ef4444';

    return (
      <div className="w-16 h-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="v" stroke={color} strokeWidth={1.5} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Vitals Monitor
          </h1>
          <p className="text-sm text-foreground mt-0.5">Monitor and track patient vital signs</p>
        </div>
        
        <div className="flex items-center gap-3 bg-card p-1 rounded-lg border border-border-main">
          <button className="px-4 py-1.5 bg-[#5b21b6] text-foreground text-sm font-medium rounded-md">Today</button>
          <button className="px-4 py-1.5 text-foreground hover:text-foreground text-sm font-medium rounded-md transition-colors">7 Days</button>
          <button className="px-4 py-1.5 text-foreground hover:text-foreground text-sm font-medium rounded-md transition-colors">30 Days</button>
          <div className="w-px h-4 bg-border-main mx-1"></div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground text-sm font-medium rounded-md transition-colors">
            <Filter className="w-3 h-3" /> Filters
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <Activity className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">BP Alerts</span>
            <span className="text-[20px] font-bold text-foreground leading-tight mb-0.5">03</span>
            <span className="text-[9px] text-red-500 font-medium mt-0.5">High / Low</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <Heart className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">HR Alerts</span>
            <span className="text-[20px] font-bold text-foreground leading-tight mb-0.5">02</span>
            <span className="text-[9px] text-red-500 font-medium mt-0.5">High / Low</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <ActivitySquare className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">SpO₂ Alerts</span>
            <span className="text-[20px] font-bold text-foreground leading-tight mb-0.5">01</span>
            <span className="text-[9px] text-red-500 font-medium mt-0.5">Low Oxygen</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Normal Vitals</span>
            <span className="text-[20px] font-bold text-foreground leading-tight mb-0.5">10</span>
            <span className="text-[9px] text-green-500 font-medium mt-0.5">Patients</span>
          </div>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider bg-main">
                <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                <th className="font-medium p-4 whitespace-nowrap">Time</th>
                <th className="font-medium p-4 whitespace-nowrap">BP <span className="text-[8px] normal-case">(mmHg)</span></th>
                <th className="font-medium p-4 whitespace-nowrap">HR <span className="text-[8px] normal-case">(bpm)</span></th>
                <th className="font-medium p-4 whitespace-nowrap">SpO₂ <span className="text-[8px] normal-case">(%)</span></th>
                <th className="font-medium p-4 whitespace-nowrap">Temp <span className="text-[8px] normal-case">(°C)</span></th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap">Trend</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {vitals.map((v, i) => {
                const isBpHigh = v.bp === '135/90' || v.bp === '140/95';
                const isBpLow = v.bp === '90/60';
                const bpColor = isBpHigh || isBpLow ? 'text-red-500' : 'text-foreground';
                
                return (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full overflow-hidden border border-border-main shrink-0 bg-slate-800">
                        <img src={v.avatar} alt={v.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm text-foreground">{v.name}</span>
                    </div>
                  </td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{v.time}</td>
                  <td className={`p-4 py-3.5 text-sm font-medium ${bpColor}`}>{v.bp}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{v.hr}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{v.spo2}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{v.temp}</td>
                  <td className={`p-4 py-3.5 text-sm font-medium ${getStatusColor(v.status)}`}>{v.status}</td>
                  <td className="p-4 py-3.5">
                    <MiniTrend status={v.status} />
                  </td>
                  <td className="p-4 py-3.5">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 6 of 16 records</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
