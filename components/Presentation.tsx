
import React, { useState, useEffect, useCallback, useRef, FormEvent } from 'react';
import { SlideContent } from '../types';
import Slide from './Slide';
import ProgressBar from './ProgressBar';
import Navigation from './Navigation';
import { XMarkIcon } from './icons';

interface PresentationProps {
  slides: SlideContent[];
}

const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGoToOpen, setIsGoToOpen] = useState(false);
  const [goToSlideNumber, setGoToSlideNumber] = useState('');
  const goToInputRef = useRef<HTMLInputElement>(null);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const toggleGoTo = () => setIsGoToOpen(prev => !prev);
  
  const handleSelectSlide = (index: number) => {
    setCurrentSlide(index);
    setIsGoToOpen(false);
    setGoToSlideNumber('');
  };

  const handleGoToSubmit = (e: FormEvent) => {
    e.preventDefault();
    const slideNum = parseInt(goToSlideNumber, 10);
    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= slides.length) {
      handleSelectSlide(slideNum - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isGoToOpen) {
        setIsGoToOpen(false);
        return;
      }
      
      if (isGoToOpen) return;
      
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev, isGoToOpen]);

  useEffect(() => {
    if (isGoToOpen) {
      setTimeout(() => goToInputRef.current?.focus(), 100);
    }
  }, [isGoToOpen]);

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900 shadow-2xl overflow-hidden">
      <div className="flex-grow relative">
        <Slide key={currentSlide} slide={slides[currentSlide]} />
      </div>
      <div className="flex-shrink-0">
        <ProgressBar current={currentSlide} total={slides.length} />
        <Navigation
          current={currentSlide}
          total={slides.length}
          onNext={handleNext}
          onPrev={handlePrev}
          onToggleGoTo={toggleGoTo}
        />
      </div>
      {isGoToOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fade-in"
          onClick={toggleGoTo}
        >
          <div 
            className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col animate-slide-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold text-cyan-400">Go to Slide</h2>
              <button onClick={toggleGoTo} className="p-1 rounded-full hover:bg-gray-700">
                <XMarkIcon className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            <div className="p-4 border-b border-gray-700">
              <form onSubmit={handleGoToSubmit} className="flex space-x-2">
                <input
                  ref={goToInputRef}
                  type="number"
                  value={goToSlideNumber}
                  onChange={(e) => setGoToSlideNumber(e.target.value)}
                  placeholder={`Enter slide number (1-${slides.length})`}
                  min="1"
                  max={slides.length}
                  className="w-full bg-gray-900 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  aria-label="Slide number"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                  aria-label="Go to specified slide number"
                >
                  Go
                </button>
              </form>
            </div>
            <div className="overflow-y-auto p-4">
              <ul className="space-y-2">
                {slides.map((slide, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleSelectSlide(index)}
                      className={`w-full text-left p-3 rounded-md transition-colors ${
                        index === currentSlide
                          ? 'bg-cyan-600 text-white font-bold'
                          : 'hover:bg-gray-700'
                      }`}
                    >
                      <span className="font-mono mr-3 text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                      {slide.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;
