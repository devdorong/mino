import { fetchProfile } from '@/apis/profile';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/stores/useAuthStore';
import { useEffect } from 'react';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const setSession = useAuthStore(state => state.setSession);
  const setProfile = useAuthStore(state => state.setProfile);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null);

      if (data.session?.user.id) {
        fetchProfile(data.session.user.id).then(profile => {
          setProfile(profile);
        });
      }
    });

    const {} = supabase.auth.onAuthStateChange(async (_, session) => {
      setSession(session ?? null);
      
    });
  }, []);

  return children;
}
