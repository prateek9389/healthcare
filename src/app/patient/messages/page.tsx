'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Search, Phone, MoreVertical, Paperclip, Send, Hospital, FlaskConical, Pill } from 'lucide-react';

export default function MessagesPage() {
  const contacts = [
    { name: 'Dr. Neha Sharma', message: 'Your test results are normal.', time: '10:30 AM', unread: 2, icon: 'avatar1' },
    { name: 'Dr. Amit Mehta', message: 'Please confirm your appointment...', time: 'Yesterday', unread: 1, icon: 'avatar2' },
    { name: 'City Care Hospital', message: 'Your appointment is confirmed.', time: '29 May', unread: 1, type: 'hospital' },
    { name: 'Lab Reports', message: 'Your report is ready to download.', time: '28 May', unread: 1, type: 'lab' },
    { name: 'Pharmacy', message: 'Your order has been shipped.', time: '27 May', unread: 1, type: 'pharmacy' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            Messages
          </h1>
          <p className="text-sm text-foreground mt-1">Communicate with your care team</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-180px)]">
        
        {/* Left Sidebar */}
        <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col overflow-hidden h-full">
          <div className="p-4 border-b border-border-main flex gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Search messages..." className="w-full bg-main border border-border-main rounded-lg pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-purple-500/50" />
            </div>
            <button className="px-4 py-2 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors whitespace-nowrap">
              New Message
            </button>
          </div>

          <div className="p-2 border-b border-border-main flex justify-between">
            <button className="px-3 py-1.5 text-sm font-medium bg-[#5b21b6] text-foreground rounded-md w-full">All</button>
            <button className="px-3 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors w-full">Unread</button>
            <button className="px-3 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors w-full">Doctors</button>
            <button className="px-3 py-1.5 text-sm font-bold text-foreground hover:text-foreground transition-colors w-full">Hospital</button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {contacts.map((contact, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 border-b border-border-main cursor-pointer transition-colors ${i === 0 ? 'bg-white/5' : 'hover:bg-[#7caaaf] dark:hover:bg-white/5'}`}>
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-border-main flex items-center justify-center overflow-hidden shrink-0">
                  {contact.icon === 'avatar1' ? (
                    <img src="https://i.pravatar.cc/150?img=5" alt={contact.name} className="w-full h-full object-cover" />
                  ) : contact.icon === 'avatar2' ? (
                    <img src="https://i.pravatar.cc/150?img=11" alt={contact.name} className="w-full h-full object-cover" />
                  ) : contact.type === 'hospital' ? (
                    <Hospital className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : contact.type === 'lab' ? (
                    <FlaskConical className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Pill className="w-5 h-5 text-red-600 dark:text-red-400 transform -rotate-45" />
                  )}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <span className="text-base font-bold text-foreground truncate">{contact.name}</span>
                    <span className="text-xs text-foreground shrink-0 ml-2 mt-0.5">{contact.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-foreground truncate pr-2">{contact.message}</span>
                    {contact.unread && (
                      <span className="w-4 h-4 rounded-full bg-[#5b21b6] text-foreground text-[9px] font-bold flex items-center justify-center shrink-0">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border-main text-center">
            <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-300">View Archived</button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 card p-0 border-border-main bg-card shadow-lg flex flex-col overflow-hidden h-full">
          <div className="p-4 border-b border-border-main flex justify-between items-center bg-main">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-border-main overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=5" alt="Dr. Neha Sharma" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">Dr. Neha Sharma</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-xs text-green-500">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button className="text-foreground hover:text-foreground transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6">
            <div className="flex justify-center">
              <span className="text-xs text-foreground bg-white/5 px-3 py-1 rounded-full">Today</span>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border border-border-main overflow-hidden shrink-0 mt-auto">
                <img src="https://i.pravatar.cc/150?img=5" alt="Dr. Neha Sharma" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 max-w-[70%]">
                <div className="bg-white/5 border border-border-main p-3 rounded-2xl rounded-bl-none">
                  <p className="text-sm text-foreground leading-relaxed">
                    Hello Rahul,<br/>
                    Your recent test results are normal. All your vital parameters are in the healthy range.
                  </p>
                </div>
                <span className="text-[9px] text-foreground ml-1">10:30 AM</span>
              </div>
            </div>

            <div className="flex gap-3 flex-row-reverse">
              <div className="flex flex-col gap-1 max-w-[70%] items-end">
                <div className="bg-[#5b21b6] p-3 rounded-2xl rounded-br-none">
                  <p className="text-sm text-foreground leading-relaxed">
                    That's great to hear!<br/>Thank you, Doctor.
                  </p>
                </div>
                <div className="flex items-center gap-1 mr-1">
                  <span className="text-[9px] text-foreground">10:32 AM</span>
                  <svg className="w-3 h-3 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10 -10"></path></svg>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border border-border-main overflow-hidden shrink-0 mt-auto">
                <img src="https://i.pravatar.cc/150?img=5" alt="Dr. Neha Sharma" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 max-w-[70%]">
                <div className="bg-white/5 border border-border-main p-3 rounded-2xl rounded-bl-none">
                  <p className="text-sm text-foreground leading-relaxed">
                    Keep following your medication and maintain a healthy lifestyle.<br/>See you in the next appointment.
                  </p>
                </div>
                <span className="text-[9px] text-foreground ml-1">10:35 AM</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border-main bg-main flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center text-foreground hover:text-foreground transition-colors bg-white/5 rounded-full border border-border-main shrink-0">
              <Paperclip className="w-4 h-4" />
            </button>
            <input type="text" placeholder="Type your message..." className="flex-1 bg-white/5 border border-border-main rounded-full px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-purple-500/50" />
            <button className="w-10 h-10 flex items-center justify-center text-foreground bg-[#5b21b6] hover:bg-purple-700 transition-colors rounded-full shrink-0">
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
