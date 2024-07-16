interface ButtonTypes {
  primary: string;
  secondary: string;
  destructive: string;
}

interface ButtonProps {
  title: string;
  type: keyof ButtonTypes;
  onClick: () => void;
}

const Button = ({ title, type, onClick }: ButtonProps) => {
  const styleOfType: ButtonTypes = {
    primary:
      "min-w-[120px] bg-blue-700 text-white text-xl font-bold hover:bg-blue-800",
    secondary:
      "min-w-[120px] bg-white border border-blue-700 text-blue-700 text-xl font-bold hover:bg-blue-100",
    destructive:
      "min-w-[120px] bg-red-500 text-white text-xl font-bold hover:bg-red-600",
  };
  return (
    <button
      className={`py-4 px-6 ${styleOfType[type]} rounded-lg`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
