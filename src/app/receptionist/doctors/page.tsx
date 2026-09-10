'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Calendar, CheckSquare, Plus, Search, ChevronDown, 
  UserRoundSearch, CalendarDays, CalendarOff, CalendarX2, Filter,
  ChevronLeft, ChevronRight, CheckSquare2, Coffee, XSquare, MinusSquare
} from 'lucide-react';

export default function DoctorAvailabilityPage() {
  const doctors = [
    { name: 'Dr. Amit Mehta', desc: 'MBBS, MD (Cardiology)', dept: 'Cardiology', status: 'Available', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20', slots: ['Available', 'Available', 'Available', 'Break', 'Available', 'Available', 'Available', 'Available', 'Available'] },
    { name: 'Dr. Neha Sharma', desc: 'MBBS, DPT (Physiotherapy)', dept: 'Physiotherapy', status: 'Available', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20', slots: ['Available', 'Available', 'Available', 'Break', 'Available', 'Available', 'Available', 'Break', 'Available', 'Available'] }, // Note: Adjusted to fit 9 columns
    { name: 'Dr. Pooja Iyer', desc: 'MBBS, MD (Dermatology)', dept: 'Dermatology', status: 'On Leave', statusColor: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20', slots: ['-', '-', '-', '-', '-', '-', '-', '-', '-'] },
    { name: 'Dr. Rajesh Gupta', desc: 'MBBS, MS (Orthopedics)', dept: 'Orthopedics', status: 'Available', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20', slots: ['Available', 'Available', 'Available', 'Break', 'Available', 'Break', 'Available', 'Available', 'Available'] },
    { name: 'Dr. Kavita Rani', desc: 'MBBS, MD (Neurology)', dept: 'Neurology', status: 'Unavailable', statusColor: 'text-red-600 dark:text-red-400 bg-red-500/10 border-red-500/20', slots: ['-', '-', '-', '-', '-', '-', '-', '-', '-'] },
    { name: 'Dr. Suresh Kumar', desc: 'MBBS, MD (General Medicine)', dept: 'General Medicine', status: 'Available', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20', slots: ['Available', 'Break', 'Available', 'Available', 'Available', 'Available', 'Break', 'Available', 'Available'] },
    { name: 'Dr. Reena Gupta', desc: 'MBBS, MS (Gynecology)', dept: 'Gynecology', status: 'On Leave', statusColor: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20', slots: ['-', '-', '-', '-', '-', '-', '-', '-', '-'] },
    { name: 'Dr. Ajay Kumar', desc: 'MBBS, MD (Pediatrics)', dept: 'Pediatrics', status: 'Available', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20', slots: ['Available', 'Available', 'Available', 'Break', 'Available', 'Available', 'Available', 'Available', 'Available'] },
  ];

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  const getSlotBadge = (slot: string) => {
    switch (slot) {
      case 'Available':
        return <span className="text-xs font-medium px-2 py-1 rounded border text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20">Available</span>;
      case 'Break':
        return <span className="text-xs font-medium px-2 py-1 rounded border text-[#d97706] bg-[#d97706]/10 border-[#d97706]/20">Break</span>;
      case 'On Leave':
        return <span className="text-xs font-medium px-2 py-1 rounded border text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20">On Leave</span>;
      case 'Unavailable':
        return <span className="text-xs font-medium px-2 py-1 rounded border text-red-600 dark:text-red-400 bg-red-500/10 border-red-500/20">Unavailable</span>;
      default:
        return <span className="text-foreground">-</span>;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">Doctor Availability</h1>
          <p className="text-sm text-foreground mt-1">View doctor schedules and manage availability</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-card border border-border-main rounded-lg px-3 py-2 cursor-pointer hover:border-slate-600 transition-colors">
            <Calendar className="w-3.5 h-3.5 text-foreground" />
            <span className="text-sm text-foreground ml-1">31 May 2025, Saturday</span>
            <ChevronDown className="w-3.5 h-3.5 text-foreground ml-2" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Plus className="w-4 h-4" /> Add Availability
          </button>
        </div>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
            <UserRoundSearch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Total Doctors</span>
            <span className="text-[28px] font-bold text-foreground leading-none mt-1">28</span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400 mt-1.5">Active</span>
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
            <CalendarDays className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Available Today</span>
            <span className="text-[28px] font-bold text-foreground leading-none mt-1">18</span>
            <span className="text-xs text-foreground mt-1.5"><span className="text-green-600 dark:text-green-400 font-medium">64%</span> of doctors</span>
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
            <CalendarOff className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">On Leave</span>
            <span className="text-[28px] font-bold text-foreground leading-none mt-1">4</span>
            <span className="text-xs text-foreground mt-1.5"><span className="text-orange-600 dark:text-orange-400 font-medium">14%</span> of doctors</span>
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
            <CalendarX2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Unavailable</span>
            <span className="text-[28px] font-bold text-foreground leading-none mt-1">6</span>
            <span className="text-xs text-foreground mt-1.5"><span className="text-purple-600 dark:text-purple-400 font-medium">22%</span> of doctors</span>
          </div>
        </div>

      </div>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
        <div className="relative flex-1 w-full lg:w-auto">
          <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" placeholder="Search doctor by name, department..." className="w-full bg-card border border-border-main rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
        </div>
        
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="relative w-full lg:w-48">
            <select defaultValue="" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground appearance-none focus:outline-none focus:border-blue-500/50">
              <option value="" disabled>All Departments</option>
              <option value="cardio">Cardiology</option>
              <option value="derma">Dermatology</option>
            </select>
            <ChevronDown className="w-4 h-4 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          
          <div className="relative w-full lg:w-40">
            <select defaultValue="" className="w-full bg-card border border-border-main rounded-lg px-3 py-2.5 text-sm text-foreground appearance-none focus:outline-none focus:border-blue-500/50">
              <option value="" disabled>All Status</option>
              <option value="available">Available</option>
              <option value="leave">On Leave</option>
            </select>
            <ChevronDown className="w-4 h-4 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative w-full lg:w-40">
            <select defaultValue="" className="w-full bg-card border border-border-main rounded-lg pl-9 pr-8 py-2.5 text-sm text-foreground appearance-none focus:outline-none focus:border-blue-500/50">
              <option value="" disabled>Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
            <Calendar className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <ChevronDown className="w-4 h-4 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-main border border-border-main text-foreground text-sm font-medium rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      {/* Grid Table */}
      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col overflow-hidden">
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 font-medium pl-6 text-sm text-foreground border-b border-border-main" rowSpan={2}>Doctor</th>
                <th className="p-4 font-medium text-sm text-foreground border-b border-border-main" rowSpan={2}>Department</th>
                <th className="p-4 font-medium text-sm text-foreground border-b border-border-main" rowSpan={2}>Status</th>
                <th className="p-2 pt-4 font-medium text-sm text-foreground text-center border-b border-border-main" colSpan={9}>Availability (31 May 2025)</th>
              </tr>
              <tr className="border-b border-border-main text-xs font-medium text-foreground">
                {timeSlots.map((time, i) => (
                  <th key={i} className="p-3 text-center min-w-[80px]">{time}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main/50">
              {doctors.map((doc, i) => (
                <tr key={i} className="hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <img src={`https://i.pravatar.cc/150?img=${i+11}`} alt={doc.name} className="w-8 h-8 rounded-full object-cover border border-border-main" />
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-foreground">{doc.name}</span>
                        <span className="text-xs text-foreground mt-0.5">{doc.desc}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground">{doc.dept}</td>
                  <td className="p-4">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded border ${doc.statusColor}`}>
                      {doc.status}
                    </span>
                  </td>
                  {doc.slots.map((slot, j) => (
                    <td key={j} className="p-2 text-center">
                      {getSlotBadge(slot)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="p-4 border-t border-border-main flex items-center gap-6 text-sm text-foreground">
          <div className="flex items-center gap-2">
            <CheckSquare2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" /> Available
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="w-3.5 h-3.5 text-[#d97706]" /> Break
          </div>
          <div className="flex items-center gap-2">
            <XSquare className="w-3.5 h-3.5 text-red-600 dark:text-red-400" /> Unavailable
          </div>
          <div className="flex items-center gap-2">
            <MinusSquare className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" /> On Leave
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground px-1">-</span> Not Scheduled
          </div>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border-main flex items-center justify-between text-sm text-foreground bg-main">
          <span>Showing 1 to 8 of 28 doctors</span>
          
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="w-6 h-6 rounded bg-[#2563eb] text-white flex items-center justify-center font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">4</button>
            <span className="px-1 text-slate-600">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">4</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-foreground">10 / page</span>
            <ChevronRight className="w-3 h-3 text-foreground rotate-90" />
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
