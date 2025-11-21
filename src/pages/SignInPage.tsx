import { BookOpenText } from 'lucide-react';

function SignInPage() {
  return (
    <div className="w-screen h-screen flex ">
      <div className="w-1/2">
        <div className="h-full bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-500 text-white">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <BookOpenText />
            </div>

            <h1 className="text-3xl font-bold mb-2">Mino</h1>
            <p className="text-lg opacity-90">
              Mino 는 복잡하고 무거운 기능을 최소화하고,
              <p className="text-lg opacity-90">가볍고 직관적인 문서 작성 경험을 제공하기</p>
              <p className="text-lg opacity-90"> 위해 만들어진 개인용 노트 서비스입니다.</p>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full">오른쪽</div>
    </div>
  );
}

export default SignInPage;
