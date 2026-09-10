'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, ChevronDown, Filter, Eye, ChevronLeft, ChevronRight, CheckCircle2
} from 'lucide-react';

export default function DrugLibraryPage() {
  const categories = [
    { name: 'All Drugs', count: 356, active: true },
    { name: 'Cardiovascular', count: 68 },
    { name: 'Respiratory', count: 54 },
    { name: 'Endocrine', count: 42 },
    { name: 'Antibiotics', count: 60 },
    { name: 'Pain Management', count: 45 },
    { name: 'Gastrointestinal', count: 36 },
    { name: 'Neurological', count: 29 },
    { name: 'Supplements', count: 22 },
  ];

  const drugs = [
    { name: 'Amlodipine', category: 'Cardiovascular', form: 'Tablet', strength: '5mg, 10mg', use: 'High blood pressure' },
    { name: 'Metformin', category: 'Endocrine', form: 'Tablet', strength: '500mg, 1000mg', use: 'Type 2 Diabetes' },
    { name: 'Atorvastatin', category: 'Cardiovascular', form: 'Tablet', strength: '10mg, 20mg, 40mg', use: 'High cholesterol' },
    { name: 'Salbutamol', category: 'Respiratory', form: 'Inhaler', strength: '100mcg/puff', use: 'Asthma, COPD' },
    { name: 'Omeprazole', category: 'Gastrointestinal', form: 'Capsule', strength: '20mg, 40mg', use: 'Acid reflux, GERD' },
    { name: 'Paracetamol', category: 'Pain Management', form: 'Tablet', strength: '500mg, 650mg', use: 'Pain, Fever' },
    { name: 'Losartan', category: 'Cardiovascular', form: 'Tablet', strength: '25mg, 50mg, 100mg', use: 'High blood pressure' },
    { name: 'Levothyroxine', category: 'Endocrine', form: 'Tablet', strength: '25mcg, 50mcg', use: 'Hypothyroidism' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Drug Library
          </h1>
          <p className="text-sm text-foreground mt-0.5">Search and explore medications and drug information</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-3.5 h-3.5" /> Add Drug
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 min-h-[600px]">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[240px] shrink-0 flex flex-col overflow-y-auto pr-2">
          <h2 className="text-sm font-medium text-foreground mb-4 px-1">Categories</h2>
          <div className="flex flex-col">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`flex justify-between items-center px-4 py-3 rounded-lg transition-colors ${
                  cat.active ? 'bg-[#1e3a8a] text-foreground' : 'text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5'
                }`}
              >
                <span className="text-sm font-medium">{cat.name}</span>
                <span className={`text-xs ${cat.active ? 'text-blue-200' : 'text-foreground'}`}>{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 card p-0 border-border-main flex flex-col bg-card overflow-hidden h-[calc(100vh-140px)] min-h-[700px]">
          
          {/* Filters */}
          <div className="p-4 border-b border-border-main flex flex-col xl:flex-row gap-4 justify-between items-center bg-main">
            <div className="relative w-full xl:max-w-[400px]">
              <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search drugs..." 
                className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
              <div className="relative flex-1 xl:flex-none">
                <select className="w-full xl:w-[150px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                  <option>All Categories</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              
              <div className="relative flex-1 xl:flex-none">
                <select className="w-full xl:w-[120px] pl-3 pr-8 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                  <option>All</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              
              <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors shrink-0">
                <Filter className="w-3.5 h-3.5 text-foreground" /> Filter
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider sticky top-0 bg-card z-10">
                  <th className="font-medium p-4 whitespace-nowrap">Drug Name</th>
                  <th className="font-medium p-4 whitespace-nowrap">Category</th>
                  <th className="font-medium p-4 whitespace-nowrap">Form</th>
                  <th className="font-medium p-4 whitespace-nowrap">Strength</th>
                  <th className="font-medium p-4 whitespace-nowrap">Common Use</th>
                  <th className="font-medium p-4 whitespace-nowrap text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {drugs.map((item, i) => (
                  <tr key={i} className={`border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group ${i === 0 ? 'bg-white/5' : ''}`}>
                    <td className="p-4 py-3.5 text-sm text-foreground font-medium">{item.name}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.category}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.form}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.strength}</td>
                    <td className="p-4 py-3.5 text-sm text-foreground">{item.use}</td>
                    <td className="p-4 py-3.5">
                      <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 rounded text-foreground hover:text-foreground transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Quick View Panel */}
          <div className="p-6 border-t border-border-main bg-main shrink-0">
            <h3 className="text-base font-medium text-foreground mb-6">Drug Information Quick View</h3>
            
            <div className="flex flex-col md:flex-row justify-between gap-8">
              
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-lg text-foreground font-bold shrink-0">
                    A
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">Amlodipine</span>
                      <span className="text-xs text-green-500 font-medium tracking-wide">ACTIVE</span>
                    </div>
                    <span className="text-sm text-foreground">Cardiovascular</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-foreground">Category</span>
                    <span className="text-sm font-medium text-foreground">Cardiovascular</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-foreground">Form</span>
                    <span className="text-sm font-medium text-foreground">Tablet</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-foreground">Strength</span>
                    <span className="text-sm font-medium text-foreground">5mg, 10mg</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-foreground">Common Use</span>
                    <span className="text-sm font-medium text-foreground">High blood pressure, Angina</span>
                  </div>
                </div>
              </div>
              
              <div className="w-px bg-border-main hidden md:block"></div>
              
              <div className="w-full md:w-[250px] shrink-0 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-foreground">Side Effects</span>
                  <span className="text-sm text-foreground leading-relaxed">
                    Dizziness, Swelling, Fatigue
                  </span>
                </div>
                
                <button className="w-full py-2.5 mt-6 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                  View Full Details
                </button>
              </div>

            </div>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-border-main flex justify-between items-center bg-main shrink-0">
            <span className="text-xs text-foreground">Showing 1 to 8 of 356 drugs</span>
            <div className="flex items-center gap-1">
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-6 h-6 rounded bg-[#1e3a8a] text-foreground flex items-center justify-center text-xs font-medium">1</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">3</button>
              <span className="text-foreground text-xs px-1">...</span>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">45</button>
              <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
          
        </div>

      </div>

    </DashboardLayout>
  );
}
