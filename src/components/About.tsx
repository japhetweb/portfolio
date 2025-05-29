import React from 'react';
import { Award, BookOpen, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Code2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Backend Specialist
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specialized in building scalable backend systems and RESTful APIs
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Continuous Learner
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Always staying updated with the latest backend technologies and best practices
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate about solving complex technical challenges
            </p>
          </div>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            With 2 years of experience in backend development, I've worked on various projects
            ranging from RESTful APIs to complex microservices architectures. My expertise lies
            in Python frameworks like Django and Flask, as well as Node.js with Express.
            I'm passionate about writing clean, maintainable code and building scalable
            backend solutions that power modern web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;