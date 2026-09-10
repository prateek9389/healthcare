'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, ChevronDown, Users, ShieldCheck, UserCircle2, Eye,
  Edit2, MoreVertical
} from 'lucide-react';

export default function UsersPage() {
  const usersList = [
    { name: 'John Doe', role: 'Admin', email: 'john.doe@hospital.com', status: 'Active', lastActive: '31 May 2025, 10:30 AM', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Jane Smith', role: 'Billing Staff', email: 'jane.smith@hospital.com', status: 'Active', lastActive: '31 May 2025, 09:15 AM', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Robert Brown', role: 'Billing Staff', email: 'robert.brown@hospital.com', status: 'Active', lastActive: '31 May 2025, 08:20 AM', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Emily Davis', role: 'Viewer', email: 'emily.davis@hospital.com', status: 'Active', lastActive: '30 May 2025, 06:40 PM', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Michael Wilson', role: 'Billing Staff', email: 'michael.wilson@hospital.com', status: 'Active', lastActive: '30 May 2025, 03:20 PM', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Sarah Johnson', role: 'Billing Staff', email: 'sarah.johnson@hospital.com', status: 'Inactive', lastActive: '29 May 2025, 11:05 AM', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { name: 'David Miller', role: 'Viewer', email: 'david.miller@hospital.com', status: 'Active', lastActive: '28 May 2025, 04:55 PM', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Laura Taylor', role: 'Billing Staff', email: 'laura.taylor@hospital.com', status: 'Active', lastActive: '28 May 2025, 03:20 PM', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Users & Roles
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage users and their access permissions</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block w-[200px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Add User
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Users</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">18</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 2 <span className="text-foreground font-normal">this month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <ShieldCheck className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Admin</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">3</span>
              <span className="text-xs text-foreground font-medium mb-0.5">Full Access</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shrink-0">
            <UserCircle2 className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Billing Staff</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">9</span>
              <span className="text-xs text-foreground font-medium mb-0.5">Billing Operations</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30 shrink-0">
            <Eye className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Viewer</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">6</span>
              <span className="text-xs text-foreground font-medium mb-0.5">Read Only Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Table */}
      <div className="card p-0 border-border-main flex flex-col bg-card">
        {/* Tabs */}
        <div className="flex items-center gap-6 p-4 border-b border-border-main">
          <button className="text-sm font-medium text-purple-400 border-b-2 border-purple-500 pb-4 -mb-[17px]">
            Users
          </button>
          <button className="text-sm font-medium text-foreground hover:text-foreground pb-4 -mb-[17px] transition-colors">
            Roles & Permissions
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">User</th>
                <th className="font-medium p-4 whitespace-nowrap">Role</th>
                <th className="font-medium p-4 whitespace-nowrap">Email</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap">Last Active</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{user.name}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{user.role}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{user.email}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${user.sColor}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 py-3 text-sm text-foreground">{user.lastActive}</td>
                  <td className="p-4 py-3">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
        
        {/* Pagination */}
        <div className="p-4 border-t border-border-main flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 8 of 18 users</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 rotate-90" /></button>
            <button className="w-6 h-6 rounded bg-purple-600 text-white flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 -rotate-90" /></button>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
