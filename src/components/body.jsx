import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/developerIcon.svg";
import { motion } from "framer-motion";

const SectionIndex = () => {
  return (
    <div className="px-10 md:px-20 transition duration-500 ease-in-out lg:px-40 self-center">
      <section className="min-h-screen md:flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="lg:flex lg:gap-x-8 lg:items-center"
        >
          <div>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                Camilo Huanca
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                Full Stack Web Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
                I love exploring and learning new technologies. I&apos;m
                passionate about bringing digital products to life and I&apos;m
                a lifelong learner 🎓
              </p>
            </div>
            <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-teal-500">
              <a
                className="transition duration-500 ease-in-out rounded-full hover:text-teal-500  dark:hover:text-teal-300 hover:scale-105"
                href="https://github.com/Camilo-J"
                target={"_blank"}
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                className="transition duration-500 ease-in-out rounded-full  hover:text-teal-500  dark:hover:text-teal-300 hover:scale-105"
                href="https://www.linkedin.com/in/camilohuanca/"
                target={"_blank"}
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <AiFillYoutube className="transition duration-500 ease-in-out rounded-full  hover:text-teal-500  dark:hover:text-teal-300 hover:scale-105" />
            </div>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="" fill objectFit="cover" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export { SectionIndex };
