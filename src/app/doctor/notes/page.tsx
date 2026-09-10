'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, ChevronDown, Filter, Eye, MoreVertical, FileText, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function ClinicalNotesPage() {
  const notes = [
    { title: 'Follow-up: Blood Pressure Check', patient: 'John Doe', type: 'Follow-up Note', date: '29 May 2025', doctor: 'Dr. Rahul Sharma' },
    { title: 'Diabetes Management Plan', patient: 'Jane Smith', type: 'Progress Note', date: '28 May 2025', doctor: 'Dr. Rahul Sharma' },
    { title: 'Chest Pain Evaluation', patient: 'Robert Brown', type: 'Consultation Note', date: '27 May 2025', doctor: 'Dr. Rahul Sharma' },
    { title: 'Asthma Treatment Review', patient: 'Emily Davis', type: 'Progress Note', date: '26 May 2025', doctor: 'Dr. Rahul Sharma' },
    { title: 'COPD Care Plan', patient: 'Michael Wilson', type: 'SOAP Note', date: '25 May 2025', doctor: 'Dr. Rahul Sharma' },
    { title: 'Thyroid Follow-up', patient: 'Sarah Johnson', type: 'Follow-up Note', date: '24 May 2025', doctor: 'Dr. Rahul Sharma' },
    { title: 'Anxiety Assessment', patient: 'Laura Taylor', type: 'Consultation Note', date: '23 May 2025', doctor: 'Dr. Rahul Sharma' },
    { title: 'High Cholesterol Plan', patient: 'David Miller', type: 'Progress Note', date: '22 May 2025', doctor: 'Dr. Rahul Sharma' },
  ];

  const categories = [
    { name: 'Consultation Notes', count: 128, active: true },
    { name: 'Progress Notes', count: 86 },
    { name: 'SOAP Notes', count: 72 },
    { name: 'Discharge Notes', count: 24 },
    { name: 'Follow-up Notes', count: 45 },
    { name: 'Procedure Notes', count: 30 },
  ];

  const recentPatients = [
    { name: 'John Doe', id: 'PID-2025-1248' },
    { name: 'Jane Smith', id: 'PID-2025-1247' },
    { name: 'Robert Brown', id: 'PID-2025-1246' },
    { name: 'Emily Davis', id: 'PID-2025-1245' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Clinical Notes
          </h1>
          <p className="text-sm text-foreground mt-0.5">Create, view and manage patient clinical notes</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-3.5 h-3.5" /> New Note
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] min-h-[600px]">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[260px] shrink-0 flex flex-col gap-6 overflow-y-auto pr-2">
          
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-medium text-foreground mb-2 px-1">Note Categories</h2>
            <div className="flex flex-col">
              {categories.map((cat, i) => (
                <button 
                  key={i} 
                  className={`flex justify-between items-center px-4 py-2.5 rounded-lg transition-colors ${
                    cat.active ? 'bg-[#1e3a8a] text-foreground' : 'text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm font-medium">{cat.name}</span>
                  <span className={`text-xs ${cat.active ? 'text-blue-200' : 'text-foreground'}`}>{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-medium text-foreground mb-2 px-1">Recent Patients</h2>
            <div className="flex flex-col gap-1">
              {recentPatients.map((patient, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm text-foreground font-medium shrink-0">
                    {patient.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{patient.name}</span>
                    <span className="text-xs text-foreground">{patient.id}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-sm text-blue-400 hover:text-blue-300 font-medium px-4 mt-2 text-left transition-colors flex items-center gap-1">
              View all patients <ChevronRight className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Main Content Area */}
        <div className="flex-1 card p-0 border-border-main flex flex-col bg-card overflow-hidden">
          
          {/* Filters */}
          <div className="p-4 border-b border-border-main flex flex-col xl:flex-row gap-4 justify-between items-center bg-main">
            <div className="relative w-full xl:max-w-[300px]">
              <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search notes..." 
                className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
              <div className="relative flex-1 xl:flex-none">
                <select className="w-full xl:w-[150px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                  <option>All Patients</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              
              <div className="relative flex-1 xl:flex-none">
                <select className="w-full xl:w-[140px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                  <option>All Types</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative flex-1 xl:flex-none">
                <select className="w-full xl:w-[140px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                  <option>All Dates</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              
              <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
                <Filter className="w-3.5 h-3.5 text-foreground" /> Filter
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider sticky top-0 bg-card z-10">
                  <th className="font-medium p-4 whitespace-nowrap">Note Title</th>
                  <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                  <th className="font-medium p-4 whitespace-nowrap">Type</th>
                  <th className="font-medium p-4 whitespace-nowrap">Date</th>
                  <th className="font-medium p-4 whitespace-nowrap">Created By</th>
                  <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {notes.map((item, i) => (
                  <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                    <td className="p-4 py-3.5 text-sm text-foreground font-medium">{item.title}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.patient}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.type}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.date}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.doctor}</td>
                    <td className="p-4 py-3.5">
                      <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-border-main flex justify-between items-center bg-main shrink-0">
            <span className="text-xs text-foreground">Showing 1 to 8 of 142 notes</span>
            <div className="flex items-center gap-1">
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-6 h-6 rounded bg-[#1e3a8a] text-foreground flex items-center justify-center text-xs font-medium">1</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
              <span className="text-foreground text-xs px-1">...</span>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">18</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
          
        </div>

      </div>

    </DashboardLayout>
  );
}
