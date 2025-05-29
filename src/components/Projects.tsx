import React from 'react';
import { projects } from '../constants/projects';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;