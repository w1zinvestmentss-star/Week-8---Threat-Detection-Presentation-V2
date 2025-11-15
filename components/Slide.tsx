
import React from 'react';
import { SlideContent } from '../types';

interface SlideProps {
  slide: SlideContent;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col h-full p-6 sm:p-10 md:p-12 text-gray-100 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-6 sm:mb-8">{slide.title}</h1>
      <div className="text-lg sm:text-xl md:text-2xl leading-relaxed space-y-6 flex-grow overflow-y-auto">
        {slide.content}
      </div>
    </div>
  );
};

export default Slide;
