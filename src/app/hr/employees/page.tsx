'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Search, Filter, Download, Plus, Users, UserCheck, 
  UserMinus, Calendar, Sun, Moon, Sunset,
  Eye, Edit, MoreVertical, ChevronDown, ChevronLeft, ChevronRight,
  UserX
} from 'lucide-react';

export default function EmployeesPage() {
  const employees = [
    { name: 'Dr. Priya Singh', email: 'priya.singh@hospital.com', id: 'EMP-0001', dept: 'Cardiology', role: 'Senior Cardiologist', shift: 'Morning', phone: '+91 98765 43210', date: '12 Jan 2023', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Rahul Verma', email: 'rahul.verma@hospital.com', id: 'EMP-0002', dept: 'Emergency', role: 'Senior Nurse', shift: 'Night', phone: '+91 98765 43211', date: '18 Feb 2023', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Amit Kumar', email: 'amit.kumar@hospital.com', id: 'EMP-0003', dept: 'Radiology', role: 'Lab Technician', shift: 'Evening', phone: '+91 98765 43212', date: '05 Mar 2023', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=15' },
    { name: 'Neha Gupta', email: 'neha.gupta@hospital.com', id: 'EMP-0004', dept: 'Administration', role: 'HR Executive', shift: 'Morning', phone: '+91 98765 43213', date: '21 Apr 2023', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Vikram Patel', email: 'vikram.patel@hospital.com', id: 'EMP-0005', dept: 'Pharmacy', role: 'Pharmacist', shift: 'Evening', phone: '+91 98765 43214', date: '01 May 2023', status: 'On Leave', avatar: 'https://i.pravatar.cc/150?img=12' },
    { name: 'Sunita Reddy', email: 'sunita.reddy@hospital.com', id: 'EMP-0006', dept: 'Pediatrics', role: 'Nurse', shift: 'Night', phone: '+91 98765 43215', date: '10 Jun 2023', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=20' },
    { name: 'Arjun Mehta', email: 'arjun.mehta@hospital.com', id: 'EMP-0007', dept: 'Orthopedics', role: 'Physiotherapist', shift: 'Morning', phone: '+91 98765 43216', date: '17 Jun 2023', status: 'Inactive', avatar: 'https://i.pravatar.cc/150?img=33' },
  ];

  const getShiftBadge = (shift: string) => {
    switch(shift) {
      case 'Morning': return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20"><Sun className="w-3 h-3" /> Morning</span>;
      case 'Evening': return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20"><Sunset className="w-3 h-3" /> Evening</span>;
      case 'Night': return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20"><Moon className="w-3 h-3" /> Night</span>;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Active': return <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-500 border border-green-500/20 text-xs font-medium">Active</span>;
      case 'On Leave': return <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-medium">On Leave</span>;
      case 'Inactive': return <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-medium">Inactive</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Employees
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage and view all employee details</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block w-[250px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search employees by name, ID or email..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5 text-foreground" /> Filter
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-card hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-border-main text-foreground text-sm font-medium rounded-lg transition-colors">
            <Download className="w-3.5 h-3.5 text-foreground" /> Export
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Add Employee
          </button>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30">
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Employees</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">1,248</span>
            <span className="text-xs text-green-500 font-medium mt-0.5">↑ 12% <span className="text-foreground font-normal">from last month</span></span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
            <UserCheck className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">Active Employees</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">1,182</span>
            <span className="text-xs text-foreground font-medium mt-0.5">94.7% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
            <UserMinus className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">On Leave</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">88</span>
            <span className="text-xs text-foreground font-medium mt-0.5">7.0% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/30">
            <UserX className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">Inactive Employees</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">66</span>
            <span className="text-xs text-foreground font-medium mt-0.5">5.3% of total</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
            <Calendar className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5">New This Month</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">24</span>
            <span className="text-xs text-green-500 font-medium mt-0.5">↑ 8 <span className="text-foreground font-normal">from last month</span></span>
          </div>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        {/* Filter Bar */}
        <div className="p-4 border-b border-border-main flex flex-col xl:flex-row gap-4 justify-between items-center bg-main">
          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <div className="relative w-full sm:w-[200px]">
              <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search employees..." 
                className="w-full pl-9 pr-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            <div className="relative flex-1 sm:flex-none">
              <select className="w-full sm:w-[150px] pl-3 pr-8 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Departments</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
            <div className="relative flex-1 sm:flex-none">
              <select className="w-full sm:w-[150px] pl-3 pr-8 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Designations</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative flex-1 sm:flex-none">
              <select className="w-full sm:w-[120px] pl-3 pr-8 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-white/10 transition-colors shrink-0">
              More Filters
            </button>
          </div>

          <div className="flex items-center gap-3 w-full xl:w-auto shrink-0 justify-between xl:justify-end">
            <span className="text-xs text-foreground">Showing 1 to 10 of 1,248</span>
            <div className="flex items-center gap-1">
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
              <span className="text-foreground text-xs px-1">...</span>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">125</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Employee</th>
                <th className="font-medium p-4 whitespace-nowrap">ID</th>
                <th className="font-medium p-4 whitespace-nowrap">Department</th>
                <th className="font-medium p-4 whitespace-nowrap">Designation</th>
                <th className="font-medium p-4 whitespace-nowrap">Shift</th>
                <th className="font-medium p-4 whitespace-nowrap">Contact</th>
                <th className="font-medium p-4 whitespace-nowrap">Joining Date</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-border-main shrink-0">
                        <img src={emp.avatar} alt={emp.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{emp.name}</span>
                        <span className="text-xs text-foreground">{emp.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{emp.id}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{emp.dept}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{emp.role}</td>
                  <td className="p-4 py-3">
                    {getShiftBadge(emp.shift)}
                  </td>
                  <td className="p-4 py-3 text-sm text-foreground">{emp.phone}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{emp.date}</td>
                  <td className="p-4 py-3">
                    {getStatusBadge(emp.status)}
                  </td>
                  <td className="p-4 py-3">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
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

      </div>
    </DashboardLayout>
  );
}
