'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, ChevronDown, FileText, Stethoscope, Scissors, 
  CornerUpRight, ActivitySquare, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function TemplatesPage() {
  const templates = [
    {
      title: 'General Consultation Note',
      category: 'Consultation',
      desc: 'Comprehensive template for general patient consultations.',
      used: 126,
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      color: 'bg-blue-500/20 border-blue-500/30'
    },
    {
      title: 'Follow-up Visit Note',
      category: 'Follow-up',
      desc: 'Template for follow-up visits and progress evaluation.',
      used: 96,
      icon: <Stethoscope className="w-5 h-5 text-purple-500" />,
      color: 'bg-purple-500/20 border-purple-500/30'
    },
    {
      title: 'SOAP Note',
      category: 'SOAP Notes',
      desc: 'Standard SOAP note template for clinical documentation.',
      used: 85,
      icon: <FileText className="w-5 h-5 text-indigo-500" />,
      color: 'bg-indigo-500/20 border-indigo-500/30'
    },
    {
      title: 'Discharge Summary',
      category: 'Discharge',
      desc: 'Complete discharge summary template for patients.',
      used: 42,
      icon: <FileText className="w-5 h-5 text-amber-500" />,
      color: 'bg-amber-500/20 border-amber-500/30'
    },
    {
      title: 'Procedure Note',
      category: 'Procedure',
      desc: 'Template for documenting medical procedures.',
      used: 28,
      icon: <Scissors className="w-5 h-5 text-red-500" />,
      color: 'bg-red-500/20 border-red-500/30'
    },
    {
      title: 'Referral Note',
      category: 'Referral',
      desc: 'Template for referring patients to specialists.',
      used: 30,
      icon: <CornerUpRight className="w-5 h-5 text-green-500" />,
      color: 'bg-green-500/20 border-green-500/30'
    },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Templates
          </h1>
          <p className="text-sm text-foreground mt-0.5">Use templates to save time and maintain consistency</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-3.5 h-3.5" /> New Template
        </button>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card min-h-[600px]">
        {/* Filters */}
        <div className="p-4 border-b border-border-main flex flex-col sm:flex-row gap-4 justify-between items-center bg-main">
          
          <div className="relative w-full sm:max-w-[400px]">
            <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search templates..." 
              className="w-full pl-9 pr-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          
          <div className="relative w-full sm:w-[200px]">
            <select className="w-full pl-3 pr-8 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
              <option>All Categories</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Templates Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          
          {templates.map((tpl, i) => (
            <div key={i} className="flex flex-col p-5 rounded-xl border border-border-main bg-main hover:border-purple-500/30 transition-colors group">
              
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border ${tpl.color}`}>
                  {tpl.icon}
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-lg font-semibold text-foreground mb-1 leading-tight">{tpl.title}</span>
                  <span className="text-xs text-foreground">{tpl.category}</span>
                </div>
              </div>

              <p className="text-sm text-foreground leading-relaxed mb-6 flex-1">
                {tpl.desc}
              </p>

              <div className="flex flex-col gap-4">
                <span className="text-sm text-foreground">Used {tpl.used} times</span>
                <button className="w-full py-2.5 rounded-lg bg-[#1e3a8a]/20 hover:bg-[#1e3a8a]/40 border border-[#1e3a8a]/50 text-blue-400 text-sm font-medium transition-colors">
                  Use Template
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border-main flex justify-between items-center bg-main shrink-0">
          <span className="text-xs text-foreground">Showing 1 to 6 of 24 templates</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#1e3a8a] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
            <span className="text-foreground text-xs px-1">...</span>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">4</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
