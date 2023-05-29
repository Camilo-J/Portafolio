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
import { motion } from "framer-motion";
import Image from "next/image";
import Profile from "../../public/profile.svg";
import { useRouter } from "next/router";
import blogPost from "../assets/data.json";

function Skill() {
  const { locale } = useRouter();
  const values = blogPost.about.find((item) => item.locale === locale);
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      transition={{ ease: "easeOut", duration: 1 }}
      animate={{ opacity: 1, x: 0 }}
      className="py-2 md:py-10"
    >
      <div className="flex flex-col md:flex-row items-center  md:items-stretch gap-8 mb-12">
        <div className=" flex flex-col gap-4 md:justify-center">
          <h3 className="text-3xl ml-6 md:ml-0 py-1 text-gray-700 font-semibold dark:text-white">
            {values.title}
          </h3>
          <p className="md:max-w-4xl  ml-4 md:text-lg ">{values.description}</p>
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
    </motion.section>
  );
}

export default Skill;
