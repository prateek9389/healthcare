'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { SparklineStatCard } from '@/components/ui/SparklineStatCard';
import { HospitalAreaChart, AppointmentDonutChart, RevenueBarChart } from '@/components/charts/DashboardCharts';
import { 
  Users, UserRound, Stethoscope, HeartPulse, 
  Truck, AlertTriangle, Calendar, ChevronDown, 
  Activity, CreditCard, Box, Brain, FileDigit
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2 tracking-wide">
            Welcome Admin! <span className="text-3xl">👋</span>
          </h1>
          <p className="text-[13px] text-foreground mt-0.5">Here's what's happening in your healthcare ecosystem today.</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-transparent border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] text-foreground">
          <Calendar className="w-4 h-4 text-foreground" />
          May 21, 2025
          <ChevronDown className="w-3.5 h-3.5 text-foreground ml-1" />
        </button>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 mb-6">
        <SparklineStatCard 
          title="Total Users" value="1,248" 
          trend={{ value: '12.5% from last month', positive: true }} 
          icon={<Users className="w-[18px] h-[18px]" strokeWidth={2} />} glowColor="blue"
          sparklineData={[10, 15, 12, 20, 18, 25, 22, 30]}
        />
        <SparklineStatCard 
          title="Total Patients" value="3,456" 
          trend={{ value: '18.3% from last month', positive: true }} 
          icon={<UserRound className="w-[18px] h-[18px]" strokeWidth={2} />} glowColor="green"
          sparklineData={[20, 25, 22, 30, 28, 35, 32, 40]}
        />
        <SparklineStatCard 
          title="Doctors" value="256" 
          trend={{ value: '8.2% from last month', positive: true }} 
          icon={<Stethoscope className="w-[18px] h-[18px]" strokeWidth={2} />} glowColor="purple"
          sparklineData={[5, 6, 6, 8, 7, 9, 8, 10]}
        />
        <SparklineStatCard 
          title="Nurses" value="512" 
          trend={{ value: '11.7% from last month', positive: true }} 
          icon={<UserRound className="w-[18px] h-[18px]" strokeWidth={2} />} glowColor="orange"
          sparklineData={[10, 12, 11, 14, 13, 16, 15, 18]}
        />
        <SparklineStatCard 
          title="Active Ambulances" value="18" 
          trend={{ value: '5.6% from last month', positive: true }} 
          icon={<Truck className="w-[18px] h-[18px]" strokeWidth={2} />} glowColor="teal"
          sparklineData={[2, 3, 2, 4, 3, 4, 3, 5]}
        />
        <SparklineStatCard 
          title="Critical Patients" value="32" 
          trend={{ value: '15.2% from last month', positive: false }} 
          icon={<AlertTriangle className="w-[18px] h-[18px]" strokeWidth={2.5} />} glowColor="red"
          sparklineData={[8, 12, 10, 15, 14, 18, 16, 20]}
        />
      </div>

      {/* Middle Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <div className="card p-5 lg:col-span-1 xl:col-span-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[16px] font-bold text-foreground">Hospital Overview</h2>
            <button className="flex items-center gap-1 text-[13px] font-semibold text-foreground hover:text-foreground bg-transparent border border-border-main px-2 py-1 rounded">
              This Year <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <HospitalAreaChart />
        </div>

        <div className="card p-5 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[16px] font-bold text-foreground">Today's Appointments</h2>
            <button className="text-[13px] font-semibold text-foreground hover:text-foreground">View All</button>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-6 flex-1 justify-center">
            <div className="flex-shrink-0">
              <AppointmentDonutChart />
            </div>
            <div className="w-full xl:w-auto space-y-4 flex-1">
              {[
                { label: 'Completed', value: '120 (36%)', color: 'bg-[#10b981]' },
                { label: 'Upcoming', value: '150 (46%)', color: 'bg-[#3b82f6]' },
                { label: 'Cancelled', value: '58 (18%)', color: 'bg-[#ef4444]' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between xl:justify-start gap-4">
                  <div className="flex items-center gap-2.5 w-[100px]">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                    <span className="text-[13px] font-medium text-foreground">{item.label}</span>
                  </div>
                  <span className="text-[13px] font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-[16px] font-bold text-foreground">Revenue Overview</h2>
              <div className="flex items-end gap-3 mt-1">
                <p className="text-[22px] font-bold text-foreground leading-none">₹ 24,78,600</p>
                <div className="flex items-center gap-1 mb-0.5">
                  <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span className="text-[13px] font-bold text-green-500">16.2%</span>
                  <span className="text-[13px] font-semibold text-foreground">from last month</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-1 text-[13px] font-semibold text-foreground hover:text-foreground bg-transparent border border-border-main px-2 py-1 rounded">
              This Month <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <RevenueBarChart />
        </div>
      </div>

      {/* Bottom Lists Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <div className="card p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-bold text-foreground">Recent Users</h2>
            <button className="text-[13px] font-semibold text-foreground hover:text-foreground">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Dr. Sarah Johnson', email: 'sarah.johnson@hospital.com', role: 'Doctor', roleBg: 'bg-purple-500/10', roleText: 'text-purple-400', dept: 'Cardiology', avatar: 'https://i.pravatar.cc/150?u=sarah' },
              { name: 'Nurse Emily Davis', email: 'emily.davis@hospital.com', role: 'Nurse', roleBg: 'bg-orange-500/10', roleText: 'text-orange-400', dept: 'Emergency', avatar: 'https://i.pravatar.cc/150?u=emily' },
              { name: 'John Receptionist', email: 'john.receptionist@hospital.com', role: 'Receptionist', roleBg: 'bg-blue-500/10', roleText: 'text-blue-400', dept: 'Front Desk', avatar: 'https://i.pravatar.cc/150?u=john' },
              { name: 'Lab Tech Mike', email: 'mike.labtech@hospital.com', role: 'Lab Technician', roleBg: 'bg-cyan-500/10', roleText: 'text-cyan-400', dept: 'Pathology', avatar: 'https://i.pravatar.cc/150?u=mike' },
              { name: 'Pharmacist Anna', email: 'anna.pharmacist@hospital.com', role: 'Pharmacist', roleBg: 'bg-green-500/10', roleText: 'text-green-400', dept: 'Pharmacy', avatar: 'https://i.pravatar.cc/150?u=anna' },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} className="w-[34px] h-[34px] rounded-full object-cover" alt={user.name} />
                  <div>
                    <p className="text-[14px] font-semibold text-foreground leading-tight">{user.name}</p>
                    <p className="text-[13px] font-semibold text-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <span className={`px-2 py-0.5 rounded text-[14px] font-medium ${user.roleBg} ${user.roleText} w-[80px] text-center`}>{user.role}</span>
                   <span className="text-[13px] font-semibold text-foreground w-16 text-left hidden sm:inline-block">{user.dept}</span>
                   <div className="flex items-center gap-1.5 w-12 justify-end">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                     <span className="text-[13px] font-semibold text-foreground">Active</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-bold text-foreground">System Activity</h2>
            <button className="text-[13px] font-semibold text-foreground hover:text-foreground">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { icon: <UserRound className="w-[15px] h-[15px] text-blue-500" strokeWidth={2}/>, bg: 'bg-blue-500/10', title: 'New patient registered', sub: 'Patient ID: PT-2025-1456', time: '10:24 AM' },
              { icon: <FileDigit className="w-[15px] h-[15px] text-cyan-500" strokeWidth={2}/>, bg: 'bg-cyan-500/10', title: 'Lab test completed', sub: 'Patient ID: PT-2025-1455', time: '09:15 AM' },
              { icon: <CreditCard className="w-[15px] h-[15px] text-green-500" strokeWidth={2}/>, bg: 'bg-green-500/10', title: 'Payment received', sub: 'Invoice ID: INV-2025-7890', time: '08:45 AM' },
              { icon: <Truck className="w-[15px] h-[15px] text-orange-500" strokeWidth={2}/>, bg: 'bg-orange-500/10', title: 'Ambulance dispatched', sub: 'Trip ID: TRIP-2025-1234', time: '08:30 AM' },
              { icon: <Box className="w-[15px] h-[15px] text-purple-500" strokeWidth={2}/>, bg: 'bg-purple-500/10', title: 'AI model updated', sub: 'Heart Risk Prediction Model', time: '07:50 AM' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className={`w-[32px] h-[32px] rounded-lg flex items-center justify-center ${activity.bg}`}>
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-foreground leading-tight">{activity.title}</p>
                    <p className="text-[13px] font-semibold text-foreground mt-0.5">{activity.sub}</p>
                  </div>
                </div>
                <span className="text-[13px] font-semibold text-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-bold text-foreground">AI Models Status</h2>
            <button className="text-[13px] font-semibold text-foreground hover:text-foreground">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { icon: <HeartPulse className="w-[16px] h-[16px] text-red-500" strokeWidth={2}/>, bg: 'bg-red-500/10 border border-red-500/20', name: 'Heart Risk Model', version: 'v2.4.1', accuracy: '94.6%' },
              { icon: <Activity className="w-[16px] h-[16px] text-cyan-500" strokeWidth={2}/>, bg: 'bg-cyan-500/10 border border-cyan-500/20', name: 'Diabetes Risk Model', version: 'v1.8.3', accuracy: '91.2%' },
              { icon: <Brain className="w-[16px] h-[16px] text-purple-500" strokeWidth={2}/>, bg: 'bg-purple-500/10 border border-purple-500/20', name: 'Kidney Disease Model', version: 'v2.1.0', accuracy: '92.7%' },
              { icon: <Activity className="w-[16px] h-[16px] text-orange-500" strokeWidth={2}/>, bg: 'bg-orange-500/10 border border-orange-500/20', name: 'Health Score Engine', version: 'v3.0.2', accuracy: '95.1%' },
            ].map((model, i) => (
              <div key={i} className="flex items-center justify-between pb-3 last:pb-0 border-b border-border-main last:border-0">
                <div className="flex items-center gap-3.5">
                  <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center ${model.bg}`}>
                    {model.icon}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-foreground leading-tight">{model.name}</p>
                    <p className="text-[13px] font-semibold text-foreground mt-0.5">{model.version}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[13px] font-semibold text-foreground w-12">{model.version}</span>
                  <span className="text-[13px] font-semibold text-foreground w-12">{model.accuracy}</span>
                  <span className="text-[13px] text-green-500 font-medium w-10 text-right">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Banner Row */}
      <div className="flex flex-col xl:flex-row gap-5 mb-6">
        <div className="flex-1 rounded-xl bg-gradient-to-r from-[#172554] via-[#1e1b4b]/80 to-[#0B1120] border border-blue-500/20 p-5 flex items-center justify-between shadow-[0_0_30px_rgba(37,99,235,0.05)]">
          <div className="flex items-center gap-4">
            <div className="w-[48px] h-[48px] rounded-full border border-blue-500/40 flex items-center justify-center relative overflow-hidden bg-blue-900/40">
              <span className="text-[18px] font-bold text-blue-400 font-serif italic tracking-tighter">AI</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-blue-400 tracking-wide mb-1">AI Insight</p>
              <p className="text-[15px] text-foreground font-medium leading-tight">32 patients are at high risk</p>
              <p className="text-[13px] font-medium text-foreground">Requiring immediate attention</p>
            </div>
          </div>
          <button className="px-5 py-2 bg-[#2563eb] hover:bg-blue-500 text-foreground text-[13px] font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            View Details
          </button>
        </div>

        <div className="flex items-center gap-5 overflow-x-auto pb-2 xl:pb-0 hide-scrollbar">
          <div className="w-[190px] h-[84px] rounded-xl bg-card border border-border-main border-b-2 border-b-red-500/50 p-4 relative overflow-hidden flex-shrink-0 flex flex-col justify-center">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-red-500/5 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>
            <p className="text-[13px] font-semibold text-foreground relative z-10 font-medium">High Risk Patients</p>
            <p className="text-[26px] font-bold text-red-400 relative z-10 leading-tight mt-1">32</p>
          </div>
          
          <div className="w-[190px] h-[84px] rounded-xl bg-card border border-border-main border-b-2 border-b-yellow-500/50 p-4 relative overflow-hidden flex-shrink-0 flex flex-col justify-center">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>
            <p className="text-[13px] font-semibold text-foreground relative z-10 font-medium">Pending Appointments</p>
            <p className="text-[26px] font-bold text-yellow-500 relative z-10 leading-tight mt-1">150</p>
          </div>

          <div className="w-[190px] h-[84px] rounded-xl bg-card border border-border-main border-b-2 border-b-purple-500/50 p-4 relative overflow-hidden flex-shrink-0 flex flex-col justify-center">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-purple-500/5 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>
            <p className="text-[13px] font-semibold text-foreground relative z-10 font-medium">Pending Lab Tests</p>
            <p className="text-[26px] font-bold text-purple-400 relative z-10 leading-tight mt-1">78</p>
          </div>

          <div className="w-[190px] h-[84px] rounded-xl bg-card border border-border-main border-b-2 border-b-emerald-500/50 p-4 relative overflow-hidden flex-shrink-0 flex flex-col justify-center">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>
            <p className="text-[13px] font-semibold text-foreground relative z-10 font-medium">Low Stock Medicines</p>
            <p className="text-[26px] font-bold text-emerald-400 relative z-10 leading-tight mt-1">24</p>
          </div>
        </div>
      </div>

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
