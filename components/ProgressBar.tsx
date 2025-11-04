
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressPercentage = total > 1 ? (current / (total - 1)) * 100 : 0;

  return (
    <div className="w-full bg-gray-700 h-2">
      <div
        className="bg-cyan-500 h-2 transition-all duration-300 ease-in-out"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
