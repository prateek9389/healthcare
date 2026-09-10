'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  MessageSquare, Search, Edit, Headset, Plus, Building2, UserCircle, Car, Wrench, 
  Phone, Video, MoreVertical, Paperclip, Send, FileText, CheckCircle2, Navigation, AlertCircle
} from 'lucide-react';

export default function MessagesPage() {
  const conversations = [
    { id: 1, type: 'headset', name: 'Control Center', msg: 'New emergency assigned to you...', time: '10:24 AM', unread: 2, active: true },
    { id: 2, type: 'hospital', name: 'AIIMS Hospital, Delhi', msg: 'Patient will be in ER. Please hurry.', time: '10:15 AM', unread: 1, active: false },
    { id: 3, type: 'driver', name: 'Vikas Sharma (Driver)', msg: 'Reaching in 5 mins', time: '10:10 AM', read: true, active: false },
    { id: 4, type: 'emt', name: 'Pooja Mehta (EMT)', msg: 'Check the patient vitals', time: '09:58 AM', active: false },
    { id: 5, type: 'hospital', name: 'City Hospital', msg: 'Bed is ready for the patient.', time: '09:42 AM', active: false },
    { id: 6, type: 'emt', name: 'Ramesh Kumar (EMT)', msg: 'Equipment checklist completed', time: 'Yesterday', active: false },
    { id: 7, type: 'maintenance', name: 'Fleet Maintenance', msg: 'AMB-102 maintenance scheduled', time: 'Yesterday', active: false },
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'headset': return <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500"><Headset className="w-4 h-4" /></div>;
      case 'hospital': return <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-500"><Plus className="w-4 h-4" /></div>;
      case 'driver': return <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500"><UserCircle className="w-4 h-4" /></div>;
      case 'emt': return <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-500"><UserCircle className="w-4 h-4" /></div>;
      case 'maintenance': return <div className="w-8 h-8 rounded-full bg-slate-500/20 border border-slate-500/30 flex items-center justify-center text-foreground"><Wrench className="w-4 h-4" /></div>;
      default: return <div className="w-8 h-8 rounded-full bg-slate-500/20 border border-slate-500/30 flex items-center justify-center text-foreground"><UserCircle className="w-4 h-4" /></div>;
    }
  };

  const sharedFiles = [
    { name: 'Route_Connaught_Place.pdf', size: 'PDF • 1.2 MB', time: '10:20 AM' },
    { name: 'Emergency_Protocol.pdf', size: 'PDF • 2.4 MB', time: 'Yesterday' },
    { name: 'Patient_Handover_Form.pdf', size: 'PDF • 1.8 MB', time: 'May 20' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-purple-500/20 text-purple-500">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground tracking-wide">
              Messages
            </h1>
            <p className="text-sm text-foreground mt-0.5">Communicate with your team, hospitals and control center</p>
          </div>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 h-[calc(100vh-160px)] min-h-[600px]">
        
        {/* Left Col: Conversations */}
        <div className="xl:col-span-3 card p-0 border-border-main flex flex-col overflow-hidden">
          <div className="p-4 border-b border-border-main">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium text-foreground">Conversations</h2>
              <button className="p-1.5 rounded-md bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-colors">
                <Edit className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input type="text" placeholder="Search conversations..." className="w-full bg-main border border-white/5 rounded-lg pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
            </div>
          </div>
          
          <div className="flex px-4 py-2 border-b border-border-main text-sm font-medium gap-4">
            <button className="text-purple-500 border-b-2 border-purple-500 pb-2 -mb-2">All</button>
            <button className="text-foreground hover:text-foreground pb-2 -mb-2 flex items-center gap-1.5">
              Unread <span className="px-1.5 rounded-full bg-red-500 text-white text-xs leading-[14px]">5</span>
            </button>
            <button className="text-foreground hover:text-foreground pb-2 -mb-2">Groups</button>
            <button className="text-foreground hover:text-foreground pb-2 -mb-2">Favorites</button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div key={conv.id} className={`flex items-start gap-3 p-4 border-b border-border-main cursor-pointer transition-colors ${conv.active ? 'bg-purple-500/5 border-l-2 border-l-purple-500' : 'hover:bg-[#7caaaf] dark:hover:bg-white/5 border-l-2 border-l-transparent'}`}>
                {getIcon(conv.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`text-sm truncate ${conv.active || conv.unread ? 'font-bold text-foreground' : 'font-medium text-foreground'}`}>{conv.name}</h3>
                    <span className={`text-xs shrink-0 ${conv.unread ? 'text-purple-400 font-medium' : 'text-foreground'}`}>{conv.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className={`text-sm truncate pr-2 ${conv.unread ? 'text-foreground' : 'text-foreground'}`}>{conv.msg}</p>
                    {conv.unread && (
                      <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold shrink-0">{conv.unread}</span>
                    )}
                    {conv.read && (
                      <div className="flex text-purple-500 shrink-0"><CheckCircle2 className="w-3 h-3" /></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Col: Chat Area */}
        <div className="xl:col-span-6 card p-0 border-border-main flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-border-main flex justify-between items-center bg-card z-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-500">
                <Headset className="w-4.5 h-4.5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground leading-tight">Control Center</h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-xs text-green-500 font-medium">Online</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-main border border-border-main text-foreground hover:bg-card transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-main border border-border-main text-foreground hover:bg-card transition-colors">
                <Video className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-main border border-border-main text-foreground hover:bg-card transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Feed */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            
            {/* Incoming Card */}
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 shrink-0 mt-1">
                <Headset className="w-3 h-3" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="px-4 py-2.5 rounded-2xl rounded-tl-sm !bg-white dark:!bg-[#1a2333] border border-border-main text-sm text-foreground shadow-sm">
                  <p>New emergency request has been assigned to you.</p>
                  <div className="text-xs text-foreground mt-1 text-right">10:24 AM</div>
                </div>
                
                {/* Embedded Card */}
                <div className="mt-1 p-4 rounded-xl border border-red-500/20 bg-red-500/5 w-[300px]">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground">Emergency ID</span>
                      <span className="text-foreground font-medium">ER-2025-05121</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground">Location</span>
                      <span className="text-foreground font-medium">Connaught Place, Delhi</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground">Priority</span>
                      <span className="px-2 py-0.5 rounded text-xs font-medium border text-red-500 bg-red-500/10 border-red-500/20">High</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground">Patient</span>
                      <span className="text-foreground font-medium">Male, 58 Years</span>
                    </div>
                    <button className="w-full mt-3 py-1.5 rounded-lg border border-red-500/30 text-red-500 text-sm font-medium hover:bg-red-500/10 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex gap-3 max-w-[85%] self-end">
              <div className="flex flex-col gap-1 items-end">
                <div className="px-4 py-2.5 rounded-2xl rounded-tr-sm bg-purple-600 text-sm text-white shadow-lg">
                  <p>Acknowledged. On my way.</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <div className="text-xs text-purple-200">10:25 AM</div>
                    <CheckCircle2 className="w-3 h-3 text-purple-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Incoming Message */}
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 shrink-0 mt-1">
                <Headset className="w-3 h-3" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="px-4 py-2.5 rounded-2xl rounded-tl-sm !bg-white dark:!bg-[#1a2333] border border-border-main text-sm text-foreground shadow-sm">
                  <p>Please update once you reach the patient location.</p>
                  <div className="text-xs text-foreground mt-1 text-right">10:26 AM</div>
                </div>
              </div>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border-main bg-card z-10">
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg text-foreground hover:bg-main border border-transparent transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
              <div className="flex-1 relative">
                <input type="text" placeholder="Type your message..." className="w-full bg-main border border-border-main rounded-lg pl-4 pr-10 py-2.5 text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground hover:text-purple-500">
                  <AlertCircle className="w-4 h-4" /> {/* Replacing smiley with something else since Lucide doesn't have smile by default easily without imports */}
                </button>
              </div>
              <button className="p-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors shadow-lg shadow-purple-500/20">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Col: Conversation Info */}
        <div className="xl:col-span-3 card p-4 border-border-main flex flex-col gap-6 overflow-y-auto">
          
          {/* Header Info */}
          <div>
            <h2 className="text-base font-medium text-foreground mb-4">Conversation Info</h2>
            <div className="flex flex-col items-center justify-center text-center p-4 bg-main rounded-xl border border-border-main">
              <div className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-500 mb-3">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Control Center</h3>
              <div className="flex items-center gap-1.5 mt-1 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span className="text-xs text-green-500 font-medium">Online</span>
              </div>
              <p className="text-xs text-foreground leading-relaxed">Central control and coordination team for all ambulance dispatches.</p>
            </div>
          </div>

          {/* Members */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-foreground">Members (5)</h3>
            </div>
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-card flex items-center justify-center text-xs font-medium text-foreground">
                  U{i}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-main border-2 border-card flex items-center justify-center text-xs font-medium text-foreground">
                +2
              </div>
            </div>
          </div>

          {/* Shared Files */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-foreground">Shared Files</h3>
              <button className="text-xs text-purple-500 hover:text-purple-400">View All</button>
            </div>
            <div className="flex flex-col gap-3">
              {sharedFiles.map((file, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{file.name}</p>
                    <p className="text-[8px] text-foreground">{file.size}</p>
                  </div>
                  <span className="text-[8px] text-foreground shrink-0">{file.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-auto pt-4 border-t border-border-main">
            <h3 className="text-sm font-medium text-foreground mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Emergency Call</span>
              </button>
              <button className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-500 hover:bg-purple-500/20 transition-colors">
                <Navigation className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Share Location</span>
              </button>
              <button className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 hover:bg-blue-500/20 transition-colors">
                <Car className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Request Backup</span>
              </button>
              <button className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-main border border-border-main text-foreground hover:bg-card transition-colors">
                <MoreVertical className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">View Details</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
