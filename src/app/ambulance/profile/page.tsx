'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  User, Edit, Shield, Activity, FileText, CheckCircle2, ChevronDown, Phone, MessageSquare, Briefcase, Calendar, Star, Clock
} from 'lucide-react';

export default function ProfilePage() {
  const certifications = [
    { name: 'Paramedic Certification', valid: 'Valid till 20 May 2026', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'Basic Life Support (BLS)', valid: 'Valid till 15 Aug 2025', icon: Shield, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'Advanced Cardiac Life Support (ACLS)', valid: 'Valid till 10 Dec 2025', icon: Activity, color: 'text-red-500', bg: 'bg-red-500/10' },
    { name: 'Driving License (LMV)', valid: 'DL-01-123456789012', icon: FileText, color: 'text-green-500', bg: 'bg-green-500/10' },
  ];

  const personalDetails = [
    { label: 'Full Name', val: 'Rohit Sharma' },
    { label: 'Employee ID', val: 'EMP-2456' },
    { label: 'Date of Birth', val: '12 May 1992' },
    { label: 'Gender', val: 'Male' },
    { label: 'Blood Group', val: 'O+' },
    { label: 'Address', val: 'Connaught Place, New Delhi, Delhi - 110001' },
    { label: 'Emergency Contact', val: '+91 98765 43211' },
  ];

  const workInfo = [
    { label: 'Role', val: 'Paramedic' },
    { label: 'Department', val: 'Emergency Services' },
    { label: 'Employee Since', val: '15 Mar 2023' },
    { label: 'Work Location', val: 'AIIMS Hospital, Delhi' },
    { label: 'Shift', val: 'Day Shift' },
    { label: 'Reporting Manager', val: 'Vikas Sharma' },
    { label: 'Contact', val: 'vikas.sharma@aims.com' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Profile
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage your personal information and account settings</p>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
        
        {/* Left Col: Identity & Certs */}
        <div className="flex flex-col gap-6">
          {/* Identity Card */}
          <div className="card p-6 border-border-main flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-slate-700 border-4 border-card mb-4 relative flex items-center justify-center overflow-hidden shadow-lg">
              {/* Fallback avatar if image isn't available */}
              <User className="w-12 h-12 text-foreground/50" />
              {/* Optional: <img src="..." alt="" className="absolute inset-0 w-full h-full object-cover" /> */}
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-card"></div>
            </div>
            <h2 className="text-xl font-bold text-foreground flex items-center gap-1.5">
              Rohit Sharma <CheckCircle2 className="w-4 h-4 text-blue-500" />
            </h2>
            <div className="mt-1 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium border text-purple-400 bg-purple-500/10 border-purple-500/20">
                Paramedic
              </span>
            </div>
            <p className="text-sm text-foreground">rohit.sharma@aims.com</p>
            <p className="text-sm text-foreground mb-6">+91 98765 43210</p>
            
            <div className="flex gap-3 w-full">
              <button className="flex-1 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-purple-500/20">
                <Edit className="w-3.5 h-3.5" /> Edit Profile
              </button>
              <button className="flex-1 py-2 rounded-lg bg-card border border-border-main text-foreground hover:text-foreground text-sm font-medium transition-colors flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Change Password
              </button>
            </div>
          </div>

          {/* Certifications & Licenses */}
          <div className="card p-5 border-border-main flex-1">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-base font-medium text-foreground">Certification & Licenses</h3>
              <button className="text-xs text-purple-500 hover:text-purple-400">View All</button>
            </div>
            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-main border border-white/5 hover:bg-main transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${cert.bg} border-white/5`}>
                      <cert.icon className={`w-4 h-4 ${cert.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-0.5">{cert.name}</h4>
                      <p className="text-xs text-foreground">{cert.valid}</p>
                    </div>
                  </div>
                  <span className="text-xs text-green-500 font-medium">Verified</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Col: Details */}
        <div className="flex flex-col gap-6">
          {/* Personal Details */}
          <div className="card p-5 border-border-main">
            <div className="flex items-center gap-2 mb-5">
              <User className="w-4 h-4 text-purple-500" />
              <h3 className="text-base font-medium text-foreground">Personal Details</h3>
            </div>
            <div className="flex flex-col gap-4">
              {personalDetails.map((det, i) => (
                <div key={i} className="flex justify-between items-start">
                  <span className="text-sm text-foreground w-[120px] shrink-0">{det.label}</span>
                  <span className="text-sm text-foreground font-medium text-right leading-tight">{det.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Information */}
          <div className="card p-5 border-border-main flex-1">
            <div className="flex items-center gap-2 mb-5">
              <Briefcase className="w-4 h-4 text-purple-500" />
              <h3 className="text-base font-medium text-foreground">Work Information</h3>
            </div>
            <div className="flex flex-col gap-4">
              {workInfo.map((info, i) => (
                <div key={i} className="flex justify-between items-start">
                  <span className="text-sm text-foreground w-[120px] shrink-0">{info.label}</span>
                  <span className="text-sm text-foreground font-medium text-right leading-tight">{info.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Stats & Settings */}
        <div className="flex flex-col gap-6">
          
          {/* Your Statistics */}
          <div className="card p-5 border-border-main">
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-500" />
                <h3 className="text-base font-medium text-foreground">Your Statistics</h3>
              </div>
              <span className="text-xs font-medium text-foreground bg-main border border-white/5 px-2 py-1 rounded flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors">
                This Month <ChevronDown className="w-3 h-3" />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-main border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-foreground">Trips Completed</span>
                  <Activity className="w-3.5 h-3.5 text-green-500" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">48</p>
                <p className="text-xs text-green-500">↑ 12% from last month</p>
              </div>
              <div className="p-4 rounded-xl bg-main border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-foreground">Patients Assisted</span>
                  <User className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">56</p>
                <p className="text-xs text-green-500">↑ 15% from last month</p>
              </div>
              <div className="p-4 rounded-xl bg-main border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-foreground">Response Time (Avg)</span>
                  <Clock className="w-3.5 h-3.5 text-orange-500" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">8m 24s</p>
                <p className="text-xs text-green-500">↓ 8% from last month</p>
              </div>
              <div className="p-4 rounded-xl bg-main border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-foreground">Rating</span>
                  <Star className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">4.8 <span className="text-sm text-foreground font-medium">/ 5</span></p>
                <p className="text-xs text-green-500">↑ 5% from last month</p>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="card p-5 border-border-main">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-base font-medium text-foreground">Emergency Contacts</h3>
              <button className="text-xs text-purple-500 hover:text-purple-400">Add Contact</button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-foreground">V</div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">Vikas Sharma <span className="text-foreground">(Manager)</span></h4>
                    <p className="text-xs text-foreground">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded bg-main text-foreground hover:text-foreground border border-white/5 transition-colors"><Phone className="w-3.5 h-3.5" /></button>
                  <button className="p-1.5 rounded bg-main text-foreground hover:text-foreground border border-white/5 transition-colors"><MessageSquare className="w-3.5 h-3.5" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-foreground">P</div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">Pooja Mehta <span className="text-foreground">(EMT)</span></h4>
                    <p className="text-xs text-foreground">+91 98765 43212</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded bg-main text-foreground hover:text-foreground border border-white/5 transition-colors"><Phone className="w-3.5 h-3.5" /></button>
                  <button className="p-1.5 rounded bg-main text-foreground hover:text-foreground border border-white/5 transition-colors"><MessageSquare className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="card p-5 border-border-main flex-1">
            <div className="flex items-center gap-2 mb-5">
              <Settings className="w-4 h-4 text-purple-500" />
              <div>
                <h3 className="text-base font-medium text-foreground">Account Settings</h3>
                <p className="text-xs text-foreground">Manage your account preferences and security</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-main border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-0.5">Two-Factor Authentication</h4>
                  <p className="text-xs text-foreground">Add an extra layer of security to your account</p>
                </div>
              </div>
              {/* Custom Toggle */}
              <div className="w-8 h-4 bg-purple-500 rounded-full relative cursor-pointer">
                <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

// Ensure Settings icon is defined for the settings block
import { Settings } from 'lucide-react';
