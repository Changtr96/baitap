import { useState } from "react";

interface Props {
  min: number;
  seconds: number;
}

const CountDown = ({ min, seconds }: Props) => {
  const [remainingTime, setRemainingTime] = useState<number>(
    min * 60 + seconds
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const [buttonState, setButtonState] = useState<
    "Bắt đầu" | "Tạm dừng" | "Tiếp tục" | "Reset"
  >("Bắt đầu");

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    if (isRunning) return;
    setButtonState("Tạm dừng");
    setIsRunning(true);
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(intervalId);
        setIsRunning(false);
      }
    }, 1000);
  };

  const handlePause = () => {
    setButtonState("Tiếp tục");
    setIsRunning(false);
  };

  const handleResume = () => {
    setButtonState("Tạm dừng");
    setIsRunning(true);
  };

  const handleReset = () => {
    setButtonState("Bắt đầu");
    setRemainingTime(min * 60 + seconds);
    setIsRunning(false);
  };
  return (
    <div className="h-[300px] w-[220px] mt-6 flex flex-col justify-center items-center bg-slate-100 p-6 rounded-lg">
      <h1 className="text-3xl">CountDown</h1>
      <div className="text-blue-500 p-4 rounded-full text-[48px]">
        {formatTime(remainingTime)}
      </div>
      <div className="buttons">
        <button
          className="text-white text-xl p-4 rounded-[8px] bg-blue-500"
          onClick={
            buttonState === "Bắt đầu"
              ? handleStart
              : buttonState === "Tạm dừng"
              ? handlePause
              : buttonState === "Tiếp tục"
              ? handleResume
              : handleReset
          }
        >
          {buttonState}
        </button>
      </div>
    </div>
  );
};

export default CountDown;
