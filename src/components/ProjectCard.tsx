import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  github,
  live,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
  >
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="p-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <Github className="w-5 h-5 mr-2" />
          Code
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          Live Demo
        </motion.a>
      </div>
    </motion.div>
  </motion.div>
);

export default ProjectCard;