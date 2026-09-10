'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, ChevronDown, Filter, Calendar as CalendarIcon, 
  Eye, Edit2, MoreVertical, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function ConsultationsPage() {
  const consultations = [
    { name: 'John Doe', time: '29 May 2025, 09:15 AM', type: 'Follow-up', diagnosis: 'Hypertension', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Jane Smith', time: '28 May 2025, 10:20 AM', type: 'Consultation', diagnosis: 'Diabetes Type 2', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Robert Brown', time: '27 May 2025, 11:30 AM', type: 'Consultation', diagnosis: 'Angina', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Emily Davis', time: '26 May 2025, 12:10 PM', type: 'Consultation', diagnosis: 'Asthma', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Michael Wilson', time: '25 May 2025, 02:00 PM', type: 'Consultation', diagnosis: 'COPD', status: 'In Progress', sColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { name: 'Sarah Johnson', time: '24 May 2025, 03:15 PM', type: 'Consultation', diagnosis: 'Hypothyroidism', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'David Miller', time: '23 May 2025, 04:00 PM', type: 'Consultation', diagnosis: 'High Cholesterol', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Laura Taylor', time: '22 May 2025, 05:20 PM', type: 'Consultation', diagnosis: 'Anxiety', status: 'Completed', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Consultations
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage and view all patient consultations</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-3.5 h-3.5" /> New Consultation
        </button>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card mb-6">
        {/* Filters */}
        <div className="p-4 border-b border-border-main flex flex-col xl:flex-row gap-4 justify-between items-center bg-main">
          
          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <div className="relative flex-1 xl:flex-none">
              <select className="w-full xl:w-[150px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Patients</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
            <div className="relative flex-1 xl:flex-none">
              <select className="w-full xl:w-[150px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Types</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative flex-1 xl:flex-none">
              <select className="w-full xl:w-[140px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
            <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
              01 May 2025 - 31 May 2025 <CalendarIcon className="w-3.5 h-3.5 text-foreground" />
            </button>
            
            <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
              <Filter className="w-3.5 h-3.5 text-foreground" /> Filter
            </button>
          </div>
          
          <div className="relative w-full xl:w-[250px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search consultations..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                <th className="font-medium p-4 whitespace-nowrap">Date & Time</th>
                <th className="font-medium p-4 whitespace-nowrap">Type</th>
                <th className="font-medium p-4 whitespace-nowrap">Diagnosis</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((item, i) => (
                <tr key={i} className={`border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group ${i===0 ? 'bg-white/5' : ''}`}>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{item.name}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.time}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.type}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.diagnosis}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${item.sColor}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 py-3">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                        <Edit2 className="w-4 h-4" />
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

        {/* Bottom Details Preview Panel */}
        <div className="p-6 border-t border-border-main bg-main">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Patient Info */}
            <div className="flex flex-col gap-4 w-[250px] shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-lg text-foreground font-bold">
                  J
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-foreground">John Doe</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-foreground flex items-center gap-1">45 / Male</span>
                    <span className="w-1 h-1 rounded-full bg-muted"></span>
                    <span className="text-xs text-foreground">+91 98765 43210</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-foreground">Consultation Summary</h3>
                <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-card border border-border-main">
                  <span className="text-sm text-foreground"><strong className="text-foreground">BP:</strong> 130/85 mmHg</span>
                  <span className="text-sm text-foreground"><strong className="text-foreground">Weight:</strong> 78 kg</span>
                  <span className="text-sm text-foreground"><strong className="text-foreground">Notes:</strong> Patient is responding well to medication.</span>
                </div>
              </div>
            </div>

            <div className="w-px bg-border-main hidden md:block"></div>

            {/* Diagnosis & Treatment */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-foreground">Diagnosis</h3>
                  <div className="flex justify-between items-center pb-2 border-b border-border-main">
                    <span className="text-base font-medium text-foreground">Hypertension</span>
                    <span className="text-sm text-foreground">ICD-10: I10</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-foreground">Next Follow-up</h3>
                  <div className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                    <span className="text-lg font-bold text-foreground">12 Jun 2025</span>
                  </div>
                </div>
                
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-foreground">Treatment Plan</h3>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-foreground">Continue current medication</span>
                  <span className="text-sm text-foreground">Low salt diet, regular exercise</span>
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <button className="px-4 py-2 bg-card hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-border-main text-foreground text-sm font-medium rounded-lg transition-colors">
                  View Details
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border-main flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 8 of 142 consultations</span>
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

    </DashboardLayout>
  );
}
