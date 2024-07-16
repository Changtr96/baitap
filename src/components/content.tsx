import { useState } from "react";

interface ContentProps {
  text: string;
  maxChar: number;
}

const Content = ({ text, maxChar }: ContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textDisplay = text.substring(0, maxChar);
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-[320px] bg-slate-50 p-4 rounded-[16px]">
      {isExpanded ? (
        <div>
          <p className="mb-4">{text}</p>
          <button className="text-blue-500" onClick={handleExpand}>
            Thu gọn
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4">{textDisplay}</p>
          {text.length > maxChar && (
            <button className="text-blue-500" onClick={handleExpand}>
              Xem thêm
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Content;
