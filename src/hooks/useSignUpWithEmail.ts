import { signUpWithEmail } from '@/apis/auth';
import { useMutation } from 'react-query';

export function useSingUpWithEmail() {
  return useMutation({
    mutationFn: signUpWithEmail,
  });
}
