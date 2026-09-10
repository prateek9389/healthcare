'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Eye, EyeOff, HeartPulse, ShieldAlert } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const success = login(email);
      if (!success) {
        setError('Invalid credentials. Please try again.');
      }
      setIsLoading(false);
    }, 1500); // simulate network delay
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* LEFT SIDE - Branding & Illustration */}
      <div className="hidden lg:flex w-1/2 bg-[var(--color-medical-blue-dark)] text-foreground relative overflow-hidden flex-col justify-between p-12">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-cyan)] blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--color-teal)] blur-[150px]"
          />
        </div>

        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-2 tracking-tight"
          >
            AI-Powered Digital Twin
            <br />
            <span className="text-[var(--color-cyan)]">for Smart Healthcare</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            Monitor. Predict. Simulate. Improve.
          </motion.p>
        </div>

        {/* CSS Illustration Area */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-12">
          {/* Abstract Silhouette & Nodes */}
          <div className="relative w-64 h-96">
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-b from-[var(--color-cyan)]/20 to-transparent rounded-[100px] blur-xl"
            />
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))' }}>
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                d="M 128 50 Q 80 150 40 250" 
                stroke="var(--color-cyan)" 
                strokeWidth="2" 
                fill="transparent" 
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                d="M 128 50 Q 180 150 216 250" 
                stroke="var(--color-teal)" 
                strokeWidth="2" 
                fill="transparent" 
              />
            </svg>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 -left-16 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 text-sm"
            >
              <Brain className="w-4 h-4 text-[var(--color-cyan)]" />
              <span>AI Insights</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-40 -right-12 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 text-sm"
            >
              <HeartPulse className="w-4 h-4 text-[var(--color-status-healthy)]" />
              <span>Digital Twin</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-20 -left-8 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 text-sm"
            >
              <Activity className="w-4 h-4 text-[var(--color-teal)]" />
              <span>Predictive Care</span>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1 rounded-full ${i === 1 ? 'w-8 bg-[var(--color-cyan)]' : 'w-2 bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[var(--background)]">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md card p-8"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">Welcome Back</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Sign in to access your healthcare workspace.</p>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
              <ShieldAlert className="w-4 h-4" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--foreground)]">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] transition-shadow"
                placeholder="doctor@hospital.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--foreground)]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] transition-shadow pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-[var(--color-cyan)] focus:ring-[var(--color-cyan)]" />
                <span className="text-gray-600 dark:text-gray-300">Remember Me</span>
              </label>
              <a href="#" className="text-[var(--color-cyan)] hover:underline font-medium">Forgot Password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 rounded-lg bg-[var(--color-medical-blue)] hover:bg-[var(--color-medical-blue-light)] text-foreground font-medium transition-colors flex items-center justify-center gap-2 mt-4"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
            <p className="text-xs text-center text-gray-500">
              Demo credentials: <br/>
              admin@hospital.com, doctor@hospital.com, patient@hospital.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
