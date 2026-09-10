import React from 'react';

type StatusType = 'Healthy' | 'Warning' | 'Moderate Risk' | 'Critical' | 'Success' | 'Pending';

interface StatusBadgeProps {
  status: StatusType | string;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  let colorClass = 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  
  if (['Healthy', 'Success', 'Completed'].includes(status)) {
    colorClass = 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800';
  } else if (['Warning', 'Pending'].includes(status)) {
    colorClass = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800';
  } else if (status === 'Moderate Risk') {
    colorClass = 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800';
  } else if (status === 'Critical') {
    colorClass = 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800';
  }

  return (
    <span className={`px-2.5 py-1 text-base font-medium rounded-full ${colorClass}`}>
      {status}
    </span>
  );
};
