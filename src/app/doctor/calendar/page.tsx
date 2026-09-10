'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, ChevronLeft, ChevronRight, Check
} from 'lucide-react';

export default function CalendarPage() {
  const upcomingEvents = [
    { date: '22 May, Thu', time: '09:00 AM', title: 'Consultation', patient: 'John Doe' },
    { date: '22 May, Thu', time: '02:30 PM', title: 'Follow-up', patient: 'Jane Smith' },
    { date: '23 May, Fri', time: '03:00 PM', title: 'Patient Review', patient: 'Robert Brown' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Calendar
          </h1>
          <p className="text-sm text-foreground mt-0.5">Manage your schedule and important dates</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-3.5 h-3.5" /> New Event
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 min-h-[700px]">
        
        {/* Main Calendar Grid Area */}
        <div className="flex-1 card p-0 border-border-main flex flex-col bg-card overflow-hidden">
          
          {/* Calendar Header Controls */}
          <div className="p-4 border-b border-border-main flex justify-between items-center bg-main">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <button className="p-1.5 hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded transition-colors text-foreground hover:text-foreground">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded transition-colors text-foreground hover:text-foreground">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <span className="text-[16px] font-semibold text-foreground">May 2025</span>
              <button className="ml-2 px-3 py-1.5 bg-card border border-border-main hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 text-sm text-foreground rounded transition-colors">
                Today
              </button>
            </div>
            
            <div className="flex items-center bg-[#0b0f19] border border-border-main rounded-lg p-0.5">
              <button className="px-3 py-1.5 text-foreground hover:text-foreground rounded text-sm font-medium transition-colors">Day</button>
              <button className="px-3 py-1.5 text-foreground hover:text-foreground rounded text-sm font-medium transition-colors">Week</button>
              <button className="px-3 py-1.5 bg-[#1e3a8a] text-foreground rounded text-sm font-medium">Month</button>
            </div>
          </div>

          {/* Grid Headers */}
          <div className="grid grid-cols-7 border-b border-border-main">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
              <div key={i} className="p-3 text-center text-sm font-medium text-foreground uppercase tracking-wider">
                {day}
              </div>
            ))}
          </div>

          {/* Grid Body */}
          <div className="flex-1 grid grid-cols-7 grid-rows-5 bg-border-main gap-[1px]">
            {/* Week 1 */}
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">27</span></div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">28</span></div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">29</span></div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">30</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">1</span>
              <div className="mt-1 p-1.5 rounded bg-blue-500/20 border-l-2 border-l-blue-500 text-xs text-blue-100 flex flex-col leading-tight">
                <span className="font-semibold">10:00 AM</span>
                <span className="truncate">Consultation</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">2</span>
              <div className="mt-1 p-1.5 rounded bg-purple-500/20 border-l-2 border-l-purple-500 text-xs text-purple-100 flex flex-col leading-tight">
                <span className="font-semibold">02:00 PM</span>
                <span className="truncate">Follow-up</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">3</span></div>

            {/* Week 2 */}
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">4</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">5</span>
              <div className="mt-1 p-1.5 rounded bg-blue-500/20 border-l-2 border-l-blue-500 text-xs text-blue-100 flex flex-col leading-tight">
                <span className="font-semibold">11:00 AM</span>
                <span className="truncate">New Patient</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">6</span></div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">7</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">8</span>
              <div className="mt-1 p-1.5 rounded bg-blue-500/20 border-l-2 border-l-blue-500 text-xs text-blue-100 flex flex-col leading-tight">
                <span className="font-semibold">03:30 PM</span>
                <span className="truncate">Consultation</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">9</span>
              <div className="mt-1 p-1.5 rounded bg-amber-500/20 border-l-2 border-l-amber-500 text-xs text-amber-100 flex flex-col leading-tight">
                <span className="font-semibold">Lab Review</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">10</span></div>

            {/* Week 3 */}
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">11</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">12</span>
              <div className="mt-1 p-1.5 rounded bg-blue-500/20 border-l-2 border-l-blue-500 text-xs text-blue-100 flex flex-col leading-tight">
                <span className="font-semibold">09:00 AM</span>
                <span className="truncate">Consultation</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">13</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">14</span>
              <div className="mt-1 p-1.5 rounded bg-purple-500/20 border-l-2 border-l-purple-500 text-xs text-purple-100 flex flex-col leading-tight">
                <span className="font-semibold">02:30 PM</span>
                <span className="truncate">Follow-up</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">15</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">16</span>
              <div className="mt-1 p-1.5 rounded bg-blue-500/20 border-l-2 border-l-blue-500 text-xs text-blue-100 flex flex-col leading-tight">
                <span className="font-semibold">04:00 PM</span>
                <span className="truncate">Consultation</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">17</span></div>

            {/* Week 4 */}
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">18</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">19</span>
              <div className="mt-1 p-1.5 rounded bg-blue-500/20 border-l-2 border-l-blue-500 text-xs text-blue-100 flex flex-col leading-tight">
                <span className="font-semibold">10:30 AM</span>
                <span className="truncate">Surgery Follow-up</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">20</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="w-5 h-5 rounded-full bg-[#1e3a8a] text-foreground flex items-center justify-center text-sm font-medium self-start">21</span>
              <div className="mt-1 p-1.5 rounded bg-blue-500/20 border-l-2 border-l-blue-500 text-xs text-blue-100 flex flex-col leading-tight">
                <span className="font-semibold">01:00 PM</span>
                <span className="truncate">Team Meeting</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">22</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">23</span>
              <div className="mt-1 p-1.5 rounded bg-blue-500/20 border-l-2 border-l-blue-500 text-xs text-blue-100 flex flex-col leading-tight">
                <span className="font-semibold">03:00 PM</span>
                <span className="truncate">Patient Review</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">24</span></div>

            {/* Week 5 */}
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">25</span></div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">26</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">27</span>
              <div className="mt-1 p-1.5 rounded bg-blue-500/20 border-l-2 border-l-blue-500 text-xs text-blue-100 flex flex-col leading-tight">
                <span className="font-semibold">11:30 AM</span>
                <span className="truncate">Consultation</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">28</span></div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">29</span></div>
            <div className="bg-card p-2 flex flex-col gap-1">
              <span className="text-sm text-foreground">30</span>
              <div className="mt-1 p-1.5 rounded bg-purple-500/20 border-l-2 border-l-purple-500 text-xs text-purple-100 flex flex-col leading-tight">
                <span className="font-semibold">02:00 PM</span>
                <span className="truncate">Follow-up</span>
              </div>
            </div>
            <div className="bg-card p-2 flex flex-col gap-1"><span className="text-sm text-foreground">31</span></div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[260px] shrink-0 flex flex-col gap-6">
          
          <div className="card p-5 border-border-main bg-card">
            <h2 className="text-base font-semibold text-foreground mb-4">My Calendars</h2>
            
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded bg-[#1e3a8a] border border-blue-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-foreground" />
                </div>
                <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Appointments</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded bg-purple-600 border border-purple-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-foreground" />
                </div>
                <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Consultations</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded bg-green-600 border border-green-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-foreground" />
                </div>
                <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Follow-ups</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded bg-amber-600 border border-amber-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-foreground" />
                </div>
                <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Reminders</span>
              </label>
            </div>
          </div>

          <div className="card p-5 border-border-main bg-card flex-1">
            <h2 className="text-base font-semibold text-foreground mb-4">Upcoming Events</h2>
            
            <div className="flex flex-col gap-4">
              {upcomingEvents.map((evt, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-purple-400">{evt.date}</span>
                  <div className="p-3 rounded-lg bg-main border border-border-main flex flex-col gap-1">
                    <span className="text-sm font-semibold text-foreground">{evt.time}</span>
                    <span className="text-sm text-foreground">{evt.title}</span>
                    <span className="text-xs text-foreground">{evt.patient}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="text-sm text-blue-400 hover:text-blue-300 font-medium mt-6 transition-colors flex items-center gap-1">
              View full schedule <ChevronRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
