import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hi, I'm Japhet Onyeagucha
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-6"
            >
              Backend Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Crafting robust and scalable backend solutions with Django, Flask, and Express.js.
              Passionate about building efficient APIs and maintaining high-performance systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4"
            >
              {[
                { href: "https://github.com/japhetweb", icon: <Github size={24} /> },
                { href: "https://linkedin.com/in/japhetonyeagucha", icon: <Linkedin size={24} /> },
                { href: "mailto:japhetonyeagucha@gmail.com", icon: <Mail size={24} /> }
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              // src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4"
              src="https://pbs.twimg.com/profile_images/1706290381778825217/DTgjFbBx_400x400.jpg"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;