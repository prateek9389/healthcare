'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Search, Plus, Building2, Users, Stethoscope, BriefcaseMedical, Building, ShieldCheck,
  HeartPulse, UserRound, Pill, Baby, Truck, Cog, Edit, MoreVertical,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export default function DepartmentsPage() {
  const departments = [
    { 
      name: 'Cardiology', email: 'cardiology@hospital.com', icon: <HeartPulse className="w-4 h-4 text-purple-500" />, bg: 'bg-purple-500/20 border-purple-500/30',
      head: { name: 'Dr. Priya Singh', role: 'Senior Cardiologist', avatar: 'https://i.pravatar.cc/150?img=5' },
      totalStaff: 120, doctors: 28, nurses: 52, support: 40, location: 'Block A, Floor 3', status: 'Active'
    },
    { 
      name: 'General Medicine', email: 'medicine@hospital.com', icon: <BriefcaseMedical className="w-4 h-4 text-green-500" />, bg: 'bg-green-500/20 border-green-500/30',
      head: { name: 'Dr. Rajeev Kumar', role: 'Consultant Physician', avatar: 'https://i.pravatar.cc/150?img=11' },
      totalStaff: 98, doctors: 20, nurses: 38, support: 40, location: 'Block B, Floor 2', status: 'Active'
    },
    { 
      name: 'Orthopedics', email: 'orthopedics@hospital.com', icon: <UserRound className="w-4 h-4 text-blue-500" />, bg: 'bg-blue-500/20 border-blue-500/30',
      head: { name: 'Dr. Arjun Mehta', role: 'Orthopedic Surgeon', avatar: 'https://i.pravatar.cc/150?img=33' },
      totalStaff: 86, doctors: 18, nurses: 30, support: 38, location: 'Block A, Floor 4', status: 'Active'
    },
    { 
      name: 'Pediatrics', email: 'pediatrics@hospital.com', icon: <Baby className="w-4 h-4 text-amber-500" />, bg: 'bg-amber-500/20 border-amber-500/30',
      head: { name: 'Dr. Anjali Verma', role: 'Pediatrician', avatar: 'https://i.pravatar.cc/150?img=9' },
      totalStaff: 74, doctors: 15, nurses: 40, support: 19, location: 'Block B, Floor 3', status: 'Active'
    },
    { 
      name: 'Emergency', email: 'emergency@hospital.com', icon: <Truck className="w-4 h-4 text-red-500" />, bg: 'bg-red-500/20 border-red-500/30',
      head: { name: 'Dr. Rohan Iyer', role: 'Emergency Physician', avatar: 'https://i.pravatar.cc/150?img=12' },
      totalStaff: 68, doctors: 12, nurses: 30, support: 26, location: 'Ground Floor', status: 'Active'
    },
    { 
      name: 'Administration', email: 'admin@hospital.com', icon: <Building className="w-4 h-4 text-orange-500" />, bg: 'bg-orange-500/20 border-orange-500/30',
      head: { name: 'Neha Gupta', role: 'HR Executive', avatar: 'https://i.pravatar.cc/150?img=20' },
      totalStaff: 62, doctors: 0, nurses: 0, support: 62, location: 'Block C, Floor 1', status: 'Active'
    },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Departments
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage hospital departments and their staff</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block w-[250px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search departments..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Add Department
          </button>
        </div>
      </div>

      {/* 6 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0 border border-orange-500/30">
            <Building2 className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-0.5 whitespace-nowrap">Total Departments</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">18</span>
            <span className="text-xs text-foreground font-medium mt-0.5">Active</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30">
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-0.5 whitespace-nowrap">Total Staff</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">1,248</span>
            <span className="text-xs text-foreground font-medium mt-0.5">Across all departments</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
            <Stethoscope className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-0.5 whitespace-nowrap">Total Doctors</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">312</span>
            <span className="text-xs text-foreground font-medium mt-0.5">25.0% of total staff</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
            <UserRound className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-0.5 whitespace-nowrap">Total Nurses</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">456</span>
            <span className="text-xs text-foreground font-medium mt-0.5">36.5% of total staff</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center shrink-0 border border-slate-600/50">
            <Users className="w-5 h-5 text-foreground" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-0.5 whitespace-nowrap">Avg. Staff per Dept.</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">69</span>
            <span className="text-xs text-foreground font-medium mt-0.5">Employees</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-xs text-foreground font-medium mb-0.5 whitespace-nowrap">Departments Headed</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">18</span>
            <span className="text-xs text-foreground font-medium mt-0.5">100% active</span>
          </div>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider bg-main">
                <th className="font-medium p-4 whitespace-nowrap">Department</th>
                <th className="font-medium p-4 whitespace-nowrap">Department Head</th>
                <th className="font-medium p-4 whitespace-nowrap">Total Staff</th>
                <th className="font-medium p-4 whitespace-nowrap">Doctors</th>
                <th className="font-medium p-4 whitespace-nowrap">Nurses</th>
                <th className="font-medium p-4 whitespace-nowrap">Support Staff</th>
                <th className="font-medium p-4 whitespace-nowrap">Location</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${dept.bg}`}>
                        {dept.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{dept.name}</span>
                        <span className="text-xs text-foreground">{dept.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full overflow-hidden border border-border-main shrink-0">
                        <img src={dept.head.avatar} alt={dept.head.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{dept.head.name}</span>
                        <span className="text-xs text-foreground">{dept.head.role}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 py-3.5">
                    <div className="flex items-center gap-1.5 text-sm text-foreground font-medium">
                      <Users className="w-3.5 h-3.5 text-foreground" />
                      {dept.totalStaff}
                    </div>
                  </td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{dept.doctors}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{dept.nurses}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{dept.support}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{dept.location}</td>
                  <td className="p-4 py-3.5">
                    <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-500 border border-green-500/20 text-xs font-medium">
                      {dept.status}
                    </span>
                  </td>
                  <td className="p-4 py-3.5">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors">
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 6 of 18 departments</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <span className="text-foreground text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
