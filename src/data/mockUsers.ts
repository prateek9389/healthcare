import { User } from '@/types';

export const mockUsers: User[] = [
  {
    id: 'u_001',
    name: 'Admin User',
    email: 'admin@hospital.com',
    role: 'admin',
    department: 'Administration',
  },
  {
    id: 'u_002',
    name: 'Dr. Sarah Jenkins',
    email: 'doctor@hospital.com',
    role: 'doctor',
    department: 'Cardiology',
  },
  {
    id: 'u_003',
    name: 'Nurse Emily Clark',
    email: 'nurse@hospital.com',
    role: 'nurse',
    department: 'ICU',
  },
  {
    id: 'u_004',
    name: 'Jane Smith',
    email: 'reception@hospital.com',
    role: 'receptionist',
    department: 'Front Desk',
  },
  {
    id: 'u_005',
    name: 'Mark Davis',
    email: 'lab@hospital.com',
    role: 'lab_technician',
    department: 'Pathology',
  },
  {
    id: 'u_006',
    name: 'Alice Johnson',
    email: 'pharmacy@hospital.com',
    role: 'pharmacist',
    department: 'Pharmacy',
  },
  {
    id: 'u_007',
    name: 'Tom Wilson',
    email: 'ambulance@hospital.com',
    role: 'ambulance_staff',
    department: 'Transport',
  },
  {
    id: 'u_008',
    name: 'HR Manager',
    email: 'hr@hospital.com',
    role: 'hr_management',
    department: 'Human Resources',
  },
  {
    id: 'u_009',
    name: 'Billing Admin',
    email: 'billing@hospital.com',
    role: 'billing_staff',
    department: 'Finance',
  },
  {
    id: 'u_010',
    name: 'John Doe',
    email: 'patient@hospital.com',
    role: 'patient',
  },
];
