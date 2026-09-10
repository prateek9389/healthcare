'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Patient, Vitals } from '@/types';
import { mockPatients } from '@/data/mockPatients';

interface DigitalTwinContextType {
  patients: Patient[];
  selectedPatientId: string | null;
  selectPatient: (id: string) => void;
  updateVitals: (id: string, newVitals: Partial<Vitals>) => void;
  getSelectedPatient: () => Patient | undefined;
}

const DigitalTwinContext = createContext<DigitalTwinContextType | undefined>(undefined);

export const DigitalTwinProvider = ({ children }: { children: React.ReactNode }) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  useEffect(() => {
    // Load from localStorage if available, otherwise use mock data
    const savedPatients = localStorage.getItem('patientsData');
    if (savedPatients) {
      setPatients(JSON.parse(savedPatients));
    } else {
      setPatients(mockPatients);
      localStorage.setItem('patientsData', JSON.stringify(mockPatients));
    }
  }, []);

  const selectPatient = (id: string) => {
    setSelectedPatientId(id);
  };

  const getSelectedPatient = () => {
    return patients.find((p) => p.id === selectedPatientId);
  };

  const updateVitals = (id: string, newVitals: Partial<Vitals>) => {
    setPatients((prev) => {
      const updated = prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            vitals: { ...p.vitals, ...newVitals },
          };
        }
        return p;
      });
      localStorage.setItem('patientsData', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <DigitalTwinContext.Provider
      value={{
        patients,
        selectedPatientId,
        selectPatient,
        updateVitals,
        getSelectedPatient,
      }}
    >
      {children}
    </DigitalTwinContext.Provider>
  );
};

export const useDigitalTwin = () => {
  const context = useContext(DigitalTwinContext);
  if (context === undefined) {
    throw new Error('useDigitalTwin must be used within a DigitalTwinProvider');
  }
  return context;
};
