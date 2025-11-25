import { supabase } from '@/lib/supabase';
import type { ProfileInsert } from '@/types/database';

export async function signUpWithEmail({
  email,
  password,
  profileData,
}: {
  email: string;
  password: string;
  profileData: ProfileInsert;
}) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}
