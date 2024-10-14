type DiffProps = {
  num: string;
  title: string;
  text: string;
};


export default function Diff({ num, title, text }: DiffProps) {
  // 1. state

  // 2. comportements

  // 3. render
  return (
    <div key={num} className="flex mb-10">
      <div
        className="
          bg-primary
          py-2
          px-7
          rounded-3xl
          text-white
          mr-2
          h-fit
          w-"
      >
        {num}
      </div>
      <div>
        <p className="font-bold my-3">{title}</p>
        <p className="text-secondary">{text}</p>
      </div>
    </div>
  );
}
