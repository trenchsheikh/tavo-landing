import React, { useEffect, useMemo, useState } from 'react';
import { Check, Loader2, X } from 'lucide-react';
import { buildAgreement } from '@/lib/pilot-agreement';
import { insertSignup } from '@/lib/supabase';

export type SignupMode = 'waitlist' | 'pilot';

type Step = 'form' | 'contract' | 'success';

interface SignupDialogProps {
  mode: SignupMode;
  onClose: () => void;
}

const inputClasses =
  'w-full px-5 py-3 rounded-xl bg-gray-900/70 border border-gray-700 focus:border-white outline-none text-white text-sm sm:text-base placeholder-gray-500 transition-all duration-300 font-space';

export const SignupDialog: React.FC<SignupDialogProps> = ({ mode, onClose }) => {
  const [step, setStep] = useState<Step>('form');
  const [restaurantName, setRestaurantName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const agreement = useMemo(
    () => buildAgreement({ restaurantName, city }),
    [restaurantName, city]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const formValid =
    restaurantName.trim().length > 0 &&
    city.trim().length > 0 &&
    email.includes('@');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValid) return;

    setError(null);
    setIsSubmitting(true);

    // For pilot signups we collect the data only after the agreement is
    // accepted, so just advance to the contract step here.
    if (mode === 'pilot') {
      setIsSubmitting(false);
      setStep('contract');
      return;
    }

    try {
      await insertSignup({
        mode: 'waitlist',
        restaurant_name: restaurantName.trim(),
        city: city.trim(),
        email: email.trim(),
        agreement_accepted: false,
        agreement_accepted_at: null,
      });
      setStep('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAcceptContract = async () => {
    if (!accepted) return;
    setError(null);
    setIsSubmitting(true);
    try {
      await insertSignup({
        mode: 'pilot',
        restaurant_name: restaurantName.trim(),
        city: city.trim(),
        email: email.trim(),
        agreement_accepted: true,
        agreement_accepted_at: new Date().toISOString(),
      });
      setStep('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tighter font-space">Tavo</span>
            <span className="text-xs text-gray-400 font-space">
              {mode === 'pilot' ? 'Join the one-week free pilot' : 'Sign up to the waitlist'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {step === 'form' && (
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 p-6 overflow-y-auto">
            <p className="text-sm text-gray-400 font-space">
              {mode === 'pilot'
                ? "Tell us about your restaurant and we'll get your pilot ready."
                : "Tell us about your restaurant and we'll reach out instantly."}
            </p>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-space">Restaurant name</label>
              <input
                className={inputClasses}
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                placeholder="e.g. The Copper Spoon"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-space">City</label>
              <input
                className={inputClasses}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. London"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-space">Email address</label>
              <input
                type="email"
                className={inputClasses}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@restaurant.com"
                required
              />
            </div>
            <button
              type="submit"
              disabled={!formValid || isSubmitting}
              className={`mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-space transition-all duration-300 ${
                !formValid || isSubmitting
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-white hover:bg-gray-100 text-black hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : 'Continue'}
            </button>
            {error && (
              <p className="text-xs text-red-400 font-space text-center">{error}</p>
            )}
          </form>
        )}

        {step === 'contract' && (
          <div className="flex flex-col min-h-0 flex-1">
            <div className="px-6 pt-4 pb-2">
              <p className="text-sm text-gray-400 font-space">
                Please review the pilot agreement below.
              </p>
            </div>
            <div
              className="flex-1 overflow-y-auto px-6 py-4 mx-6 mb-4 rounded-xl border border-gray-800 bg-gray-900/40"
            >
              {agreement.map((block, i) => {
                if (block.type === 'title') {
                  return (
                    <h2 key={i} className="text-white font-bold text-lg font-space text-center mb-1">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'heading') {
                  return (
                    <h3 key={i} className="text-white font-semibold text-sm tracking-wide font-space mt-5 mb-1">
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === 'subheading') {
                  return (
                    <h4 key={i} className="text-white font-semibold text-sm font-space mt-4 mb-1">
                      {block.text}
                    </h4>
                  );
                }
                return (
                  <p key={i} className="text-xs text-gray-400 leading-relaxed font-space mb-2">
                    {block.text}
                  </p>
                );
              })}
            </div>
            <div className="px-6 pb-6 border-t border-gray-800 pt-4 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                    accepted ? 'bg-white border-white' : 'border-gray-600 bg-transparent'
                  }`}
                >
                  {accepted && <Check size={14} className="text-black" />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <span className="text-xs text-gray-300 leading-relaxed font-space">
                  I have read and agree to the Tavo Pilot Agreement on behalf of {restaurantName.trim() || 'my restaurant'}.
                </span>
              </label>
              <button
                onClick={handleAcceptContract}
                disabled={!accepted || isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-space transition-all duration-300 ${
                  !accepted || isSubmitting
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-white hover:bg-gray-100 text-black hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : 'Accept & Continue'}
              </button>
              {error && (
                <p className="text-xs text-red-400 font-space text-center">{error}</p>
              )}
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="flex flex-col items-center text-center gap-4 p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 border border-green-500/30">
              <Check size={28} className="text-green-300" />
            </div>
            {mode === 'pilot' ? (
              <>
                <h3 className="text-white text-xl font-semibold font-space">Thank you for joining our pilot!</h3>
                <p className="text-sm text-gray-400 font-space">
                  We'll onboard {restaurantName.trim() || 'your restaurant'} as soon as possible. Keep an eye on {email || 'your inbox'}.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-white text-xl font-semibold font-space">Thank you for signing up!</h3>
                <p className="text-sm text-gray-400 font-space">
                  You're on the Tavo waitlist. We'll reach out to {restaurantName.trim() || 'you'} at {email || 'your email'} instantly.
                </p>
              </>
            )}
            <button
              onClick={onClose}
              className="mt-2 px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-black text-sm sm:text-base font-space transition-all duration-300 hover:scale-[1.02]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
