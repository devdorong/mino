import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInCard({ onSwitch }: { onSwitch: () => void }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {};

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-2xl">환영합니다</h1>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                className="w-full h-12 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                id="email"
                type="email"
                placeholder="example@example.com"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">비밀번호</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  비밀번호를 잊으셨다면?
                </a>
              </div>
              <Input
                className="w-full h-12 px-4 py-3"
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full h-12 bg-indigo-500 hover:opacity-90 hover:bg-indigo-500"
          onClick={() => navigate('/')}
        >
          로그인
        </Button>
        <div className="text-[14px]">
          계정이 없으신가요?
          <Button
            onClick={onSwitch}
            variant="link"
            className="text-indigo-500 hover:opacity-90 px-2"
          >
            가입하기
          </Button>
        </div>
        <div className="flex w-full items-center my-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">또는</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="w-full h-12">
            Login with Google
          </Button>
          <Button variant="outline" className="w-full h-12">
            Login with Kakao
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
