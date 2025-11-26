import type { Profile } from '@/types/database';
import type { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

interface AuthStore {
  session: Session | null;
  profile: Profile | null;
  setSession: (session: Session | null) => void;
  setProfile: (profile: Profile | null) => void;
}

export const useAuthStore = create<AuthStore>(set => ({
  session: null,
  profile: null,
  setSession: session => set({ session }),
  setProfile: profile => set({ profile }),
}));
