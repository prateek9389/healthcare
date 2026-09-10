'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, ChevronDown, Filter, Calendar as CalendarIcon, 
  ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Clock, MoreVertical
} from 'lucide-react';

export default function FollowUpsPage() {
  const followUps = [
    { name: 'John Doe', condition: 'Hypertension', lastVisit: '29 May 2025', nextDate: '12 Jun 2025', priority: 'High', pColor: 'text-red-500 border-red-500/20 bg-red-500/10', status: 'Pending', sColor: 'text-orange-500 border-orange-500/20 bg-orange-500/10' },
    { name: 'Jane Smith', condition: 'Diabetes Type 2', lastVisit: '28 May 2025', nextDate: '10 Jun 2025', priority: 'Medium', pColor: 'text-amber-500 border-amber-500/20 bg-amber-500/10', status: 'Pending', sColor: 'text-orange-500 border-orange-500/20 bg-orange-500/10' },
    { name: 'Robert Brown', condition: 'Asthma', lastVisit: '27 May 2025', nextDate: '03 Jun 2025', priority: 'High', pColor: 'text-red-500 border-red-500/20 bg-red-500/10', status: 'Overdue', sColor: 'text-red-500 border-red-500/20 bg-red-500/10' },
    { name: 'Emily Davis', condition: 'Chest Pain', lastVisit: '27 May 2025', nextDate: '06 Jun 2025', priority: 'High', pColor: 'text-red-500 border-red-500/20 bg-red-500/10', status: 'Overdue', sColor: 'text-red-500 border-red-500/20 bg-red-500/10' },
    { name: 'Michael Wilson', condition: 'COPD', lastVisit: '25 May 2025', nextDate: '05 Jun 2025', priority: 'Medium', pColor: 'text-amber-500 border-amber-500/20 bg-amber-500/10', status: 'Pending', sColor: 'text-orange-500 border-orange-500/20 bg-orange-500/10' },
    { name: 'Sarah Johnson', condition: 'Thyroid', lastVisit: '24 May 2025', nextDate: '07 Jun 2025', priority: 'Low', pColor: 'text-green-500 border-green-500/20 bg-green-500/10', status: 'Completed', sColor: 'text-green-500 border-green-500/20 bg-green-500/10' },
    { name: 'David Miller', condition: 'High Cholesterol', lastVisit: '23 May 2025', nextDate: '02 Jun 2025', priority: 'Medium', pColor: 'text-amber-500 border-amber-500/20 bg-amber-500/10', status: 'Completed', sColor: 'text-green-500 border-green-500/20 bg-green-500/10' },
    { name: 'Laura Taylor', condition: 'Anxiety', lastVisit: '22 May 2025', nextDate: '03 Jun 2025', priority: 'Low', pColor: 'text-green-500 border-green-500/20 bg-green-500/10', status: 'Completed', sColor: 'text-green-500 border-green-500/20 bg-green-500/10' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Follow Ups
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage patient follow-ups and track pending reviews</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
          <Plus className="w-3.5 h-3.5" /> New Follow Up
        </button>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Total Follow ups</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">24</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shrink-0">
            <CalendarIcon className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Due This Week</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">7</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30 shrink-0">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Overdue</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">5</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border-border-main flex items-center gap-4 bg-card">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm text-foreground font-medium mb-1">Completed</span>
            <div className="flex items-end gap-2">
              <span className="text-[20px] font-bold text-foreground leading-none">12</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        {/* Filters */}
        <div className="p-4 border-b border-border-main flex flex-col md:flex-row gap-4 justify-between items-center bg-main">
          
          <div className="relative w-full max-w-[300px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search follow ups..." 
              className="w-full pl-9 pr-4 py-2 bg-main border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <select className="w-full md:w-[150px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
            <div className="relative flex-1 md:flex-none">
              <select className="w-full md:w-[150px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                <option>All Doctors</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
              <Filter className="w-3.5 h-3.5 text-foreground" /> Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider">
                <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                <th className="font-medium p-4 whitespace-nowrap">Condition</th>
                <th className="font-medium p-4 whitespace-nowrap">Last Visit</th>
                <th className="font-medium p-4 whitespace-nowrap">Follow Up Date</th>
                <th className="font-medium p-4 whitespace-nowrap">Priority</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {followUps.map((item, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs text-foreground font-medium shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <span className="text-sm text-foreground font-medium whitespace-nowrap">{item.name}</span>
                    </div>
                  </td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.condition}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.lastVisit}</td>
                  <td className="p-4 py-3 text-sm text-foreground">{item.nextDate}</td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border inline-block ${item.pColor}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="p-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border inline-block ${item.sColor}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 py-3">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                        <CalendarIcon className="w-4 h-4" />
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
        
        <div className="p-4 border-t border-border-main flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 8 of 24 follow ups</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#1e3a8a] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
