import React from 'react';
import { Database, Server, Code, Wrench } from 'lucide-react';
import { skills } from '../constants/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory title="Languages" icon={<Code />} skills={skills.languages} />
          <SkillCategory title="Frameworks" icon={<Server />} skills={skills.frameworks} />
          <SkillCategory title="Databases" icon={<Database />} skills={skills.databases} />
          <SkillCategory title="Tools" icon={<Wrench />} skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => (
  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
    <div className="flex items-center mb-4">
      <div className="w-6 h-6 text-blue-600 mr-2">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center text-gray-600 dark:text-gray-300"
        >
          <span className="w-full">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;