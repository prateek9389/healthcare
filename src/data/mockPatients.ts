import { Patient } from '@/types';

export const mockPatients: Patient[] = [
  {
    id: 'p_001',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodGroup: 'O+',
    contact: '+1 234-567-8900',
    emergencyContact: 'Jane Doe (+1 234-567-8901)',
    vitals: {
      heartRate: 78,
      bloodPressure: '125/82',
      oxygenLevel: 98,
      temperature: 98.6,
      bloodSugar: 105,
      weight: 85,
      height: 175,
      bmi: 27.8,
    },
    organs: [
      { name: 'Heart', status: 'Healthy', riskLevel: 15, insight: 'Normal rhythm, slight elevation in BP', trend: 'stable' },
      { name: 'Lungs', status: 'Healthy', riskLevel: 5, insight: 'Clear, good oxygenation', trend: 'stable' },
      { name: 'Brain', status: 'Healthy', riskLevel: 2, insight: 'Normal function', trend: 'stable' },
      { name: 'Kidneys', status: 'Warning', riskLevel: 45, insight: 'Mildly elevated creatinine detected previously', trend: 'declining' },
      { name: 'Liver', status: 'Moderate Risk', riskLevel: 60, insight: 'Fatty liver indicators present', trend: 'declining' },
    ],
    aiInsights: {
      overallHealthScore: 78,
      riskLevel: 'Warning',
      heartDiseaseRisk: 22,
      diabetesRisk: 35,
      kidneyDiseaseRisk: 40,
      recommendations: [
        'Increase cardiovascular exercise to 30 mins daily',
        'Reduce sodium intake to improve blood pressure',
        'Schedule follow-up for kidney function tests'
      ]
    },
    allergies: ['Penicillin', 'Peanuts'],
    diagnosis: ['Hypertension (Stage 1)', 'NAFLD'],
  },
  {
    id: 'p_002',
    name: 'Emily Chen',
    age: 32,
    gender: 'Female',
    bloodGroup: 'A-',
    contact: '+1 987-654-3210',
    emergencyContact: 'Michael Chen (+1 987-654-3211)',
    vitals: {
      heartRate: 65,
      bloodPressure: '110/70',
      oxygenLevel: 99,
      temperature: 98.2,
      bloodSugar: 90,
      weight: 62,
      height: 165,
      bmi: 22.8,
    },
    organs: [
      { name: 'Heart', status: 'Healthy', riskLevel: 5, insight: 'Excellent cardiovascular health', trend: 'stable' },
      { name: 'Lungs', status: 'Healthy', riskLevel: 2, insight: 'Perfect oxygenation', trend: 'stable' },
      { name: 'Brain', status: 'Healthy', riskLevel: 1, insight: 'Normal function', trend: 'stable' },
      { name: 'Kidneys', status: 'Healthy', riskLevel: 5, insight: 'Normal filtration rate', trend: 'stable' },
      { name: 'Liver', status: 'Healthy', riskLevel: 3, insight: 'Normal enzyme levels', trend: 'stable' },
    ],
    aiInsights: {
      overallHealthScore: 95,
      riskLevel: 'Healthy',
      heartDiseaseRisk: 5,
      diabetesRisk: 8,
      kidneyDiseaseRisk: 2,
      recommendations: [
        'Maintain current diet and exercise routine',
        'Annual check-up recommended'
      ]
    },
    allergies: ['None'],
    diagnosis: ['Healthy'],
  }
];
