import { GiToolbox } from "react-icons/gi";
import { ImFileOpenoffice } from "react-icons/im";
import { TiHome } from "react-icons/ti";
import { IoBook } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import blogPost from "../assets/data.json";

const Header = () => {
  const router = useRouter();
  const locale = router.locale;
  const currentPage = router.pathname;
  const values = blogPost.navbar.find((item) => item.locale === locale);
  return (
    <div>
      {/* <label htmlFor="nav" className="md:hidden text-4xl absolute top-3 left-1">
        <RxHamburgerMenu />
      </label>
      <input id="nav" type={"checkbox"} className="peer" hidden /> */}
      <div className="sticky top-0 md:ml-2 w-24  justify-start  transition-all duration-500 peer-checked:top-44 md:top-0 md:block md:h-screen z-50">
        <nav className="w-20 flex md:h-full items-center">
          <ul className="md:flex flex-col gap-6 absolute md:left-0  text-teal-500 dark:text-white">
            <li
              className={`group/home w-14 h-14 ${
                currentPage === "/" ? "bg-teal-500 text-white" : ""
              } hover:text-white  hover:bg-teal-500 rounded-full  flex items-center cursor-pointer justify-center transition-all duration-500 hover:w-32`}
            >
              <Link
                href="./"
                className="flex gap-4 items-center justify-center   group-hover/home:p-3"
              >
                <TiHome className="text-3xl" />
                <span className="hidden group-hover/home:block text-lg font-medium">
                  {values.home}
                </span>
              </Link>
            </li>
            <li
              className={`group/project w-14 h-14 hover:text-white  hover:bg-teal-500 rounded-full ${
                currentPage === "/projects" ? "bg-teal-500 text-white" : ""
              }  flex items-center justify-center transition-all duration-500 hover:w-32 cursor-pointer`}
            >
              <Link
                href="./projects"
                className="flex gap-4 items-center justify-center   group-hover/project:p-3"
              >
                <IoBook className="text-3xl" />
                <span className="hidden text-lg font-medium group-hover/project:block">
                  {values.project}
                </span>
              </Link>
            </li>
            <li
              className={`group/skills w-14 h-14 hover:text-white  hover:bg-teal-500 rounded-full ${
                currentPage === "/skills" ? "bg-teal-500 text-white" : ""
              } flex items-center justify-center transition-all duration-500 hover:w-32 cursor-pointer`}
            >
              <Link
                href="./skills"
                className="flex gap-4 items-center justify-center    group-hover/skills:p-3"
              >
                <GiToolbox className="text-3xl" />
                <span className="hidden  text-lg font-medium group-hover/skills:flex">
                  {values.about}
                </span>
              </Link>
            </li>
            <li className="group/skills w-14 h-14 hover:text-white  hover:bg-teal-500 rounded-full flex items-center justify-center transition-all duration-500 hover:w-32 cursor-pointer">
              <a
                className="flex gap-4 items-center justify-center    group-hover/skills:p-3"
                href={values.contact}
                target="_blank"
                rel="noreferrer"
              >
                <ImFileOpenoffice className="text-3xl" />
                <span className="hidden  text-lg font-medium group-hover/skills:flex">
                  Resume
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { Header };
