'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Calendar, CheckCircle2, Clock, XCircle, Search, ScanLine, 
  ChevronLeft, ChevronRight, UserCheck
} from 'lucide-react';

export default function CheckInPage() {
  const checkins = [
    { time: '09:30 AM', patient: 'Rahul Verma', doctor: 'Dr. Amit Mehta', dept: 'Cardiology', phone: '+91 98765 43210', status: 'Check-In' },
    { time: '10:00 AM', patient: 'Neha Sharma', doctor: 'Dr. Neha Sharma', dept: 'Physiotherapy', phone: '+91 91234 56789', status: 'Check-In' },
    { time: '10:30 AM', patient: 'Vikram Patel', doctor: 'Dr. Pooja Iyer', dept: 'Dermatology', phone: '+91 99887 66555', status: 'Check-In' },
    { time: '11:00 AM', patient: 'Anita Singh', doctor: 'Dr. Amit Mehta', dept: 'Cardiology', phone: '+91 90011 22334', status: 'Check-In' },
    { time: '11:30 AM', patient: 'Suresh Kumar', doctor: 'Dr. Rajesh Gupta', dept: 'Orthopedics', phone: '+91 88776 65544', status: 'Check-In' },
    { time: '12:00 PM', patient: 'Kavita Rani', doctor: 'Dr. Neha Sharma', dept: 'Physiotherapy', phone: '+91 80776 55443', status: 'Check-In' },
    { time: '12:30 PM', patient: 'Amit Joshi', doctor: 'Dr. Amit Mehta', dept: 'Cardiology', phone: '+91 87654 32109', status: 'Check-In' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">Check-In</h1>
          <p className="text-sm text-foreground mt-1">Check-in patients for their appointments</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search by name, phone or appointment ID..." className="w-80 bg-card border border-border-main rounded-lg pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-blue-500/50" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <ScanLine className="w-4 h-4" /> Scan QR / ID
          </button>
        </div>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center justify-between group">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Total Appointments Today</span>
            <span className="text-[32px] font-bold text-foreground leading-none mt-2">56</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center justify-between group">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Checked-In</span>
            <span className="text-[32px] font-bold text-foreground leading-none mt-2">28</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center justify-between group">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Pending Check-In</span>
            <span className="text-[32px] font-bold text-foreground leading-none mt-2">20</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
        </div>

        <div className="card p-5 border-border-main bg-card shadow-lg flex items-center justify-between group">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">No Show</span>
            <span className="text-[32px] font-bold text-foreground leading-none mt-2">8</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
        </div>

      </div>

      {/* Table */}
      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
        
        {/* Tabs */}
        <div className="p-4 border-b border-border-main flex items-center gap-2">
          <button className="px-4 py-1.5 text-sm font-medium bg-[#2563eb] text-white rounded-md">Pending Check-In</button>
          <button className="px-4 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors">Checked-In</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-sm font-bold text-foreground">
                <th className="p-4 font-medium pl-6">Appointment Time</th>
                <th className="p-4 font-medium">Patient Name</th>
                <th className="p-4 font-medium">Doctor</th>
                <th className="p-4 font-medium">Department</th>
                <th className="p-4 font-medium">Phone</th>
                <th className="p-4 font-medium pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main/50">
              {checkins.map((item, i) => (
                <tr key={i} className="hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 pl-6 text-sm text-foreground">{item.time}</td>
                  <td className="p-4 text-base font-medium text-foreground">{item.patient}</td>
                  <td className="p-4 text-sm text-foreground">{item.doctor}</td>
                  <td className="p-4 text-sm text-foreground">{item.dept}</td>
                  <td className="p-4 text-sm text-foreground">{item.phone}</td>
                  <td className="p-4 pr-6 text-right">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/50 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-foreground text-sm font-medium rounded transition-colors">
                      <UserCheck className="w-3.5 h-3.5" />
                      {item.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border-main flex items-center justify-between text-sm text-foreground bg-main">
          <span>Showing 1 to 7 of 20 pending check-ins</span>
          
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="w-6 h-6 rounded bg-[#2563eb] text-white flex items-center justify-center font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">3</button>
            <span className="px-1 text-slate-600">...</span>
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
