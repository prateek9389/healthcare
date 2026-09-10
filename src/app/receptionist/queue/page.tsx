'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Users, ActivitySquare, Clock, CheckCircle2,
  ChevronLeft, ChevronRight, PhoneCall, Pause, ArrowRightLeft, XCircle
} from 'lucide-react';

export default function QueueManagementPage() {
  const queue = [
    { token: 'T015', patient: 'Arjun Mehta', dept: 'Cardiology', status: 'In Progress', statusColor: 'text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/10', waitTime: '20 min' },
    { token: 'T016', patient: 'Priya Patel', dept: 'Cardiology', status: 'In Progress', statusColor: 'text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/10', waitTime: '15 min' },
    { token: 'T017', patient: 'Rohit Kumar', dept: 'Physiotherapy', status: 'In Progress', statusColor: 'text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/10', waitTime: '10 min' },
    { token: 'T018', patient: 'Sneha Gupta', dept: 'Dermatology', status: 'Next', statusColor: 'text-orange-600 dark:text-orange-400 border-orange-500/20 bg-orange-500/10', waitTime: '25 min' },
    { token: 'T019', patient: 'Manoj Singh', dept: 'Cardiology', status: 'Waiting', statusColor: 'text-foreground border-slate-500/30 bg-slate-500/10', waitTime: '30 min' },
    { token: 'T020', patient: 'Pooja Sharma', dept: 'Orthopedics', status: 'Waiting', statusColor: 'text-foreground border-slate-500/30 bg-slate-500/10', waitTime: '35 min' },
    { token: 'T021', patient: 'Amit Verma', dept: 'Physiotherapy', status: 'Waiting', statusColor: 'text-foreground border-slate-500/30 bg-slate-500/10', waitTime: '40 min' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">Queue Management</h1>
          <p className="text-sm text-foreground mt-1">Manage patient queue and token system</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
          <Plus className="w-4 h-4" /> Add Walk-In Patient
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
        
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Status Cards inside a Container */}
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main">
              <h2 className="text-base font-medium text-foreground">Current Queue Status</h2>
            </div>
            <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              <div className="flex flex-col gap-2 p-3 bg-main border border-border-main rounded-lg">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Users className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-xs text-foreground">Total in Queue</span>
                </div>
                <span className="text-[24px] font-bold text-foreground">14</span>
              </div>

              <div className="flex flex-col gap-2 p-3 bg-main border border-border-main rounded-lg">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <ActivitySquare className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs text-foreground">In Progress</span>
                </div>
                <span className="text-[24px] font-bold text-foreground">3</span>
              </div>

              <div className="flex flex-col gap-2 p-3 bg-main border border-border-main rounded-lg">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Clock className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-xs text-foreground">Next in Queue</span>
                </div>
                <span className="text-[24px] font-bold text-foreground">2</span>
              </div>

              <div className="flex flex-col gap-2 p-3 bg-main border border-border-main rounded-lg">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs text-foreground">Completed Today</span>
                </div>
                <span className="text-[24px] font-bold text-foreground">28</span>
              </div>

            </div>
          </div>

          {/* Current Queue Table */}
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col flex-1">
            <div className="p-4 border-b border-border-main">
              <h2 className="text-base font-medium text-foreground">Current Queue</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border-main text-sm font-bold text-foreground">
                    <th className="p-4 font-medium pl-6">Token</th>
                    <th className="p-4 font-medium">Patient Name</th>
                    <th className="p-4 font-medium">Department</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium pr-6 text-right">Wait Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-main/50">
                  {queue.map((item, i) => (
                    <tr key={i} className="hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                      <td className="p-4 pl-6 text-sm font-bold text-foreground">{item.token}</td>
                      <td className="p-4 text-base font-medium text-foreground">{item.patient}</td>
                      <td className="p-4 text-sm text-foreground">{item.dept}</td>
                      <td className="p-4">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded border ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 pr-6 text-sm text-foreground text-right">{item.waitTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-border-main mt-auto bg-main text-sm text-foreground">
              Showing 1 to 7 of 14 in queue
            </div>
          </div>

        </div>

        {/* Right Column: Control Panel */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Now Serving */}
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main">
              <h2 className="text-base font-medium text-foreground">Now Serving</h2>
            </div>
            <div className="p-6 flex flex-col items-center">
              <span className="text-sm text-foreground mb-1">Token</span>
              <span className="text-[48px] font-bold text-blue-500 leading-none mb-6">T017</span>
              
              <div className="w-full flex flex-col gap-4 text-sm mb-8">
                <div className="flex justify-between items-center pb-2 border-b border-border-main">
                  <span className="text-foreground">Patient</span>
                  <span className="font-medium text-foreground">Rohit Kumar</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border-main">
                  <span className="text-foreground">Department</span>
                  <span className="font-medium text-foreground">Physiotherapy</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border-main">
                  <span className="text-foreground">Doctor</span>
                  <span className="font-medium text-foreground">Dr. Neha Sharma</span>
                </div>
              </div>

              <button className="w-full py-2.5 bg-transparent border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-foreground text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Complete
              </button>
            </div>
          </div>

          {/* Queue Actions */}
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main">
              <h2 className="text-base font-medium text-foreground">Queue Actions</h2>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <button className="w-full py-2.5 bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4" /> Call Next
              </button>
              
              <button className="w-full py-2.5 bg-transparent border border-orange-500/50 text-orange-600 dark:text-orange-400 hover:bg-orange-500/10 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <Pause className="w-4 h-4" /> Hold
              </button>
              
              <button className="w-full py-2.5 bg-transparent border border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <ArrowRightLeft className="w-4 h-4" /> Transfer
              </button>
              
              <button className="w-full py-2.5 bg-transparent border border-red-500/50 text-red-600 dark:text-red-400 hover:bg-red-500/10 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <XCircle className="w-4 h-4" /> Cancel Token
              </button>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
