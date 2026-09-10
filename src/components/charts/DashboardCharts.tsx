'use client';

import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar
} from 'recharts';

const hospitalData = [
  { name: 'Jan', value: 1800 },
  { name: 'Feb', value: 2600 },
  { name: 'Mar', value: 2200 },
  { name: 'Apr', value: 3200 },
  { name: 'May', value: 3800 },
];

const appointmentData = [
  { name: 'Completed', value: 120, color: '#10b981' },
  { name: 'Upcoming', value: 150, color: '#3b82f6' },
  { name: 'Cancelled', value: 58, color: '#ef4444' },
];

const revenueData = Array.from({ length: 21 }, (_, i) => ({
  day: `May ${i + 1}`,
  revenue: Math.floor(Math.random() * 20000) + 10000
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border-main p-3 rounded-lg shadow-xl">
        <p className="text-foreground font-medium text-base mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color || '#3b82f6' }} className="text-base font-semibold">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const HospitalAreaChart = () => (
  <ResponsiveContainer width="100%" height={240}>
    <AreaChart data={hospitalData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <defs>
        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
          <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} dy={10} />
      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} tickFormatter={(val) => `${val/1000}K`} />
      <Tooltip content={<CustomTooltip />} />
      <Area 
        type="monotone" 
        dataKey="value" 
        stroke="#3b82f6" 
        strokeWidth={3} 
        fillOpacity={1} 
        fill="url(#colorValue)" 
        activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export const AppointmentDonutChart = () => {
  const total = appointmentData.reduce((acc, curr) => acc + curr.value, 0);
  
  return (
    <div className="relative h-[180px] w-[180px] mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={appointmentData}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {appointmentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-1">
        <span className="text-[28px] font-bold text-foreground leading-none">{total}</span>
        <span className="text-[14px] text-foreground mt-1">Total</span>
      </div>
    </div>
  );
};

export const RevenueBarChart = () => (
  <ResponsiveContainer width="100%" height={160}>
    <BarChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }} barSize={6}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
      <XAxis 
        dataKey="day" 
        axisLine={false} 
        tickLine={false} 
        tick={{ fill: '#64748b', fontSize: 10 }} 
        dy={10}
        interval={6} // Show roughly one tick per week
      />
      <YAxis 
        axisLine={false} 
        tickLine={false} 
        tick={{ fill: '#64748b', fontSize: 10 }} 
        tickFormatter={(val) => `${val/1000}K`} 
      />
      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
      <Bar dataKey="revenue" fill="#6366f1" radius={[3, 3, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);
