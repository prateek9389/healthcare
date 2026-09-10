'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Search, HeadphonesIcon, Clock, ChevronDown, PhoneCall, Mail, Globe } from 'lucide-react';

export default function SupportPage() {
  const faqs = [
    "How can I book an appointment?",
    "How do I download my reports?",
    "How can I manage my medications?",
    "How can I update my profile information?",
    "How do I change my password?"
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-foreground">
            Help & Support
          </h1>
          <p className="text-sm text-foreground mt-1">We're here to assist you</p>
        </div>
        
        <div className="relative w-full sm:w-[300px]">
          <Search className="w-4 h-4 text-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" placeholder="Search help articles..." className="w-full bg-card border border-border-main rounded-lg pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-purple-500/50 shadow-sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="card p-8 border-border-main bg-card shadow-lg flex flex-col items-center text-center">
            <h2 className="text-[15px] font-medium text-foreground mb-6">How can we help you?</h2>
            
            <div className="w-20 h-20 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
              <HeadphonesIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>

            <p className="text-sm text-foreground leading-relaxed mb-8">
              Our support team is ready to help you with any questions or issues.
            </p>

            <button className="w-full py-2.5 bg-[#5b21b6] hover:bg-purple-700 text-foreground text-sm font-medium rounded-lg transition-colors">
              Contact Support
            </button>
          </div>

          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main">
              <h3 className="text-base font-bold text-foreground">Support Availability</h3>
            </div>
            <div className="p-5 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-foreground shrink-0" />
                <div className="flex flex-col">
                  <span className="text-base font-bold text-foreground">Monday - Saturday</span>
                  <span className="text-sm text-foreground mt-0.5">8:00 AM - 8:00 PM</span>
                </div>
              </div>
              <div className="flex items-start gap-4 ml-9">
                <div className="flex flex-col">
                  <span className="text-base font-bold text-foreground">Sunday</span>
                  <span className="text-sm text-foreground mt-0.5">9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          <div className="card p-0 border-border-main bg-card shadow-lg flex flex-col">
            <div className="p-4 border-b border-border-main">
              <h3 className="text-lg font-bold text-foreground">Frequently Asked Questions</h3>
            </div>
            <div className="flex flex-col p-2">
              {faqs.map((faq, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-border-main last:border-0 hover:bg-[#7caaaf] dark:hover:bg-white/5 transition-colors cursor-pointer group">
                  <span className="text-base text-foreground group-hover:text-foreground transition-colors">{faq}</span>
                  <ChevronDown className="w-4 h-4 text-foreground group-hover:text-foreground transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-foreground ml-1">More Options</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="card p-5 border-border-main bg-card hover:border-purple-500/30 transition-colors group cursor-pointer shadow-lg flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <PhoneCall className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-base font-bold text-foreground mb-1">Call Us</span>
                <span className="text-sm text-foreground group-hover:text-foreground transition-colors">+91 98765 43210</span>
              </div>

              <div className="card p-5 border-border-main bg-card hover:border-purple-500/30 transition-colors group cursor-pointer shadow-lg flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-base font-bold text-foreground mb-1">Email Us</span>
                <span className="text-sm text-foreground group-hover:text-foreground transition-colors truncate">support@citycarehospital.com</span>
              </div>

              <div className="card p-5 border-border-main bg-card hover:border-purple-500/30 transition-colors group cursor-pointer shadow-lg flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-base font-bold text-foreground mb-1">Visit Help Center</span>
                <span className="text-sm text-foreground group-hover:text-foreground transition-colors">Browse more help articles</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
