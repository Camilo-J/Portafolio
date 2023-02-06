function SkillCard({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-5 text-gray-600 dark:text-teal-500">
      <div className="text-8xl">{icon}</div>
      <p className="text-xl dark:text-teal-100">{name}</p>
    </div>
  );
}

export default SkillCard;
