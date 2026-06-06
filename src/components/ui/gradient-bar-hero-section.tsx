import React, { useEffect, useState } from 'react';
import { SignupDialog, type SignupMode } from '@/components/ui/signup-dialog';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center">
        <span className="text-white font-bold text-xl tracking-tighter font-space">
          Tavo
        </span>
      </div>
    </nav>
  );
};

const GradientBars: React.FC = () => {
  const [numBars, setNumBars] = useState(20);

  useEffect(() => {
    const updateBars = () => {
      setNumBars(window.innerWidth < 640 ? 12 : 20);
    };
    updateBars();
    window.addEventListener('resize', updateBars);
    return () => window.removeEventListener('resize', updateBars);
  }, []);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;
    
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    
    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div 
        className="flex h-full"
        style={{
          width: '100%',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: '1 1 0%',
                height: '100%',
                background: 'linear-gradient(to top, rgb(255, 60, 0), transparent)',
                transform: `scaleY(${height / 100})`,
                transformOrigin: 'bottom',
                transition: 'transform 0.5s ease-in-out',
                animation: 'pulseBar 2s ease-in-out infinite alternate',
                animationDelay: `${index * 0.1}s`,
                outline: '1px solid rgba(0, 0, 0, 0)',
                boxSizing: 'border-box',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Component: React.FC = () => {
  const [dialogMode, setDialogMode] = useState<SignupMode | null>(null);

  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gray-950"></div>
      <GradientBars />
      <Navbar />

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen pt-28 pb-12 sm:pt-32 sm:pb-16">
        <h1 className="w-full text-white leading-tight tracking-tight mb-5 sm:mb-6 animate-fadeIn px-4">
          <span className="block font-inter font-medium text-[clamp(1.5rem,5.5vw,3.75rem)] text-balance">
            Revolutionizing Restaurants,
          </span>
          <span className="block font-instrument italic text-[clamp(1.5rem,5.5vw,3.75rem)] text-balance">
            One AI Server at a Time.
          </span>
        </h1>
        
        <div className="mb-6 sm:mb-8 px-4">
          <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-400 leading-relaxed animate-fadeIn animation-delay-200 font-space">
            We're live and onboarding a limited number of restaurants.
          </p>
          <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-400 leading-relaxed animate-fadeIn animation-delay-300 font-space">
            Drop your email and we'll reach out instantly.
          </p>
        </div>

        <div className="w-full max-w-2xl mb-5 sm:mb-6 px-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setDialogMode('pilot')}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white hover:bg-gray-100 text-black text-sm sm:text-base font-space transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Join a 1-week free pilot now
          </button>
          <button
            onClick={() => setDialogMode('waitlist')}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-900/60 border border-gray-700 hover:border-white text-white text-sm sm:text-base font-space backdrop-blur-sm transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Sign up to waitlist now
          </button>
        </div>

        <p className="max-w-2xl px-4 text-[clamp(0.7rem,2vw,0.85rem)] text-gray-500 leading-relaxed animate-fadeIn animation-delay-300 font-space">
          We're competing in a hackathon with OpenAI developers. We are a Google Advisory Board member and a Wealth Manager at HSBC.
        </p>

        <figure className="mt-8 sm:mt-10 w-full max-w-sm px-4 animate-fadeIn animation-delay-300">
          <p className="mb-3 text-[clamp(0.8rem,2.2vw,0.95rem)] text-gray-300 font-space">
            That's us on a call with Gordon Ramsay, demoing our product.
          </p>
          <div className="relative overflow-hidden rounded-xl border border-gray-700/60 shadow-2xl ring-1 ring-black/40">
            <img
              src="/gordon-ramsay-demo.jpeg"
              alt="Tavo team on a Zoom call with Gordon Ramsay, demoing the product"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 text-[0.65rem] text-gray-600/70 font-space tracking-wide">
            Dramatization — AI-generated, not a real call.
          </figcaption>
        </figure>

        <figure className="mt-8 sm:mt-10 w-full max-w-sm px-4 animate-fadeIn animation-delay-300">
          <p className="mb-3 text-[clamp(0.8rem,2.2vw,0.95rem)] text-gray-300 font-space">
            And this is us talking to Jamie Oliver.
          </p>
          <div className="relative overflow-hidden rounded-xl border border-gray-700/60 shadow-2xl ring-1 ring-black/40">
            <img
              src="/jamie-oliver-demo.jpeg"
              alt="Tavo team on a Zoom call with Jamie Oliver, demoing the product"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 text-[0.65rem] text-gray-600/70 font-space tracking-wide">
            Dramatization — AI-generated, not a real call.
          </figcaption>
        </figure>
      </div>

      {dialogMode && (
        <SignupDialog mode={dialogMode} onClose={() => setDialogMode(null)} />
      )}
    </section>
  );
};
