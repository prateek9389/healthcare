'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, ChevronDown, CheckCircle2, XCircle, FileDigit, TrendingUp,
  Search, Filter, Edit2, MoreVertical, Stethoscope
} from 'lucide-react';

export default function ItemsPage() {
  const items = [
    { code: 'ITM-1001', name: 'Consultation Fee', category: 'Doctor Services', price: '₹ 800.00', unit: 'Per Visit', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { code: 'ITM-1002', name: 'General Checkup', category: 'Doctor Services', price: '₹ 500.00', unit: 'Per Visit', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { code: 'ITM-1003', name: 'Complete Blood Count', category: 'Laboratory', price: '₹ 450.00', unit: 'Per Test', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { code: 'ITM-1004', name: 'X-Ray', category: 'Imaging', price: '₹ 750.00', unit: 'Per Test', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { code: 'ITM-1005', name: 'MRI Scan', category: 'Imaging', price: '₹ 4,500.00', unit: 'Per Test', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { code: 'ITM-1006', name: 'ICU Room (Per Day)', category: 'Hospital Services', price: '₹ 5,000.00', unit: 'Per Day', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { code: 'ITM-1007', name: 'General Ward (Per Day)', category: 'Hospital Services', price: '₹ 1,500.00', unit: 'Per Day', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Items & Services
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage all items and services you offer</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Add Item / Service
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-mainlue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <FileDigit className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Items</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">236</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 8.2% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Active Items</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">198</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">83.9% <span className="text-foreground font-normal">of total</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30 shrink-0">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Inactive Items</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">38</span>
              <span className="text-xs text-red-500 font-medium mb-0.5">16.1% <span className="text-foreground font-normal">of total</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Sales</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">₹ 32,14,560</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 14.6% <span className="text-foreground font-normal">from last month</span></span>
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
              placeholder="Search by item name or code..." 
              className="w-full pl-9 pr-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            All Categories <ChevronDown className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            All Status <ChevronDown className="w-3.5 h-3.5 text-foreground" />
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
                <th className="font-medium p-4 whitespace-nowrap">Item Code</th>
                <th className="font-medium p-4 whitespace-nowrap">Item / Service Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Category</th>
                <th className="font-medium p-4 whitespace-nowrap">Price</th>
                <th className="font-medium p-4 whitespace-nowrap">Unit</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className={`border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group ${i === 0 ? 'bg-white/5' : ''}`}>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{item.code}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.name}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.category}</td>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{item.price}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.unit}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${item.sColor}`}>
                      {item.status}
                    </span>
                  </td>
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
          <span className="text-xs text-foreground">Showing 1 to 7 of 236 items</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 rotate-90" /></button>
            <button className="w-6 h-6 rounded bg-purple-600 text-white flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <span className="text-foreground text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">34</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronDown className="w-3 h-3 -rotate-90" /></button>
          </div>
        </div>
      </div>

      {/* Details Panel Preview */}
      <div className="card p-5 border-border-main bg-card flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-500 flex items-center justify-center">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-foreground leading-tight">Consultation Fee</h3>
              <span className="px-1.5 py-0.5 rounded text-[8px] font-medium border text-green-500 bg-green-500/10 border-green-500/20">Active</span>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex flex-col">
                <span className="text-xs text-foreground">Item Code</span>
                <span className="text-sm font-medium text-foreground">ITM-1001</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground">Category</span>
                <span className="text-sm font-medium text-foreground">Doctor Services</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground">Unit</span>
                <span className="text-sm font-medium text-foreground">Per Visit</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-8 items-center flex-wrap">
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-1">Sales Summary</span>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-xs text-foreground mb-0.5">Total Sold</span>
                <span className="text-lg font-bold text-foreground">1,248</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground mb-0.5">Total Revenue</span>
                <span className="text-lg font-bold text-foreground">₹ 9,98,400.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
