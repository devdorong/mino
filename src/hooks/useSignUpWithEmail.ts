import { signUpWithEmail } from '@/apis/auth';
import { useMutation } from 'react-query';

export function useSignUpWithEmail() {
  return useMutation({
    mutationFn: signUpWithEmail,
  });
}
