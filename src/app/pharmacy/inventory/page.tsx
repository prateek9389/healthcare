'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Database, Search, Filter, Plus, 
  MoreVertical, Package, AlertTriangle, AlertCircle,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export default function MedicineInventoryPage() {
  const inventory = [
    { name: 'Amoxicillin 500mg', category: 'Antibiotic', inStock: 120, unit: 'Strips', status: 'In Stock', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10' },
    { name: 'Paracetamol 650mg', category: 'Analgesic', inStock: 200, unit: 'Strips', status: 'In Stock', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10' },
    { name: 'Cetirizine 10mg', category: 'Antihistamine', inStock: 80, unit: 'Strips', status: 'In Stock', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10' },
    { name: 'Ibuprofen 400mg', category: 'Pain Relief', inStock: 150, unit: 'Strips', status: 'In Stock', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10' },
    { name: 'Azithromycin 250mg', category: 'Antibiotic', inStock: 60, unit: 'Strips', status: 'Low Stock', statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10' },
    { name: 'Omeprazole 20mg', category: 'Gastric', inStock: 90, unit: 'Strips', status: 'In Stock', statusColor: 'text-green-600 dark:text-green-400 bg-green-500/10' },
    { name: 'Vitamin D3 60K', category: 'Supplement', inStock: 50, unit: 'Capsules', status: 'Low Stock', statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            Medicine Inventory
          </h1>
          <p className="text-sm text-foreground mt-1">View and manage all medicines in stock</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search medicine..." className="w-64 bg-card border border-border-main rounded-lg pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-purple-500/50" />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main text-foreground text-sm font-medium rounded-lg hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors">
            <Plus className="w-4 h-4" /> Add Medicine
          </button>
        </div>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-bold text-foreground">Total Medicines</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">1,246</span>
            <span className="text-xs text-foreground mt-1 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div> All medicines</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-bold text-foreground">Total Stock</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">8,542</span>
            <span className="text-xs text-foreground mt-1 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> All items in stock</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-bold text-foreground">Low Stock Items</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">112</span>
            <span className="text-xs text-foreground mt-1 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> Requires restock</span>
          </div>
        </div>

        <div className="card p-4 border-border-main bg-card shadow-lg flex flex-col justify-between group">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-bold text-foreground">Out of Stock</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-[28px] font-bold text-foreground leading-none">33</span>
            <span className="text-xs text-foreground mt-1 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Unavailable items</span>
          </div>
        </div>

      </div>

      {/* Table */}
      <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-sm font-bold text-foreground">
                <th className="p-4 font-medium pl-6">Medicine</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">In Stock</th>
                <th className="p-4 font-medium">Unit</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main/50">
              {inventory.map((item, i) => (
                <tr key={i} className="hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 pl-6 text-base font-medium text-foreground">
                    {item.name}
                  </td>
                  <td className="p-4 text-sm text-foreground">
                    {item.category}
                  </td>
                  <td className="p-4 text-sm text-foreground">
                    {item.inStock}
                  </td>
                  <td className="p-4 text-sm text-foreground">
                    {item.unit}
                  </td>
                  <td className="p-4">
                    <span className={item.statusColor}>{item.status}</span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="w-8 h-8 rounded-lg inline-flex items-center justify-center text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border-main flex items-center justify-between text-sm text-foreground bg-main">
          <span>Showing 1 to 7 of 1,246 medicines</span>
          
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">4</button>
            <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">5</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-foreground">10 / page</span>
            <ChevronRight className="w-3 h-3 text-foreground rotate-90" />
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
