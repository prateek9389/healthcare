'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Plus, Search, Paperclip, Smile, Send, MoreVertical, Building
} from 'lucide-react';

export default function MessagesPage() {
  const conversations = [
    { name: 'Dr. Amit Mehta', role: 'Consultant Physician', msg: 'Please review the lab results...', time: '10:30 AM', unread: 2, avatar: 'https://i.pravatar.cc/150?img=11', online: true },
    { name: 'Pooja Singh', role: 'Night Nurse', msg: 'Thank you for your support.', time: '09:45 AM', unread: 0, avatar: 'https://i.pravatar.cc/150?img=5', online: false },
    { name: 'Neha Gupta (Patient)', role: 'Patient', msg: 'When is my next medication?', time: '09:20 AM', unread: 1, avatar: 'https://i.pravatar.cc/150?img=9', online: true },
    { name: 'Ravi Kumar', role: 'Dietitian', msg: 'Shift handover notes shared.', time: 'Yesterday', unread: 0, avatar: 'https://i.pravatar.cc/150?img=15', online: false },
    { name: 'Priya Singh', role: 'Physiotherapist', msg: 'Please update the vitals.', time: 'Yesterday', unread: 1, avatar: 'https://i.pravatar.cc/150?img=4', online: false },
    { name: 'Lab Department', role: 'Department', msg: 'Lab report for Rahul Verma...', time: '26 May', unread: 0, icon: Building },
    { name: 'Pharmacy', role: 'Department', msg: 'Medication delivery completed.', time: '25 May', unread: 0, icon: Building },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Messages
          </h1>
          <p className="text-sm text-foreground mt-0.5">Communicate with patients, doctors and staff</p>
        </div>
        
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
          <Plus className="w-3.5 h-3.5" /> New Message
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-200px)] min-h-[600px]">
        
        {/* Left Sidebar - Chat List */}
        <div className="card p-0 border-border-main bg-card w-full lg:w-[320px] xl:w-[350px] flex flex-col shrink-0 overflow-hidden">
          
          {/* Tabs */}
          <div className="p-4 border-b border-border-main flex items-center gap-5 overflow-x-auto hide-scrollbar">
            <button className="px-3 py-1 text-sm font-medium bg-[#5b21b6] text-white rounded">All</button>
            <button className="px-2 py-1 text-sm font-bold text-foreground hover:text-foreground transition-colors">Patients</button>
            <button className="px-2 py-1 text-sm font-bold text-foreground hover:text-foreground transition-colors">Doctors</button>
            <button className="px-2 py-1 text-sm font-bold text-foreground hover:text-foreground transition-colors">Nurses</button>
            <button className="px-2 py-1 text-sm font-bold text-foreground hover:text-foreground transition-colors">Staff</button>
          </div>

          <div className="p-4 border-b border-border-main bg-main">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search conversations..." 
                className="w-full pl-9 pr-4 py-2 bg-card border border-border-main rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {conversations.map((chat, i) => (
              <div key={i} className={`p-4 border-b border-border-main cursor-pointer transition-colors flex items-start gap-3 ${i === 0 ? 'bg-purple-500/5 border-l-2 border-l-purple-500' : 'hover:bg-[#7caaaf] dark:hover:bg-white/5 border-l-2 border-l-transparent'}`}>
                
                <div className="relative shrink-0">
                  {chat.avatar ? (
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-800 border border-border-main">
                      <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
                    </div>
                  ) : chat.icon ? (
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-border-main flex items-center justify-center">
                      <chat.icon className="w-4 h-4 text-foreground" />
                    </div>
                  ) : null}
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#101423]"></div>
                  )}
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-foreground truncate pr-2">{chat.name}</span>
                    <span className="text-[9px] text-foreground shrink-0">{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground truncate pr-2">{chat.msg}</span>
                    {chat.unread > 0 && (
                      <span className="w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border-main bg-main text-center">
            <span className="text-xs text-foreground">Showing 1 to 7 of 12 conversations</span>
          </div>

        </div>

        {/* Right Area - Active Chat */}
        <div className="card p-0 border-border-main bg-card flex-1 flex flex-col overflow-hidden">
          
          {/* Chat Header */}
          <div className="p-4 border-b border-border-main flex justify-between items-center bg-main">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-800 border border-border-main shrink-0">
                <img src="https://i.pravatar.cc/150?img=11" alt="Dr. Amit Mehta" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-foreground">Dr. Amit Mehta</span>
                <span className="text-sm text-foreground">Consultant Physician</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span className="text-xs text-foreground">Online</span>
              </div>
              <button className="text-foreground hover:text-foreground transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar bg-main">
            
            <div className="flex justify-center">
              <span className="text-xs text-foreground bg-slate-200 dark:bg-black/40 px-3 py-1 rounded-full">Today</span>
            </div>

            {/* Received Message */}
            <div className="flex items-end gap-3 max-w-[80%]">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-800 shrink-0">
                <img src="https://i.pravatar.cc/150?img=11" alt="Dr" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-card text-foreground text-sm p-3 rounded-2xl rounded-bl-none shadow-sm leading-relaxed border border-border-main">
                  Please review the lab results of Rahul Verma (Room 101). His BP has been fluctuating.
                </div>
                <span className="text-[9px] text-foreground ml-1">10:20 AM</span>
              </div>
            </div>

            {/* Sent Message */}
            <div className="flex items-end gap-3 max-w-[80%] self-end flex-row-reverse">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-800 shrink-0">
                <img src="https://i.pravatar.cc/150?img=9" alt="Me" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 items-end">
                <div className="bg-[#5b21b6] text-white text-sm p-3 rounded-2xl rounded-br-none shadow-sm leading-relaxed">
                  Sure doctor, I will review and update you shortly.
                </div>
                <div className="flex items-center gap-1 mr-1">
                  <span className="text-[9px] text-foreground">10:22 AM</span>
                  <span className="text-[9px] text-blue-600 dark:text-blue-400">✓✓</span>
                </div>
              </div>
            </div>

            {/* Received Message */}
            <div className="flex items-end gap-3 max-w-[80%]">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-800 shrink-0">
                <img src="https://i.pravatar.cc/150?img=11" alt="Dr" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-card text-foreground text-sm p-3 rounded-2xl rounded-bl-none shadow-sm leading-relaxed border border-border-main">
                  Also, kindly monitor his medication response and update the care plan.
                </div>
                <span className="text-[9px] text-foreground ml-1">10:25 AM</span>
              </div>
            </div>

            {/* Sent Message */}
            <div className="flex items-end gap-3 max-w-[80%] self-end flex-row-reverse">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-800 shrink-0">
                <img src="https://i.pravatar.cc/150?img=9" alt="Me" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 items-end">
                <div className="bg-[#5b21b6] text-white text-sm p-3 rounded-2xl rounded-br-none shadow-sm leading-relaxed">
                  Noted doctor. Will do.
                </div>
                <div className="flex items-center gap-1 mr-1">
                  <span className="text-[9px] text-foreground">10:27 AM</span>
                  <span className="text-[9px] text-blue-600 dark:text-blue-400">✓✓</span>
                </div>
              </div>
            </div>

          </div>

          {/* Chat Input */}
          <div className="p-4 bg-card border-t border-border-main">
            <div className="flex items-center gap-3 bg-main border border-border-main rounded-xl p-2 pr-3">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-transparent border-none focus:outline-none text-sm text-foreground px-2 placeholder:text-foreground"
              />
              <div className="flex items-center gap-2 shrink-0">
                <button className="p-1.5 text-foreground hover:text-foreground transition-colors">
                  <Paperclip className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-foreground hover:text-foreground transition-colors">
                  <Smile className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-[#5b21b6] flex items-center justify-center text-white hover:bg-purple-700 transition-colors ml-1">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
