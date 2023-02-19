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
import Image from "next/image";
import Profile from "../../public/profile.svg";

function Skill() {
  return (
    <section className="py-2 md:py-10">
      <div className="flex flex-col md:flex-row items-center  md:items-stretch gap-8 mb-12">
        <div className=" flex flex-col gap-4 md:justify-center">
          <h3 className="text-3xl ml-6 md:ml-0 py-1 text-gray-700 font-semibold dark:text-white">
            About me
          </h3>
          <p className="md:max-w-4xl  ml-4 md:text-lg ">
            Hi, I&apos;m full stack developer with great passion about
            teachnology in specially with videogames and programming.I am
            passionate about constantly learning new technologies that allow me
            to provide the most efficient solution to problems. I had the
            opportunity to join a bootcamp where I learned a lot of things about
            Rails, React,Ruby, Javascript, Soft Skill and Web development.
          </p>
        </div>
        <div>
          <Image
            src={Profile}
            alt="programmer"
            className="md:mt-9  md:max-h-64"
          />
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h3 className="text-3xl ml-6 md:ml-0 py-1 font-semibold text-gray-700 dark:text-white">
            Skills & Tools
          </h3>
        </div>
        <div className="flex gap-10 flex-wrap justify-center md:mt-20">
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
      </div>
    </section>
  );
}

export default Skill;
