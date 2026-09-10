'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, ChevronDown, CheckCircle2, XCircle, CreditCard, Activity,
  Search, Edit2, MoreVertical, ShieldCheck, Wallet, Smartphone, Banknote
} from 'lucide-react';

export default function PaymentMethodsPage() {
  const methods = [
    { name: 'Cash', type: 'Cash', fee: '0%', status: 'Active', isDefault: false, sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'UPI', type: 'Digital', fee: '0.5%', status: 'Active', isDefault: true, sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Credit Card', type: 'Card', fee: '2.0%', status: 'Active', isDefault: false, sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Debit Card', type: 'Card', fee: '1.5%', status: 'Active', isDefault: false, sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Net Banking', type: 'Digital', fee: '0.5%', status: 'Active', isDefault: false, sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Insurance', type: 'Other', fee: '0%', status: 'Active', isDefault: false, sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Corporate Account', type: 'Other', fee: '0%', status: 'Inactive', isDefault: false, sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { name: 'Wallet', type: 'Digital', fee: '1.0%', status: 'Active', isDefault: false, sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Payment Methods
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage all available payment methods</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <Plus className="w-3.5 h-3.5" /> Add Payment Method
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-mainlue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <CreditCard className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Methods</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">8</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">100% <span className="text-foreground font-normal">of total</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Active Methods</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">7</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">87.5% <span className="text-foreground font-normal">of total</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30 shrink-0">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Inactive Methods</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">1</span>
              <span className="text-xs text-red-500 font-medium mb-0.5">12.5% <span className="text-foreground font-normal">of total</span></span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
            <Activity className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium mb-0.5">Total Transactions</span>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground leading-none">4,320</span>
              <span className="text-xs text-green-500 font-medium mb-0.5">↑ 14.3% <span className="text-foreground font-normal">from last month</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="card p-0 border-border-main flex flex-col bg-card mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Method Name</th>
                <th className="font-medium p-4 whitespace-nowrap">Type</th>
                <th className="font-medium p-4 whitespace-nowrap">Transaction Fee</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap">Default</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {methods.map((method, i) => (
                <tr key={i} className={`border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group ${i === 1 ? 'bg-white/5' : ''}`}>
                  <td className="p-4 py-3 text-sm text-foreground font-medium">{method.name}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{method.type}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{method.fee}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${method.sColor}`}>
                      {method.status}
                    </span>
                  </td>
                  <td className="p-4 py-3 text-center">
                    {method.isDefault ? (
                      <div className="w-4 h-4 mx-auto rounded-full bg-purple-500 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-foreground" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 mx-auto rounded-full border border-slate-600 flex items-center justify-center"></div>
                    )}
                  </td>
                  <td className="p-4 py-3">
                    <div className={`flex justify-center gap-2 transition-opacity ${i === 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
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
          <span className="text-xs text-foreground">Showing 1 to 8 of 8 payment methods</span>
        </div>
      </div>

      {/* Details Panel Preview */}
      <div className="card p-5 border-border-main bg-card flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center p-2 shadow-sm">
            {/* Fake UPI Logo */}
            <div className="flex items-center">
              <span className="text-xl font-black text-slate-800 tracking-tighter">UP</span>
              <span className="text-xl font-black text-green-600 italic -ml-0.5">I</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-foreground leading-tight">UPI</h3>
            <p className="text-sm text-foreground mb-1">Digital Payment</p>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-medium border text-green-500 bg-green-500/10 border-green-500/20 w-max">Active</span>
          </div>
        </div>
        
        <div className="flex gap-8 items-center flex-wrap">
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Transaction Fee</span>
            <span className="text-lg font-bold text-foreground">0.5%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground mb-0.5">Settlement Time</span>
            <span className="text-lg font-bold text-foreground">Instant</span>
            <span className="text-xs text-foreground">Receive payments via UPI apps</span>
          </div>
          <div className="flex flex-col ml-4">
            <span className="text-xs text-foreground mb-1.5">Supported Apps</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-mainlue-500/20 text-blue-500 flex items-center justify-center border border-blue-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="w-6 h-6 rounded-md bg-purple-500/20 text-purple-500 flex items-center justify-center border border-purple-500/30">
                <Smartphone className="w-3.5 h-3.5" />
              </div>
              <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-500 flex items-center justify-center border border-cyan-500/30">
                <Wallet className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
