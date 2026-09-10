import { Role } from '@/types';
import { 
  LayoutDashboard, Users, UserRound, Stethoscope, 
  Building, Database, Settings, Activity, FileText, 
  Pill, Truck, Calendar, Clock, CreditCard, HeartPulse, 
  Clipboard, ActivitySquare, AlertCircle, FileDigit, Heart, Brain, Plane
} from 'lucide-react';

export interface RouteItem {
  name: string;
  path: string;
  icon: any; // Lucide Icon component
  category?: string; // e.g. 'MANAGEMENT', 'OPERATIONS', 'AI & ANALYTICS', 'SYSTEM'
  badge?: {
    text: string;
    color: string;
  };
}

export const getRoleRoutes = (role: Role): RouteItem[] => {
  const common = [
    { name: 'Dashboard', path: `/${role.split('_')[0]}/dashboard`, icon: LayoutDashboard }
  ];

  switch (role) {
    case 'admin':
      return [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        // MANAGEMENT
        { name: 'Users', path: '/admin/users', icon: Users, category: 'MANAGEMENT' },
        { name: 'Doctors', path: '/admin/doctors', icon: Stethoscope, category: 'MANAGEMENT' },
        { name: 'Patients', path: '/admin/patients', icon: UserRound, category: 'MANAGEMENT' },
        { name: 'Staff', path: '/admin/staff', icon: Users, category: 'MANAGEMENT' },
        { name: 'Departments', path: '/admin/departments', icon: Building, category: 'MANAGEMENT' },
        // OPERATIONS
        { name: 'Hospital Resources', path: '/admin/resources', icon: Database, category: 'OPERATIONS' },
        { name: 'Appointments', path: '/admin/appointments', icon: Calendar, category: 'OPERATIONS' },
        { name: 'Ambulances', path: '/admin/ambulances', icon: Truck, category: 'OPERATIONS' },
        // AI & ANALYTICS
        { name: 'AI Models', path: '/admin/ai-models', icon: ActivitySquare, category: 'AI & ANALYTICS' },
        { name: 'Analytics', path: '/admin/analytics', icon: FileDigit, category: 'AI & ANALYTICS' },
        { name: 'Reports', path: '/admin/reports', icon: FileText, category: 'AI & ANALYTICS' },
        // SYSTEM
        { name: 'System Monitoring', path: '/admin/monitoring', icon: Activity, category: 'SYSTEM' },
        { name: 'Settings', path: '/admin/settings', icon: Settings, category: 'SYSTEM' },
      ];
    case 'doctor':
      return [
        { name: 'Dashboard', path: '/doctor/dashboard', icon: LayoutDashboard },
        // MAIN
        { name: 'Appointments', path: '/doctor/appointments', icon: Calendar, category: 'MAIN' },
        { name: 'Patients', path: '/doctor/patients', icon: UserRound, category: 'MAIN' },
        { name: 'Consultations', path: '/doctor/consultations', icon: Stethoscope, category: 'MAIN' },
        { name: 'Prescriptions', path: '/doctor/prescriptions', icon: Pill, category: 'MAIN' },
        // CLINICAL
        { name: 'Medical Records', path: '/doctor/records', icon: FileText, category: 'CLINICAL' },
        { name: 'Lab & Imaging', path: '/doctor/labs', icon: ActivitySquare, category: 'CLINICAL' },
        { name: 'Follow Ups', path: '/doctor/follow-ups', icon: Clock, category: 'CLINICAL' },
        { name: 'Messages', path: '/doctor/messages', icon: FileText, category: 'CLINICAL', badge: { text: '6', color: 'bg-purple-600 text-white' } },
        // TOOLS
        { name: 'Clinical Notes', path: '/doctor/notes', icon: Clipboard, category: 'TOOLS' },
        { name: 'Templates', path: '/doctor/templates', icon: FileDigit, category: 'TOOLS' },
        { name: 'Drug Library', path: '/doctor/drugs', icon: Database, category: 'TOOLS' },
        { name: 'Calendar', path: '/doctor/calendar', icon: Calendar, category: 'TOOLS' },
        // REPORTS
        { name: 'My Reports', path: '/doctor/reports', icon: FileText, category: 'REPORTS' },
        { name: 'Analytics', path: '/doctor/analytics', icon: Activity, category: 'REPORTS' },
        // SETTINGS
        { name: 'Profile', path: '/doctor/profile', icon: UserRound, category: 'SETTINGS' },
        { name: 'Settings', path: '/doctor/settings', icon: Settings, category: 'SETTINGS' },
      ];
    case 'nurse':
      return [
        ...common,
        // PATIENT CARE
        { name: 'My Patients', path: '/nurse/patients', icon: Users, category: 'PATIENT CARE' },
        { name: 'Vitals Monitor', path: '/nurse/vitals', icon: HeartPulse, category: 'PATIENT CARE' },
        { name: 'Tasks & Activities', path: '/nurse/tasks', icon: Clipboard, category: 'PATIENT CARE' },
        { name: 'Medication Administration', path: '/nurse/medication', icon: Pill, category: 'PATIENT CARE' },
        { name: 'Care Plan', path: '/nurse/care-plan', icon: FileText, category: 'PATIENT CARE' },
        // SCHEDULING
        { name: 'My Schedule', path: '/nurse/schedule', icon: Calendar, category: 'SCHEDULING' },
        { name: 'Shift Handover', path: '/nurse/handover', icon: Clock, category: 'SCHEDULING' },
        // COMMUNICATION
        { name: 'Messages', path: '/nurse/messages', icon: FileText, category: 'COMMUNICATION', badge: { text: '6', color: 'bg-purple-600 text-white' } },
        { name: 'Notifications', path: '/nurse/notifications', icon: AlertCircle, category: 'COMMUNICATION', badge: { text: '12', color: 'bg-purple-600 text-white' } },
        // MORE
        { name: 'Reports', path: '/nurse/reports', icon: FileText, category: 'MORE' },
        { name: 'Settings', path: '/nurse/settings', icon: Settings, category: 'MORE' },
      ];
    case 'receptionist':
      return [
        ...common,
        { name: 'Patient Registration', path: '/receptionist/registration', icon: UserRound, category: 'FRONT DESK' },
        { name: 'Appointments', path: '/receptionist/appointments', icon: Calendar, category: 'FRONT DESK' },
        { name: 'Check-In', path: '/receptionist/check-in', icon: Clipboard, category: 'FRONT DESK' },
        { name: 'Queue Management', path: '/receptionist/queue', icon: Users, category: 'FRONT DESK' },
        { name: 'Doctor Availability', path: '/receptionist/doctors', icon: Stethoscope, category: 'FRONT DESK' },
      ];
    case 'lab_technician':
      return [
        ...common,
        { name: 'Test Requests', path: '/lab/requests', icon: FileText, category: 'LAB' },
        { name: 'Samples', path: '/lab/samples', icon: Database, category: 'LAB' },
        { name: 'Test Results', path: '/lab/results', icon: FileDigit, category: 'LAB' },
        { name: 'Reports', path: '/lab/reports', icon: Clipboard, category: 'LAB' },
      ];
    case 'pharmacist':
      return [
        { name: 'Dashboard', path: '/pharmacy/dashboard', icon: LayoutDashboard },
        { name: 'Prescriptions', path: '/pharmacy/prescriptions', icon: FileText, category: 'DISPENSARY' },
        { name: 'Dispensing', path: '/pharmacy/dispensing', icon: Pill, category: 'DISPENSARY' },
        { name: 'Medicine Inventory', path: '/pharmacy/inventory', icon: Database, category: 'INVENTORY' },
        { name: 'Expiry Alerts', path: '/pharmacy/alerts', icon: AlertCircle, category: 'INVENTORY' },
      ];
    case 'ambulance_staff':
      return [
        ...common,
        // OPERATIONS
        { name: 'Emergency Requests', path: '/ambulance/requests', icon: AlertCircle, category: 'OPERATIONS' },
        { name: 'Active Trips', path: '/ambulance/trips', icon: Truck, category: 'OPERATIONS' },
        { name: 'Patient Transport', path: '/ambulance/transport', icon: UserRound, category: 'OPERATIONS' },
        { name: 'Ambulance Status', path: '/ambulance/status', icon: Activity, category: 'OPERATIONS' },
        { name: 'Trip History', path: '/ambulance/history', icon: Clock, category: 'OPERATIONS' },
        // RESOURCES
        { name: 'Ambulance Fleet', path: '/ambulance/fleet', icon: Truck, category: 'RESOURCES' },
        { name: 'Maintenance', path: '/ambulance/maintenance', icon: Settings, category: 'RESOURCES' },
        { name: 'Inventory', path: '/ambulance/inventory', icon: Database, category: 'RESOURCES' },
        // COMMUNICATION
        { name: 'Messages', path: '/ambulance/messages', icon: FileText, category: 'COMMUNICATION', badge: { text: '5', color: 'bg-purple-500 text-white' } },
        { name: 'Notifications', path: '/ambulance/notifications', icon: AlertCircle, category: 'COMMUNICATION', badge: { text: '12', color: 'bg-red-500 text-white' } },
        // PROFILE
        { name: 'Profile', path: '/ambulance/profile', icon: UserRound, category: 'PROFILE' },
        { name: 'Shift Schedule', path: '/ambulance/schedule', icon: Calendar, category: 'PROFILE' },
      ];
    case 'hr_management':
      return [
        ...common,
        { name: 'Employees', path: '/hr/employees', icon: Users, category: 'STAFF' },
        { name: 'Departments', path: '/hr/departments', icon: Building, category: 'STAFF' },
        { name: 'Attendance', path: '/hr/attendance', icon: Clock, category: 'MANAGEMENT' },
        { name: 'Shifts', path: '/hr/shifts', icon: Calendar, category: 'MANAGEMENT' },
        { name: 'Leave Management', path: '/hr/leave', icon: Plane, category: 'MANAGEMENT' },
        { name: 'Workforce Analytics', path: '/hr/analytics', icon: ActivitySquare, category: 'ANALYTICS' },
      ];
    case 'billing_staff':
      return [
        // OVERVIEW
        { name: 'Dashboard', path: '/billing/dashboard', icon: LayoutDashboard, category: 'OVERVIEW' },
        { name: 'Invoices', path: '/billing/invoices', icon: FileText, category: 'OVERVIEW' },
        { name: 'Payments', path: '/billing/payments', icon: CreditCard, category: 'OVERVIEW' },
        { name: 'Estimates', path: '/billing/estimates', icon: FileDigit, category: 'OVERVIEW' },
        { name: 'Credit Notes', path: '/billing/credit-notes', icon: FileText, category: 'OVERVIEW' },
        // MANAGEMENT
        { name: 'Customers', path: '/billing/customers', icon: Users, category: 'MANAGEMENT' },
        { name: 'Items & Services', path: '/billing/items', icon: Database, category: 'MANAGEMENT' },
        { name: 'Payment Methods', path: '/billing/payment-methods', icon: CreditCard, category: 'MANAGEMENT' },
        { name: 'Taxes & Charges', path: '/billing/taxes', icon: ActivitySquare, category: 'MANAGEMENT' },
        // REPORTS
        { name: 'Reports', path: '/billing/reports', icon: FileText, category: 'REPORTS' },
        { name: 'Analytics', path: '/billing/analytics', icon: Activity, category: 'REPORTS' },
        // SETTINGS
        { name: 'Settings', path: '/billing/settings', icon: Settings, category: 'SETTINGS' },
        { name: 'Users & Roles', path: '/billing/users', icon: Users, category: 'SETTINGS' },
      ];
    case 'patient':
      return [
        ...common,
        { name: 'My Appointments', path: '/patient/appointments', icon: Calendar },
        { name: 'My Medications', path: '/patient/medications', icon: Pill },
        { name: 'My Reports', path: '/patient/reports', icon: FileText },
        { name: 'My Vitals', path: '/patient/vitals', icon: HeartPulse },
        { name: 'Messages', path: '/patient/messages', icon: FileText, badge: { text: '6', color: 'bg-[#5b21b6] text-white' } },
        { name: 'Notifications', path: '/patient/notifications', icon: AlertCircle, badge: { text: '12', color: 'bg-[#5b21b6] text-white' } },
        { name: 'Profile & Settings', path: '/patient/settings', icon: UserRound },
        { name: 'Help & Support', path: '/patient/support', icon: ActivitySquare },
      ];
    default:
      return common;
  }
};
