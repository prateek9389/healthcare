'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { getRoleRoutes, RouteItem } from '@/config/roleRoutes';
import { Brain, ChevronRight, ChevronDown, CheckCircle2, FileText, CircleDollarSign, Crown } from 'lucide-react';

export const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  const { user } = useAuth();
  const pathname = usePathname();

  if (!user) return null;

  const routes = getRoleRoutes(user.role);

  // Group routes by category, extracting 'Dashboard' which doesn't have a category
  const dashboardRoute = routes.find(r => r.name === 'Dashboard');
  const otherRoutes = routes.filter(r => r.name !== 'Dashboard');

  const groupedRoutes = otherRoutes.reduce((acc, route) => {
    const category = route.category || 'GENERAL';
    if (!acc[category]) acc[category] = [];
    acc[category].push(route);
    return acc;
  }, {} as Record<string, RouteItem[]>);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={toggleSidebar} />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 flex flex-col bg-[#0B1120] border-r border-white/5 overflow-hidden transition-all duration-300 ${isOpen ? 'w-[260px]' : 'w-0 lg:w-[80px]'}`}
      >
        <div className="h-[72px] flex items-center px-5 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className={`w-[42px] h-[42px] min-w-[42px] rounded-xl flex items-center justify-center ${user.role === 'billing_staff' ? 'bg-purple-900/30 border border-purple-500/20 text-purple-500' : 'bg-blue-900/30 border border-blue-500/20 text-blue-500'}`}>
              {user.role === 'billing_staff' ? (
                <CircleDollarSign className="w-[22px] h-[22px]" strokeWidth={1.5} />
              ) : (
                <Brain className="w-[22px] h-[22px]" strokeWidth={1.5} />
              )}
            </div>
            {isOpen && (
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-semibold text-[17px] text-slate-100 leading-tight">
                  {user.role === 'billing_staff' ? 'Billing Dashboard' : 'AI Digital Twin'}
                </span>
                {user.role !== 'billing_staff' && (
                  <span className="text-[11px] font-medium text-slate-400">Smart Healthcare</span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6 sidebar-scroll">
          {/* Dashboard Button */}
          {dashboardRoute && (
            <Link 
              href={dashboardRoute.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                (pathname === dashboardRoute.path) 
                  ? 'bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white shadow-[0_4px_15px_rgba(37,99,235,0.4)]' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <dashboardRoute.icon className="w-5 h-5 min-w-[20px]" strokeWidth={2} />
              {isOpen && <span className="text-[15px] font-medium">Dashboard</span>}
            </Link>
          )}

          {/* Categories */}
          {Object.entries(groupedRoutes).map(([category, items]) => (
            <div key={category} className="space-y-1">
              {isOpen && (
                <p className="px-3 text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-4">
                  {category}
                </p>
              )}
              {items.map((route) => {
                const isActive = pathname === route.path || pathname.startsWith(`${route.path}/`);
                const Icon = route.icon;
                
                return (
                  <Link 
                    key={route.path} 
                    href={route.path}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all group ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white shadow-[0_4px_15px_rgba(37,99,235,0.4)]' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 min-w-[20px] ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-400'}`} strokeWidth={2} />
                      {isOpen && <span className="text-[15px] font-medium">{route.name}</span>}
                    </div>
                    {isOpen && route.badge ? (
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${route.badge.color}`}>
                        {route.badge.text}
                      </span>
                    ) : isOpen && (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        {isOpen && (
          <div className="p-4 flex-shrink-0 space-y-3 mt-auto border-t border-white/5">
            {user.role === 'billing_staff' ? (
              <div className="rounded-xl bg-[#151C2C] border border-white/5 overflow-hidden flex flex-col p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-3">
                  <Crown className="w-4 h-4 text-purple-500" />
                </div>
                <h4 className="text-[13px] font-bold text-white mb-1">Upgrade Plan</h4>
                <p className="text-[10px] text-slate-400 mb-4 leading-relaxed">Unlock advanced<br/>features and reports.</p>
                <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-medium rounded-lg transition-colors">
                  Upgrade Now
                </button>
              </div>
            ) : user.role === 'ambulance_staff' ? (
              pathname.includes('/billing') ? (
                <div className="rounded-xl bg-[#151C2C] border border-white/5 overflow-hidden flex flex-col p-4 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                      <FileText className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                    <span className="text-[12px] font-bold text-white">Today's Summary</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-[10px] text-slate-500 mb-0.5">Invoices Created</p>
                      <p className="text-[14px] font-bold text-white">18</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 mb-0.5">Payments Received</p>
                      <p className="text-[14px] font-bold text-white">₹ 1,45,230</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 mb-0.5">Pending Amount</p>
                      <p className="text-[14px] font-bold text-white">₹ 68,420</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-[#151C2C] border border-white/5 overflow-hidden flex flex-col p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 rounded bg-green-500/20 flex items-center justify-center border border-green-500/30">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-[12px] font-medium text-white">On Duty</span>
                  </div>
                  
                  {/* Mock Sparkline */}
                  <div className="w-full h-[24px] mb-3 flex items-end justify-between px-1">
                    {[2, 4, 3, 5, 4, 6, 4, 7, 5, 8, 6, 7].map((h, i) => (
                      <div key={i} className="w-[3px] bg-green-500 rounded-t-sm" style={{ height: `${(h/8)*100}%` }}></div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-0.5">Shift Time</p>
                      <p className="text-[11px] font-medium text-slate-200">8:00 AM - 8:00 PM</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-0.5">Time Left</p>
                      <p className="text-[13px] font-bold text-white">09h 35m</p>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#151C2C] border border-white/5 cursor-pointer hover:border-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar || 'https://i.pravatar.cc/150?u=admin'} alt="User" className="w-9 h-9 rounded-full object-cover" />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-white leading-tight">Admin User</span>
                      <span className="text-[11px] text-slate-400">Super Administrator</span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#064e3b]/30 border border-[#059669]/20">
                  <div className="w-6 h-6 rounded-full bg-[#059669]/20 flex items-center justify-center border border-[#059669]/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-medium text-slate-400 leading-tight">System Status</span>
                    <span className="text-[11px] text-[#10b981]">All Systems Operational</span>
                  </div>
                </div>
              </>
            )}

            <div className="pt-2">
              <p className="text-[9px] text-slate-500 leading-tight mb-2">
                © 2025 AI Digital Twin<br/>
                All rights reserved.
              </p>
              <button className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition-colors">
                <div className="w-3.5 h-3.5 rounded-full border border-slate-500 flex items-center justify-center text-[9px]">?</div>
                Help & Support
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
