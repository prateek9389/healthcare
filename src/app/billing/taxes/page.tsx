'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, ChevronDown, CheckCircle2, XCircle, FileDigit, IndianRupee,
  Search, Edit2, MoreVertical, Receipt
} from 'lucide-react';

export default function TaxesPage() {
  const [activeTab, setActiveTab] = useState<'taxes' | 'charges'>('taxes');

  const taxes = [
    { name: 'GST 18%', type: 'Tax', rate: '18%', calc: 'Percentage', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'GST 12%', type: 'Tax', rate: '12%', calc: 'Percentage', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'GST 5%', type: 'Tax', rate: '5%', calc: 'Percentage', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'IGST 18%', type: 'Tax', rate: '18%', calc: 'Percentage', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Service Tax', type: 'Tax', rate: '10%', calc: 'Percentage', status: 'Inactive', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { name: 'Packaging Charge', type: 'Charge', rate: '₹ 50.00', calc: 'Fixed', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Documentation Fee', type: 'Charge', rate: '₹ 100.00', calc: 'Fixed', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Convenience Fee', type: 'Charge', rate: '₹ 30.00', calc: 'Fixed', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Late Payment Fee', type: 'Charge', rate: '2%', calc: 'Percentage', status: 'Active', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Taxes & Charges
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage taxes and additional charges</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Add Tax / Charge
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-mainlue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <Receipt className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Taxes</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">5</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 1 <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shrink-0">
            <FileDigit className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Charges</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">6</span>
              <span className="text-xs text-foreground font-medium mb-0.5">No change</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Active</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">9</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">90% <span className="text-foreground font-normal">of total</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
            <IndianRupee className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Collected</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">₹ 8,76,540</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 12.7% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Table */}
      <div className="card p-0 border-border-main flex flex-col bg-card mb-6">
        {/* Tabs */}
        <div className="flex items-center gap-2 p-4 border-b border-border-main">
          <button 
            onClick={() => setActiveTab('taxes')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'taxes' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20' : 'bg-main text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-white/5'
            }`}
          >
            Taxes
          </button>
          <button 
            onClick={() => setActiveTab('charges')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'charges' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20' : 'bg-main text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 border border-white/5'
            }`}
          >
            Charges
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Type</th>
                <th className="font-medium p-4 whitespace-nowrap">Rate / Amount</th>
                <th className="font-medium p-4 whitespace-nowrap">Calculation Type</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {taxes.map((tax, i) => (
                <tr key={i} className={`border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group ${i === 0 ? 'bg-white/5' : ''}`}>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{tax.name}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{tax.type}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{tax.rate}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{tax.calc}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${tax.sColor}`}>
                      {tax.status}
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
          <span className="text-xs text-foreground">Showing 1 to 9 of 9 taxes/charges</span>
        </div>
      </div>

      {/* Details Panel Preview */}
      <div className="card p-5 border-border-main bg-card flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-green-500/20 border border-green-500/30 text-green-500 flex items-center justify-center">
            <Receipt className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-foreground leading-tight">GST 18%</h3>
            <p className="text-sm text-foreground mb-1">Tax</p>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-medium border text-green-500 bg-green-500/10 border-green-500/20 w-max">Active</span>
          </div>
        </div>
        
        <div className="flex gap-8 items-center flex-wrap">
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Rate</span>
            <span className="text-lg font-bold text-foreground">18%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Calculation Type</span>
            <span className="text-sm font-medium text-foreground">Percentage</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Applies To</span>
            <span className="text-sm font-medium text-foreground">All Taxable Items</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Description</span>
            <span className="text-sm font-medium text-foreground">Goods and Services Tax 18%</span>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
