'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  ChevronDown, Calendar, Plus, Target, CheckCircle2, 
  Activity, HeartPulse, FileText, Share2, Printer, Upload, Edit, Droplets
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function CarePlanPage() {
  const pieData = [
    { name: 'Completed', value: 6, color: '#22c55e' },
    { name: 'In Progress', value: 4, color: '#3b82f6' },
    { name: 'Pending', value: 3, color: '#f59e0b' },
  ];

  const goals = [
    { text: 'Maintain BP within normal range', subtext: '120/80 mmHg', progress: 75, color: 'bg-purple-500' },
    { text: 'Reduce stress and anxiety', subtext: 'Through relaxation techniques', progress: 50, color: 'bg-purple-500' },
    { text: 'Improve medication adherence', subtext: 'Take medicines on time', progress: 100, color: 'bg-green-500' },
    { text: 'Adopt healthy lifestyle', subtext: 'Low salt diet, regular walk', progress: 60, color: 'bg-purple-500' },
  ];

  const interventions = [
    { name: 'Monitor blood pressure', type: 'Monitoring', freq: 'Every 6 hours', by: 'Nurse', status: 'In Progress' },
    { name: 'Administer BP medication', type: 'Medication', freq: 'Twice a day', by: 'Nurse', status: 'In Progress' },
    { name: 'Low sodium diet', type: 'Dietary', freq: 'Daily', by: 'Dietitian', status: 'In Progress' },
    { name: 'Encourage light exercise', type: 'Activity', freq: 'Daily', by: 'Physiotherapist', status: 'In Progress' },
    { name: 'Stress relief techniques', type: 'Education', freq: 'Daily', by: 'Nurse', status: 'Pending' },
  ];

  const schedule = [
    { time: '08:00 AM', title: 'Vitals Monitoring', desc: 'BP, HR, SpO₂', status: 'Completed' },
    { time: '10:00 AM', title: 'Medication Administration', desc: 'Amlodipine 5mg', status: 'Completed' },
    { time: '12:00 PM', title: 'Diet Consultation', desc: 'Low salt diet review', status: 'Completed' },
    { time: '02:00 PM', title: 'Physiotherapy Session', desc: 'Light walking exercise', status: 'In Progress' },
    { time: '06:00 PM', title: 'Evening Vitals Check', desc: 'BP, HR, SpO₂', status: 'Pending' },
  ];

  const team = [
    { name: 'Dr. Amit Mehta', role: 'Consultant Physician', img: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Neha Sharma', role: 'Staff Nurse (You)', img: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Priya Singh', role: 'Physiotherapist', img: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Ravi Kumar', role: 'Dietitian', img: 'https://i.pravatar.cc/150?img=15' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Care Plan
          </h1>
          <p className="text-sm text-foreground mt-0.5">Create, manage and monitor patient care plans</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <div className="w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center shrink-0 overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=11" alt="Patient" />
            </div>
            Rahul Verma (101) <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Calendar className="w-3.5 h-3.5 text-foreground" /> 31 May 2025, Saturday <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> New Care Plan
          </button>
        </div>
      </div>

      {/* Patient Banner */}
      <div className="card p-5 border-border-main bg-card flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border-main bg-slate-800 shrink-0">
            <img src="https://i.pravatar.cc/150?img=11" alt="Rahul Verma" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-[16px] font-bold text-foreground">Rahul Verma</h2>
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-500">Inpatient</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <span>Male</span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span>45 Yrs</span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span>ID: P10023</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 xl:gap-12">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground">Room / Bed</span>
            <span className="text-sm font-bold text-foreground">101 / Bed 1</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground">Diagnosis</span>
            <span className="text-sm font-bold text-foreground">Hypertension</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground">Admitting Doctor</span>
            <span className="text-sm font-bold text-foreground">Dr. Amit Mehta</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground">Admission Date</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">28 May 2025</span>
              <span className="text-[9px] text-foreground mt-0.5">04 Jun 2025 (5 days left)</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 pr-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400">
              <Activity className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">BP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-foreground">120/80</span>
              <Activity className="w-3 h-3 text-red-500" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
              <HeartPulse className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">HR</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-foreground">78 bpm</span>
              <Activity className="w-3 h-3 text-green-500" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <Droplets className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">SpO₂</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-foreground">98%</span>
              <Activity className="w-3 h-3 text-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-8 border-b border-border-main mb-6 overflow-x-auto hide-scrollbar">
        <button className="text-sm font-medium text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 pb-3 whitespace-nowrap">Care Plan Overview</button>
        <button className="text-sm font-bold text-foreground hover:text-foreground border-b-2 border-transparent pb-3 transition-colors whitespace-nowrap">Goals & Outcomes</button>
        <button className="text-sm font-bold text-foreground hover:text-foreground border-b-2 border-transparent pb-3 transition-colors whitespace-nowrap">Interventions</button>
        <button className="text-sm font-bold text-foreground hover:text-foreground border-b-2 border-transparent pb-3 transition-colors whitespace-nowrap">Care Schedule</button>
        <button className="text-sm font-bold text-foreground hover:text-foreground border-b-2 border-transparent pb-3 transition-colors whitespace-nowrap">Notes & Evaluation</button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
        
        {/* Left Column (Spans 2 on XL) */}
        <div className="flex flex-col gap-4 lg:col-span-2 xl:col-span-2">
          
          {/* Care Plan Summary */}
          <div className="card p-5 border-border-main bg-card flex flex-col">
            <h2 className="text-lg font-bold text-foreground mb-1">Care Plan Summary</h2>
            <p className="text-sm text-foreground mb-6">Overview of patient care plan and progress</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-main border border-border-main">
                <Calendar className="w-4 h-4 text-purple-500 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-foreground">Plan Start Date</span>
                  <span className="text-sm font-bold text-foreground mt-1">29 May 2025</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-main border border-border-main">
                <Calendar className="w-4 h-4 text-blue-500 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-foreground">Last Updated</span>
                  <span className="text-sm font-bold text-foreground mt-1">31 May 2025,<br/>09:15 AM</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-main border border-border-main">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-foreground">Care Plan Status</span>
                  <span className="text-sm font-bold text-foreground mt-1">Active</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-main border border-border-main">
                <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center relative shrink-0">
                  <span className="text-[9px] font-bold text-green-500">68%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-foreground">Overall Progress</span>
                  <span className="text-sm font-bold text-foreground mt-0.5">68%</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-foreground">Plan Description</span>
              <p className="text-sm text-foreground leading-relaxed">
                The care plan is focused on stabilizing blood pressure, monitoring vitals, promoting a low-sodium diet, encouraging regular physical activity and ensuring medication compliance.
              </p>
              <button className="text-xs text-purple-600 dark:text-purple-400 font-medium self-start mt-1">View More</button>
            </div>
          </div>

          {/* Interventions */}
          <div className="card p-0 border-border-main bg-card flex flex-col flex-1">
            <div className="p-4 border-b border-border-main flex justify-between items-center">
              <h2 className="text-lg font-bold text-foreground">Interventions</h2>
              <button className="text-xs text-purple-600 dark:text-purple-400 font-medium">View All</button>
            </div>
            <div className="overflow-x-auto p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border-main text-xs text-foreground tracking-wider">
                    <th className="font-medium p-3 whitespace-nowrap">Intervention</th>
                    <th className="font-medium p-3 whitespace-nowrap">Type</th>
                    <th className="font-medium p-3 whitespace-nowrap">Frequency</th>
                    <th className="font-medium p-3 whitespace-nowrap">By Whom</th>
                    <th className="font-medium p-3 whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {interventions.map((inv, i) => (
                    <tr key={i} className="hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-main border border-border-main flex items-center justify-center shrink-0">
                            <Activity className="w-3 h-3 text-foreground" />
                          </div>
                          <span className="text-sm font-bold text-foreground whitespace-nowrap">{inv.name}</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm text-foreground">{inv.type}</td>
                      <td className="p-3 text-sm text-foreground">{inv.freq}</td>
                      <td className="p-3 text-sm text-foreground">{inv.by}</td>
                      <td className="p-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${inv.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' : 'bg-amber-500/10 text-amber-500'}`}>
                          {inv.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Center/Right Columns */}
        <div className="flex flex-col gap-4 lg:col-span-1 xl:col-span-1">
          {/* Goals & Outcomes */}
          <div className="card p-5 border-border-main bg-card flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-foreground">Goals & Outcomes</h2>
              <button className="text-xs text-purple-600 dark:text-purple-400 font-medium">View All</button>
            </div>
            
            <div className="flex flex-col gap-5">
              {goals.map((g, i) => (
                <div key={i} className="flex gap-3 items-start group">
                  <div className="w-6 h-6 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-3 h-3 text-purple-500" />
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground leading-tight">{g.text}</span>
                      <span className="text-[9px] text-foreground mt-0.5">{g.subtext}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden">
                        <div className={`h-full ${g.color} rounded-full`} style={{ width: `${g.progress}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-foreground w-8 text-right">{g.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Care Schedule */}
          <div className="card p-0 border-border-main bg-card flex flex-col flex-1">
            <div className="p-4 border-b border-border-main flex justify-between items-center">
              <h2 className="text-lg font-bold text-foreground">Today's Care Schedule</h2>
              <button className="text-xs text-purple-600 dark:text-purple-400 font-medium">View Full Schedule</button>
            </div>
            
            <div className="p-4 flex-1 flex flex-col relative overflow-hidden">
              <div className="absolute left-[72px] top-6 bottom-6 w-px bg-border-main"></div>
              
              <div className="flex flex-col gap-5">
                {schedule.map((item, i) => (
                  <div key={i} className="flex gap-4 relative z-10 group">
                    <div className="w-[50px] text-right shrink-0 pt-0.5">
                      <span className="text-xs font-medium text-foreground">{item.time}</span>
                    </div>
                    
                    <div className="relative shrink-0 flex justify-center w-6">
                      <div className={`w-3 h-3 rounded-full mt-1 z-10 bg-card border-[2px] ${item.status === 'Completed' ? 'border-green-500' : item.status === 'In Progress' ? 'border-blue-500' : 'border-slate-500'}`}></div>
                    </div>
                    
                    <div className="flex flex-col flex-1 pb-1">
                      <div className="flex justify-between items-start">
                        <span className={`text-sm font-medium ${item.status === 'Pending' ? 'text-foreground' : 'text-foreground'}`}>{item.title}</span>
                        <span className={`text-[9px] font-medium ${item.status === 'Completed' ? 'text-green-500' : item.status === 'In Progress' ? 'text-blue-500' : 'text-foreground'}`}>{item.status}</span>
                      </div>
                      <span className="text-xs text-foreground mt-0.5">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 lg:col-span-1 xl:col-span-1">
          
          {/* Care Plan Progress */}
          <div className="card p-5 border-border-main bg-card flex flex-col">
            <h2 className="text-lg font-bold text-foreground mb-6">Care Plan Progress</h2>
            
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={45}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-[16px] font-bold text-foreground leading-none">68%</span>
                  <span className="text-[7px] text-foreground mt-0.5">Overall Progress</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-xs text-foreground">Completed (6)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-foreground">In Progress (4)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span className="text-xs text-foreground">Pending (3)</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-2 bg-main border border-border-main rounded-lg text-sm text-purple-600 dark:text-purple-400 font-medium hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              View Progress Details
            </button>
          </div>

          {/* Care Team */}
          <div className="card p-5 border-border-main bg-card flex flex-col">
            <h2 className="text-lg font-bold text-foreground mb-4">Care Team</h2>
            
            <div className="flex flex-col gap-4">
              {team.map((member, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-border-main bg-slate-800 shrink-0">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{member.name}</span>
                      <span className="text-xs text-foreground">{member.role}</span>
                    </div>
                  </div>
                  <button className="text-xs font-medium text-foreground px-2 py-1 bg-main border border-border-main rounded hover:text-foreground transition-colors">
                    View
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-2 bg-main border border-border-main rounded-lg text-sm text-foreground font-medium hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              View All Team Members
            </button>
          </div>

          {/* Quick Actions */}
          <div className="card p-4 border-border-main bg-card flex flex-col flex-1">
            <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-2 flex-1">
              <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-[9px] text-foreground">Add Goal</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-[9px] text-foreground">Add Intervention</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                <Edit className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-[9px] text-foreground">Add Note</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                <Upload className="w-4 h-4 text-foreground" />
                <span className="text-[9px] text-foreground">Upload Document</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                <Printer className="w-4 h-4 text-foreground" />
                <span className="text-[9px] text-foreground">Print Plan</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-main border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                <Share2 className="w-4 h-4 text-foreground" />
                <span className="text-[9px] text-foreground">Share Plan</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Latest Notes & Evaluation */}
      <div className="card p-0 border-border-main bg-card mb-4">
        <div className="p-4 border-b border-border-main flex justify-between items-center">
          <h2 className="text-lg font-bold text-foreground">Latest Notes & Evaluation</h2>
          <button className="text-xs text-purple-600 dark:text-purple-400 font-medium">View All</button>
        </div>
        
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border-main">
          
          <div className="p-5 flex-1 flex flex-col gap-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-foreground">31 May 2025, 09:15 AM</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">Nurse Note</span>
            </div>
            <p className="text-sm text-foreground leading-relaxed flex-1">
              Patient is stable. BP within normal range. Medication given on time. Advised to continue low salt diet.
            </p>
            <div className="flex items-center gap-2 mt-2 pt-3 border-t border-border-main">
              <img src="https://i.pravatar.cc/150?img=9" alt="Nurse" className="w-5 h-5 rounded-full object-cover" />
              <span className="text-xs text-foreground">Neha Sharma</span>
            </div>
          </div>

          <div className="p-5 flex-1 flex flex-col gap-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-foreground">30 May 2025, 06:10 PM</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">Doctor Note</span>
            </div>
            <p className="text-sm text-foreground leading-relaxed flex-1">
              Patient responding well to medication. Continue current treatment plan. Encourage daily walking.
            </p>
            <div className="flex items-center gap-2 mt-2 pt-3 border-t border-border-main">
              <img src="https://i.pravatar.cc/150?img=11" alt="Doctor" className="w-5 h-5 rounded-full object-cover" />
              <span className="text-xs text-foreground">Dr. Amit Mehta</span>
            </div>
          </div>

          <div className="p-5 flex-1 flex flex-col gap-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-foreground">30 May 2025, 11:20 AM</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400">Physiotherapy Note</span>
            </div>
            <p className="text-sm text-foreground leading-relaxed flex-1">
              Patient performed well in session. Tolerated light exercises without any discomfort.
            </p>
            <div className="flex items-center gap-2 mt-2 pt-3 border-t border-border-main">
              <img src="https://i.pravatar.cc/150?img=5" alt="Physio" className="w-5 h-5 rounded-full object-cover" />
              <span className="text-xs text-foreground">Priya Singh</span>
            </div>
          </div>

        </div>
      </div>

    </DashboardLayout>
  );
}
