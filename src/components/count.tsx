import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[300px] w-[220px] mt-6 flex flex-col justify-center items-center gap-6 bg-slate-100 rounded-lg p-6 text-blue-500">
        <div>
          <h1 className="text-[48px]">{count}</h1>
        </div>{" "}
        <button
          className="rounded-[8px] p-4 bg-blue-700 text-white text-xl"
          onClick={() => setCount((count) => count + 1)}
        >
          Increase
        </button>
      </div>
    </>
  );
}
