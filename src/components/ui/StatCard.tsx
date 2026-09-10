import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export const StatCard = ({ title, value, icon, trend }: StatCardProps) => {
  return (
    <div className="card p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-base font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className="p-2 rounded-lg bg-[var(--color-cyan)]/10 text-[var(--color-cyan)]">
          {icon}
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-[var(--foreground)]">{value}</p>
        {trend && (
          <p className={`text-base mt-2 ${trend.positive ? 'text-[var(--color-status-healthy)]' : 'text-[var(--color-status-critical)]'}`}>
            {trend.positive ? '↑' : '↓'} {trend.value}
          </p>
        )}
      </div>
    </div>
  );
};
