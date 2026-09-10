'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Calendar, Clock, Users, ShieldAlert, Clock3, Plus, 
  Search, Filter, Eye, Edit, ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';

export default function ShiftsPage() {
  const shifts = [
    { name: 'Morning Shift', date: '26 May 2025', time: '06:00 AM - 02:00 PM', dept: 'Cardiology', assigned: '24 / 28', status: 'Published' },
    { name: 'Evening Shift', date: '26 May 2025', time: '02:00 PM - 10:00 PM', dept: 'Emergency', assigned: '22 / 25', status: 'Published' },
    { name: 'Night Shift', date: '26 May 2025', time: '10:00 PM - 06:00 AM', dept: 'ICU', assigned: '18 / 20', status: 'Published' },
    { name: 'Morning Shift', date: '27 May 2025', time: '06:00 AM - 02:00 PM', dept: 'Pediatrics', assigned: '20 / 24', status: 'Published' },
    { name: 'Evening Shift', date: '27 May 2025', time: '02:00 PM - 10:00 PM', dept: 'Radiology', assigned: '15 / 18', status: 'Published' },
    { name: 'Night Shift', date: '27 May 2025', time: '10:00 PM - 06:00 AM', dept: 'Pharmacy', assigned: '10 / 12', status: 'Open' },
    { name: 'Morning Shift', date: '28 May 2025', time: '06:00 AM - 02:00 PM', dept: 'Orthopedics', assigned: '0 / 22', status: 'Open' },
    { name: 'Night Shift', date: '28 May 2025', time: '10:00 PM - 06:00 AM', dept: 'Emergency', assigned: '0 / 25', status: 'Open' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Published': return <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">Published</span>;
      case 'Open': return <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-medium border border-amber-500/20">Open</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Shifts
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage shifts, schedules and staffing</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
          <Plus className="w-3.5 h-3.5" /> Create Shift
        </button>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Total Shifts</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">36</span>
          <span className="text-xs text-foreground font-medium">This Month</span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Filled Shifts</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">32</span>
          <span className="text-xs text-green-500 font-medium">88.9%</span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Open Shifts</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">4</span>
          <span className="text-xs text-red-500 font-medium">11.1%</span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Employees Scheduled</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">412</span>
          <span className="text-xs text-foreground font-medium">This Month</span>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Overtime Hours</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">128h 35m</span>
          <span className="text-xs text-foreground font-medium">This Month</span>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        
        {/* Tabs & Controls */}
        <div className="p-4 border-b border-border-main flex flex-col lg:flex-row justify-between items-center gap-4 bg-main">
          
          <div className="flex items-center gap-6">
            <button className="text-sm font-medium text-purple-400 border-b-2 border-purple-500 pb-1">Shift Schedule</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors">Shift Calendar</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors">My Team Shifts</button>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-white/10 transition-colors">
              26 May - 01 Jun 2025 <Calendar className="w-3.5 h-3.5 text-foreground" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-white/10 transition-colors">
              <Filter className="w-3.5 h-3.5 text-foreground" /> Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider bg-main">
                <th className="font-medium p-4 whitespace-nowrap">Shift Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Date</th>
                <th className="font-medium p-4 whitespace-nowrap">Time</th>
                <th className="font-medium p-4 whitespace-nowrap">Department</th>
                <th className="font-medium p-4 whitespace-nowrap">Assigned Employees</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {shifts.map((shift, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5 text-sm text-foreground font-medium">{shift.name}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{shift.date}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{shift.time}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{shift.dept}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground font-medium">{shift.assigned}</td>
                  <td className="p-4 py-3.5">
                    {getStatusBadge(shift.status)}
                  </td>
                  <td className="p-4 py-3.5">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors">
                        <Edit className="w-3.5 h-3.5" />
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
          <span className="text-xs text-foreground">Showing 1 to 8 of 36 shifts</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">4</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">5</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
