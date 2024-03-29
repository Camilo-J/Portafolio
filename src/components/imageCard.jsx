import Image from "next/image";
import { useRouter } from "next/router";
import blogPost from "../assets/data.json";

function ImageCard({ image, github, demo, title, content }) {
  const { locale } = useRouter();
  const values = blogPost.project.find((item) => item.locale === locale);
  return (
    <div className="group/images relative overflow-hidden max-w-lg rounded-2xl">
      <Image
        src={image}
        alt="project"
        className="rounded-lg object-cover group-hover/images:blur-sm h-full"
        width={"100%"}
        height="100"
        layout="responsive"
      />
      <div className="group/edit top-full p-4 flex flex-col justify-center gap-2 sm:gap-8 absolute text-white  h-full w-full  bg-gray-900/40 rounded-2xl group-hover/images:top-0  transition-all duration-700">
        <div className="flex flex-col gap-1 sm:gap-8 text-center">
          <h4 className="text-4xl font-semibold">{title}</h4>
          <p className="text-lg font-medium">{content}</p>
        </div>
        <div className="flex gap-8 justify-center">
          {demo ? (
            <a
              className="px-4 py-2 text-lg bg-teal-500 rounded cursor-pointer hover:shadow-lg hover:shadow-teal-700 transition-all duration-500 hover:scale-105"
              href={demo}
              target={"_blank"}
              rel="noreferrer"
            >
              {values.demo}
            </a>
          ) : (
            ""
          )}
          <a
            className="px-4 py-2 text-lg bg-teal-500 rounded cursor-pointer hover:shadow-lg hover:shadow-teal-700 hover:scale-105 transition-all duration-500"
            href={github}
            target={"_blank"}
            rel="noreferrer"
          >
            {values.source}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
