'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Plus, Eye, Edit2, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AdminDepartmentsPage() {
  const departments = [
    { name: 'Cardiology', head: 'Dr. Sarah Johnson', staff: 24, beds: 45, status: 'Active' },
    { name: 'Emergency', head: 'Dr. James Wilson', staff: 32, beds: 60, status: 'Active' },
    { name: 'Neurology', head: 'Dr. Michael Brown', staff: 18, beds: 30, status: 'Active' },
    { name: 'Orthopedics', head: 'Dr. Robert Taylor', staff: 22, beds: 40, status: 'Active' },
    { name: 'Pediatrics', head: 'Dr. Emily Clark', staff: 20, beds: 35, status: 'Active' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
          <p className="text-[13px] font-medium text-foreground mt-0.5">Manage hospital departments and units</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-medium text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          Add Department
        </button>
      </div>

      {/* Top Stats Row */}
      <div className="card grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 mb-6">
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Total Departments</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">24</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[13px] font-semibold text-foreground">-</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Active Departments</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">22</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[13px] font-semibold text-foreground">-</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Total Beds</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">568</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-[13px] font-bold text-green-500">6.2%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Total Units</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">48</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[13px] font-semibold text-foreground">-</span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="card border border-border-main overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="border-b border-border-main text-[14px] uppercase tracking-wider text-foreground bg-main/20">
                <th className="py-3 px-6 font-medium">Department</th>
                <th className="py-3 px-6 font-medium">Head</th>
                <th className="py-3 px-6 font-medium">Total Staff</th>
                <th className="py-3 px-6 font-medium">Total Beds</th>
                <th className="py-3 px-6 font-medium">Status</th>
                <th className="py-3 px-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, i) => (
                <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-6 text-[14px] font-semibold text-foreground">{dept.name}</td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground">{dept.head}</td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground">{dept.staff}</td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground">{dept.beds}</td>
                  <td className="py-3 px-6">
                    <span className={`text-[14px] font-medium ${
                      dept.status === 'Active' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {dept.status}
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
                      <button className="w-7 h-7 rounded bg-main/50 border border-border-main flex items-center justify-center text-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                        <MoreVertical className="w-3.5 h-3.5" />
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
          <p className="text-[13px] font-medium text-foreground">Showing 1 to 5 of 24 results</p>
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
              5
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
