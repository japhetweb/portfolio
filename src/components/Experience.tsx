import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '../constants/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  period,
  description,
}) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
    <div className="flex items-center mb-4">
      <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {position}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {company} | {period}
        </p>
      </div>
    </div>
    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Experience;