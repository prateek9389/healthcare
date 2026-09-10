'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Search, Plus, Filter, Eye, Edit2, MoreVertical, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function AdminPatientsPage() {
  const patientsList = [
    { name: 'Rahul Sharma', email: 'rahul.sharma@email.com', id: 'PT-2025-1456', age: '45 / Male', blood: 'O+', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=rahul' },
    { name: 'Priya Patel', email: 'priya.patel@email.com', id: 'PT-2025-1457', age: '32 / Female', blood: 'A+', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=priya' },
    { name: 'Amit Kumar', email: 'amit.kumar@email.com', id: 'PT-2025-1458', age: '58 / Male', blood: 'B+', status: 'Critical', avatar: 'https://i.pravatar.cc/150?u=amit' },
    { name: 'Neha Singh', email: 'neha.singh@email.com', id: 'PT-2025-1459', age: '27 / Female', blood: 'AB+', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=neha' },
    { name: 'Vikram Verma', email: 'vikram.verma@email.com', id: 'PT-2025-1460', age: '63 / Male', blood: 'O-', status: 'High Risk', avatar: 'https://i.pravatar.cc/150?u=vikram' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-wide">
            Welcome Admin
          </h1>
          <p className="text-[13px] font-medium text-foreground mt-0.5">Manage patient records and information</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-indigo-500 transition-colors text-[13px] font-medium text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          Add Patient
        </button>
      </div>

      {/* Top Stats Row */}
      <div className="card grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 mb-6">
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Total Patients</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">3,456</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-[13px] font-bold text-green-500">18.2%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Active Patients</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">3,212</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-[13px] font-bold text-green-500">16.7%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">New Patients</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">244</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-[13px] font-bold text-green-500">22.1%</span>
            <span className="text-[13px] font-semibold text-foreground">from last month</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[13px] font-medium text-foreground mb-1">Critical Patients</p>
          <p className="text-[28px] font-bold text-foreground leading-tight">32</p>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-[13px] font-bold text-red-500">12.6%</span>
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
              placeholder="Search patients by name or ID..." 
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-main/50 border border-border-main text-[14px] text-foreground placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-between gap-6 px-4 py-2 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
              All Status
              <ChevronDown className="w-4 h-4 text-foreground" />
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-between gap-6 px-4 py-2 rounded-lg bg-main/50 border border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-[13px] font-medium text-foreground">
              All Age Groups
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
                <th className="py-3 px-6 font-medium">Patient</th>
                <th className="py-3 px-6 font-medium">Patient ID</th>
                <th className="py-3 px-6 font-medium">Age / Gender</th>
                <th className="py-3 px-6 font-medium">Blood Group</th>
                <th className="py-3 px-6 font-medium">Status</th>
                <th className="py-3 px-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patientsList.map((patient, i) => (
                <tr key={i} className="border-b border-border-main last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-6">
                    <div className="flex items-center gap-3">
                      <img src={patient.avatar} alt={patient.name} className="w-[30px] h-[30px] rounded-full object-cover" />
                      <div>
                        <p className="text-[14px] font-semibold text-foreground">{patient.name}</p>
                        <p className="text-[13px] font-semibold text-foreground">{patient.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground font-medium">{patient.id}</td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground">{patient.age}</td>
                  <td className="py-3 px-6 text-[13px] font-medium text-foreground">{patient.blood}</td>
                  <td className="py-3 px-6">
                    <span className={`px-2 py-1 rounded text-[13px] font-bold border ${
                      patient.status === 'Active' 
                        ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                        : patient.status === 'Critical'
                        ? 'bg-red-500/10 text-red-400 border-red-500/20'
                        : 'bg-orange-500/10 text-orange-400 border-orange-500/20'
                    }`}>
                      {patient.status}
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
          <p className="text-[13px] font-medium text-foreground">Showing 1 to 5 of 3,456 results</p>
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
              692
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
