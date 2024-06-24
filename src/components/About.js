import { LANG } from "../utils/langConstant";

const About = ({ lang }) => {
  const { title, desc } = LANG[lang];
  return (
    <div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default About;
