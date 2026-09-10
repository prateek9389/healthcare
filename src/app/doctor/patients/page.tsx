'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, ChevronDown, Filter, Users, UserCheck, UserPlus, AlertCircle,
  MoreVertical, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function PatientsPage() {
  const patientsList = [
    { name: 'John Doe', age: '45 / Male', phone: '+91 98765 43210', condition: 'Hypertension', lastVisit: '29 May 2025', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Jane Smith', age: '32 / Female', phone: '+91 91234 56789', condition: 'Diabetes Type 2', lastVisit: '28 May 2025', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Robert Brown', age: '58 / Male', phone: '+91 99887 76655', condition: 'Heart Disease', lastVisit: '27 May 2025', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Emily Davis', age: '29 / Female', phone: '+91 88776 65432', condition: 'Asthma', lastVisit: '26 May 2025', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Michael Wilson', age: '63 / Male', phone: '+91 77098 54433', condition: 'COPD', lastVisit: '25 May 2025', status: 'Follow-up Due', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { name: 'Sarah Johnson', age: '41 / Female', phone: '+91 66554 43322', condition: 'Hypothyroidism', lastVisit: '24 May 2025', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'David Miller', age: '50 / Male', phone: '+91 55443 32211', condition: 'High Cholesterol', lastVisit: '23 May 2025', status: 'Follow-up Due', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { name: 'Laura Taylor', age: '36 / Female', phone: '+91 44556 78901', condition: 'Anxiety', lastVisit: '22 May 2025', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Patients
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage and view all your patients</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-3.5 h-3.5" /> Add Patient
        </button>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Total Patients</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">1,248</span>
              <span className="text-xs text-green-500 font-medium">↑ 12% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <UserCheck className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Active Patients</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">892</span>
              <span className="text-xs text-green-500 font-medium">↑ 8% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/30 shrink-0">
            <UserPlus className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">New Patients</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">128</span>
              <span className="text-xs text-green-500 font-medium">↑ 15% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30 shrink-0">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Follow-ups Due</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">76</span>
              <span className="text-xs text-red-500 font-medium">↓ 5% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="card p-0 border-border-main flex flex-col bg-card">
        {/* Filters */}
        <div className="p-4 border-b border-border-main flex flex-col md:flex-row gap-4 justify-between items-center bg-main">
          <div className="relative w-full md:w-[300px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search patients by name, email or phone..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <select className="w-full md:w-[140px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="relative flex-1 md:flex-none">
              <select className="w-full md:w-[150px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Conditions</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
              <Filter className="w-3.5 h-3.5 text-foreground" /> Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                <th className="font-medium p-4 whitespace-nowrap">Age / Gender</th>
                <th className="font-medium p-4 whitespace-nowrap">Phone</th>
                <th className="font-medium p-4 whitespace-nowrap">Condition</th>
                <th className="font-medium p-4 whitespace-nowrap">Last Visit</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patientsList.map((patient, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm text-foreground font-medium shrink-0">
                        {patient.name.charAt(0)}
                      </div>
                      <span className="text-sm text-foreground font-medium whitespace-nowrap">{patient.name}</span>
                    </div>
                  </td>
                  <td className="p-4 py-3 text-sm text-foreground">{patient.age}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{patient.phone}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{patient.condition}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{patient.lastVisit}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${patient.sColor}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="p-4 py-3">
                    <div className="flex justify-center">
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
        <div className="p-4 border-t border-border-main flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 8 of 248 patients</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#1e3a8a] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <span className="text-foreground text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">31</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
