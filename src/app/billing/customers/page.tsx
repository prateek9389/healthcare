'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, ChevronDown, Users, CheckCircle2, XCircle, TrendingUp,
  Search, Filter, Edit2, MoreVertical, Eye
} from 'lucide-react';

export default function CustomersPage() {
  const customers = [
    { id: 'CUS-2025-1248', name: 'John Doe', email: 'john.doe@email.com', phone: '+91 98765 43210', status: 'Active', due: '₹ 2,450.00', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'CUS-2025-1247', name: 'Jane Smith', email: 'jane.smith@email.com', phone: '+91 91234 56789', status: 'Active', due: '₹ 1,850.00', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'CUS-2025-1246', name: 'Robert Brown', email: 'robert.brown@email.com', phone: '+91 99887 76655', status: 'Active', due: '₹ 3,240.00', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'CUS-2025-1245', name: 'Emily Davis', email: 'emily.davis@email.com', phone: '+91 88776 65544', status: 'Inactive', due: '₹ 0.00', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { id: 'CUS-2025-1244', name: 'Michael Wilson', email: 'michael.wilson@email.com', phone: '+91 77665 54433', status: 'Active', due: '₹ 2,980.00', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'CUS-2025-1243', name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+91 66554 43322', status: 'Active', due: '₹ 5,670.00', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: 'CUS-2025-1242', name: 'David Miller', email: 'david.miller@email.com', phone: '+91 55443 32211', status: 'Active', due: '₹ 750.00', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Customers
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage and view all your customers</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Add Customer
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
            <span className="text-sm text-foreground font-medium mb-0.5">Total Customers</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">1,248</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 12.4% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Active Customers</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">1,025</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">82.2% <span className="text-foreground font-normal">of total</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30 shrink-0">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Inactive Debtors</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">223</span>
              <span className="text-xs text-red-500 font-medium mb-0.5">17.8% <span className="text-foreground font-normal">of total</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-mainlue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Revenue</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">₹ 45,78,230</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 15.6% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Table */}
      <div className="card p-0 border-border-main flex flex-col bg-card mb-6">
        {/* Filters */}
        <div className="p-4 border-b border-border-main flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by name, email, phone..." 
              className="w-full pl-9 pr-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            All Status <ChevronDown className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            All Groups <ChevronDown className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5 text-foreground" /> Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Customer ID</th>
                <th className="font-medium p-4 whitespace-nowrap">Customer Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Email</th>
                <th className="font-medium p-4 whitespace-nowrap">Phone</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap">Total Due</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cus, i) => (
                <tr key={i} className={`border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group ${i === 0 ? 'bg-white/5' : ''}`}>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{cus.id}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{cus.name}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{cus.email}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{cus.phone}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${cus.sColor}`}>
                      {cus.status}
                    </span>
                  </td>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{cus.due}</td>
                  <td className="p-4 py-3">
                    <div className={`flex justify-center gap-2 transition-opacity ${i === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
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
          <span className="text-xs text-foreground">Showing 1 to 7 of 1,248 customers</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 rotate-90" /></button>
            <button className="w-6 h-6 rounded bg-purple-600 text-white flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <span className="text-foreground text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">178</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 -rotate-90" /></button>
          </div>
        </div>
      </div>

      {/* Details Panel Preview */}
      <div className="card p-5 border-border-main bg-card flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
            JD
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-foreground leading-tight">John Doe</h3>
            <p className="text-sm text-foreground">john.doe@email.com</p>
            <p className="text-sm text-foreground">+91 98765 43210</p>
            <p className="text-xs text-foreground mt-0.5">New Delhi, India</p>
          </div>
        </div>
        
        <div className="flex gap-8 items-center flex-wrap">
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Total Invoices</span>
            <span className="text-lg font-bold text-cyan-400">12</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Total Paid</span>
            <span className="text-lg font-bold text-foreground">₹ 18,450.00</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Total Due</span>
            <span className="text-lg font-bold text-red-500">₹ 2,450.00</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Last Invoice</span>
            <span className="text-sm font-medium text-foreground leading-tight">INV-2025-1248</span>
            <span className="text-xs text-foreground">May 31, 2025</span>
          </div>
          
          <button className="px-4 py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 hover:bg-purple-500 hover:text-foreground rounded-lg text-sm font-medium transition-colors ml-4">
            View Details
          </button>
        </div>
      </div>

    </DashboardLayout>
  );
}
