'use client';

import React, { useState } from 'react';
import { useDigitalTwin } from '@/context/DigitalTwinContext';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/StatCard';
import { Activity, BrainCircuit, Play, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SimulationPage() {
  const { patients } = useDigitalTwin();
  const patient = patients[0]; 
  
  const [simulationState, setSimulationState] = useState({
    weight: patient?.vitals.weight || 85,
    exerciseMins: 0,
    systolicBP: parseInt(patient?.vitals.bloodPressure.split('/')[0] || '120'),
    dietScore: 50 // 0-100 scale
  });

  const [hasRun, setHasRun] = useState(false);
  
  const [results, setResults] = useState({
    healthScore: patient?.aiInsights.overallHealthScore || 70,
    heartRisk: patient?.aiInsights.heartDiseaseRisk || 20,
    diabetesRisk: patient?.aiInsights.diabetesRisk || 30,
  });

  if (!patient) return null;

  const runSimulation = () => {
    // Very basic mock simulation logic
    const weightDiff = simulationState.weight - patient.vitals.weight;
    const exerciseBonus = simulationState.exerciseMins / 30; // Every 30 mins helps
    const bpDiff = simulationState.systolicBP - parseInt(patient.vitals.bloodPressure.split('/')[0]);
    const dietBonus = (simulationState.dietScore - 50) / 10;

    const scoreChange = (weightDiff * -0.5) + (exerciseBonus * 2) + (bpDiff * -0.2) + dietBonus;
    
    setResults({
      healthScore: Math.min(100, Math.max(0, Math.round(patient.aiInsights.overallHealthScore + scoreChange))),
      heartRisk: Math.max(0, Math.round(patient.aiInsights.heartDiseaseRisk + (weightDiff * 0.2) + (bpDiff * 0.5) - exerciseBonus)),
      diabetesRisk: Math.max(0, Math.round(patient.aiInsights.diabetesRisk + (weightDiff * 0.5) - dietBonus * 2)),
    });
    setHasRun(true);
  };

  const resetSimulation = () => {
    setSimulationState({
      weight: patient.vitals.weight,
      exerciseMins: 0,
      systolicBP: parseInt(patient.vitals.bloodPressure.split('/')[0]),
      dietScore: 50
    });
    setHasRun(false);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--foreground)]">Health Simulation (What-If)</h1>
        <p className="text-gray-500">Temporarily change lifestyle factors to see AI predicted outcomes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Simulation Controls */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[var(--color-cyan)]" />
            Adjust Variables
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium">Weight (kg)</label>
                <span className="text-sm font-bold text-[var(--color-cyan)]">{simulationState.weight} kg</span>
              </div>
              <input 
                type="range" 
                min="40" max="150" 
                value={simulationState.weight}
                onChange={(e) => setSimulationState({...simulationState, weight: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-cyan)]"
              />
              <p className="text-xs text-gray-500 mt-1">Current: {patient.vitals.weight} kg</p>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium">Daily Exercise (mins)</label>
                <span className="text-sm font-bold text-[var(--color-cyan)]">{simulationState.exerciseMins} mins</span>
              </div>
              <input 
                type="range" 
                min="0" max="120" step="10"
                value={simulationState.exerciseMins}
                onChange={(e) => setSimulationState({...simulationState, exerciseMins: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-cyan)]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium">Systolic Blood Pressure</label>
                <span className="text-sm font-bold text-[var(--color-cyan)]">{simulationState.systolicBP} mmHg</span>
              </div>
              <input 
                type="range" 
                min="90" max="180" 
                value={simulationState.systolicBP}
                onChange={(e) => setSimulationState({...simulationState, systolicBP: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-cyan)]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium">Diet Quality Score</label>
                <span className="text-sm font-bold text-[var(--color-cyan)]">{simulationState.dietScore}/100</span>
              </div>
              <input 
                type="range" 
                min="0" max="100" 
                value={simulationState.dietScore}
                onChange={(e) => setSimulationState({...simulationState, dietScore: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-cyan)]"
              />
            </div>

            <div className="flex gap-4 pt-4 border-t border-[var(--border-color)]">
              <button 
                onClick={runSimulation}
                className="flex-1 bg-[var(--color-medical-blue)] hover:bg-[var(--color-medical-blue-light)] text-foreground py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" /> Run Simulation
              </button>
              <button 
                onClick={resetSimulation}
                className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="card p-6 relative overflow-hidden">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-[var(--color-cyan)]" />
            Predicted Outcomes
          </h2>
          
          {!hasRun && (
            <div className="absolute inset-0 z-10 backdrop-blur-sm bg-[var(--card-bg)]/50 flex flex-col items-center justify-center pt-12">
              <p className="text-gray-500 font-medium">Adjust variables and click Run Simulation</p>
            </div>
          )}

          <div className="space-y-6 relative z-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--hover-bg)]">
                <p className="text-sm text-gray-500 mb-1">Current Health Score</p>
                <p className="text-2xl font-bold">{patient.aiInsights.overallHealthScore}</p>
              </div>
              <motion.div 
                animate={hasRun ? { scale: [1, 1.05, 1], backgroundColor: ['var(--hover-bg)', 'rgba(6, 182, 212, 0.1)', 'var(--hover-bg)'] } : {}}
                className="p-4 rounded-xl border border-[var(--color-cyan)]/30 bg-[var(--hover-bg)]"
              >
                <p className="text-sm text-gray-500 mb-1 text-[var(--color-cyan)]">Predicted Score</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-bold text-[var(--color-cyan)]">{results.healthScore}</p>
                  {hasRun && (
                    <span className={`text-sm font-medium pb-1 ${results.healthScore > patient.aiInsights.overallHealthScore ? 'text-green-500' : 'text-red-500'}`}>
                      {results.healthScore > patient.aiInsights.overallHealthScore ? '↑' : '↓'} 
                      {Math.abs(results.healthScore - patient.aiInsights.overallHealthScore)}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
              <h3 className="font-medium">Predicted Risk Changes</h3>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--hover-bg)]">
                <span className="text-sm">Heart Disease Risk</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 line-through">{patient.aiInsights.heartDiseaseRisk}%</span>
                  <span className={`font-bold ${hasRun ? (results.heartRisk < patient.aiInsights.heartDiseaseRisk ? 'text-green-500' : 'text-red-500') : ''}`}>
                    {results.heartRisk}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--hover-bg)]">
                <span className="text-sm">Diabetes Risk</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 line-through">{patient.aiInsights.diabetesRisk}%</span>
                  <span className={`font-bold ${hasRun ? (results.diabetesRisk < patient.aiInsights.diabetesRisk ? 'text-green-500' : 'text-red-500') : ''}`}>
                    {results.diabetesRisk}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
