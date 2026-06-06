import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  // Surfaced in the browser console during local dev if the env vars are missing.
  console.warn(
    '[Tavo] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. ' +
      'Signups will not be persisted until these are set.'
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');

export type SignupRow = {
  mode: 'waitlist' | 'pilot';
  restaurant_name: string;
  city: string;
  email: string;
  agreement_accepted: boolean;
  agreement_accepted_at: string | null;
};

/**
 * Inserts a signup into the `signups` table.
 * Throws if the insert fails so the caller can surface an error to the user.
 */
export async function insertSignup(row: SignupRow): Promise<void> {
  const { error } = await supabase.from('signups').insert(row);
  if (error) {
    throw new Error(error.message);
  }
}
