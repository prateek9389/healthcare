'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Search, Edit, Phone, Video, Info, Paperclip, Send, CheckCheck
} from 'lucide-react';

export default function MessagesPage() {
  const conversations = [
    { name: 'John Doe', type: 'Patient', lastMsg: 'Thank you doctor, I will follow the...', time: '10:30 AM', unread: 2, active: true },
    { name: 'Jane Smith', type: '', lastMsg: 'I have a question about my medication.', time: '09:15 AM', unread: 1 },
    { name: 'Robert Brown', type: '', lastMsg: 'When should I schedule my next visit?', time: 'Yesterday', unread: 1 },
    { name: 'Emily Davis', type: '', lastMsg: 'Thanks for the consultation.', time: 'Yesterday', unread: 0 },
    { name: 'Michael Wilson', type: '', lastMsg: 'Please review my recent test results.', time: '27 May', unread: 0 },
    { name: 'Sarah Johnson', type: '', lastMsg: 'Okay, see you on the follow-up.', time: '26 May', unread: 0 },
    { name: 'Clinic Group', type: 'Group', lastMsg: 'Reminder: Staff meeting at 4 PM today.', time: '25 May', unread: 0, isGroup: true },
    { name: 'Lab Department', type: 'Staff', lastMsg: 'New lab reports are uploaded.', time: '24 May', unread: 0, isGroup: true },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
            Messages
          </h1>
          <p className="text-sm text-foreground mt-0.5">Secure communication with patients and clinic staff</p>
        </div>
      </div>

      <div className="card p-0 border-border-main flex flex-col md:flex-row bg-card h-[700px] overflow-hidden">
        
        {/* Left Sidebar - Chat List */}
        <div className="w-full md:w-[320px] shrink-0 border-r border-border-main flex flex-col h-full bg-main">
          
          <div className="p-4 border-b border-border-main flex items-center justify-between gap-3 bg-card">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full pl-9 pr-4 py-2 bg-main border border-white/5 rounded-lg text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            <button className="w-9 h-9 rounded-lg bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition-colors shrink-0 shadow-lg shadow-purple-500/20">
              <Edit className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-6 px-4 pt-3 border-b border-border-main bg-card">
            <button className="text-sm font-medium text-purple-400 border-b-2 border-purple-500 pb-2 -mb-px">All</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-2 -mb-px transition-colors">Patients</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-2 -mb-px transition-colors">Staff</button>
            <button className="text-sm font-medium text-foreground hover:text-foreground pb-2 -mb-px transition-colors">Groups</button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((chat, i) => (
              <div key={i} className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-white/5 last:border-0 ${chat.active ? 'bg-purple-500/10 border-l-2 border-l-purple-500' : 'hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5'}`}>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg text-white font-bold shrink-0 ${chat.isGroup ? 'bg-blue-600' : 'bg-slate-700'}`}>
                  {chat.name.charAt(0)}
                </div>
                
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-base font-medium text-foreground truncate">{chat.name}</span>
                    <span className={`text-xs shrink-0 ${chat.unread > 0 ? 'text-purple-400 font-medium' : 'text-foreground'}`}>{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-sm text-foreground truncate">{chat.lastMsg}</span>
                    {chat.unread > 0 && (
                      <span className="w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Main Chat Area */}
        <div className="flex-1 flex flex-col h-full bg-main">
          
          {/* Chat Header */}
          <div className="p-4 border-b border-border-main flex justify-between items-center bg-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-lg text-foreground font-bold shrink-0">
                J
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-foreground">John Doe</span>
                <span className="text-xs text-foreground">Patient</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 text-foreground hover:text-foreground flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 text-foreground hover:text-foreground flex items-center justify-center transition-colors">
                <Video className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-lg hover:bg-[#7caaaf] dark:hover:bg-[#7caaaf] dark:hover:bg-white/5 text-foreground hover:text-foreground flex items-center justify-center transition-colors">
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            
            {/* Outgoing Message */}
            <div className="flex flex-col items-end gap-1">
              <div className="max-w-[70%] bg-[#1e3a8a] text-foreground text-sm p-3 rounded-2xl rounded-tr-sm leading-relaxed">
                Hello John, how are you feeling today?
              </div>
              <div className="flex items-center gap-1 text-xs text-foreground">
                10:28 AM <CheckCheck className="w-3 h-3 text-blue-400" />
              </div>
            </div>

            {/* Incoming Message */}
            <div className="flex flex-col items-start gap-1">
              <div className="max-w-[70%] bg-card border border-border-main text-foreground text-sm p-3 rounded-2xl rounded-tl-sm leading-relaxed shadow-sm">
                I'm feeling better now. The medication seems to be working.
              </div>
              <div className="flex items-center gap-1 text-xs text-foreground">
                10:29 AM
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex flex-col items-end gap-1">
              <div className="max-w-[70%] bg-[#1e3a8a] text-foreground text-sm p-3 rounded-2xl rounded-tr-sm leading-relaxed">
                That's good to hear! Please continue taking your medicines as prescribed.
              </div>
              <div className="flex items-center gap-1 text-xs text-foreground">
                10:29 AM <CheckCheck className="w-3 h-3 text-blue-400" />
              </div>
            </div>

            {/* Incoming Message */}
            <div className="flex flex-col items-start gap-1 mt-4">
              <div className="max-w-[70%] bg-card border border-border-main text-foreground text-sm p-3 rounded-2xl rounded-tl-sm leading-relaxed shadow-sm">
                Thank you doctor, I will follow the instructions.
              </div>
              <div className="flex items-center gap-1 text-xs text-foreground">
                10:30 AM
              </div>
            </div>

            {/* Outgoing Message (Unread) */}
            <div className="flex flex-col items-end gap-1">
              <div className="max-w-[70%] bg-[#1e3a8a] text-foreground text-sm p-3 rounded-2xl rounded-tr-sm leading-relaxed">
                Great! Let me know if you have any other concerns.
              </div>
              <div className="flex items-center gap-1 text-xs text-foreground">
                10:30 AM <CheckCheck className="w-3 h-3 text-foreground" />
              </div>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border-main bg-card">
            <div className="flex items-end gap-3 bg-main border border-border-main rounded-xl p-2 focus-within:border-purple-500/50 transition-colors">
              <button className="p-2 text-foreground hover:text-foreground transition-colors rounded-lg">
                <Paperclip className="w-4 h-4" />
              </button>
              
              <textarea 
                placeholder="Type a message..."
                className="flex-1 bg-transparent border-none text-sm text-foreground placeholder:text-foreground focus:outline-none resize-none py-2 h-[36px] max-h-[100px]"
                rows={1}
              />
              
              <button className="w-9 h-9 rounded-lg bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition-colors shrink-0 shadow-lg shadow-purple-500/20">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
