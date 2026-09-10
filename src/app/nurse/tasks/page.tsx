'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, CheckSquare, ChevronLeft, ChevronRight, CheckCircle2
} from 'lucide-react';

export default function TasksActivitiesPage() {
  const tasks = [
    { task: 'Vitals Monitoring', patient: 'Rahul Verma (101)', priority: 'High', due: '31 May, 10:30 AM', status: 'In Progress' },
    { task: 'Medication Round', patient: 'Amit Kumar (103)', priority: 'High', due: '31 May, 11:00 AM', status: 'Pending' },
    { task: 'IV Fluid Check', patient: 'Neha Gupta (102)', priority: 'Medium', due: '31 May, 11:30 AM', status: 'Pending' },
    { task: 'Blood Sugar Check', patient: 'Sunita Reddy (104)', priority: 'Medium', due: '31 May, 12:00 PM', status: 'In Progress' },
    { task: 'Wound Dressing', patient: 'Vikram Patel (105)', priority: 'Low', due: '31 May, 01:00 PM', status: 'Pending' },
    { task: 'Patient Education', patient: 'Pooja Sharma (106)', priority: 'Low', due: '31 May, 02:00 PM', status: 'Pending' },
    { task: 'Discharge Preparation', patient: 'Rahul Verma (101)', priority: 'Medium', due: '31 May, 03:00 PM', status: 'Pending' },
  ];

  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case 'High': return <span className="text-red-500 text-sm font-medium px-2 py-0.5 bg-red-500/10 rounded">High</span>;
      case 'Medium': return <span className="text-amber-500 text-sm font-medium px-2 py-0.5 bg-amber-500/10 rounded">Medium</span>;
      case 'Low': return <span className="text-green-500 text-sm font-medium px-2 py-0.5 bg-green-500/10 rounded">Low</span>;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Pending': return <span className="text-amber-500 text-sm font-medium px-2 py-0.5 rounded border border-amber-500/20">Pending</span>;
      case 'In Progress': return <span className="text-blue-500 text-sm font-medium px-2 py-0.5 rounded border border-blue-500/20">In Progress</span>;
      case 'Completed': return <span className="text-green-500 text-sm font-medium px-2 py-0.5 rounded border border-green-500/20">Completed</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
          Tasks & Activities
        </h1>
        <p className="text-sm text-foreground mt-0.5">Track and manage your daily tasks and activities</p>
      </div>

      <div className="card p-0 border-border-main flex flex-col bg-card">
        
        {/* Tabs & Controls */}
        <div className="p-4 border-b border-border-main flex justify-between items-center bg-main">
          
          <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar">
            <button className="text-sm font-medium text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 pb-1 whitespace-nowrap bg-[#5b21b6] px-4 py-1.5 rounded-md text-foreground border-none">All Tasks</button>
            <button className="text-sm font-bold text-foreground hover:text-foreground transition-colors whitespace-nowrap">Pending</button>
            <button className="text-sm font-bold text-foreground hover:text-foreground transition-colors whitespace-nowrap">In Progress</button>
            <button className="text-sm font-bold text-foreground hover:text-foreground transition-colors whitespace-nowrap">Completed</button>
          </div>
          
          <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20 shrink-0 ml-4">
            <Plus className="w-3.5 h-3.5" /> New Task
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-xs text-foreground uppercase tracking-wider bg-main">
                <th className="font-medium p-4 whitespace-nowrap">Task</th>
                <th className="font-medium p-4 whitespace-nowrap">Patient</th>
                <th className="font-medium p-4 whitespace-nowrap">Priority</th>
                <th className="font-medium p-4 whitespace-nowrap">Due Time</th>
                <th className="font-medium p-4 whitespace-nowrap">Status</th>
                <th className="font-medium p-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, i) => (
                <tr key={i} className="border-b border-border-main hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors group">
                  <td className="p-4 py-3.5 text-sm text-foreground font-medium">{task.task}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{task.patient}</td>
                  <td className="p-4 py-3.5">{getPriorityBadge(task.priority)}</td>
                  <td className="p-4 py-3.5 text-sm text-foreground">{task.due}</td>
                  <td className="p-4 py-3.5">{getStatusBadge(task.status)}</td>
                  <td className="p-4 py-3.5">
                    <div className="flex justify-center gap-2">
                      <button className="p-1.5 rounded text-foreground hover:text-foreground transition-colors">
                        <CheckSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 flex justify-between items-center bg-main">
          <span className="text-xs text-foreground">Showing 1 to 7 of 12 tasks</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 rounded bg-[#5b21b6] text-foreground flex items-center justify-center text-xs font-medium">1</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground text-xs">2</button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-foreground hover:text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
