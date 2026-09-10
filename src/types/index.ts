export type Role =
  | 'admin'
  | 'doctor'
  | 'nurse'
  | 'receptionist'
  | 'lab_technician'
  | 'pharmacist'
  | 'ambulance_staff'
  | 'hr_management'
  | 'billing_staff'
  | 'patient';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  department?: string;
}

export type OrganName = 'Heart' | 'Lungs' | 'Brain' | 'Kidneys' | 'Liver';
export type HealthStatus = 'Healthy' | 'Warning' | 'Moderate Risk' | 'Critical';

export interface Vitals {
  heartRate: number; // bpm
  bloodPressure: string; // e.g., "120/80"
  oxygenLevel: number; // %
  temperature: number; // °F or °C
  bloodSugar: number; // mg/dL
  weight: number; // kg
  height: number; // cm
  bmi: number;
}

export interface OrganHealth {
  name: OrganName;
  status: HealthStatus;
  riskLevel: number; // 0-100%
  insight: string;
  trend: 'improving' | 'stable' | 'declining';
}

export interface AIInsights {
  overallHealthScore: number; // 0-100
  riskLevel: HealthStatus;
  heartDiseaseRisk: number; // %
  diabetesRisk: number; // %
  kidneyDiseaseRisk: number; // %
  recommendations: string[];
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodGroup: string;
  contact: string;
  emergencyContact: string;
  vitals: Vitals;
  organs: OrganHealth[];
  aiInsights: AIInsights;
  // History and other info
  allergies: string[];
  diagnosis: string[];
}
