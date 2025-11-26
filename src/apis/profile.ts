import { supabase } from '@/lib/supabase';
import type { ProfileInsert } from '@/types/database';
import { toast } from 'sonner';

export async function profileInsert(profileData: ProfileInsert) {
  const { data, error } = await supabase.from('profiles').insert(profileData).select().single();
  if (error) console.log(error);
  return data;
}

export async function fetchProfile(profileId: string) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', profileId).single();
  if (error) toast.error('프로필 정보를 불러오는 중 오류가 발생했습니다.');
  return data;
}
