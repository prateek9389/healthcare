'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Search, ChevronDown, Check } from 'lucide-react';

export default function DispensingPage() {
  const prescribedMeds = [
    { name: 'Amoxicillin', strength: '500mg', dosage: '1 TID', qty: 10, status: 'Pending' },
    { name: 'Paracetamol', strength: '650mg', dosage: '1 SOS', qty: 10, status: 'Pending' },
    { name: 'Cetirizine', strength: '10mg', dosage: '1 OD', qty: 10, status: 'Pending' },
    { name: 'Ibuprofen', strength: '400mg', dosage: '1 BD', qty: 10, status: 'Pending' },
  ];

  const dispenseItems = [
    { name: 'Amoxicillin 500mg', inStock: 120, prescribed: 10, dispense: 10, batch: 'AMX25', expiry: '15 Jun 2025' },
    { name: 'Paracetamol 650mg', inStock: 200, prescribed: 10, dispense: 10, batch: 'PCM25', expiry: '20 Jun 2025' },
    { name: 'Cetirizine 10mg', inStock: 80, prescribed: 10, dispense: 10, batch: 'CTZ24', expiry: '25 Jun 2025' },
    { name: 'Ibuprofen 400mg', inStock: 150, prescribed: 10, dispense: 10, batch: 'IBU24', expiry: '30 Jun 2025' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            Dispensing
          </h1>
          <p className="text-sm text-foreground mt-1">Dispense medicines for prescriptions</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(91,33,182,0.3)]">
          Scan RX / Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        
        {/* Left: Details */}
        <div className="lg:col-span-4 card p-0 border-border-main bg-card shadow-lg flex flex-col h-full">
          <div className="p-4 border-b border-border-main">
            <h2 className="text-lg font-medium text-foreground">Prescription Details</h2>
          </div>
          <div className="p-5 flex flex-col gap-4 flex-1">
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">RX ID</span>
              <span className="text-sm font-bold text-foreground">10046</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Patient Name</span>
              <span className="text-sm font-bold text-foreground">Vikram Patel</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Age / Gender</span>
              <span className="text-sm font-bold text-foreground">45 / Male</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Doctor</span>
              <span className="text-sm font-bold text-foreground">Dr. Amit Mehta</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Date</span>
              <span className="text-sm font-bold text-foreground">31 May 2025, 08:45 AM</span>
            </div>

          </div>
        </div>

        {/* Right: Prescribed Meds */}
        <div className="lg:col-span-8 card p-0 border-border-main bg-card shadow-lg flex flex-col">
          <div className="p-4 border-b border-border-main">
            <h2 className="text-lg font-medium text-foreground">Prescription Medicines <span className="text-foreground text-sm font-normal">(4)</span></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs font-medium text-foreground">
                  <th className="p-3 pl-5 font-medium">Medicine</th>
                  <th className="p-3 font-medium">Strength</th>
                  <th className="p-3 font-medium">Dosage</th>
                  <th className="p-3 font-medium">Qty</th>
                  <th className="p-3 font-medium pr-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-main/50">
                {prescribedMeds.map((med, i) => (
                  <tr key={i} className="hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                    <td className="p-3 pl-5 text-sm font-bold text-foreground">{med.name}</td>
                    <td className="p-3 text-sm text-foreground">{med.strength}</td>
                    <td className="p-3 text-sm text-foreground">{med.dosage}</td>
                    <td className="p-3 text-sm text-foreground">{med.qty}</td>
                    <td className="p-3 pr-5">
                      <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">{med.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Bottom: Dispense Medicines Form */}
      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
        <div className="p-4 border-b border-border-main">
          <h2 className="text-lg font-medium text-foreground">Dispense Medicines</h2>
        </div>
        
        <div className="overflow-x-auto p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs font-medium text-foreground">
                <th className="pb-3 pl-2 font-medium">Medicine</th>
                <th className="pb-3 font-medium text-center">In Stock</th>
                <th className="pb-3 font-medium text-center">Qty Prescribed</th>
                <th className="pb-3 font-medium text-center">Qty to Dispense</th>
                <th className="pb-3 font-medium pl-4">Batch No.</th>
                <th className="pb-3 font-medium pl-4 pr-2">Expiry Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main/20">
              {dispenseItems.map((item, i) => (
                <tr key={i} className="group">
                  <td className="py-3 pl-2 text-sm text-foreground flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm border border-purple-500/50 flex items-center justify-center bg-purple-500/20">
                      <Check className="w-2 h-2 text-purple-600 dark:text-purple-400" />
                    </div>
                    {item.name}
                  </td>
                  <td className="py-3 text-sm text-foreground text-center">{item.inStock}</td>
                  <td className="py-3 text-sm text-foreground text-center">{item.prescribed}</td>
                  <td className="py-3 text-center">
                    <input type="text" defaultValue={item.dispense} className="w-16 bg-main border border-border-main rounded text-center py-1 text-sm text-foreground focus:outline-none focus:border-purple-500" />
                  </td>
                  <td className="py-3 pl-4">
                    <div className="relative w-24">
                      <select className="w-full bg-main border border-border-main rounded py-1 pl-2 pr-6 text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500">
                        <option>{item.batch}</option>
                      </select>
                      <ChevronDown className="w-3 h-3 text-foreground absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </td>
                  <td className="py-3 pl-4 pr-2">
                    <div className="flex items-center justify-between bg-main border border-border-main rounded py-1 px-2 w-32">
                      <span className="text-sm text-foreground">{item.expiry}</span>
                      <div className="w-3.5 h-3.5 rounded bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-border-main flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-main">
          <div className="w-full md:w-1/2 flex flex-col gap-1.5">
            <span className="text-sm text-foreground">Notes (Optional)</span>
            <input type="text" placeholder="Add notes..." className="w-full bg-card border border-border-main rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-purple-500" />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="px-5 py-2 bg-transparent border border-border-main text-foreground text-sm font-medium rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors w-full md:w-auto">
              Cancel
            </button>
            <button className="px-5 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors w-full md:w-auto">
              Confirm Dispense
            </button>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
