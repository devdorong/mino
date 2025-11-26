import { supabase } from '@/lib/supabase';
import type { ProfileInsert, Profile } from '@/types/database';

/**
 *
 * @param  회원가입 함수
 * @returns {Promise<Profile>} 가입한 유저의 프로필 정보
 */
export async function signUpWithEmail({
  email,
  password,
  profileData,
}: {
  email: string;
  password: string;
  profileData: ProfileInsert;
}): Promise<Profile> {
  const { error: signUpError } = await supabase.auth.signUp({ email, password });
  if (signUpError) throw signUpError;

  const { data, error: profileInsertError } = await supabase
    .from('profiles')
    .insert(profileData)
    .select()
    .single();

  if (profileInsertError) throw profileInsertError;

  return data;
}

/**
 * 로그아웃 함수
 */

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
