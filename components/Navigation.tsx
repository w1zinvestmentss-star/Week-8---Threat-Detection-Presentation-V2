
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ListBulletIcon } from './icons';

interface NavigationProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onToggleGoTo: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ current, total, onNext, onPrev, onToggleGoTo }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800/50 border-t border-gray-700">
      <span className="text-gray-400 text-sm">{`Slide ${current + 1} of ${total}`}</span>
      <div className="flex space-x-2">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="p-2 rounded-full text-white bg-gray-700 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={onToggleGoTo}
          className="p-2 rounded-full text-white bg-gray-700 hover:bg-cyan-600 transition-colors"
          aria-label="Go to slide"
        >
          <ListBulletIcon className="h-6 w-6" />
        </button>
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="p-2 rounded-full text-white bg-gray-700 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;