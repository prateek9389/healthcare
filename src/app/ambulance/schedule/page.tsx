'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronDown, Filter, CalendarDays,
  User, CheckCircle2, Clock, CalendarHeart, Users, Repeat
} from 'lucide-react';

export default function ShiftSchedulePage() {
  const upcomingShifts = [
    { date: '22 May 2025, Thursday', type: 'Day Shift', time: '8:00 AM - 8:00 PM', sColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { date: '23 May 2025, Friday', type: 'Night Shift', time: '8:00 PM - 8:00 AM', sColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { date: '24 May 2025, Saturday', type: 'Day Off', time: '-', sColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-wide">
            Shift Schedule
          </h1>
          <p className="text-sm text-foreground mt-0.5">View your shifts, schedule and manage availability</p>
        </div>
        <div>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
            <CalendarHeart className="w-3.5 h-3.5" /> Request Leave
          </button>
        </div>
      </div>

      {/* Sub Header / Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex text-sm font-medium gap-2">
          <button className="px-4 py-2 bg-purple-500/10 text-purple-500 rounded-lg">My Schedule</button>
          <button className="px-4 py-2 text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors">Team Schedule</button>
          <button className="px-4 py-2 text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors">Availability</button>
          <button className="px-4 py-2 text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors">Leave Requests</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm font-medium bg-card border border-border-main rounded-lg text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            Today
          </button>
          <div className="flex gap-1">
            <button className="p-1.5 bg-card border border-border-main rounded-lg text-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1.5 bg-card border border-border-main rounded-lg text-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <button className="px-3 py-1.5 text-sm font-medium bg-card border border-border-main rounded-lg text-foreground flex items-center gap-1.5 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors ml-2">
            <CalendarIcon className="w-3.5 h-3.5 text-foreground" /> May 2025 <ChevronDown className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button className="px-3 py-1.5 text-sm font-medium bg-card border border-border-main rounded-lg text-foreground flex items-center gap-1.5 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
            <Filter className="w-3.5 h-3.5 text-foreground" /> Filters
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 h-[calc(100vh-230px)] min-h-[600px]">
        
        {/* Left Col: Calendar Grid */}
        <div className="xl:col-span-8 card p-0 border-border-main flex flex-col overflow-hidden">
          
          {/* Days Header */}
          <div className="grid grid-cols-7 border-b border-border-main bg-main">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="py-3 text-center text-sm font-medium text-foreground">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Body */}
          <div className="flex-1 grid grid-cols-7 grid-rows-5 bg-border-main gap-[1px]">
            {/* Generating 35 cells for 5 weeks */}
            {Array.from({length: 35}).map((_, i) => {
              // Mock logic for days (May 2025 starts on Thursday)
              let date = i - 3; 
              let isCurrentMonth = date > 0 && date <= 31;
              let displayDate = date;
              if (date <= 0) displayDate = 30 + date;
              if (date > 31) displayDate = date - 31;

              // Mock logic for shifts
              let shiftType = null;
              let sColor = '';
              if (isCurrentMonth) {
                if (date >= 5 && date <= 9) { shiftType = 'Day Shift'; sColor = 'text-green-500 bg-green-500/10'; }
                if (date >= 12 && date <= 16) { shiftType = 'Day Shift'; sColor = 'text-green-500 bg-green-500/10'; }
                if (date >= 19 && date <= 20) { shiftType = 'Day Shift'; sColor = 'text-green-500 bg-green-500/10'; }
                if (date === 21) { shiftType = 'Day Shift'; sColor = 'text-green-500 bg-green-500/10'; } // Current Day
                if (date === 22) { shiftType = 'Day Shift'; sColor = 'text-green-500 bg-green-500/10'; }
                if (date === 23) { shiftType = 'Night Shift'; sColor = 'text-blue-500 bg-blue-500/10'; }
                if (date === 24) { shiftType = 'Day Off'; sColor = 'text-purple-500 bg-purple-500/10'; }
                if (date >= 26 && date <= 30) { shiftType = 'Day Shift'; sColor = 'text-green-500 bg-green-500/10'; }
                if (date === 31 || date === 10 || date === 17 || date === 3) { shiftType = 'Day Off'; sColor = 'text-purple-500 bg-purple-500/10'; }
              }

              const isToday = date === 21;

              return (
                <div key={i} className={`bg-card p-2 flex flex-col items-center hover:bg-main transition-colors ${!isCurrentMonth ? 'opacity-40' : ''}`}>
                  <div className={`w-7 h-7 flex items-center justify-center text-sm font-medium mb-1 rounded-full ${isToday ? 'bg-purple-600 text-white shadow-lg' : 'text-foreground'}`}>
                    {displayDate}
                  </div>
                  {shiftType && (
                    <div className={`w-full py-1 text-center rounded text-xs font-medium border border-white/5 ${sColor}`}>
                      {shiftType}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

        {/* Right Col: Details Panel */}
        <div className="xl:col-span-4 flex flex-col gap-4 overflow-y-auto pr-1">
          
          {/* Selected Day Details */}
          <div className="card p-5 border-border-main bg-main relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-base font-bold text-foreground flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-green-500" /> Wednesday, 21 May 2025
              </h2>
              <span className="px-2 py-0.5 rounded text-xs font-medium border text-green-500 bg-green-500/10 border-green-500/20">Day Shift</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="text-sm text-foreground flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Shift Time</span>
                <span className="text-sm text-foreground font-medium text-right">8:00 AM - 8:00 PM (12h)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-foreground flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Role</span>
                <span className="text-sm text-foreground font-medium text-right">Paramedic</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-foreground flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> Ambulance</span>
                <span className="text-sm text-foreground font-medium text-right">AMB-102</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-foreground flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Location</span>
                <span className="text-sm text-foreground font-medium text-right">AIIMS Hospital, Delhi</span>
              </div>
            </div>
          </div>

          {/* Shift Overview */}
          <div className="card p-5 border-border-main">
            <h3 className="text-sm font-medium text-foreground mb-4">Shift Overview</h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-main border border-white/5">
                <CalendarDays className="w-4 h-4 text-foreground mb-1" />
                <span className="text-xs text-foreground mb-1 text-center">Total Shifts</span>
                <span className="text-xl font-bold text-foreground">22</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <CheckCircle2 className="w-4 h-4 text-green-500 mb-1" />
                <span className="text-xs text-green-500 mb-1 text-center">Completed</span>
                <span className="text-xl font-bold text-green-500">18</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <Clock className="w-4 h-4 text-orange-500 mb-1" />
                <span className="text-xs text-orange-500 mb-1 text-center">Upcoming</span>
                <span className="text-xl font-bold text-orange-500">3</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <User className="w-4 h-4 text-purple-500 mb-1" />
                <span className="text-xs text-purple-500 mb-1 text-center">Day Off</span>
                <span className="text-xl font-bold text-purple-500">4</span>
              </div>
            </div>
          </div>

          {/* Upcoming Shifts */}
          <div className="card p-5 border-border-main flex-1">
            <h3 className="text-sm font-medium text-foreground mb-4">Upcoming Shifts</h3>
            <div className="flex flex-col gap-3">
              {upcomingShifts.map((shift, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-main border border-white/5 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-0.5">{shift.date}</h4>
                    <p className={`text-xs ${shift.sColor.split(' ')[0]}`}>{shift.type}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-foreground">{shift.time}</span>
                    <button className="p-1.5 rounded-md bg-white/5 text-foreground hover:text-foreground transition-colors">
                      <Repeat className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shift Preferences */}
          <div className="card p-5 border-border-main">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-foreground">Shift Preferences</h3>
              <button className="text-xs text-purple-500 hover:text-purple-400">Edit</button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-foreground flex items-center gap-1.5"><Clock className="w-3 h-3" /> Preferred Shift</span>
                <span className="text-xs font-medium text-foreground">Day Shift</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-foreground flex items-center gap-1.5"><CalendarIcon className="w-3 h-3" /> Preferred Days</span>
                <span className="text-xs font-medium text-foreground">Mon, Tue, Wed, Thu, Fri</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-foreground flex items-center gap-1.5"><CalendarHeart className="w-3 h-3 text-red-500" /> Unavailable Days</span>
                <span className="text-xs font-medium text-foreground">Sunday</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-foreground flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Preferred Location</span>
                <span className="text-xs font-medium text-foreground">AIIMS Hospital, Delhi</span>
              </div>
            </div>
          </div>

          {/* Quick Actions & Leave Balance */}
          <div className="flex gap-4">
            <div className="card p-4 border-border-main flex-1 flex flex-col justify-between">
              <h3 className="text-sm font-medium text-foreground mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <button className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-main border border-white/5 text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-xs">
                  <Repeat className="w-3.5 h-3.5 text-blue-500" /> Request Swap
                </button>
                <button className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-main border border-white/5 text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-xs">
                  <CalendarHeart className="w-3.5 h-3.5 text-red-500" /> Request Leave
                </button>
              </div>
              <button className="flex w-full items-center justify-center gap-1.5 p-2 rounded-lg bg-main border border-white/5 text-foreground hover:text-foreground hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors text-xs">
                <Users className="w-3.5 h-3.5 text-purple-500" /> View Team Schedule
              </button>
            </div>
            
            <div className="card p-4 border-border-main w-[160px] flex flex-col justify-between relative overflow-hidden">
              <h3 className="text-sm font-medium text-foreground mb-1 z-10">Leave Balance</h3>
              <div className="flex items-end gap-2 mt-auto z-10 mb-1">
                <CalendarIcon className="w-6 h-6 text-purple-500" />
                <div>
                  <span className="text-xl font-bold text-foreground leading-none block">12 <span className="text-xs text-foreground font-normal">Days</span></span>
                  <span className="text-xs text-foreground">Available Leave</span>
                </div>
              </div>
              <div className="w-full bg-main h-1 rounded-full overflow-hidden mt-1 z-10 border border-white/5">
                <div className="h-full bg-purple-500 w-[40%] rounded-full"></div>
              </div>
              <p className="text-[8px] text-foreground text-right mt-1 z-10">Used: 8 Days | Total: 20 Days</p>
              
              {/* Decorative BG Icon */}
              <CalendarIcon className="absolute -right-4 -bottom-4 w-24 h-24 text-purple-500/5 rotate-12" />
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
