'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Search, Plus, Filter, Eye, Edit2, Trash2, ChevronLeft, ChevronRight, ChevronDown, Calendar as CalendarIcon } from 'lucide-react';

export default function AdminAppointmentsPage() {
  const appointmentsList = [
    { patient: 'John Doe', doctor: 'Dr. Sarah Johnson', dept: 'Cardiology', date: '21 May 2025\n10:24 AM', status: 'Confirmed', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20', avatar: 'https://i.pravatar.cc/150?u=john_doe' },
    { patient: 'Emily Davis', doctor: 'Dr. Michael Brown', dept: 'Neurology', date: '21 May 2025\n09:15 AM', status: 'Confirmed', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20', avatar: 'https://i.pravatar.cc/150?u=emily_d' },
    { patient: 'Robert Wilson', doctor: 'Dr. James Wilson', dept: 'Orthopedics', date: '21 May 2025\n08:45 AM', status: 'Confirmed', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20', avatar: 'https://i.pravatar.cc/150?u=robert_w' },
    { patient: 'Sophia Martinez', doctor: 'Dr. Sarah Johnson', dept: 'Cardiology', date: '21 May 2025\n08:30 AM', status: 'Pending', statusColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', avatar: 'https://i.pravatar.cc/150?u=sophia' },
    { patient: 'William Taylor', doctor: 'Dr. Emily Clark', dept: 'Pediatrics', date: '21 May 2025\n07:50 AM', status: 'Confirmed', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20', avatar: 'https://i.pravatar.cc/150?u=william' },
    { patient: 'Olivia Anderson', doctor: 'Dr. Lisa Anderson', dept: 'Gynecology', date: '21 May 2025\n07:30 AM', status: 'Cancelled', statusColor: 'bg-red-500/10 text-red-400 border-red-500/20', avatar: 'https://i.pravatar.cc/150?u=olivia' },
    { patient: 'James Thomas', doctor: 'Dr. Robert Taylor', dept: 'Dermatology', date: '21 May 2025\n04:30 PM', status: 'Confirmed', statusColor: 'bg-green-500/10 text-green-400 border-green-500/20', avatar: 'https://i.pravatar.cc/150?u=james_t' },
  ];

  const scheduleList = [
    { time: '09:00 AM', name: 'John Doe', doc: 'Dr. Sarah Johnson', type: 'Consultation', status: 'Confirmed', statusColor: 'text-green-500' },
    { time: '10:00 AM', name: 'Emily Davis', doc: 'Dr. Michael Brown', type: 'Follow-up', status: 'Confirmed', statusColor: 'text-green-500' },
    { time: '11:00 AM', name: 'Robert Wilson', doc: 'Dr. James Wilson', type: 'Consultation', status: 'Confirmed', statusColor: 'text-green-500' },
    { time: '01:00 PM', name: 'Sophia Martinez', doc: 'Dr. Sarah Johnson', type: 'X-Ray Review', status: 'Pending', statusColor: 'text-yellow-500' },
    { time: '02:30 PM', name: 'William Taylor', doc: 'Dr. Emily Clark', type: 'Consultation', status: 'Confirmed', statusColor: 'text-green-500' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-medium text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          New Appointment
        </button>
      </div>

      {/* Top Stats Row */}
      <div className="card grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/5 mb-6">
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Total Appointments</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">1,248</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-[13px] font-bold text-green-500">12.5%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Today's Appointments</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">48</p>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Upcoming</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">156</p>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Completed</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">1,044</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-[13px] font-bold text-green-500">14.2%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Cancelled</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">26</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-[13px] font-bold text-red-500">5.2%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Panel: Today's Schedule Timeline */}
        <div className="card w-full lg:w-[320px] xl:w-[380px] flex-shrink-0 flex flex-col border border-border-main h-full min-h-[600px]">
          <div className="p-4 border-b border-border-main">
            <h2 className="text-[16px] font-bold text-foreground">Today's Schedule</h2>
          </div>
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="relative border-l border-border-main ml-8 space-y-8">
              {scheduleList.map((item, i) => (
                <div key={i} className="relative pl-6">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-indigo-500 border-2 border-[#151C2C]"></div>
                  {/* Time */}
                  <div className="absolute -left-[70px] top-0 text-[13px] font-semibold text-foreground font-medium">
                    {item.time}
                  </div>
                  
                  {/* Card content */}
                  <div className="bg-main/50 border border-border-main rounded-xl p-3">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-2">
                        <img src={`https://i.pravatar.cc/150?u=${item.name}`} className="w-6 h-6 rounded-full object-cover" />
                        <div>
                          <p className="text-[14px] font-medium text-foreground leading-tight">{item.name}</p>
                          <p className="text-[14px] text-foreground">{item.doc}</p>
                        </div>
                      </div>
                      <span className={`text-[14px] font-medium ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[14px] text-foreground mt-2 ml-8">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 border-t border-border-main flex justify-center">
            <button className="text-[14px] text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              View Full Schedule
            </button>
          </div>
        </div>

        {/* Right Panel: All Appointments Table */}
        <div className="card flex-1 flex flex-col border border-border-main overflow-hidden">
          <div className="p-4 border-b border-border-main flex justify-between items-center">
            <h2 className="text-[16px] font-bold text-foreground">All Appointments</h2>
          </div>
          
          {/* Filters Row */}
          <div className="p-4 border-b border-border-main flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground" />
              <input 
                type="text" 
                placeholder="Search appointments, patient or doctor..." 
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-main/50 border border-border-main text-[14px] text-foreground placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all"
              />
            </div>
            <button className="flex items-center justify-between gap-6 px-4 py-2 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
              All Doctors
              <ChevronDown className="w-4 h-4 text-foreground" />
            </button>
            <button className="flex items-center justify-between gap-6 px-4 py-2 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
              All Departments
              <ChevronDown className="w-4 h-4 text-foreground" />
            </button>
            <button className="flex items-center justify-between gap-6 px-4 py-2 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
              All Status
              <ChevronDown className="w-4 h-4 text-foreground" />
            </button>
            <button className="flex items-center justify-between gap-3 px-4 py-2 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
              May 21, 2025
              <CalendarIcon className="w-4 h-4 text-foreground" />
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                  <th className="py-3 px-6 font-medium">Patient</th>
                  <th className="py-3 px-6 font-medium">Doctor</th>
                  <th className="py-3 px-6 font-medium">Department</th>
                  <th className="py-3 px-6 font-medium">Date & Time</th>
                  <th className="py-3 px-6 font-medium">Status</th>
                  <th className="py-3 px-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointmentsList.map((apt, i) => (
                  <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-3">
                        <img src={apt.avatar} alt={apt.patient} className="w-[30px] h-[30px] rounded-full object-cover" />
                        <p className="text-[14px] font-semibold text-foreground">{apt.patient}</p>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{apt.doctor}</td>
                    <td className="py-3 px-6 text-[13px] font-medium text-foreground">{apt.dept}</td>
                    <td className="py-3 px-6">
                      <p className="text-[13px] font-medium text-foreground">{apt.date.split('\n')[0]}</p>
                      <p className="text-[13px] font-semibold text-foreground">{apt.date.split('\n')[1]}</p>
                    </td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 rounded text-[13px] font-bold border ${apt.statusColor}`}>
                        {apt.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-border-main flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[13px] font-medium text-foreground">Showing 1 to 7 of 1,248 results</p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-7 h-7 rounded bg-[#4f46e5] text-white flex items-center justify-center text-[14px] font-medium shadow-[0_0_10px_rgba(79,70,229,0.3)]">
                1
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                2
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                3
              </button>
              <span className="px-1 text-slate-600 text-[14px]">...</span>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors text-[14px] font-medium">
                178
              </button>
              <button className="w-7 h-7 rounded bg-main border border-border-main flex items-center justify-center text-foreground hover:text-foreground transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
