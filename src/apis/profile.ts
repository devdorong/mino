import { supabase } from '@/lib/supabase';
import type { ProfileInsert } from '@/types/database';

export async function profileInsert(profileData: ProfileInsert) {
  const { data, error } = await supabase.from('profiles').insert(profileData).select().single();
  if (error) console.log(error);
  return data;
}
