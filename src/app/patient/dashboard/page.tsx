'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Calendar, Clipboard, FileText, Heart, 
  ArrowRight, CheckCircle2, ChevronRight, Pill, 
  Droplet, HeartPulse, Thermometer, FlaskConical, ShieldCheck, Plus
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

export default function PatientDashboardPage() {
  const hrData = [
    { name: '25 May', value: 72 },
    { name: '26 May', value: 74 },
    { name: '27 May', value: 71 },
    { name: '28 May', value: 75 },
    { name: '29 May', value: 70 },
    { name: '30 May', value: 68 },
    { name: '31 May', value: 72 },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground flex items-center gap-2">
            Good Morning, Rahul Verma <span className="text-xl">👋</span>
          </h1>
          <p className="text-sm text-foreground mt-1">Here's your health overview for today</p>
        </div>
        <div className="flex items-center gap-4 bg-card border border-border-main rounded-xl p-2 px-3 shadow-lg">
          <div className="flex items-center gap-2 border-r border-border-main pr-4">
            <Calendar className="w-4 h-4 text-foreground" />
            <span className="text-sm text-foreground">31 May 2025, Saturday</span>
          </div>
          <div className="flex items-center gap-3 pl-1">
            <div className="relative">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-border-main bg-slate-800">
                 <img src="https://i.pravatar.cc/150?img=11" alt="Rahul" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-sm font-bold text-foreground">Rahul Verma</span>
          </div>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        <div className="card p-5 border-border-main bg-card flex flex-col hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group shadow-lg">
          <div className="flex items-start gap-4 h-full">
            <div className="w-12 h-12 rounded-2xl bg-[#5b21b6]/20 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex flex-col flex-1 h-full justify-between">
              <div>
                <span className="text-sm text-foreground">Upcoming Appointment</span>
                <h3 className="text-[18px] font-bold text-foreground mt-1 leading-none">02 Jun 2025</h3>
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium block mt-1">10:30 AM</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-foreground">Dr. Amit Mehta</span>
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-3 h-3 text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card flex flex-col hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group shadow-lg">
          <div className="flex items-start gap-4 h-full">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0">
              <Clipboard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex flex-col flex-1 h-full justify-between">
              <div>
                <span className="text-sm text-foreground">Medications Due</span>
                <h3 className="text-[18px] font-bold text-foreground mt-1 leading-none">2</h3>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium block mt-1">Today</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-foreground">View Medications</span>
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-3 h-3 text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card flex flex-col hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group shadow-lg">
          <div className="flex items-start gap-4 h-full">
            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center shrink-0">
              <FlaskConical className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex flex-col flex-1 h-full justify-between">
              <div>
                <span className="text-sm text-foreground">Recent Test Reports</span>
                <h3 className="text-[18px] font-bold text-foreground mt-1 leading-none">3</h3>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium block mt-1">New Reports</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-foreground">View Reports</span>
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-3 h-3 text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card flex items-center justify-between shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-pink-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-foreground">Health Score</span>
              <h3 className="text-[18px] font-bold text-foreground mt-1 leading-none">85 <span className="text-sm text-foreground font-normal">/100</span></h3>
              <div className="flex items-center gap-1 mt-1">
                 <span className="text-sm text-green-600 dark:text-green-400 font-medium">Good</span>
                 <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              </div>
            </div>
          </div>
          <div className="relative w-14 h-14 shrink-0 mr-2">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1e293b" strokeWidth="4" />
              <path strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#22c55e" strokeWidth="4" className="animate-pulse" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-foreground">85%</span>
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        
        {/* Left Column (60%) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Upcoming Appointments */}
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main flex justify-between items-center">
              <h2 className="text-lg font-bold text-foreground">Upcoming Appointments</h2>
              <button className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:text-purple-300">View All</button>
            </div>
            
            <div className="p-4 flex flex-col gap-4">
              <div className="flex gap-4 p-3 rounded-xl border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                <div className="flex flex-col items-center justify-center shrink-0 w-12 h-14 rounded-xl border border-purple-500/20 bg-purple-500/10">
                  <span className="text-[18px] font-bold text-purple-600 dark:text-purple-400 leading-none">02</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1 uppercase">Jun</span>
                  <span className="text-[8px] text-purple-600 dark:text-purple-400/70">2025</span>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <span className="text-base font-bold text-foreground">General Consultation</span>
                    <span className="text-[9px] font-medium px-2 py-0.5 rounded text-green-600 dark:text-green-400 bg-green-500/10">Confirmed</span>
                  </div>
                  <span className="text-sm text-foreground mt-1">Dr. Amit Mehta</span>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-foreground">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">10:30 AM</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-foreground">
                      <span className="text-xs">City Care Hospital, Room 101</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-3 rounded-xl border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                <div className="flex flex-col items-center justify-center shrink-0 w-12 h-14 rounded-xl border border-purple-500/20 bg-purple-500/10">
                  <span className="text-[18px] font-bold text-purple-600 dark:text-purple-400 leading-none">15</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1 uppercase">Jun</span>
                  <span className="text-[8px] text-purple-600 dark:text-purple-400/70">2025</span>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <span className="text-base font-bold text-foreground">Follow-up Visit</span>
                    <span className="text-[9px] font-medium px-2 py-0.5 rounded text-green-600 dark:text-green-400 bg-green-500/10">Confirmed</span>
                  </div>
                  <span className="text-sm text-foreground mt-1">Dr. Neha Sharma</span>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-foreground">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">11:00 AM</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-foreground">
                      <span className="text-xs">City Care Hospital, Room 105</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full py-2.5 rounded-lg border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-medium hover:bg-purple-500/10 transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> Book New Appointment
              </button>
            </div>
          </div>

          {/* Health Overview */}
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main flex justify-between items-center">
              <h2 className="text-lg font-bold text-foreground">Health Overview</h2>
            </div>
            
            <div className="p-4 pb-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-main border border-border-main">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-foreground">Blood Pressure</span>
                    <span className="text-lg font-bold text-foreground leading-none mt-0.5">120/80</span>
                    <span className="text-[8px] text-green-600 dark:text-green-400 mt-1">Normal</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-main border border-border-main">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Droplet className="w-4 h-4 text-blue-600 dark:text-blue-400 fill-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-foreground">Oxygen Level</span>
                    <span className="text-lg font-bold text-foreground leading-none mt-0.5">98%</span>
                    <span className="text-[8px] text-green-600 dark:text-green-400 mt-1">Normal</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-main border border-border-main">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                    <HeartPulse className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-foreground">Heart Rate</span>
                    <span className="text-lg font-bold text-foreground leading-none mt-0.5">72</span>
                    <span className="text-[8px] text-green-600 dark:text-green-400 mt-1">Normal</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-main border border-border-main">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Thermometer className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-foreground">Temperature</span>
                    <span className="text-lg font-bold text-foreground leading-none mt-0.5">36.6°C</span>
                    <span className="text-[8px] text-green-600 dark:text-green-400 mt-1">Normal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <span className="text-sm text-foreground font-medium mb-4 block">Heartbeat Overview (Last 7 Days)</span>
              <div className="h-[120px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hrData}>
                    <YAxis domain={['auto', 'auto']} hide />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8b5cf6" 
                      strokeWidth={2} 
                      dot={{ r: 3, fill: '#8b5cf6', strokeWidth: 0 }} 
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between items-center text-[9px] text-foreground mt-2 px-2">
                <span>25 May</span>
                <span>26 May</span>
                <span>27 May</span>
                <span>28 May</span>
                <span>29 May</span>
                <span>30 May</span>
                <span>31 May</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (40%) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Medications Due */}
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main flex justify-between items-center">
              <h2 className="text-lg font-bold text-foreground">Medications Due</h2>
              <button className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:text-purple-300">View All</button>
            </div>
            
            <div className="p-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-border-main flex items-center justify-center shrink-0">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-white transform -rotate-45"></div>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-base font-bold text-foreground">Amoxicillin 500mg</span>
                  <span className="text-xs text-foreground">1 Capsule • After Breakfast</span>
                  <span className="text-xs text-foreground mt-0.5">08:00 AM</span>
                </div>
                <button className="px-3 py-1.5 rounded border border-purple-500/30 text-xs font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 transition-colors shrink-0">
                  Mark as Taken
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-border-main flex items-center justify-center shrink-0">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-white transform -rotate-45"></div>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-base font-bold text-foreground">Paracetamol 650mg</span>
                  <span className="text-xs text-foreground">1 Tablet • After Lunch</span>
                  <span className="text-xs text-foreground mt-0.5">01:00 PM</span>
                </div>
                <button className="px-3 py-1.5 rounded border border-purple-500/30 text-xs font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 transition-colors shrink-0">
                  Mark as Taken
                </button>
              </div>

              <button className="w-full py-2.5 rounded-lg bg-main border border-border-main text-purple-600 dark:text-purple-400 text-sm font-medium hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2 mt-2">
                <Clipboard className="w-4 h-4" /> View All Medications
              </button>
            </div>
          </div>

          {/* Recent Test Reports */}
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main flex justify-between items-center">
              <h2 className="text-lg font-bold text-foreground">Recent Test Reports</h2>
              <button className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:text-purple-300">View All</button>
            </div>
            
            <div className="p-2">
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-foreground" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">CBC Test</span>
                    <span className="text-[9px] text-foreground">30 May 2025</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-medium px-2 py-0.5 rounded text-green-600 dark:text-green-400 bg-green-500/10">Normal</span>
                  <ChevronRight className="w-3 h-3 text-foreground group-hover:text-foreground" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-foreground" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">Blood Sugar (Fasting)</span>
                    <span className="text-[9px] text-foreground">29 May 2025</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-medium px-2 py-0.5 rounded text-green-600 dark:text-green-400 bg-green-500/10">Normal</span>
                  <ChevronRight className="w-3 h-3 text-foreground group-hover:text-foreground" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-foreground" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">Thyroid Profile</span>
                    <span className="text-[9px] text-foreground">28 May 2025</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-medium px-2 py-0.5 rounded text-amber-600 dark:text-amber-400 bg-amber-500/10">Abnormal</span>
                  <ChevronRight className="w-3 h-3 text-foreground group-hover:text-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Health Reminders */}
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col border-none bg-gradient-to-br from-[#101423] to-[#1e293b]/40">
            <div className="p-4 border-b border-white/5">
              <h2 className="text-lg font-bold text-foreground">Health Reminders</h2>
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                    <Droplet className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">Drink at least 8 glasses of water daily</span>
                    <span className="text-[9px] text-foreground">Stay hydrated and keep your body healthy</span>
                  </div>
                </div>
                <ChevronRight className="w-3 h-3 text-foreground group-hover:text-foreground" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4v16"/><path d="M17 4v16"/><path d="M19 8H5"/><path d="M19 16H5"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">Daily Walk</span>
                    <span className="text-[9px] text-foreground">30 mins walk is recommended</span>
                  </div>
                </div>
                <ChevronRight className="w-3 h-3 text-foreground group-hover:text-foreground" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Banner */}
      <div className="w-full rounded-xl bg-gradient-to-r from-[#1e1b4b] to-[#2e1065] p-5 flex items-center justify-between border border-purple-500/20 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-purple-500/20 to-transparent pointer-events-none"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-10 h-10 rounded-full border-2 border-purple-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground tracking-wide">Stay Healthy, Stay Happy!</span>
            <span className="text-sm text-purple-200 mt-0.5">Eat healthy, stay active and keep your regular checkups.</span>
          </div>
        </div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Plus className="w-5 h-5 text-purple-300" />
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
