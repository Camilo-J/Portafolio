import SkillCard from "./skilCard";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiGit,
  DiRuby,
  DiLinux,
} from "react-icons/di";
import {
  SiRubyonrails,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiVisualstudiocode,
} from "react-icons/si";
import { HiOutlineCommandLine } from "react-icons/hi2";
function Skill() {
  return (
    <section className="py-2 md:py-10 ">
      <div className="mb-10">
        <h3 className="text-3xl ml-6 md:ml-0 py-1 font-semibold dark:text-white">
          Skills & Tools
        </h3>
      </div>
      <div className="flex gap-10 flex-wrap justify-center md:mt-28">
        <SkillCard icon={<AiFillHtml5 />} name="HTML5" />
        <SkillCard icon={<DiCss3 />} name="CSS3" />
        <SkillCard icon={<DiJavascript1 />} name="JavaScript" />
        <SkillCard icon={<DiReact />} name="React" />
        <SkillCard icon={<DiGit />} name="Git" />
        <SkillCard icon={<AiFillGithub />} name="GitHub" />
        <SkillCard icon={<DiRuby />} name="Ruby" />
        <SkillCard icon={<SiRubyonrails />} name="Ruby on Rails" />
        <SkillCard icon={<SiPostgresql />} name="PostgreSql" />
        <SkillCard icon={<SiTailwindcss />} name="TailwindCss" />
        <SkillCard icon={<HiOutlineCommandLine />} name="Command Line" />
        <SkillCard icon={<SiVisualstudiocode />} name="VsCode" />
        <SkillCard icon={<SiFigma />} name="Figma" />
        <SkillCard icon={<DiLinux />} name="Linux" />
      </div>
    </section>
  );
}

export default Skill;
