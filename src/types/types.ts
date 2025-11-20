// Counter Store 타입 정의
export interface CounterState {
  count: number; // 현재 카운터 값(숫자)
  increment: () => void; // 카운터 1증가
  decrement: () => void; // 카운터 1감소
  reset: () => void; // 카운터 0 초기화
  setCount: (count: number) => void; // 직접 카운터 값 설정
}
