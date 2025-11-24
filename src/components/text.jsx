import { useState } from "react";
import StepTemplate from "../components/StepTemplate";

export default function LandingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const [answers, setAnswers] = useState({
    step1: { button: null, toggle: false, radio: null, slider: 1 },
    step2: { button: null, toggle: false, radio: null, slider: 2 },
    step3: { button: null, toggle: false, radio: null, slider: 3 },
    step4: { button: null, toggle: false, radio: null, slider: 4 },
    step5: { button: null, toggle: false, radio: null, slider: 5 },
  });

  const updateAnswer = (step, key, value) => {
    setAnswers(prev => ({
      ...prev,
      [`step${step}`]: {
        ...prev[`step${step}`],
        [key]: value,
      },
    }));
  };

  const stepButtons = [
    ["사과", "포도", "바나나", "딸기", "수박"], // Step1 버튼 항목
    ["JavaScript", "Python", "Java", "Go", "Rust"], // Step2
    ["1시간", "2시간", "3시간", "4시간", "5시간"], // Step3
    ["고기", "야채", "햄버거", "초밥", "라면"], // Step4
    ["강아지", "고양이", "햄스터", "물고기", "파충류"], // Step5
  ];

  const stepInfo = [
    { title: "Step 1", description: "좋아하는 과일을 선택하세요." },
    { title: "Step 2", description: "즐겨쓰는 언어를 선택하세요." },
    { title: "Step 3", description: "공부 시간을 선택하세요." },
    { title: "Step 4", description: "메뉴를 선택하세요." },
    { title: "Step 5", description: "좋아하는 동물을 선택하세요." },
  ];

  const goNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const goPrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <StepTemplate
        step={currentStep}
        data={stepInfo[currentStep - 1]}
        buttonList={stepButtons[currentStep - 1]}
        answers={answers[`step${currentStep}`]}
        updateAnswer={updateAnswer}
        goNext={goNext}
        goPrev={goPrev}
      />
    </div>
  );
}
