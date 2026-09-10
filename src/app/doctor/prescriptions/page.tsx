'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, ChevronDown, Filter, Calendar as CalendarIcon, 
  Eye, Edit2, MoreVertical, ChevronLeft, ChevronRight, CheckCircle2, Pill
} from 'lucide-react';

export default function PrescriptionsPage() {
  const prescriptions = [
    { id: 'RX-2025-1248', patient: 'John Doe', date: '29 May 2025', meds: 3, status: 'Sent', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'RX-2025-1247', patient: 'Jane Smith', date: '28 May 2025', meds: 4, status: 'Sent', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'RX-2025-1246', patient: 'Robert Brown', date: '27 May 2025', meds: 3, status: 'Sent', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'RX-2025-1245', patient: 'Emily Davis', date: '26 May 2025', meds: 2, status: 'Sent', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'RX-2025-1244', patient: 'Michael Wilson', date: '25 May 2025', meds: 5, status: 'Draft', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { id: 'RX-2025-1243', patient: 'Sarah Johnson', date: '24 May 2025', meds: 3, status: 'Sent', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'RX-2025-1242', patient: 'David Miller', date: '23 May 2025', meds: 2, status: 'Sent', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'RX-2025-1241', patient: 'Laura Taylor', date: '22 May 2025', meds: 4, status: 'Sent', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Prescriptions
          </h1>
          <p className="text-sm text-foreground mt-0.5">View and manage all prescriptions</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-3.5 h-3.5" /> New Prescription
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
              placeholder="Search prescriptions..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Prescription ID</th>
                <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                <th className="font-medium p-4 whitespace-nowrap">Date</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Medications</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((item, i) => (
                <tr key={i} className={`border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group ${i===0 ? 'bg-white/5' : ''}`}>
                  <td className="p-4 py-3 text-sm text-foreground">{item.id}</td>
                  <td className="p-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs text-foreground font-medium shrink-0">
                        {item.patient.charAt(0)}
                      </div>
                      <span className="text-sm text-foreground font-medium whitespace-nowrap">{item.patient}</span>
                    </div>
                  </td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.date}</td>
                  <td className="p-4 py-3 text-sm text-foreground font-medium text-center">{item.meds}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border inline-block ${item.sColor}`}>
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
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Header & Meds */}
            <div className="flex-1 flex flex-col gap-6">
              
              <div className="flex items-center gap-4 border-b border-border-main pb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-[16px] text-foreground font-bold shrink-0">
                  J
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-lg font-bold text-foreground tracking-wide">RX-2025-1248</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm text-foreground">John Doe</span>
                    <span className="w-1 h-1 rounded-full bg-muted"></span>
                    <span className="text-xs text-foreground">29 May 2025</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                    <Pill className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">Amlodipine 5mg</span>
                    <span className="text-sm text-foreground mt-0.5">1 tablet daily after breakfast</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Pill className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">Telmisartan 40mg</span>
                    <span className="text-sm text-foreground mt-0.5">1 tablet daily at night</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <Pill className="w-3.5 h-3.5 text-purple-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">Atorvastatin 10mg</span>
                    <span className="text-sm text-foreground mt-0.5">1 tablet daily after dinner</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="w-px bg-border-main hidden lg:block"></div>

            {/* Instructions & Status */}
            <div className="w-full lg:w-[250px] shrink-0 flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-foreground">Instructions</h3>
                <ul className="flex flex-col gap-1.5 list-inside text-sm text-foreground">
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-muted"></div> Take medicines as prescribed</li>
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-muted"></div> Avoid salty and oily food</li>
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-muted"></div> Regular exercise and monitor BP</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-foreground">Status</h3>
                <div className="flex items-center gap-1.5 text-sm text-blue-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Sent to Patient
                </div>
              </div>

              <div className="mt-auto pt-4">
                <button className="w-full py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                  View Prescription
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border-main flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 8 of 96 prescriptions</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#1e3a8a] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <span className="text-foreground text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">12</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
