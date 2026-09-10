'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plane, CheckCircle2, Clock3, XCircle, Wallet, 
  Plus, Search, Filter, ChevronLeft, ChevronRight, ChevronDown, Edit, MoreHorizontal, FileText
} from 'lucide-react';

export default function LeaveManagementPage() {
  const leaves = [
    { name: 'Dr. Priya Singh', leaveType: 'Casual Leave', from: '28 May 2025', to: '30 May 2025', days: 3, reason: 'Personal Work', status: 'Approved', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Rahul Verma', leaveType: 'Sick Leave', from: '26 May 2025', to: '28 May 2025', days: 3, reason: 'Fever & Cold', status: 'Approved', avatar: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Amit Kumar', leaveType: 'Earned Leave', from: '02 Jun 2025', to: '06 Jun 2025', days: 5, reason: 'Family Function', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=15' },
    { name: 'Neha Gupta', leaveType: 'Maternity Leave', from: '10 Jun 2025', to: '10 Sep 2025', days: 92, reason: 'Maternity', status: 'Approved', avatar: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Vikram Patel', leaveType: 'Casual Leave', from: '23 May 2025', to: '23 May 2025', days: 1, reason: 'Personal Work', status: 'Rejected', avatar: 'https://i.pravatar.cc/150?img=12' },
    { name: 'Sunita Reddy', leaveType: 'Sick Leave', from: '29 May 2025', to: '30 May 2025', days: 2, reason: 'Migraine', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=20' },
    { name: 'Arjun Mehta', leaveType: 'Earned Leave', from: '05 Jun 2025', to: '09 Jun 2025', days: 5, reason: 'Vacation', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=33' },
    { name: 'Pooja Sharma', leaveType: 'Comp Off', from: '31 May 2025', to: '31 May 2025', days: 1, reason: 'Compensatory', status: 'Approved', avatar: 'https://i.pravatar.cc/150?img=47' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Approved': return <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">Approved</span>;
      case 'Pending': return <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-medium border border-amber-500/20">Pending</span>;
      case 'Rejected': return <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-500 text-xs font-medium border border-red-500/20">Rejected</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Leave Management
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage leave requests and balances</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
          Apply Leave
        </button>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
            <Plane className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Total Requests</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">47</span>
            <span className="text-xs text-foreground font-medium mt-0.5">This Month</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Approved</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">32</span>
            <span className="text-xs text-green-500 font-medium mt-0.5">68.1%</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
            <Clock3 className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Pending</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">10</span>
            <span className="text-xs text-amber-500 font-medium mt-0.5">21.3%</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-0.5 whitespace-nowrap">Rejected</span>
            <span className="text-[20px] font-bold text-foreground leading-tight">5</span>
            <span className="text-xs text-red-500 font-medium mt-0.5">10.6%</span>
          </div>
        </div>

        <div className="card p-4 border-border-main flex flex-col bg-card">
          <span className="text-sm text-foreground font-medium mb-1 whitespace-nowrap">Available Balance</span>
          <span className="text-[24px] font-bold text-foreground leading-tight mb-0.5">156</span>
          <span className="text-xs text-foreground font-medium">Days</span>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        
        {/* Tabs & Controls */}
        <div className="p-4 border-b border-border-main flex flex-col lg:flex-row justify-between items-center gap-4 bg-main">
          
          <div className="flex items-center gap-6">
            <button className="text-sm font-medium text-purple-400 border-b-2 border-purple-500 pb-1">Leave Requests</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors">My Leaves</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors">Leave Balance</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-1 border-b-2 border-transparent transition-colors">Leave Calendar</button>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="pl-3 pr-8 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Departments</option>
              </select>
              <ChevronDown className="w-3 h-3 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="pl-3 pr-8 py-1.5 bg-main border border-white/5 rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-3 h-3 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
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
                <th className="font-medium p-4 whitespace-nowrap">Employee</th>
                <th className="font-medium p-4 whitespace-nowrap">Leave Type</th>
                <th className="font-medium p-4 whitespace-nowrap">From</th>
                <th className="font-medium p-4 whitespace-nowrap">To</th>
                <th className="font-medium p-4 whitespace-nowrap">Days</th>
                <th className="font-medium p-4 whitespace-nowrap">Reason</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full overflow-hidden border border-border-main shrink-0">
                        <img src={leave.avatar} alt={leave.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{leave.name}</span>
                    </div>
                  </td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{leave.leaveType}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{leave.from}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{leave.to}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{leave.days}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{leave.reason}</td>
                  <td className="p-4 py-3.5">
                    {getStatusBadge(leave.status)}
                  </td>
                  <td className="p-4 py-3.5">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded text-green-400 hover:text-green-300 transition-colors" title="Approve">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded text-red-400 hover:text-red-300 transition-colors" title="Reject">
                        <XCircle className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors" title="More">
                        <MoreHorizontal className="w-3.5 h-3.5" />
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
          <span className="text-xs text-foreground">Showing 1 to 8 of 47 requests</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">4</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">5</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">6</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
