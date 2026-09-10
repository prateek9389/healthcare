'use client';

import React from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';

export type GlowColor = 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'red';

interface SparklineStatCardProps {
  title: string;
  value: string;
  trend: {
    value: string;
    positive: boolean;
  };
  icon: React.ReactNode;
  glowColor: GlowColor;
  sparklineData: number[];
}

export const SparklineStatCard = ({ title, value, trend, icon, glowColor, sparklineData }: SparklineStatCardProps) => {
  
  const colorMap = {
    blue: { iconBg: '#2563eb', shadow: 'shadow-[0_0_15px_rgba(37,99,235,0.6)]' },
    green: { iconBg: '#10b981', shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.6)]' },
    purple: { iconBg: '#8b5cf6', shadow: 'shadow-[0_0_15px_rgba(139,92,246,0.6)]' },
    orange: { iconBg: '#f59e0b', shadow: 'shadow-[0_0_15px_rgba(245,158,11,0.6)]' },
    teal: { iconBg: '#14b8a6', shadow: 'shadow-[0_0_15px_rgba(20,184,166,0.6)]' },
    red: { iconBg: '#ef4444', shadow: 'shadow-[0_0_15px_rgba(239,68,68,0.6)]' },
  };

  const theme = colorMap[glowColor];
  
  const data = sparklineData.map((val, i) => ({ index: i, value: val }));
  const min = Math.min(...sparklineData);
  const max = Math.max(...sparklineData);

  return (
    <div className="card p-4 relative overflow-hidden group">
      <div className="flex justify-between items-start mb-1">
        <p className="text-[14px] font-semibold text-foreground">{title}</p>
        <div 
          className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${theme.shadow}`}
          style={{ backgroundColor: theme.iconBg }}
        >
          {icon}
        </div>
      </div>
      
      <p className="text-[28px] font-bold text-foreground tracking-tight leading-none mb-2">{value}</p>
      
      <div className="flex items-center gap-1 mb-2">
        {trend.positive ? (
          <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        )}
        <span className={`text-[13px] font-bold ${trend.positive ? 'text-green-500' : 'text-red-500'}`}>
          {trend.value.split(' ')[0]}
        </span>
        <span className="text-[13px] font-semibold text-foreground ml-1">
          {trend.value.substring(trend.value.indexOf(' ') + 1)}
        </span>
      </div>

      <div className="h-10 w-full mt-2 -ml-2 -mb-2">
        <ResponsiveContainer width="105%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`gradient-${glowColor}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={theme.iconBg} stopOpacity={0.4}/>
                <stop offset="95%" stopColor={theme.iconBg} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <YAxis domain={[min - (max-min)*0.2, max + (max-min)*0.2]} hide />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={theme.iconBg} 
              strokeWidth={2}
              fillOpacity={1} 
              fill={`url(#gradient-${glowColor})`} 
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
