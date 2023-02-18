import ImageCard from "./imageCard";
import web1 from "../../public/keepable.png";
import web2 from "../../public/GitHubStats.png";
import web3 from "../../public/Eatable.png";
import web4 from "../../public/pokemon-ruby.png";
import web5 from "../../public/SomeSplash.png";
import web6 from "../../public/Tweetable.png";

function Portafolio() {
  return (
    <section className="flex flex-col py-2 md:py-10">
      <div>
        <h3 className="text-3xl ml-6 md:0 py-1 font-semibold dark:text-white">
          Projects
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8 py-10 lg:flex-row lg:flex-wrap">
        <ImageCard
          title={"Keepable"}
          content={`vanilla-javascript - HTML - CSS`}
          image={web1}
          demo={"https://keepable-js.netlify.app/"}
          github="https://github.com/Camilo-J/Keepable-js"
        />
        <ImageCard
          title={"GitHub Stats"}
          content={`React - Emotion - Javacript - Html -Api GitHub`}
          image={web2}
          demo={"https://githubstatsca.netlify.app/"}
          github="https://github.com/Camilo-J/GitHub-Stats"
        />
        <ImageCard
          title={"Eatable"}
          content={`React- Javascript -Html - Emotion -Api Rest`}
          image={web3}
          demo={"https://eatableca.netlify.app/"}
          github="https://github.com/Camilo-J/Eatable"
        />

        <ImageCard
          title={"Pokemon Ruby"}
          content={`Command Line Interface - OOP - ruby`}
          image={web4}
          github="https://github.com/Camilo-J/Pokemon-Ruby"
        />
        <ImageCard
          title={"Some Splash"}
          content={`Ruby on Rails - Ruby - Tailwind CSS - PostgreSql`}
          image={web5}
          github="https://github.com/Camilo-J/Pokemon-Ruby"
        />
        <ImageCard
          title={"Tweetable"}
          content={`Ruby on Rails - Ruby - CSS - PostgreSql - Devise - Oauth Github`}
          image={web6}
          github="https://github.com/Camilo-J/Tweetable"
        />
      </div>
    </section>
  );
}
export default Portafolio;
