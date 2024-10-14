type ButtonStartProps = {
  bgColor: string;
  textColor: string
}

export default function ButtonStart({bgColor, textColor}: ButtonStartProps ) {
  return (
    <button
      className={`
          ${bgColor}
          ${textColor}
          py-2
          px-6
          rounded-3xl`}
    >
      Get Started
    </button>
  );
}
