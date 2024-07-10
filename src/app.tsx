import Count from "./components/count";
import CountDown from "./components/count-down";

export default function App() {
  return (
    <div className="w-full flex gap-5 justify-center items-center">
      <Count />
      <CountDown min={1} seconds={30} />
    </div>
  );
}
