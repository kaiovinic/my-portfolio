import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Desenvolvedor Full-Stack",
        1500,
        "Angular & React",
        1500,
        "C# .NET & Node.js",
        1500,
        "Salesforce Developer",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6e5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
