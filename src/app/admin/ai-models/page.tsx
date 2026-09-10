'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Calendar as CalendarIcon, Download, Search, ChevronDown, Eye, Edit2, MoreVertical,
  Activity, Shield, ShieldAlert, HeartPulse, Brain, AlertTriangle
} from 'lucide-react';
import { 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip 
} from 'recharts';

export default function AdminAIModelsPage() {
  const tabs = ['AI Models', 'Analytics Overview', 'Predictive Insights', 'Data Insights', 'Risk Analytics'];

  // --- Mock Data ---
  const aiModels = [
    { name: 'Heart Disease Risk Model', sub: 'Cardiovascular AI', type: 'Classification', typeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', acc: '94.6%', accTrend: '3.2%', pred: '8,456', status: 'Active', updated: '2 hrs ago', icon: HeartPulse, iconColor: 'text-red-500' },
    { name: 'Diabetes Prediction Model', sub: 'Endocrinology AI', type: 'Prediction', typeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', acc: '93.1%', accTrend: '4.1%', pred: '5,231', status: 'Active', updated: '4 hrs ago', icon: Activity, iconColor: 'text-blue-500' },
    { name: 'Kidney Disease Model', sub: 'Nephrology AI', type: 'Classification', typeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', acc: '91.8%', accTrend: '2.8%', pred: '3,982', status: 'Active', updated: '1 hr ago', icon: Activity, iconColor: 'text-green-500' },
    { name: 'Pneumonia Detection Model', sub: 'Pulmonology AI', type: 'Detection', typeColor: 'bg-green-500/10 text-green-400 border-green-500/20', acc: '96.2%', accTrend: '5.3%', pred: '4,123', status: 'Active', updated: '30 min ago', icon: Activity, iconColor: 'text-cyan-500' },
    { name: 'Health Score Engine', sub: 'Multi-parameter AI', type: 'Scoring', typeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', acc: '90.7%', accTrend: '3.7%', pred: '12,345', status: 'Active', updated: '1 hr ago', icon: Brain, iconColor: 'text-yellow-500' },
    { name: 'Sepsis Early Detection', sub: 'Critical Care AI', type: 'Detection', typeColor: 'bg-green-500/10 text-green-400 border-green-500/20', acc: '95.4%', accTrend: '4.8%', pred: '2,145', status: 'Active', updated: '45 min ago', icon: AlertTriangle, iconColor: 'text-orange-500' },
    { name: 'Cancer Risk Assessment', sub: 'Oncology AI', type: 'Risk Assessment', typeColor: 'bg-red-500/10 text-red-400 border-red-500/20', acc: '89.3%', accTrend: '2.1%', pred: '1,987', status: 'Active', updated: '2 hrs ago', icon: Activity, iconColor: 'text-purple-500' },
    { name: 'Readmission Risk Model', sub: 'Hospital Analyses AI', type: 'Prediction', typeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', acc: '88.6%', accTrend: '3.4%', pred: '1,564', status: 'Active', updated: '3 hrs ago', icon: Activity, iconColor: 'text-orange-400' },
  ];

  const accuracyTrendData = [
    { name: 'Dec \'24', m1: 85, m2: 82, m3: 88, m4: 90, m5: 80 },
    { name: 'Jan \'25', m1: 88, m2: 85, m3: 90, m4: 92, m5: 84 },
    { name: 'Feb \'25', m1: 90, m2: 87, m3: 92, m4: 94, m5: 86 },
    { name: 'Mar \'25', m1: 92, m2: 89, m3: 90, m4: 95, m5: 88 },
    { name: 'Apr \'25', m1: 91, m2: 88, m3: 91, m4: 93, m5: 87 },
    { name: 'May \'25', m1: 94.6, m2: 93.1, m3: 91.8, m4: 96.2, m5: 90.7 },
  ];

  const predictionDistribution = [
    { name: 'High Confidence (>90%)', value: 12847, color: '#10b981' },
    { name: 'Medium Confidence (70-90%)', value: 8234, color: '#3b82f6' },
    { name: 'Low Confidence (<70%)', value: 3772, color: '#f59e0b' },
  ];

  const heatmapData = [
    { name: 'Heart Disease Risk', acc: 94.6, prec: 93.2, rec: 95.1, f1: 94.1, auc: 0.96 },
    { name: 'Diabetes Prediction', acc: 93.1, prec: 92.4, rec: 93.8, f1: 93.1, auc: 0.94 },
    { name: 'Kidney Disease', acc: 91.8, prec: 90.7, rec: 92.1, f1: 91.4, auc: 0.93 },
    { name: 'Pneumonia Detection', acc: 96.2, prec: 95.4, rec: 96.8, f1: 96.1, auc: 0.98 },
    { name: 'Health Score Engine', acc: 90.7, prec: 89.6, rec: 91.3, f1: 90.4, auc: 0.91 },
  ];

  // Helper to color heatmap cells based on value
  const getHeatmapColor = (val: number, isAuc: boolean = false) => {
    const v = isAuc ? val * 100 : val;
    if (v >= 95) return 'bg-[#10b981] text-foreground'; // Green
    if (v >= 92) return 'bg-[#84cc16] text-[#0B1120]'; // Lime
    if (v >= 90) return 'bg-[#eab308] text-[#0B1120]'; // Yellow
    if (v >= 89) return 'bg-[#f97316] text-foreground'; // Orange
    return 'bg-[#ef4444] text-foreground'; // Red
  };

  const patientTrendData = Array.from({ length: 7 }, (_, i) => ({
    date: `May ${15 + i}`,
    total: Math.floor(Math.random() * 1000) + 2000,
    new: Math.floor(Math.random() * 200) + 100,
  }));

  const diseaseTrends = [
    { name: 'Hypertension', value: 1234, trend: '+14.5%', max: 1500, color: 'bg-purple-500' },
    { name: 'Diabetes', value: 987, trend: '+11.2%', max: 1500, color: 'bg-blue-500' },
    { name: 'Heart Disease', value: 654, trend: '+8.7%', max: 1500, color: 'bg-red-500' },
    { name: 'Respiratory Disease', value: 543, trend: '+6.3%', max: 1500, color: 'bg-cyan-500' },
    { name: 'Kidney Disease', value: 321, trend: '+4.1%', max: 1500, color: 'bg-green-500' },
    { name: 'Others', value: 456, trend: '-2.1%', max: 1500, color: 'bg-orange-500', isDown: true },
  ];

  const alerts = [
    { title: 'High Risk Alert', desc: '15 patients identified with high cardiac risk', time: '5 min ago', icon: ShieldAlert, color: 'text-red-500', bg: 'bg-red-500/10' },
    { title: 'Model Performance', desc: 'Heart Disease model accuracy improved by 4.2%', time: '1 hr ago', icon: Activity, color: 'text-green-500', bg: 'bg-green-500/10' },
    { title: 'Data Quality', desc: 'Data quality score is 96.2% this month', time: '2 hrs ago', icon: Shield, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'System Update', desc: 'All AI models updated successfully', time: '3 hrs ago', icon: Brain, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
          <p className="text-[13px] font-medium text-foreground mt-0.5">Monitor AI models performance and healthcare intelligence insights</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
            <CalendarIcon className="w-3.5 h-3.5 text-foreground" />
            May 15, 2025 - May 21, 2025
            <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[14px] font-medium text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <Download className="w-3.5 h-3.5" />
            Export Report
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto hide-scrollbar">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap ${
              i === 0 
                ? 'bg-[#4f46e5] text-white shadow-[0_0_10px_rgba(79,70,229,0.3)]' 
                : 'text-foreground hover:text-white hover:bg-[#7caaaf] dark:hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="xl:col-span-6 flex flex-col gap-6">
          
          {/* AI Models Performance Table */}
          <div className="card border border-border-main overflow-hidden flex flex-col">
            <div className="p-4 border-b border-border-main flex justify-between items-center">
              <h2 className="text-[16px] font-bold text-foreground">AI Models Performance</h2>
              <button className="flex items-center gap-2 px-3 py-1 rounded bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-semibold text-foreground">
                All Models <ChevronDown className="w-3 h-3 text-foreground" />
              </button>
            </div>
            <p className="text-[13px] font-semibold text-foreground px-4 pt-2">Real-time performance and accuracy of all AI models</p>
            
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                    <th className="py-3 px-4 font-medium">Model Name</th>
                    <th className="py-3 px-4 font-medium">Type</th>
                    <th className="py-3 px-4 font-medium">Accuracy</th>
                    <th className="py-3 px-4 font-medium">Predictions</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                    <th className="py-3 px-4 font-medium">Last Updated</th>
                    <th className="py-3 px-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {aiModels.map((model, i) => (
                    <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded bg-main border border-border-main flex items-center justify-center ${model.iconColor}`}>
                            <model.icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-foreground">{model.name}</p>
                            <p className="text-[14px] text-foreground">{model.sub}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-medium border ${model.typeColor}`}>
                          {model.type}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-[14px] font-medium text-foreground">{model.acc}</p>
                        <p className="text-[14px] text-green-500 flex items-center gap-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                          {model.accTrend}
                        </p>
                      </td>
                      <td className="py-3 px-4 text-[13px] font-medium text-foreground">{model.pred}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded text-[9px] font-medium border bg-green-500/10 text-green-400 border-green-500/20">
                          {model.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[13px] font-semibold text-foreground">{model.updated}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-1">
                          <button className="text-foreground hover:text-foreground transition-colors p-1"><Eye className="w-3.5 h-3.5" /></button>
                          <button className="text-foreground hover:text-foreground transition-colors p-1"><Edit2 className="w-3.5 h-3.5" /></button>
                          <button className="text-foreground hover:text-foreground transition-colors p-1"><MoreVertical className="w-3.5 h-3.5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 border-t border-border-main text-[13px] font-semibold text-foreground">
              Showing 1 to 8 of 8 models
            </div>
          </div>

          {/* Healthcare Analytics Overview */}
          <div className="card border border-border-main p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[16px] font-bold text-foreground">Healthcare Analytics Overview</h2>
                <p className="text-[13px] font-semibold text-foreground mt-0.5">Key healthcare metrics and trends</p>
              </div>
              <button className="flex items-center gap-1 px-2 py-1 rounded border border-border-main text-[13px] font-semibold text-foreground hover:text-foreground">
                This Month <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            {/* Sub Stats Row */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                { title: 'Total Patients', val: '3,456', trend: '15.2%', isUp: true, icon: Activity },
                { title: 'New Patients', val: '248', trend: '12.4%', isUp: true, icon: Activity },
                { title: 'Total Appointments', val: '1,248', trend: '18.7%', isUp: true, icon: CalendarIcon },
                { title: 'Completed Appointments', val: '1,056', trend: '16.3%', isUp: true, icon: CalendarIcon },
                { title: 'Emergency Cases', val: '312', trend: '8.9%', isUp: false, icon: AlertTriangle },
                { title: 'Avg. Stay Duration', val: '2.4 days', trend: '3.2%', isUp: false, icon: Activity },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col border border-border-main bg-main/30 rounded-lg p-2.5">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-[9px] text-foreground leading-tight truncate pr-1">{stat.title}</p>
                    <stat.icon className="w-3 h-3 text-slate-600 flex-shrink-0" />
                  </div>
                  <p className="text-[16px] font-bold text-foreground leading-none mb-1.5">{stat.val}</p>
                  <div className={`flex items-center gap-0.5 text-[9px] font-medium ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={stat.isUp ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
                    </svg>
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Patient Trend Chart */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-between items-center">
                <h3 className="text-[14px] font-medium text-foreground">Patient Trend</h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="text-[14px] text-foreground">Total Patients</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-[14px] text-foreground">New Patients</span></div>
                </div>
              </div>
              <div className="h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={patientTrendData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(val) => `${val/1000}k`} />
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff', fontSize: '12px' }}
                    />
                    <Area type="monotone" dataKey="total" stroke="#a855f7" strokeWidth={2} fill="url(#colorTotal)" />
                    <Area type="monotone" dataKey="new" stroke="#3b82f6" strokeWidth={2} fill="url(#colorNew)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-6 flex flex-col gap-6">
          
          {/* Top Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card border border-border-main p-4 relative overflow-hidden bg-gradient-to-br from-indigo-900/40 to-[#151C2C]">
              <div className="flex justify-between items-start mb-2 relative z-10">
                <p className="text-[13px] font-semibold text-foreground">Average Accuracy</p>
                <div className="p-1.5 bg-indigo-500/20 rounded text-indigo-400"><Activity className="w-3.5 h-3.5" /></div>
              </div>
              <p className="text-[24px] font-bold text-foreground relative z-10">92.4%</p>
              <div className="flex items-center gap-1 mt-1 relative z-10">
                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                <span className="text-[14px] font-medium text-green-500">4.6%</span>
                <span className="text-[14px] text-foreground">from last month</span>
              </div>
              {/* Fake mini sparkline in background */}
              <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 pointer-events-none">
                 <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full stroke-indigo-500 fill-none" strokeWidth="2">
                   <path d="M0,20 Q10,10 20,25 T40,15 T60,20 T80,5 T100,10" />
                 </svg>
              </div>
            </div>

            <div className="card border border-border-main p-4 relative overflow-hidden">
              <div className="flex justify-between items-start mb-2 relative z-10">
                <p className="text-[13px] font-semibold text-foreground">Total Predictions</p>
                <div className="p-1.5 bg-blue-500/20 rounded text-blue-400"><Activity className="w-3.5 h-3.5" /></div>
              </div>
              <p className="text-[24px] font-bold text-foreground relative z-10">24,853</p>
              <div className="flex items-center gap-1 mt-1 relative z-10">
                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                <span className="text-[14px] font-medium text-green-500">18.7%</span>
                <span className="text-[14px] text-foreground">from last month</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 pointer-events-none">
                 <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full stroke-blue-500 fill-none" strokeWidth="2">
                   <path d="M0,25 Q10,5 20,20 T40,10 T60,25 T80,10 T100,5" />
                 </svg>
              </div>
            </div>

            <div className="card border border-border-main p-4 relative overflow-hidden bg-gradient-to-br from-green-900/20 to-[#151C2C]">
              <div className="flex justify-between items-start mb-2 relative z-10">
                <p className="text-[13px] font-semibold text-foreground">High Confidence</p>
                <div className="p-1.5 bg-green-500/20 rounded text-green-400"><Shield className="w-3.5 h-3.5" /></div>
              </div>
              <p className="text-[24px] font-bold text-foreground relative z-10">89.3%</p>
              <div className="flex items-center gap-1 mt-1 relative z-10">
                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                <span className="text-[14px] font-medium text-green-500">6.2%</span>
                <span className="text-[14px] text-foreground">from last month</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 pointer-events-none">
                 <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full stroke-green-500 fill-none" strokeWidth="2">
                   <path d="M0,15 Q20,25 40,10 T60,20 T80,5 T100,15" />
                 </svg>
              </div>
            </div>

            <div className="card border border-border-main p-4 relative overflow-hidden bg-gradient-to-br from-orange-900/20 to-[#151C2C]">
              <div className="flex justify-between items-start mb-2 relative z-10">
                <p className="text-[13px] font-semibold text-foreground">Active Models</p>
                <div className="p-1.5 bg-orange-500/20 rounded text-orange-400"><Brain className="w-3.5 h-3.5" /></div>
              </div>
              <p className="text-[24px] font-bold text-foreground relative z-10">8/8</p>
              <div className="flex items-center mt-1 relative z-10">
                <span className="text-[14px] text-foreground">100% Operational</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 pointer-events-none">
                 <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full stroke-orange-500 fill-none" strokeWidth="2">
                   <path d="M0,20 Q10,10 20,25 T40,15 T60,20 T80,5 T100,10" />
                 </svg>
              </div>
            </div>
          </div>

          {/* Model Accuracy Trend */}
          <div className="card border border-border-main p-4 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-[16px] font-bold text-foreground">Model Accuracy Trend</h2>
                <p className="text-[13px] font-semibold text-foreground">Accuracy trend over the last 6 months</p>
              </div>
              <button className="flex items-center gap-1 px-2 py-1 rounded border border-border-main text-[13px] font-semibold text-foreground hover:text-foreground">
                Last 6 Months <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 h-[220px]">
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={accuracyTrendData} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(val) => `${val}%`} domain={[70, 100]} ticks={[70, 75, 80, 85, 90, 95, 100]} />
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff', fontSize: '12px' }}
                    />
                    <Line type="monotone" dataKey="m1" stroke="#f43f5e" strokeWidth={2} dot={{ r: 3, fill: '#f43f5e' }} activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey="m2" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, fill: '#3b82f6' }} />
                    <Line type="monotone" dataKey="m3" stroke="#10b981" strokeWidth={2} dot={{ r: 3, fill: '#10b981' }} />
                    <Line type="monotone" dataKey="m4" stroke="#eab308" strokeWidth={2} dot={{ r: 3, fill: '#eab308' }} />
                    <Line type="monotone" dataKey="m5" stroke="#a855f7" strokeWidth={2} dot={{ r: 3, fill: '#a855f7' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full sm:w-[150px] flex flex-col justify-center gap-3">
                <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div><span className="text-[14px] text-foreground truncate w-20">Heart Disease</span></div><span className="text-[14px] font-medium text-foreground">94.6%</span></div>
                <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div><span className="text-[14px] text-foreground truncate w-20">Diabetes Predict...</span></div><span className="text-[14px] font-medium text-foreground">93.1%</span></div>
                <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#10b981]"></div><span className="text-[14px] text-foreground truncate w-20">Kidney Disease</span></div><span className="text-[14px] font-medium text-foreground">91.8%</span></div>
                <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#eab308]"></div><span className="text-[14px] text-foreground truncate w-20">Pneumonia Det...</span></div><span className="text-[14px] font-medium text-foreground">96.2%</span></div>
                <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#a855f7]"></div><span className="text-[14px] text-foreground truncate w-20">Health Score E...</span></div><span className="text-[14px] font-medium text-foreground">90.7%</span></div>
              </div>
            </div>
          </div>

          {/* Heatmap & Donut Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Prediction Distribution */}
            <div className="card border border-border-main p-4 flex flex-col">
              <h2 className="text-[13px] font-medium text-foreground mb-1">Prediction Distribution</h2>
              <p className="text-[14px] text-foreground mb-4">Distribution of predictions by confidence level</p>
              
              <div className="flex items-center justify-center gap-4 flex-1">
                <div className="relative w-[110px] h-[110px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={predictionDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={55}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {predictionDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#151C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff', fontSize: '10px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-0.5">
                    <span className="text-[14px] font-bold text-foreground leading-none">24,853</span>
                    <span className="text-[9px] text-foreground mt-0.5">Total</span>
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  {predictionDistribution.map((item, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <div className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: item.color }}></div>
                        <span className="text-[9px] text-foreground truncate">{item.name}</span>
                      </div>
                      <span className="text-[9px] text-foreground pl-3">{item.value.toLocaleString()} ({(item.value/24853*100).toFixed(1)}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heatmap Table */}
            <div className="card border border-border-main p-4 flex flex-col overflow-x-auto">
              <h2 className="text-[13px] font-medium text-foreground mb-1">Model Performance Heatmap</h2>
              <p className="text-[14px] text-foreground mb-4">Performance comparison across different metrics</p>
              
              <table className="w-full text-left border-collapse whitespace-nowrap text-[9px]">
                <thead>
                  <tr className="border-b border-border-main text-foreground">
                    <th className="py-1.5 font-medium pr-2">Model</th>
                    <th className="py-1.5 font-medium px-1 text-center">Accuracy</th>
                    <th className="py-1.5 font-medium px-1 text-center">Precision</th>
                    <th className="py-1.5 font-medium px-1 text-center">Recall</th>
                    <th className="py-1.5 font-medium px-1 text-center">F1-Score</th>
                    <th className="py-1.5 font-medium pl-1 text-center">AUC</th>
                  </tr>
                </thead>
                <tbody>
                  {heatmapData.map((row, i) => (
                    <tr key={i}>
                      <td className="py-1 font-medium text-foreground pr-2 truncate max-w-[90px]">{row.name}</td>
                      <td className="py-0.5 px-0.5"><div className={`py-1 text-center rounded-sm font-medium ${getHeatmapColor(row.acc)}`}>{row.acc}%</div></td>
                      <td className="py-0.5 px-0.5"><div className={`py-1 text-center rounded-sm font-medium ${getHeatmapColor(row.prec)}`}>{row.prec}%</div></td>
                      <td className="py-0.5 px-0.5"><div className={`py-1 text-center rounded-sm font-medium ${getHeatmapColor(row.rec)}`}>{row.rec}%</div></td>
                      <td className="py-0.5 px-0.5"><div className={`py-1 text-center rounded-sm font-medium ${getHeatmapColor(row.f1)}`}>{row.f1}%</div></td>
                      <td className="py-0.5 pl-0.5"><div className={`py-1 text-center rounded-sm font-medium ${getHeatmapColor(row.auc, true)}`}>{row.auc}</div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* Bottom Alerts & Trends Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Disease Trend Analysis */}
            <div className="card border border-border-main p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-[13px] font-medium text-foreground">Disease Trend Analysis</h2>
                  <p className="text-[14px] text-foreground">Disease prevalence trends</p>
                </div>
                <button className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border-main text-[14px] text-foreground hover:text-foreground">
                  This Month <ChevronDown className="w-2.5 h-2.5" />
                </button>
              </div>

              <div className="space-y-3">
                {diseaseTrends.map((disease, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-main border border-border-main`}>
                      <Activity className={`w-3 h-3 ${disease.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-[13px] font-semibold text-foreground">{disease.name}</span>
                        <div className="flex gap-2 items-baseline">
                          <span className="text-[13px] font-bold text-foreground">{disease.value}</span>
                          <span className={`text-[9px] font-medium flex items-center ${disease.isDown ? 'text-red-500' : 'text-green-500'}`}>
                            <svg className="w-2 h-2 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={disease.isDown ? "M19 14l-7 7m0 0l-7-7m7 7V3" : "M5 10l7-7m0 0l7 7m-7-7v18"} />
                            </svg>
                            {disease.trend}
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${disease.color}`}
                          style={{ width: `${(disease.value / disease.max) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insights & Alerts */}
            <div className="card border border-border-main p-4 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-[13px] font-medium text-foreground">AI Insights & Alerts</h2>
                  <p className="text-[14px] text-foreground">Intelligent insights and system alerts</p>
                </div>
                <button className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-[14px] font-medium rounded hover:bg-indigo-500/30 transition-colors">
                  View All Alerts
                </button>
              </div>

              <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
                {alerts.map((alert, i) => (
                  <div key={i} className="flex gap-3 items-start p-2 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-border-main">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${alert.bg}`}>
                      <alert.icon className={`w-3.5 h-3.5 ${alert.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-0.5">
                        <p className="text-[13px] font-bold text-foreground truncate pr-2">{alert.title}</p>
                        <div className="flex items-center gap-1 text-[9px] text-foreground flex-shrink-0">
                          {alert.time}
                          <ChevronDown className="w-2.5 h-2.5 transform -rotate-90" />
                        </div>
                      </div>
                      <p className="text-[14px] text-foreground line-clamp-2 leading-tight">{alert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
