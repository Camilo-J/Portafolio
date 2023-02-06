import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillHtml5,
} from "react-icons/ai";
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
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";
import SkillCard from "@/components/skilCard";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Home | Camilo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Camilo</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-white"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li className="flex">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Camilo Huanca
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              I love exploring and learning new technologies. I&apos;m
              passionate about bringing digital products to life and I&apos;m a
              lifelong learner 🎓
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-teal-500">
            <a href="https://github.com/Camilo-J">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/camilohuanca/">
              <AiFillLinkedin />
            </a>
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="" fill objectFit="cover" />
          </div>
        </section>
        <section className="mb-10">
          <div className="mb-10">
            <h3 className="text-3xl py-1 font-semibold dark:text-white">
              Skills & Tools
            </h3>
          </div>
          <div className="flex gap-10 flex-wrap justify-center">
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
        <section>
          <div>
            <h3 className="text-3xl py-1 font-semibold dark:text-white">
              Projects
            </h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
