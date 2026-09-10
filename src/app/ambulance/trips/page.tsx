'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Activity, MapPin, Truck, Phone, Navigation, Share2, Mic, Settings, Search, Plus, 
  MoreVertical, Clock, Gauge, Car, Heart, Droplets, CheckCircle2, ChevronRight, Users
} from 'lucide-react';

export default function ActiveTripLivePage() {
  const stats = [
    { title: 'Distance to Hospital', val: '3.2 km', sub: 'ETA: 8 mins', subColor: 'text-green-500', icon: MapPin, color: 'text-red-500', bg: 'bg-red-500/10' },
    { title: 'Trip Duration', val: '24m 15s', sub: 'Started 10:24 AM', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Avg Speed', val: '48 km/h', sub: 'Live Speed', icon: Gauge, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'Traffic Status', val: 'Moderate', sub: 'Smooth Traffic', subColor: 'text-green-500', icon: Car, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'Heart Rate', val: '98 bpm', sub: 'Patient Stable', subColor: 'text-green-500', icon: Heart, color: 'text-red-500', bg: 'bg-red-500/10' },
    { title: 'SpO2 Level', val: '97%', sub: 'Normal', subColor: 'text-green-500', icon: Droplets, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  const tripDetails = [
    { label: 'Ambulance', val: 'AMB-102', badge: 'On Duty', badgeColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { label: 'Driver', val: 'Vikas Sharma', icon: Phone },
    { label: 'EMT', val: 'Pooja Mehta', icon: Phone },
    { label: 'Start Time', val: '10:24 AM, May 21, 2025' },
    { label: 'Priority', val: 'High Priority', badgeColor: 'text-red-500 bg-red-500/10 border-transparent text-xs px-2 py-0.5 rounded' },
    { label: 'Trip Type', val: 'Emergency' },
    { label: 'Assigned By', val: 'Control Center' },
    { label: 'Last Update', val: '1 min ago' },
  ];

  const patientInfo = [
    { label: 'Name', val: 'Rajesh Kumar' },
    { label: 'Age', val: '58 Years' },
    { label: 'Contact', val: '+91 98765 43210' },
    { label: 'Condition', val: 'Chest Pain, Breathing Difficulty' },
    { label: 'Patient ID', val: 'PAT-78945' },
  ];

  const timeline = [
    { time: '10:24 AM', title: 'Trip Started', desc: 'Departed from Connaught Place', status: 'Completed', current: false },
    { time: '10:25 AM', title: 'Patient Picked Up', desc: 'Patient successfully picked up', status: 'Completed', current: false },
    { time: '10:26 AM', title: 'Enroute to Hospital', desc: 'On the way to AIIMS Hospital', status: 'Current', current: true },
    { time: '10:32 AM', title: 'Expected Arrival', desc: 'Estimated arrival at hospital', status: 'Pending', current: false },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-red-500/20 text-red-500 animate-pulse">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-foreground tracking-wide">Active Trip</h1>
              <span className="px-2 py-0.5 rounded-full text-xs font-medium border text-green-500 bg-green-500/10 border-green-500/20 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> On The Way
              </span>
            </div>
            <p className="text-sm text-foreground mt-0.5">Enroute to hospital with patient</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground bg-card border border-border-main px-3 py-1.5 rounded-lg">
            Trip ID: TRIP-1256
          </span>
          <button className="p-1.5 bg-main border border-white/5 rounded-lg text-foreground hover:text-foreground transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
          <button className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors">
            End Trip
          </button>
        </div>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        {stats.map((stat, i) => (
          <div key={i} className="card p-4 flex flex-col justify-between group">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs text-foreground leading-tight">{stat.title}</p>
              <div className={`p-1.5 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-foreground leading-none mb-1">{stat.val}</p>
              <p className={`text-xs ${stat.subColor || 'text-foreground'}`}>{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        
        {/* Left Col: Live Map & Locations */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="card p-0 overflow-hidden relative h-[420px] bg-white dark:bg-[#0a0f1a] border-border-main flex flex-col">
            <div className="absolute top-4 left-4 z-10 flex items-center justify-between w-[calc(100%-2rem)]">
              <h2 className="text-base font-medium text-foreground drop-shadow-md">Live Route Tracking</h2>
              <span className="px-2 py-0.5 rounded-full text-xs font-medium border text-green-500 bg-green-500/10 border-green-500/20 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Live
              </span>
            </div>

            {/* Map Mockup Background */}
            <div className="flex-1 relative w-full h-full bg-white dark:bg-[#0a0f1a]">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-60 pointer-events-none" style={{ backgroundImage: 'url("/images/map-bg.jpg")', filter: 'grayscale(100%)' }}></div>

              {/* Neighborhood Labels */}
              <span className="absolute top-[20%] left-[20%] text-[8px] text-foreground font-bold tracking-widest uppercase">CONNAUGHT PLACE</span>
              <span className="absolute top-[35%] left-[45%] text-[8px] text-foreground font-bold tracking-widest uppercase">INDIA GATE</span>
              <span className="absolute bottom-[40%] left-[40%] text-[8px] text-foreground font-bold tracking-widest uppercase">LAJPAT NAGAR</span>
              <span className="absolute bottom-[45%] right-[20%] text-[8px] text-foreground font-bold tracking-widest uppercase">OKHLA</span>

              {/* Main Route SVG */}
              <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="60%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
                {/* Route Path */}
                <path d="M 20,40 L 35,45 L 40,55 L 60,45 L 75,35" fill="none" stroke="url(#routeGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Nodes and Ambulance */}
              <div className="absolute top-[40%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-[35%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-5 h-6 bg-red-500 rounded-t-full rounded-b-md flex items-center justify-center border border-white/20 shadow-lg relative">
                  <span className="text-foreground text-xs font-bold absolute -top-1">+</span>
                </div>
              </div>

              {/* Ambulance Moving */}
              <div className="absolute top-[48%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="px-2 py-1 bg-white rounded flex items-center justify-center border border-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.3)] shadow-xl rotate-[15deg]">
                  <Truck className="w-3 h-3 text-red-500" />
                  <span className="text-[7px] text-red-500 font-bold ml-0.5">+</span>
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute left-4 bottom-4 flex flex-col gap-1 z-10">
              <button className="w-6 h-6 bg-main/80 border border-border-main rounded flex items-center justify-center text-foreground hover:bg-main"><span className="text-lg leading-none">+</span></button>
              <button className="w-6 h-6 bg-main/80 border border-border-main rounded flex items-center justify-center text-foreground hover:bg-main"><span className="text-lg leading-none">-</span></button>
              <button className="w-6 h-6 bg-main/80 border border-border-main rounded flex items-center justify-center text-foreground hover:bg-main mt-1"><Settings className="w-3 h-3" /></button>
            </div>
          </div>

          {/* Locations Bar */}
          <div className="card p-3 border-border-main grid grid-cols-3 gap-2 divide-x divide-border-main">
            <div className="pl-1">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <p className="text-xs text-foreground">Pickup Location</p>
              </div>
              <p className="text-sm font-medium text-foreground truncate">Connaught Place, Delhi</p>
              <p className="text-xs text-foreground mt-0.5">10:24 AM</p>
            </div>
            <div className="pl-3">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <p className="text-xs text-foreground">Destination Hospital</p>
              </div>
              <p className="text-sm font-medium text-foreground truncate">AIIMS Hospital, Delhi</p>
              <p className="text-xs text-green-500 font-medium mt-0.5">10:32 AM (ETA)</p>
            </div>
            <div className="pl-3">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <p className="text-xs text-foreground">Current Location</p>
              </div>
              <p className="text-sm font-medium text-foreground truncate">Barakhamba Rd, Delhi</p>
              <p className="text-xs text-green-500 font-medium mt-0.5">Live Updated</p>
            </div>
          </div>
        </div>

        {/* Middle Col: Trip Details & Vitals */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="card p-4 border-border-main flex-1 flex flex-col">
            <h2 className="text-base font-medium text-foreground mb-4">Trip Details</h2>
            <div className="flex flex-col gap-3 flex-1">
              {tripDetails.map((det, i) => (
                <div key={i} className="flex justify-between items-center border-b border-border-main pb-2 last:border-0 last:pb-0">
                  <span className="text-xs text-foreground">{det.label}</span>
                  <div className="flex items-center gap-2">
                    {det.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${det.badgeColor}`}>{det.badge}</span>
                    )}
                    {det.label === 'Priority' ? (
                      <span className={det.badgeColor}>{det.val}</span>
                    ) : (
                      <span className="text-sm text-foreground font-medium flex items-center gap-1">
                        {det.val}
                        {det.icon && <button className="p-1 bg-main rounded ml-1 text-foreground hover:text-foreground"><det.icon className="w-3 h-3" /></button>}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-4 border-border-main flex flex-col h-[140px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium text-foreground">Vitals Monitor</h2>
              <span className="px-2 py-0.5 rounded-full text-xs font-medium border text-green-500 bg-green-500/10 border-green-500/20 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Live
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-foreground mb-0.5">Heart Rate</span>
                <div className="flex items-end gap-1 mb-0.5">
                  <Heart className="w-3.5 h-3.5 text-red-500 mb-0.5" />
                  <span className="text-xl font-bold text-foreground leading-none">98</span>
                  <span className="text-xs text-foreground mb-0.5">bpm</span>
                </div>
                <span className="text-xs text-green-500">Normal</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground mb-0.5">Blood Pressure</span>
                <div className="flex items-end gap-1 mb-0.5">
                  <Activity className="w-3.5 h-3.5 text-green-500 mb-0.5" />
                  <span className="text-xl font-bold text-foreground leading-none">120/80</span>
                  <span className="text-xs text-foreground mb-0.5">mmHg</span>
                </div>
                <span className="text-xs text-green-500">Normal</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground mb-0.5">SpO2 Level</span>
                <div className="flex items-end gap-1 mb-0.5">
                  <Droplets className="w-3.5 h-3.5 text-blue-500 mb-0.5" />
                  <span className="text-xl font-bold text-foreground leading-none">97%</span>
                </div>
                <span className="text-xs text-green-500">Normal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Patient Info & Timeline */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <div className="card p-4 border-border-main flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <Users className="w-3 h-3 text-purple-400" />
                </div>
                <h2 className="text-base font-medium text-foreground">Patient Information</h2>
              </div>
              <span className="text-xs text-foreground">Male, 58 Years</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {patientInfo.map((info, i) => (
                <div key={i} className="flex justify-between items-start">
                  <span className="text-xs text-foreground w-[60px] shrink-0">{info.label}</span>
                  <span className="text-sm text-foreground font-medium text-right">{info.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-4 border-border-main flex-1 flex flex-col">
            <h2 className="text-base font-medium text-foreground mb-4">Trip Timeline</h2>
            
            <div className="flex flex-col gap-0 flex-1 ml-2">
              {timeline.map((step, i) => (
                <div key={i} className="flex gap-4 relative">
                  {/* Line */}
                  {i !== timeline.length - 1 && (
                    <div className={`absolute top-5 left-1 w-px h-full ${step.status === 'Completed' ? 'bg-green-500/30' : step.current ? 'bg-blue-500/30' : 'bg-slate-700/50'}`}></div>
                  )}
                  {/* Dot */}
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 z-10 border-2 border-[#0B1120] relative ${
                    step.status === 'Completed' ? 'bg-green-500' : step.current ? 'bg-blue-500' : 'bg-slate-600'
                  }`}>
                    {step.current && <div className="absolute -inset-1 rounded-full border border-blue-500 animate-ping"></div>}
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-1 pb-4 w-full">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className={`text-xs font-medium ${step.current ? 'text-blue-500' : step.status === 'Completed' ? 'text-foreground' : 'text-foreground'}`}>{step.title}</span>
                        <span className="text-xs text-foreground">{step.desc}</span>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {step.status === 'Completed' && <span className="text-xs text-green-500">Completed</span>}
                        {step.current && <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-medium border border-blue-500/30">Current</span>}
                        {step.status === 'Pending' && <span className="text-xs text-foreground">Pending</span>}
                        <span className="text-[8px] text-foreground">{step.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* Route Information */}
        <div className="card p-4 border-border-main flex flex-col">
          <h2 className="text-sm font-medium text-foreground mb-3">Route Information</h2>
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-foreground">Best Route</span>
              <span className="text-xs text-blue-400 font-medium flex items-center gap-1">Via Barakhamba Rd <ChevronRight className="w-3 h-3" /></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-foreground">Distance</span>
              <span className="text-sm text-foreground font-medium">3.2 km</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-foreground">ETA</span>
              <span className="text-sm text-foreground font-medium">8 mins (10:32 AM)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-foreground">Traffic</span>
              <span className="text-xs text-orange-400 font-medium px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 flex items-center gap-1">Moderate <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div></span>
            </div>
          </div>
          <button className="w-full mt-4 py-2 text-center text-sm text-foreground bg-main hover:bg-[#7caaaf] dark:hover:bg-white/5 rounded-lg transition-colors border border-border-main font-medium">
            View Alternative Routes
          </button>
        </div>

        {/* Trip Notes */}
        <div className="card p-4 border-border-main flex flex-col">
          <h2 className="text-sm font-medium text-foreground mb-3">Trip Notes</h2>
          <div className="flex-1 text-sm text-foreground leading-relaxed bg-main rounded-lg p-3 border border-border-main">
            Patient complained of sudden chest pain while at work.<br/>
            Given aspirin 300mg. Vitals are stable.
          </div>
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-border-main text-xs text-foreground">
            <span>Logged by Pooja Mehta (EMT)</span>
            <span>10:25 AM</span>
          </div>
        </div>

        {/* Voice Communication */}
        <div className="card p-4 border-border-main flex flex-col">
          <h2 className="text-sm font-medium text-foreground mb-3">Voice Communication</h2>
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-foreground">EMT (Pooja Mehta)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-4 flex items-center justify-between px-1">
                  {/* Mock waveform */}
                  {[6,12,4,8,14,5,10,2,16,11,7,15,3,9,13,6,12,5,10,14,7,11,8,4,9].map((h, i) => (
                    <div key={i} className="w-1 bg-red-500/60 rounded-full" style={{ height: `${h}px` }}></div>
                  ))}
                </div>
                <span className="text-xs text-foreground shrink-0">0:08</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-1 mt-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-foreground">Control Center</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-4 flex items-center justify-between px-1">
                  {/* Mock waveform */}
                  {[4,9,14,5,11,7,16,3,10,15,6,12,8,2,13,9,5,11,14,6,12,8,4,15,7].map((h, i) => (
                    <div key={i} className="w-1 bg-blue-500/60 rounded-full" style={{ height: `${h}px` }}></div>
                  ))}
                </div>
                <span className="text-xs text-foreground shrink-0">0:12</span>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 py-2 text-center text-sm text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium flex items-center justify-center gap-1.5">
            <Mic className="w-3.5 h-3.5" /> Push to Talk
          </button>
        </div>

        {/* Quick Actions */}
        <div className="card p-4 border-border-main flex flex-col justify-center gap-3">
          <p className="text-sm font-medium text-foreground mb-1">Quick Actions</p>
          <div className="grid grid-cols-2 gap-2 h-full">
            <button className="flex flex-col items-center justify-center p-2 rounded-lg border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 transition-all gap-1.5 h-full">
              <Phone className="w-4 h-4 text-red-500" />
              <span className="text-xs font-medium text-red-500 text-center leading-tight">Emergency<br/>Call</span>
            </button>
            <button className="flex flex-col items-center justify-center p-2 rounded-lg border border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 transition-all gap-1.5 h-full">
              <Activity className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-medium text-blue-500 text-center leading-tight">Update<br/>Status</span>
            </button>
            <button className="flex flex-col items-center justify-center p-2 rounded-lg border border-green-500/20 bg-green-500/10 hover:bg-green-500/20 transition-all gap-1.5 h-full">
              <Navigation className="w-4 h-4 text-green-500" />
              <span className="text-xs font-medium text-green-500 text-center leading-tight">Navigate</span>
            </button>
            <button className="flex flex-col items-center justify-center p-2 rounded-lg border border-purple-500/20 bg-purple-500/10 hover:bg-purple-500/20 transition-all gap-1.5 h-full">
              <Share2 className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-medium text-purple-500 text-center leading-tight">Share<br/>Location</span>
            </button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
