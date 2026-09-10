'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  ArrowLeft, Upload, FileText, ActivitySquare, Scissors, Eye,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

export default function MedicalRecordsPage() {
  const tabs = ['Overview', 'History', 'Conditions', 'Surgeries', 'Allergies', 'Immunizations', 'Documents'];
  
  const timeline = [
    { date: '29 May 2025', title: 'Follow-up Consultation', doctor: 'Dr. Rahul Sharma', type: 'Consultation', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { date: '28 May 2025', title: 'Blood Pressure Check', doctor: 'Dr. Rahul Sharma', type: 'Consultation', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { date: '27 May 2025', title: 'Chest Pain', doctor: 'Dr. Rahul Sharma', type: 'Emergency', sColor: 'text-red-400 bg-red-500/10 border-red-500/20' },
    { date: '26 May 2025', title: 'Asthma Consultation', doctor: 'Dr. Rahul Sharma', type: 'Consultation', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { date: '25 May 2025', title: 'COPD Evaluation', doctor: 'Dr. Rahul Sharma', type: 'Consultation', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  ];

  const recentRecords = [
    { date: '29 May 2025', type: 'Consultation', desc: 'Follow-up Consultation', doctor: 'Dr. Rahul Sharma' },
    { date: '28 May 2025', type: 'Lab Report', desc: 'Blood Test Report', doctor: 'Dr. Rahul Sharma' },
    { date: '27 May 2025', type: 'Imaging', desc: 'Chest X-Ray', doctor: 'Dr. Rahul Sharma' },
    { date: '26 May 2025', type: 'Consultation', desc: 'Asthma Review', doctor: 'Dr. Rahul Sharma' },
    { date: '25 May 2025', type: 'Lab Report', desc: 'Lipid Profile', doctor: 'Dr. Rahul Sharma' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-2">
          <Link href="/doctor/patients" className="flex items-center gap-1.5 text-sm text-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Patients
          </Link>
          <div>
            <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
              Medical Records
            </h1>
            <p className="text-sm text-foreground mt-0.5">Complete medical history and patient records</p>
          </div>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
          <Upload className="w-3.5 h-3.5" /> Upload Record
        </button>
      </div>

      {/* Patient Header */}
      <div className="card p-6 border-border-main flex flex-col bg-card mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border-main">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-[20px] text-foreground font-bold shrink-0">
              J
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-bold text-foreground tracking-wide">John Doe</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-foreground">35 Years, Male</span>
                <span className="w-1 h-1 rounded-full bg-muted"></span>
                <span className="text-xs text-foreground">PID: PT-2025-1248</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-foreground">+91 98765 43210</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col">
              <span className="text-xs text-foreground">Blood Group</span>
              <span className="text-lg font-semibold text-foreground">O+</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-foreground">Allergies</span>
              <span className="text-lg font-semibold text-foreground">Penicillin</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-foreground">Height</span>
              <span className="text-lg font-semibold text-foreground">175 cm</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-foreground">Weight</span>
              <span className="text-lg font-semibold text-foreground">72 kg</span>
            </div>
          </div>

        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 pt-4 overflow-x-auto">
          {tabs.map((tab, i) => (
            <button 
              key={i} 
              className={`text-sm font-medium pb-2 whitespace-nowrap transition-colors ${
                tab === 'Overview' 
                  ? 'text-purple-400 border-b-2 border-purple-500' 
                  : 'text-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Col - Timeline */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="card p-5 border-border-main flex flex-col bg-card">
            <h2 className="text-lg font-medium text-foreground mb-6">Medical History Timeline</h2>
            
            <div className="flex flex-col relative before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-border-main gap-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-card border-2 border-purple-500 mt-1 shrink-0"></div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <span className="text-xs text-foreground">{item.date}</span>
                    <span className="text-base font-medium text-foreground">{item.title}</span>
                    <span className="text-sm text-foreground">{item.doctor}</span>
                    <div className="mt-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium border inline-block ${item.sColor}`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-2.5 mt-8 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
              View Full Timeline
            </button>
          </div>
        </div>

        {/* Right Col - Details */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Record Summary */}
          <div className="card p-5 border-border-main flex flex-col bg-card">
            <h2 className="text-lg font-medium text-foreground mb-4">Record Summary</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <FileText className="w-5 h-5 text-purple-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-foreground leading-none mb-1">12</span>
                  <span className="text-xs text-foreground">Consultations</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <FileText className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-foreground leading-none mb-1">8</span>
                  <span className="text-xs text-foreground">Lab Reports</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <ActivitySquare className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-foreground leading-none mb-1">5</span>
                  <span className="text-xs text-foreground">Imaging Reports</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30">
                  <Scissors className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-foreground leading-none mb-1">3</span>
                  <span className="text-xs text-foreground">Surgeries</span>
                </div>
              </div>

            </div>
          </div>

          {/* Active Conditions */}
          <div className="card p-5 border-border-main flex flex-col bg-card">
            <h2 className="text-lg font-medium text-foreground mb-4">Active Conditions</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-main border border-white/5 text-sm text-foreground">Hypertension</span>
              <span className="px-3 py-1.5 rounded-lg bg-main border border-white/5 text-sm text-foreground">Type 2 Diabetes</span>
              <span className="px-3 py-1.5 rounded-lg bg-main border border-white/5 text-sm text-foreground">Asthma</span>
            </div>
          </div>

          {/* Recent Records Table */}
          <div className="card p-0 border-border-main flex flex-col bg-card">
            <div className="p-4 border-b border-border-main">
              <h2 className="text-lg font-medium text-foreground">Recent Records</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                    <th className="font-medium p-4 py-3 whitespace-nowrap">Date</th>
                    <th className="font-medium p-4 py-3 whitespace-nowrap">Record Type</th>
                    <th className="font-medium p-4 py-3 whitespace-nowrap">Description</th>
                    <th className="font-medium p-4 py-3 whitespace-nowrap">Doctor</th>
                    <th className="font-medium p-4 py-3 whitespace-nowrap text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRecords.map((item, i) => (
                    <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                      <td className="p-4 py-3 text-sm text-foreground">{item.date}</td>
                      <td className="p-4 py-3 text-sm text-foreground">{item.type}</td>
                      <td className="p-4 py-3 text-sm text-foreground font-medium">{item.desc}</td>
                      <td className="p-4 py-3 text-sm text-foreground">{item.doctor}</td>
                      <td className="p-4 py-3">
                        <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
