'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Calendar, ChevronDown, CheckSquare, ClipboardList, UserRound } from 'lucide-react';

export default function PatientRegistrationPage() {
  const recentRegistrations = [
    { time: '09:15 AM', name: 'Rahul Verma', desc: '32 Years, Male' },
    { time: '09:05 AM', name: 'Neha Sharma', desc: '45 Years, Female' },
    { time: '08:55 AM', name: 'Vikram Patel', desc: '29 Years, Male' },
    { time: '08:45 AM', name: 'Anita Singh', desc: '38 Years, Female' },
    { time: '08:30 AM', name: 'Suresh Kumar', desc: '27 Years, Male' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[20px] font-semibold text-foreground">Patient Registration</h1>
        <p className="text-sm text-foreground mt-1">Register a new patient</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
        
        {/* Left Column: Personal Information */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-medium text-foreground">Personal Information</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Full Name <span className="text-red-600 dark:text-red-400">*</span></label>
            <input type="text" placeholder="Enter full name" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Date of Birth <span className="text-red-600 dark:text-red-400">*</span></label>
            <div className="relative">
              <input type="text" placeholder="Select date" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
              <Calendar className="w-4 h-4 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Gender <span className="text-red-600 dark:text-red-400">*</span></label>
            <div className="relative">
              <select defaultValue="" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground appearance-none focus:outline-none focus:border-blue-500/50">
                <option value="" disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="w-4 h-4 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Phone Number <span className="text-red-600 dark:text-red-400">*</span></label>
            <div className="flex relative rounded-lg border border-border-main overflow-hidden focus-within:border-blue-500/50 transition-colors">
              <div className="bg-main px-3 py-2.5 flex items-center justify-center border-r border-border-main text-sm text-foreground">
                +91 <ChevronDown className="w-3 h-3 ml-1" />
              </div>
              <input type="text" placeholder="Enter phone number" className="flex-1 bg-card px-3 py-2.5 text-sm text-foreground focus:outline-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Email</label>
            <input type="email" placeholder="Enter email address" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Address <span className="text-red-600 dark:text-red-400">*</span></label>
            <textarea placeholder="Enter full address" rows={3} className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50 resize-none"></textarea>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Emergency Contact</label>
            <input type="text" placeholder="Enter emergency contact number" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>

          <label className="flex items-center gap-2 cursor-pointer mt-1 group w-fit">
            <div className="w-4 h-4 rounded-sm border border-border-main group-hover:border-slate-400 bg-main flex items-center justify-center transition-colors">
              {/* Optional Checkmark */}
            </div>
            <span className="text-sm text-foreground">Same as patient address</span>
          </label>
        </div>

        {/* Middle Column: Medical Information */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-medium text-foreground">Medical Information</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Blood Group</label>
            <div className="relative">
              <select defaultValue="" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground appearance-none focus:outline-none focus:border-blue-500/50">
                <option value="" disabled>Select blood group</option>
                <option value="A+">A+</option>
                <option value="O+">O+</option>
                <option value="B+">B+</option>
              </select>
              <ChevronDown className="w-4 h-4 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Allergies</label>
            <input type="text" placeholder="Enter known allergies" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Chronic Conditions</label>
            <input type="text" placeholder="Enter any chronic conditions" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>

          <div className="flex flex-col gap-1.5 mb-2">
            <label className="text-sm text-foreground">Current Medications</label>
            <input type="text" placeholder="Enter current medications" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>

          <div className="flex items-center gap-2 mb-2 mt-4">
            <span className="text-lg font-medium text-foreground">Insurance Information</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Insurance Provider</label>
            <input type="text" placeholder="Enter provider name" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-foreground">Policy Number</label>
            <input type="text" placeholder="Enter policy number" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>

          <label className="flex items-center gap-2 cursor-pointer mt-1 group w-fit">
            <div className="w-4 h-4 rounded-sm border border-blue-500 bg-blue-500 flex items-center justify-center transition-colors">
              <CheckSquare className="w-3 h-3 text-foreground" />
            </div>
            <span className="text-sm text-foreground">I have insurance</span>
          </label>

          <div className="flex items-center gap-4 mt-8">
            <button className="flex-1 py-2.5 bg-transparent border border-border-main text-foreground text-sm font-medium rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              Reset
            </button>
            <button className="flex-1 py-2.5 bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors">
              Register Patient
            </button>
          </div>
        </div>

        {/* Right Column: Registrations & Stats */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main flex items-center justify-between">
              <h2 className="text-base font-medium text-foreground">Recent Registrations</h2>
              <button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-300">View All</button>
            </div>
            <div className="flex flex-col p-2">
              {recentRegistrations.map((reg, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt={reg.name} className="w-8 h-8 rounded-full object-cover border border-border-main" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors">{reg.name}</span>
                      <span className="text-xs text-foreground">{reg.desc}</span>
                    </div>
                  </div>
                  <span className="text-xs text-foreground">{reg.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main flex items-center justify-between">
              <h2 className="text-base font-medium text-foreground">Quick Stats (Today)</h2>
              <button className="text-xs text-foreground hover:text-foreground">...</button>
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <UserRound className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">Registrations</span>
                    <span className="text-xs text-foreground">Walk-ins</span>
                  </div>
                </div>
                <span className="text-[16px] font-bold text-foreground">42</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">Appointments</span>
                    <span className="text-xs text-foreground">Scheduled</span>
                  </div>
                </div>
                <span className="text-[16px] font-bold text-foreground">56</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <ClipboardList className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">Check-Ins</span>
                    <span className="text-xs text-foreground">Arrived</span>
                  </div>
                </div>
                <span className="text-[16px] font-bold text-foreground">28</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
