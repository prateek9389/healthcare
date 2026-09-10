'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Search, Filter, Edit, CheckSquare, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function MedicationAdministrationPage() {
  const meds = [
    { name: 'Paracetamol 650mg', patient: 'Rahul Verma (101)', dose: '650 mg', route: 'Oral', time: '10:30 AM', status: 'Pending' },
    { name: 'Ceftriaxone 1g', patient: 'Amit Kumar (103)', dose: '1 g', route: 'IV', time: '11:00 AM', status: 'Pending' },
    { name: 'Metformin 500mg', patient: 'Sunita Reddy (104)', dose: '500 mg', route: 'Oral', time: '11:30 AM', status: 'Pending' },
    { name: 'Pantoprazole 40mg', patient: 'Neha Gupta (102)', dose: '40 mg', route: 'IV', time: '12:00 PM', status: 'Completed' },
    { name: 'Ibuprofen 400mg', patient: 'Vikram Patel (105)', dose: '400 mg', route: 'Oral', time: '01:00 PM', status: 'Completed' },
    { name: 'Multivitamin', patient: 'Pooja Sharma (106)', dose: '1 tab', route: 'Oral', time: '02:00 PM', status: 'Pending' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Pending': return <span className="text-amber-500 text-sm font-medium px-2 py-0.5 rounded border border-amber-500/20">Pending</span>;
      case 'Completed': return <span className="text-green-500 text-sm font-medium px-2 py-0.5 rounded border border-green-500/20">Completed</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Medication Administration
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage and record medication administration</p>
        </div>
        
        <div className="flex items-center gap-3 bg-card rounded-lg border border-border-main p-1 pr-3">
          <div className="relative w-[220px]">
            <Search className="w-3.5 h-3.5 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search medication or patient..." 
              className="w-full pl-8 pr-3 py-1.5 bg-transparent text-sm text-foreground placeholder:text-foreground focus:outline-none"
            />
          </div>
          <div className="w-px h-4 bg-border-main mx-1"></div>
          <button className="flex items-center gap-1.5 text-foreground hover:text-foreground text-sm font-medium transition-colors">
            <Filter className="w-3 h-3" /> Filters
          </button>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        
        {/* Tabs */}
        <div className="p-4 border-b border-border-main flex items-center gap-6 bg-main overflow-x-auto hide-scrollbar">
          <button className="flex items-center gap-2 text-sm font-medium bg-[#5b21b6] px-4 py-1.5 rounded-md text-foreground whitespace-nowrap">
            Pending <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[9px] font-bold">6</span>
          </button>
          <button className="text-sm font-bold text-foreground hover:text-foreground transition-colors whitespace-nowrap">Completed</button>
          <button className="text-sm font-bold text-foreground hover:text-foreground transition-colors whitespace-nowrap">All Records</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider bg-main">
                <th className="font-medium p-4 whitespace-nowrap">Medication</th>
                <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                <th className="font-medium p-4 whitespace-nowrap">Dose</th>
                <th className="font-medium p-4 whitespace-nowrap">Route</th>
                <th className="font-medium p-4 whitespace-nowrap">Time</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {meds.map((med, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5 text-sm text-foreground font-medium">{med.name}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{med.patient}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{med.dose}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{med.route}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground font-medium">{med.time}</td>
                  <td className="p-4 py-3.5">{getStatusBadge(med.status)}</td>
                  <td className="p-4 py-3.5">
                    <div className="flex justify-center gap-3">
                      <button className="text-foreground hover:text-foreground transition-colors">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="text-foreground hover:text-foreground transition-colors">
                        <CheckSquare className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 6 of 15 medications</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
