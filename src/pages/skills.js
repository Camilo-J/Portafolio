import { Header } from "@/components/header";
import Skill from "@/components/sectionSkill";

const SkillPage = () => {
  return (
    <div className="flex">
      <Header />
      <div className="px-16">
        <Skill />
      </div>
    </div>
  );
};

export default SkillPage;
