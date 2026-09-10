'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Users, AlertTriangle, UserPlus, UserMinus, Search, Filter, Eye, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function MyPatientsPage() {
  const patients = [
    { name: 'Rahul Verma', avatar: 'https://i.pravatar.cc/150?img=11', room: '101 / Bed 1', age: '45 / Male', condition: 'Stable', plan: 'Post Surgery Care', status: 'Active' },
    { name: 'Neha Gupta', avatar: 'https://i.pravatar.cc/150?img=9', room: '102 / Bed 2', age: '32 / Female', condition: 'Improving', plan: 'IV Fluids & Monitoring', status: 'Active' },
    { name: 'Amit Kumar', avatar: 'https://i.pravatar.cc/150?img=15', room: '103 / Bed 1', age: '58 / Male', condition: 'Critical', plan: 'ICU Care Plan', status: 'Active' },
    { name: 'Sunita Reddy', avatar: 'https://i.pravatar.cc/150?img=20', room: '104 / Bed 2', age: '40 / Female', condition: 'Stable', plan: 'Diabetes Management', status: 'Active' },
    { name: 'Vikram Patel', avatar: 'https://i.pravatar.cc/150?img=12', room: '105 / Bed 1', age: '50 / Male', condition: 'Improving', plan: 'Post Op Recovery', status: 'Active' },
    { name: 'Pooja Sharma', avatar: 'https://i.pravatar.cc/150?img=47', room: '106 / Bed 2', age: '29 / Female', condition: 'Stable', plan: 'General Care', status: 'Active' },
  ];

  const getConditionBadge = (condition: string) => {
    switch(condition) {
      case 'Stable': return <span className="text-green-500 text-sm font-medium">Stable</span>;
      case 'Improving': return <span className="text-blue-500 text-sm font-medium">Improving</span>;
      case 'Critical': return <span className="text-red-500 text-sm font-medium">Critical</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            My Patients
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage and view patients under your care</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block w-[250px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search patient by name, ID or room..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5 text-foreground" /> Filters
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[20px] font-bold text-foreground leading-tight mb-0.5">16</span>
            <span className="text-sm text-foreground font-medium">Total Patients</span>
            <span className="text-[9px] text-foreground font-medium mt-0.5">Under My Care</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[20px] font-bold text-foreground leading-tight mb-0.5">02</span>
            <span className="text-sm text-foreground font-medium">Critical Patients</span>
            <span className="text-[9px] text-red-500 font-medium mt-0.5">Require Attention</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
            <UserPlus className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[20px] font-bold text-foreground leading-tight mb-0.5">06</span>
            <span className="text-sm text-foreground font-medium">Today's New Patients</span>
            <span className="text-[9px] text-blue-500 font-medium mt-0.5">Admitted</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
            <UserMinus className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[20px] font-bold text-foreground leading-tight mb-0.5">10</span>
            <span className="text-sm text-foreground font-medium">Discharged Patients</span>
            <span className="text-[9px] text-green-500 font-medium mt-0.5">This Week</span>
          </div>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider bg-main">
                <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                <th className="font-medium p-4 whitespace-nowrap">Room / Bed</th>
                <th className="font-medium p-4 whitespace-nowrap">Age / Gender</th>
                <th className="font-medium p-4 whitespace-nowrap">Condition</th>
                <th className="font-medium p-4 whitespace-nowrap">Care Plan</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((pt, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full overflow-hidden border border-border-main shrink-0 bg-slate-800">
                        <img src={pt.avatar} alt={pt.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm text-foreground">{pt.name}</span>
                    </div>
                  </td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{pt.room}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{pt.age}</td>
                  <td className="p-4 py-3.5">{getConditionBadge(pt.condition)}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{pt.plan}</td>
                  <td className="p-4 py-3.5 text-sm text-green-500">{pt.status}</td>
                  <td className="p-4 py-3.5">
                    <div className="flex justify-center gap-2">
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors">
                        <Eye className="w-3.5 h-3.5" />
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
          <span className="text-xs text-foreground">Showing 1 to 6 of 16 patients</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
