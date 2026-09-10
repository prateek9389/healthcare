'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Activity, ShieldCheck, Clock, Users, Database, AlertTriangle, ChevronDown,
  RefreshCw, CheckCircle2, Server, HardDrive, Cpu, AlertCircle, Info
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, LineChart, Line } from 'recharts';

export default function AdminMonitoringPage() {
  const stats = [
    { title: 'Overall System Health', val: '99.8%', sub: 'Excellent', trend: '2.45%', isUp: true, icon: ShieldCheck, color: 'text-green-500', bg: 'bg-green-500/10', sparkData: [3,4,3,5,4,6,5,7], sparkColor: '#22c55e' },
    { title: 'Server Uptime', val: '100%', sub: 'Uptime', trend: 'No downtime recorded', isUp: null, icon: Server, color: 'text-blue-500', bg: 'bg-blue-500/10', sparkData: [5,5,5,5,5,5,5,5], sparkColor: '#3b82f6' },
    { title: 'API Response Time', val: '124 ms', sub: 'Average', trend: '8ms', isUp: false, textContext: 'from yesterday', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10', sparkData: [4,6,5,8,7,6,5,4], sparkColor: '#f97316' },
    { title: 'Active Users', val: '1,248', sub: 'Users Online', trend: '18.6%', isUp: true, icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10', sparkData: [2,3,4,3,5,6,8,7], sparkColor: '#a855f7' },
    { title: 'Database Performance', val: '98.6%', sub: 'Optimal', trend: 'Query time: 45ms avg', isUp: null, icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-500/10', sparkData: [4,4,5,4,6,5,4,5], sparkColor: '#10b981' },
    { title: 'System Alerts', val: '3', sub: 'Active', textContext: '2 Critical • 1 Warning', isUp: null, icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10', sparkData: [1,0,2,1,0,1,3,2], sparkColor: '#ef4444' },
  ];

  const perfData = Array.from({ length: 24 }, (_, i) => ({
    time: `${String(i).padStart(2, '0')}:00`,
    cpu: Math.floor(Math.random() * 40) + 20,
  }));
  // Force a peak for the mockup
  perfData[14].cpu = 42; 
  perfData[15].cpu = 38;
  perfData[16].cpu = 45;

  const services = [
    { name: 'Authentication Service', status: 'Healthy', uptime: '100%', color: 'text-green-500' },
    { name: 'Patient Service', status: 'Healthy', uptime: '100%', color: 'text-green-500' },
    { name: 'Appointment Service', status: 'Healthy', uptime: '100%', color: 'text-green-500' },
    { name: 'Notification Service', status: 'Healthy', uptime: '99.9%', color: 'text-green-500' },
    { name: 'AI Prediction Service', status: 'Healthy', uptime: '99.7%', color: 'text-green-500' },
    { name: 'File Storage Service', status: 'Healthy', uptime: '100%', color: 'text-green-500' },
    { name: 'Database Service', status: 'Healthy', uptime: '99.8%', color: 'text-green-500' },
    { name: 'Email Service', status: 'Warning', uptime: '98.2%', color: 'text-orange-500' },
    { name: 'Payment Service', status: 'Healthy', uptime: '100%', color: 'text-green-500' },
  ];

  const alerts = [
    { title: 'High CPU Usage Detected', desc: 'CPU usage is above 85% on server srv-02', time: '2 min ago', type: 'Critical', color: 'text-red-500' },
    { title: 'Database Response Time High', desc: 'Database response time is above 200ms', time: '8 min ago', type: 'Critical', color: 'text-red-500' },
    { title: 'Disk Space Running Low', desc: 'Server srv-03 disk usage is above 80%', time: '25 min ago', type: 'Warning', color: 'text-orange-500' },
    { title: 'High Memory Usage', desc: 'Memory usage is above 75% on server srv-01', time: '45 min ago', type: 'Info', color: 'text-blue-500' },
    { title: 'Backup Completed Successfully', desc: 'Daily system backup completed', time: '1 hour ago', type: 'Info', color: 'text-blue-500' },
  ];

  const servers = [
    { id: 'srv-01', type: 'Web Server', health: '100%', icon: Server, color: 'bg-green-500', isHealthy: true },
    { id: 'srv-02', type: 'Application Server', health: '92%', icon: Server, color: 'bg-green-500', isHealthy: true },
    { id: 'srv-03', type: 'Database Server', health: '88%', icon: Database, color: 'bg-orange-500', isHealthy: false },
    { id: 'srv-04', type: 'AI Server', health: '95%', icon: Cpu, color: 'bg-green-500', isHealthy: true },
  ];

  const networkData = Array.from({ length: 20 }, (_, i) => ({
    time: i,
    in: Math.random() * 1.5,
    out: Math.random() * 0.8,
  }));

  const logs = [
    { desc: 'Authentication service - User login successful', time: 'May 21, 2025 10:24:15 AM', type: 'Info', icon: ShieldCheck },
    { desc: 'Patient data synced successfully', time: 'May 21, 2025 10:23:42 AM', type: 'Info', icon: Database },
    { desc: 'High CPU usage detected on srv-02', time: 'May 21, 2025 10:22:33 AM', type: 'Warning', icon: AlertTriangle },
    { desc: 'Database connection optimized', time: 'May 21, 2025 10:21:10 AM', type: 'Info', icon: Database },
    { desc: 'Backup process started', time: 'May 21, 2025 10:20:05 AM', type: 'Info', icon: HardDrive },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-purple-500/20 text-purple-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
            <p className="text-[13px] font-medium text-foreground mt-0.5">Real-time monitoring of system performance, services and infrastructure</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
            Last 24 Hours
            <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-medium text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <RefreshCw className="w-3.5 h-3.5" />
            Refresh Now
          </button>
        </div>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="card p-4 border border-border-main flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start gap-3 relative z-10">
              <div className={`p-2 rounded-lg flex-shrink-0 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] text-foreground leading-tight truncate mb-1">{stat.title}</p>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <p className="text-[20px] font-bold text-foreground leading-none">{stat.val}</p>
                  <p className={`text-[14px] font-medium ${stat.color}`}>{stat.sub}</p>
                </div>
                {stat.isUp !== null ? (
                  <div className={`flex items-center gap-0.5 text-[9px] font-medium ${stat.isUp ? 'text-green-500' : 'text-orange-500'}`}>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={stat.isUp ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
                    </svg>
                    <span>{stat.trend}</span>
                    <span className="text-foreground font-normal ml-0.5">{stat.textContext}</span>
                  </div>
                ) : (
                  <div className="text-[9px] text-foreground mt-1">{stat.trend || stat.textContext}</div>
                )}
              </div>
            </div>
            {/* Inline Sparkline */}
            <div className="absolute bottom-0 left-0 right-0 h-10 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none">
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
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
        
        {/* System Performance */}
        <div className="xl:col-span-5 card p-4 border border-border-main flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[13px] font-medium text-foreground">System Performance</h2>
            <button className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border-main text-[14px] text-foreground hover:text-foreground">
              Last 24 Hours <ChevronDown className="w-2.5 h-2.5" />
            </button>
          </div>
          
          <div className="flex gap-2 mb-4">
            {['CPU Usage', 'Memory Usage', 'Disk Usage', 'Network I/O'].map((tab, i) => (
              <button key={tab} className={`px-2.5 py-1 rounded text-[14px] font-medium transition-colors ${i === 0 ? 'bg-[#4f46e5] text-white' : 'bg-white/5 text-foreground hover:text-white'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={perfData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 9 }} interval={3} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 9 }} tickFormatter={(val) => `${val}%`} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff', fontSize: '11px' }}
                  cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '3 3' }}
                />
                <Area type="monotone" dataKey="cpu" stroke="#a855f7" strokeWidth={2} fill="url(#colorCpu)" activeDot={{ r: 4, fill: '#a855f7', stroke: '#fff' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Services Status */}
        <div className="xl:col-span-3 card p-4 border border-border-main flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[13px] font-medium text-foreground">Services Status</h2>
            <button className="text-[14px] text-[#4f46e5] hover:text-indigo-400 font-medium">View All Services</button>
          </div>
          
          <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {services.map((svc, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-border-main last:border-0">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center bg-main border border-border-main`}>
                    <Activity className={`w-2 h-2 ${svc.color}`} />
                  </div>
                  <span className="text-[13px] font-semibold text-foreground">{svc.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[14px] font-medium ${svc.color}`}>{svc.status}</span>
                  <span className="text-[13px] text-foreground font-medium w-8 text-right">{svc.uptime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="xl:col-span-4 card p-4 border border-border-main flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[13px] font-medium text-foreground">System Alerts</h2>
            <button className="text-[14px] text-[#4f46e5] hover:text-indigo-400 font-medium">View All Alerts</button>
          </div>

          <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
            {alerts.map((alert, i) => (
              <div key={i} className="flex gap-3 items-start p-2.5 rounded-lg bg-main/30 border border-border-main hover:bg-white/[0.02] transition-colors">
                <div className={`mt-0.5 ${alert.color}`}>
                  {alert.type === 'Critical' ? <AlertTriangle className="w-4 h-4" /> :
                   alert.type === 'Warning' ? <AlertCircle className="w-4 h-4" /> :
                   <Info className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-foreground truncate">{alert.title}</p>
                  <p className="text-[14px] text-foreground line-clamp-1 mt-0.5">{alert.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-[9px] text-foreground">{alert.time}</span>
                  <span className={`text-[9px] font-medium ${alert.color}`}>{alert.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Server Overview */}
        <div className="xl:col-span-4 card p-4 border border-border-main flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[13px] font-medium text-foreground">Server Overview</h2>
            <button className="text-[14px] text-[#4f46e5] hover:text-indigo-400 font-medium">View All Servers</button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {servers.map((srv, i) => (
              <div key={i} className="bg-main/50 border border-border-main rounded-lg p-3 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded ${srv.color.replace('bg-', 'bg-').replace('500', '500/20')} ${srv.color.replace('bg-', 'text-')}`}>
                    <srv.icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-foreground leading-tight">{srv.id}</p>
                    <p className="text-[9px] text-foreground">{srv.type}</p>
                  </div>
                </div>
                <div className="flex justify-between items-end mb-1.5 mt-2">
                  <span className="text-[16px] font-bold text-foreground leading-none">{srv.health}</span>
                  <span className={`text-[9px] font-medium ${srv.isHealthy ? 'text-green-500' : 'text-orange-500'}`}>
                    {srv.isHealthy ? 'Healthy' : 'Warning'}
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${srv.color}`} style={{ width: srv.health }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Traffic */}
        <div className="xl:col-span-3 card p-4 border border-border-main flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[13px] font-medium text-foreground">Network Traffic</h2>
            <button className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border-main text-[14px] text-foreground hover:text-foreground">
              This Hour <ChevronDown className="w-2.5 h-2.5" />
            </button>
          </div>
          
          <div className="flex gap-6 mb-2 px-2">
            <div>
              <div className="flex items-center gap-1 text-[14px] font-bold text-foreground mb-0.5">
                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                1.25 GB
              </div>
              <p className="text-[14px] text-foreground">Incoming</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[14px] font-bold text-foreground mb-0.5">
                <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                0.85 GB
              </div>
              <p className="text-[14px] text-foreground">Outgoing</p>
            </div>
          </div>

          <div className="h-[100px] w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={networkData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="in" stroke="#10b981" strokeWidth={1.5} fill="url(#colorIn)" />
                <Area type="monotone" dataKey="out" stroke="#3b82f6" strokeWidth={1.5} fill="url(#colorOut)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Logs */}
        <div className="xl:col-span-5 card p-4 border border-border-main flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[13px] font-medium text-foreground">System Logs (Last 5)</h2>
            <button className="text-[14px] text-[#4f46e5] hover:text-indigo-400 font-medium">View All Logs</button>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <tbody>
                {logs.map((log, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-2 pr-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded border border-border-main bg-main">
                          <log.icon className="w-3 h-3 text-foreground" />
                        </div>
                        <span className="text-[13px] font-semibold text-foreground truncate max-w-[200px]">{log.desc}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-[14px] text-foreground text-right">{log.time}</td>
                    <td className="py-2 pl-2 text-right">
                      <span className={`text-[14px] font-medium ${log.type === 'Warning' ? 'text-orange-500' : 'text-blue-500'}`}>
                        {log.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
      `}</style>
    </DashboardLayout>
  );
}
