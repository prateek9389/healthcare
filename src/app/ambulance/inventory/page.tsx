'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Database, CheckCircle2, AlertTriangle, AlertCircle, Clock, Plus, FileText, FileDigit, Settings, FileBox, Eye, MoreHorizontal, TrendingUp, Droplet
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function InventoryPage() {
  const stats = [
    { title: 'Total Items', val: '128', sub: 'All Categories', icon: Database, color: 'text-red-500', bg: 'bg-red-500/10' },
    { title: 'In Stock', val: '98', sub: '76.6%', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10' },
    { title: 'Low Stock', val: '18', sub: '14.1%', icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'Out of Stock', val: '12', sub: '9.3%', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-500/10' },
    { title: 'Expiring Soon', val: '8', sub: '6.3%', icon: Clock, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  const inventoryItems = [
    { name: 'Oxygen Cylinder', cat: 'Equipment', stock: 15, max: 20, unit: 'Units', status: 'In Stock', expiry: '-', restocked: 'May 18, 2025', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'Defibrillator Pads', cat: 'Medical Supplies', stock: 8, max: 50, unit: 'Packs', status: 'Low Stock', expiry: 'Dec 15, 2025', restocked: 'May 10, 2025', sColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { name: 'IV Fluid (500ml)', cat: 'Medications', stock: 25, max: 100, unit: 'Bottles', status: 'In Stock', expiry: 'Aug 20, 2025', restocked: 'May 16, 2025', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { name: 'First Aid Kit', cat: 'Equipment', stock: 0, max: 10, unit: 'Kits', status: 'Out of Stock', expiry: '-', restocked: 'Apr 10, 2025', sColor: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { name: 'Paracetamol 500mg', cat: 'Medications', stock: 120, max: 200, unit: 'Tablets', status: 'In Stock', expiry: 'Jan 10, 2026', restocked: 'May 19, 2025', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  const inventoryValueData = [
    { name: 'W1', val: 210000 },
    { name: 'W2', val: 215000 },
    { name: 'W3', val: 228000 },
    { name: 'W4', val: 235000 },
    { name: 'W5', val: 220000 },
    { name: 'W6', val: 245680 },
  ];

  const categories = [
    { name: 'Equipment', count: 45, icon: Settings },
    { name: 'Medical Supplies', count: 38, icon: FileBox },
    { name: 'Medications', count: 32, icon: Database },
    { name: 'Disposables', count: 13, icon: FileDigit },
  ];

  const recentActivity = [
    { msg: 'IV Fluid (500ml)', desc: 'Restocked 25 units', time: 'May 18, 2025', icon: CheckCircle2, color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/20' },
    { msg: 'Defibrillator Pads', desc: 'Stock level low', time: 'May 17, 2025', icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-500/10 border-orange-500/20' },
    { msg: 'First Aid Kit', desc: 'Out of stock', time: 'May 16, 2025', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/20' },
    { msg: 'Oxygen Cylinder', desc: 'Used in AMB-101', time: 'May 15, 2025', icon: CheckCircle2, color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-red-500/20 text-red-500">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground tracking-wide">
              Inventory
            </h1>
            <p className="text-sm text-foreground mt-0.5">Manage medical supplies and equipment inventory</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors">
            <Plus className="w-3.5 h-3.5" /> Add Item
          </button>
          <button className="flex items-center gap-1.5 px-4 py-1.5 bg-card border border-border-main hover:bg-main text-foreground hover:text-foreground text-sm font-medium rounded-lg transition-colors">
            <FileText className="w-3.5 h-3.5" /> Generate Report
          </button>
        </div>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="card p-4 flex flex-col justify-between group">
            <div className="flex items-start justify-between mb-3">
              <p className="text-sm text-foreground leading-tight">{stat.title}</p>
              <div className={`p-1.5 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <p className="text-[22px] font-bold text-foreground leading-none mb-1">{stat.val}</p>
              <p className={`text-xs ${stat.title === 'Out of Stock' ? 'text-red-500' : stat.title === 'Low Stock' ? 'text-orange-500' : stat.title === 'In Stock' ? 'text-green-500' : 'text-foreground'}`}>{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        
        {/* Inventory Items */}
        <div className="xl:col-span-8 card p-4 flex flex-col border-border-main min-h-[500px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-foreground">Inventory Items</h2>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground">
                  <th className="py-2.5 font-medium">Item Name</th>
                  <th className="py-2.5 font-medium">Category</th>
                  <th className="py-2.5 font-medium">Stock Level</th>
                  <th className="py-2.5 font-medium">Unit</th>
                  <th className="py-2.5 font-medium">Status</th>
                  <th className="py-2.5 font-medium">Expiry Date</th>
                  <th className="py-2.5 font-medium">Last Restocked</th>
                  <th className="py-2.5 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventoryItems.map((item, i) => {
                  const pct = (item.stock / item.max) * 100;
                  const barColor = item.status === 'Out of Stock' ? 'bg-red-500' : item.status === 'Low Stock' ? 'bg-orange-500' : 'bg-green-500';
                  
                  return (
                    <tr key={i} className="border-b border-border-main last:border-0 hover:bg-black/5 transition-colors">
                      <td className="py-3 pr-2">
                        <span className="text-sm font-medium text-foreground">{item.name}</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-xs text-foreground">{item.cat}</span>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-foreground w-6 font-medium">{item.stock}</span>
                          <div className="w-20 h-1.5 bg-main rounded-full overflow-hidden border border-white/5">
                            <div className={`h-full rounded-full ${barColor}`} style={{ width: `${pct}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-xs text-foreground">{item.unit}</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${item.sColor}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-xs text-foreground">{item.expiry}</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-xs text-foreground">{item.restocked}</span>
                      </td>
                      <td className="py-3 pl-2 text-right">
                        <div className="flex justify-end gap-1">
                          <button className="p-1.5 rounded text-foreground hover:text-foreground bg-main border border-white/5 transition-colors">
                            <Eye className="w-3 h-3" />
                          </button>
                          <button className="p-1.5 rounded text-foreground hover:text-foreground bg-main border border-white/5 transition-colors">
                            <MoreHorizontal className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Stack */}
        <div className="xl:col-span-4 flex flex-col gap-4">
          
          <div className="grid grid-cols-2 gap-4">
            {/* Inventory Value */}
            <div className="card p-4 border-border-main flex flex-col justify-between h-[120px]">
              <div>
                <h2 className="text-sm font-medium text-foreground mb-1">Inventory Value</h2>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-foreground">₹ 2,45,680</p>
                </div>
                <p className="text-xs text-green-500 flex items-center gap-1 mt-0.5"><TrendingUp className="w-2.5 h-2.5" /> 8.5% vs last month</p>
              </div>
              <div className="h-[30px] w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={inventoryValueData}>
                    <defs>
                      <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="val" stroke="#3b82f6" fill="url(#colorVal)" strokeWidth={2} activeDot={{ r: 3 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Stock Alerts (Mini Summary) */}
            <div className="card p-4 border-border-main flex flex-col h-[120px]">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-medium text-foreground">Stock Alerts</h2>
              </div>
              <div className="flex flex-col gap-2 justify-center flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium">
                    <AlertTriangle className="w-3 h-3" /> 12 Items
                  </div>
                  <span className="text-xs text-foreground">Out of Stock</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-orange-500 font-medium">
                    <AlertTriangle className="w-3 h-3" /> 18 Items
                  </div>
                  <span className="text-xs text-foreground">Low Stock</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-purple-500 font-medium">
                    <Clock className="w-3 h-3" /> 8 Items
                  </div>
                  <span className="text-xs text-foreground">Expiring Soon</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            {/* Inventory Categories */}
            <div className="card p-4 border-border-main flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-medium text-foreground">Inventory Categories</h2>
                <button className="text-xs text-blue-500 hover:text-blue-400">View All</button>
              </div>
              <div className="flex flex-col gap-4">
                {categories.map((cat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-foreground">
                      <div className="p-1.5 rounded bg-main border border-white/5">
                        <cat.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-medium text-foreground">{cat.name}</span>
                    </div>
                    <span className="text-xs font-bold text-foreground">{cat.count} <span className="text-xs font-normal text-foreground ml-0.5">Items</span></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card p-4 border-border-main flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-medium text-foreground">Recent Activity</h2>
                <button className="text-xs text-blue-500 hover:text-blue-400">View All</button>
              </div>
              <div className="flex flex-col gap-4">
                {recentActivity.map((act, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className={`w-6 h-6 rounded flex items-center justify-center border shrink-0 ${act.bg}`}>
                      <act.icon className={`w-3 h-3 ${act.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-0.5">
                        <p className="text-xs font-medium text-foreground truncate pr-2">{act.msg}</p>
                        <span className="text-[8px] text-foreground shrink-0">{act.time}</span>
                      </div>
                      <p className="text-xs text-foreground">{act.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
