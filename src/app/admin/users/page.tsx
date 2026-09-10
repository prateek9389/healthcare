'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Search, Plus, Filter, Edit2, Trash2, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function AdminUsersPage() {
  const usersList = [
    { name: 'Dr. Sarah Johnson', email: 'sarah.johnson@hospital.com', role: 'Doctor', roleBg: 'bg-indigo-500/10', roleText: 'text-indigo-400', dept: 'Cardiology', joined: '21 May 2025\n10:24 AM', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    { name: 'Nurse Emily Davis', email: 'emily.davis@hospital.com', role: 'Nurse', roleBg: 'bg-orange-500/10', roleText: 'text-orange-400', dept: 'Emergency', joined: '21 May 2025\n09:15 AM', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=emily' },
    { name: 'John Receptionist', email: 'john.receptionist@hospital.com', role: 'Receptionist', roleBg: 'bg-blue-500/10', roleText: 'text-blue-400', dept: 'Front Desk', joined: '21 May 2025\n08:45 AM', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=john' },
    { name: 'Mike Lab Tech', email: 'mike.labtech@hospital.com', role: 'Lab Technician', roleBg: 'bg-cyan-500/10', roleText: 'text-cyan-400', dept: 'Pathology', joined: '21 May 2025\n08:30 AM', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=mike' },
    { name: 'Pharmacist Anna', email: 'anna.pharmacist@hospital.com', role: 'Pharmacist', roleBg: 'bg-emerald-500/10', roleText: 'text-emerald-400', dept: 'Pharmacy', joined: '21 May 2025\n07:50 AM', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=anna' },
    { name: 'Admin User', email: 'admin@hospital.com', role: 'Administrator', roleBg: 'bg-red-500/10', roleText: 'text-red-400', dept: 'Administration', joined: '21 May 2025\n07:30 AM', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=admin' },
    { name: 'Ambulance Staff', email: 'ambulance.staff@hospital.com', role: 'Ambulance Staff', roleBg: 'bg-teal-500/10', roleText: 'text-teal-400', dept: 'Transport', joined: '19 May 2025\n11:20 AM', status: 'Inactive', avatar: 'https://i.pravatar.cc/150?u=amb' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
          <p className="text-[13px] font-medium text-foreground mt-0.5">Manage all system users and their access</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-medium text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          Add User
        </button>
      </div>

      {/* Top Stats Row */}
      <div className="card grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 mb-6">
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Total Users</p>
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
          <p className="text-[13px] font-medium text-foreground mb-1">Active Users</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">1,186</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-[13px] font-bold text-green-500">10.3%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Inactive Users</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">62</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-[13px] font-bold text-red-500">5.2%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">New This Month</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">98</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-[13px] font-bold text-green-500">18.7%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="card border border-border-main overflow-hidden">
        {/* Filters Row */}
        <div className="p-4 border-b border-border-main flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-[320px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground" />
            <input 
              type="text" 
              placeholder="Search users by name, email or role..." 
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-main/50 border border-border-main text-[14px] text-foreground placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-between gap-6 px-4 py-2 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
              All Roles
              <ChevronDown className="w-4 h-4 text-foreground" />
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-between gap-6 px-4 py-2 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
              All Status
              <ChevronDown className="w-4 h-4 text-foreground" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
              <Filter className="w-4 h-4 text-foreground" />
              Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                <th className="py-3 px-6 font-medium">User</th>
                <th className="py-3 px-6 font-medium">Role</th>
                <th className="py-3 px-6 font-medium">Department</th>
                <th className="py-3 px-6 font-medium">Status</th>
                <th className="py-3 px-6 font-medium">Last Login</th>
                <th className="py-3 px-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user, i) => (
                <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-6">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-[30px] h-[30px] rounded-full object-cover" />
                      <div>
                        <p className="text-[14px] font-semibold text-foreground">{user.name}</p>
                        <p className="text-[13px] font-semibold text-foreground">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6">
                    <span className={`px-2 py-0.5 rounded text-[13px] font-bold ${user.roleBg} ${user.roleText}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground">{user.dept}</td>
                  <td className="py-3 px-6">
                    <span className={`text-[14px] font-medium ${user.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <p className="text-[13px] font-medium text-foreground">{user.joined.split('\n')[0]}</p>
                    <p className="text-[13px] font-semibold text-foreground">{user.joined.split('\n')[1]}</p>
                  </td>
                  <td className="py-3 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button className="w-7 h-7 rounded bg-white/5 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 rounded bg-white/5 border border-border-main flex items-center justify-center text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
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
    </DashboardLayout>
  );
}
