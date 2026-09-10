'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Camera, MapPin, Phone, Building2, Plus
} from 'lucide-react';

export default function ProfilePage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[20px] font-semibold text-foreground tracking-wide">
          Profile
        </h1>
        <p className="text-sm text-foreground mt-0.5">Manage your personal information and professional details</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-6">
          
          <div className="card p-6 border-border-main flex flex-col items-center bg-card text-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center text-[32px] text-foreground font-bold overflow-hidden border-4 border-[#101423] shadow-xl">
                <img src="https://i.pravatar.cc/150?img=11" alt="Dr. Rahul Sharma" className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors border-2 border-[#101423]">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            
            <h2 className="text-[16px] font-bold text-foreground tracking-wide">Dr. Rahul Sharma</h2>
            <span className="text-sm text-purple-400 font-medium mt-1">Cardiologist</span>
            <span className="text-sm text-foreground mt-1">MBBS, MD (Cardiology)</span>
          </div>

          <div className="card p-6 border-border-main flex flex-col bg-card">
            <h3 className="text-base font-semibold text-foreground mb-5 pb-3 border-b border-border-main">Professional Information</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-foreground uppercase tracking-wider">Hospital</span>
                <span className="text-sm font-medium text-foreground p-2.5 rounded bg-main border border-border-main">City Care Hospital</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-foreground uppercase tracking-wider">Department</span>
                <span className="text-sm font-medium text-foreground p-2.5 rounded bg-main border border-border-main">Cardiology</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-foreground uppercase tracking-wider">Qualification</span>
                <span className="text-sm font-medium text-foreground p-2.5 rounded bg-main border border-border-main">MBBS, MD (Cardiology)</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-foreground uppercase tracking-wider">Years of Experience</span>
                <span className="text-sm font-medium text-foreground p-2.5 rounded bg-main border border-border-main">10+ Years</span>
              </div>
            </div>
          </div>

        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-6">
          
          <div className="card p-6 border-border-main flex flex-col bg-card">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-foreground font-medium ml-1">Full Name</label>
                <input type="text" defaultValue="Dr. Rahul Sharma" className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-foreground font-medium ml-1">Email</label>
                <input type="email" defaultValue="rahul.sharma@citycarehospital.com" className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-foreground font-medium ml-1">Phone</label>
                <input type="text" defaultValue="+91 98765 43210" className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-foreground font-medium ml-1">Date of Birth</label>
                <input type="text" defaultValue="15 March 1985" className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-foreground font-medium ml-1">Gender</label>
                <select className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-purple-500/50 transition-colors">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-foreground font-medium ml-1">Specialization</label>
                <input type="text" defaultValue="Cardiology" className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-foreground font-medium ml-1">License Number</label>
                <input type="text" defaultValue="DMC/UP/12345" className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-foreground font-medium ml-1">Experience</label>
                <input type="text" defaultValue="10+ Years" className="w-full px-4 py-2.5 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-sm text-foreground font-medium ml-1">About Me</label>
              <textarea 
                defaultValue="Dedicated cardiologist with over 10 years of experience in diagnosing and treating heart conditions. Passionate about patient care and advancing cardiac health." 
                className="w-full px-4 py-3 bg-main border border-border-main rounded-lg text-sm text-foreground focus:outline-none focus:border-purple-500/50 transition-colors h-[100px] resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end pt-4 border-t border-border-main">
              <button className="px-6 py-2.5 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
                Save Changes
              </button>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Availability */}
            <div className="card p-6 border-border-main flex flex-col bg-card">
              <h3 className="text-base font-semibold text-foreground mb-5 pb-3 border-b border-border-main">Availability</h3>
              
              <div className="flex justify-between items-center mb-6">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-xs text-foreground">{day}</span>
                    <div className={`w-2.5 h-2.5 rounded-full ${i < 5 ? 'bg-green-500' : 'bg-slate-700'}`}></div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center p-3 rounded-lg bg-main border border-border-main">
                <span className="text-sm font-medium text-foreground">09:00 AM - 05:00 PM</span>
                <button className="p-1 text-foreground hover:text-foreground transition-colors"><Plus className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card p-6 border-border-main flex flex-col bg-card">
              <h3 className="text-base font-semibold text-foreground mb-5 pb-3 border-b border-border-main">Contact Information</h3>
              
              <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-foreground">Office Address</span>
                    <span className="text-sm text-foreground leading-relaxed">City Care Hospital, 123 Medical Street,<br/>Lucknow, UP - 226001</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-foreground">Emergency Contact</span>
                    <span className="text-sm text-foreground">+91 91234 56789 (Dr. Anil Verma)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
