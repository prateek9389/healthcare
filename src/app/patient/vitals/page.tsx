'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Heart, Droplet, HeartPulse, Thermometer, Calendar, Activity, Lightbulb } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function VitalsPage() {
  const vitalsData = [
    { name: '25 May', bp: 120, hr: 72, spo2: 98, temp: 36.6 },
    { name: '26 May', bp: 118, hr: 75, spo2: 98, temp: 36.5 },
    { name: '27 May', bp: 122, hr: 70, spo2: 99, temp: 36.6 },
    { name: '28 May', bp: 119, hr: 74, spo2: 98, temp: 36.7 },
    { name: '29 May', bp: 121, hr: 71, spo2: 97, temp: 36.5 },
    { name: '30 May', bp: 117, hr: 73, spo2: 98, temp: 36.6 },
    { name: '31 May', bp: 120, hr: 72, spo2: 98, temp: 36.6 },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            My Vitals
          </h1>
          <p className="text-sm text-foreground mt-1">Track your vital signs and keep an eye on your health</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border-main text-foreground text-sm font-medium rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
          <Calendar className="w-3.5 h-3.5" /> Last 7 Days <span className="ml-1 text-[8px]">▼</span>
        </button>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        <div className="card p-4 border-border-main bg-card shadow-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground">Blood Pressure</span>
            <span className="text-[20px] font-bold text-foreground mt-0.5 leading-none">120/80 <span className="text-xs font-normal text-foreground">mmHg</span></span>
            <span className="text-xs text-green-600 dark:text-green-400 mt-1.5 font-medium">Normal</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
            <HeartPulse className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground">Heart Rate</span>
            <span className="text-[20px] font-bold text-foreground mt-0.5 leading-none">72 <span className="text-xs font-normal text-foreground">bpm</span></span>
            <span className="text-xs text-green-600 dark:text-green-400 mt-1.5 font-medium">Normal</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
            <Droplet className="w-5 h-5 text-cyan-600 dark:text-cyan-400 fill-cyan-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground">SpO2</span>
            <span className="text-[20px] font-bold text-foreground mt-0.5 leading-none">98%</span>
            <span className="text-xs text-green-600 dark:text-green-400 mt-1.5 font-medium">Normal</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
            <Thermometer className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground">Temperature</span>
            <span className="text-[20px] font-bold text-foreground mt-0.5 leading-none">36.6°C</span>
            <span className="text-xs text-green-600 dark:text-green-400 mt-1.5 font-medium">Normal</span>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        
        {/* Left Chart */}
        <div className="lg:col-span-3 card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-5 border-b border-border-main">
            <h2 className="text-lg font-bold text-foreground">Vitals Trend</h2>
          </div>
          <div className="p-5 flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vitalsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dx={-10} domain={[0, 150]} ticks={[0, 30, 60, 90, 120, 150]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', fontSize: '11px', color: '#f8fafc' }}
                  itemStyle={{ fontSize: '11px' }}
                />
                <Line type="monotone" dataKey="bp" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 0 }} activeDot={{ r: 6 }} name="Blood Pressure (mmHg)" />
                <Line type="monotone" dataKey="hr" stroke="#ec4899" strokeWidth={2} dot={{ r: 4, fill: '#ec4899', strokeWidth: 0 }} activeDot={{ r: 6 }} name="Heart Rate (bpm)" />
                <Line type="monotone" dataKey="spo2" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }} activeDot={{ r: 6 }} name="SpO2 (%)" />
                <Line type="monotone" dataKey="temp" stroke="#eab308" strokeWidth={2} dot={{ r: 4, fill: '#eab308', strokeWidth: 0 }} activeDot={{ r: 6 }} name="Temperature (°C)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="p-4 border-t border-border-main flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2"><div className="w-2 h-1 bg-[#8b5cf6] rounded-full"></div><span className="text-[9px] text-foreground">Blood Pressure (mmHg)</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-1 bg-[#ec4899] rounded-full"></div><span className="text-[9px] text-foreground">Heart Rate (bpm)</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-1 bg-[#3b82f6] rounded-full"></div><span className="text-[9px] text-foreground">SpO2 (%)</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-1 bg-[#eab308] rounded-full"></div><span className="text-[9px] text-foreground">Temperature (°C)</span></div>
          </div>
        </div>

        {/* Right Summary */}
        <div className="flex flex-col gap-6">
          <div className="card p-5 border-border-main bg-card shadow-lg flex flex-col h-full">
            <h2 className="text-lg font-bold text-foreground">Latest Reading</h2>
            <span className="text-xs text-foreground mt-1">(31 May 2025, 08:30 AM)</span>
            
            <div className="flex flex-col gap-4 mt-6 flex-1">
              <div className="flex items-center gap-4">
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-foreground font-medium">Blood Pressure</span>
                  <span className="text-xs text-foreground mt-0.5">120/80 mmHg</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <HeartPulse className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-foreground font-medium">Heart Rate</span>
                  <span className="text-xs text-foreground mt-0.5">72 bpm</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Droplet className="w-4 h-4 text-cyan-600 dark:text-cyan-400 fill-cyan-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-foreground font-medium">SpO2</span>
                  <span className="text-xs text-foreground mt-0.5">98%</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Thermometer className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-foreground font-medium">Temperature</span>
                  <span className="text-xs text-foreground mt-0.5">36.6°C</span>
                </div>
              </div>
            </div>

            <button className="w-full py-2.5 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors mt-6">
              Add New Reading
            </button>
          </div>
          
          <div className="card p-4 border-none bg-gradient-to-r from-blue-900/40 to-[#101423] flex items-start gap-3 shadow-lg">
            <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Tip</span>
              <span className="text-xs text-foreground mt-1 leading-relaxed">Measure your vitals at the same time each day for accurate tracking.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Support Banner */}
      <div className="card p-5 border-border-main bg-card flex items-center gap-4 shadow-lg">
        <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-foreground">Keep tracking your vitals</span>
          <span className="text-sm text-foreground mt-0.5">Regular tracking helps you and your doctor to understand your health better.</span>
        </div>
      </div>

    </DashboardLayout>
  );
}
