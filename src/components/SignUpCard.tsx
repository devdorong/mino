import { signUpWithEmail } from '@/apis/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { ProfileInsert } from '@/types/database';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SingUpCard({ onSwitch }: { onSwitch: () => void }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNickname, setFirstNickname] = useState('');
  const [lastNickname, setLastNickname] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSignUp = async () => {
    const profileData: ProfileInsert = {
      name: `${lastNickname}${firstNickname}`,
      nickname,
    };

    try {
      await signUpWithEmail({ email, password, profileData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center font-bold text-2xl">계정을 생성하세요</h1>
          <span>오늘부터 글쓰기 여정을 시작하세요</span>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="flex  gap-4">
              <div className="grid gap-2">
                <Label htmlFor="lastNickname">이름</Label>
                <Input
                  className="w-full h-12 px-4 py-3"
                  id="lastNickname"
                  type="text"
                  placeholder="길동"
                  required
                  value={lastNickname}
                  onChange={e => setLastNickname(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="firstNickname">성</Label>
                <Input
                  className="w-full h-12 px-4 py-3"
                  id="firstNickname"
                  type="text"
                  placeholder="홍"
                  required
                  value={firstNickname}
                  onChange={e => setFirstNickname(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastNickname">닉네임</Label>
              <Input
                className="w-full h-12 px-4 py-3"
                id="nickname"
                type="text"
                placeholder="example@example.com"
                required
                value={nickname}
                onChange={e => setNickname(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastNickname">이메일</Label>
              <Input
                className="w-full h-12 px-4 py-3"
                id="email"
                type="text"
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
          // 추후 로그인 기능
          onClick={() => navigate('/')}
        >
          로그인
        </Button>
        <div className="text-[14px]">
          이미 계정이 있으신가요?
          <Button
            onClick={onSwitch}
            variant="link"
            className="text-indigo-500 hover:opacity-90 px-2"
          >
            로그인
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
