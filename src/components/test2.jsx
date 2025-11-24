export default function StepTemplate({
  step,
  data,
  buttonList,
  answers,
  updateAnswer,
  goNext,
  goPrev,
  sliderCount = 5,
}) {
  const isButtonSelected = answers?.button !== null;

  const handleButtonSelect = value => {
    updateAnswer(step, "button", value);
    updateAnswer(step, "toggle", true);
    updateAnswer(step, "radio", "A");
  };

  return (
    <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8 space-y-10">
      <div>
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p className="text-gray-600 mt-1">{data.description}</p>
      </div>

      {/* 버튼 목록 */}
      <div className="grid grid-cols-5 gap-3">
        {buttonList.map(label => (
          <button
            key={label}
            onClick={() => handleButtonSelect(label)}
            className={`p-3 rounded-md border text-center transition 
            ${answers?.button === label ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 토글 */}
      <div className="flex items-center gap-3">
        <span className="font-medium">토글</span>
        <button
          className={`w-16 h-8 rounded-full transition 
          ${answers?.toggle ? "bg-green-500" : "bg-gray-300"}`}
        >
          <div
            className={`w-7 h-7 bg-white rounded-full transition 
            ${answers?.toggle ? "translate-x-8" : "translate-x-0"}`}
          ></div>
        </button>
      </div>

      {/* 라디오 */}
      <div className="space-y-2">
        <span className="font-medium">라디오 선택</span>
        <div className="flex gap-4">
          {["A", "B", "C"].map(option => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name={`step-${step}-radio`}
                checked={answers?.radio === option}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 슬라이더 */}
      <div>
        <span className="font-medium">슬라이더</span>
        <input
          type="range"
          min={1}
          max={sliderCount}
          step={1}
          value={answers?.slider ?? 1}
          className="w-full"
        />
      </div>

      {/* 네비게이터 */}
      <div className="flex justify-between pt-6">
        <button
          onClick={goPrev}
          disabled={step === 1}
          className="px-4 py-2 rounded-md border disabled:opacity-40"
        >
          이전
        </button>

        <button
          onClick={goNext}
          disabled={!isButtonSelected}
          className="px-4 py-2 rounded-md bg-blue-500 text-white
          disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          다음
        </button>
      </div>
    </div>
  );
}
