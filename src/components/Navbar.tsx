import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navItems } from '../constants/navigation';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white">
              Jweb
            </a>
          </div>

          <DesktopNav isDark={isDark} toggleTheme={toggleTheme} />
          <MobileNav isDark={isDark} toggleTheme={toggleTheme} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </nav>
  );
};

interface DesktopNavProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ isDark, toggleTheme }) => (
  <div className="hidden md:block">
    <div className="ml-10 flex items-center space-x-4">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          {item.label}
        </a>
      ))}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  </div>
);

interface MobileNavProps {
  isDark: boolean;
  toggleTheme: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isDark, toggleTheme, isOpen, setIsOpen }) => (
  <div className="md:hidden flex items-center">
    <button
      onClick={toggleTheme}
      className="p-2 mr-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
);

interface MobileMenuProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsOpen }) => (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>
);

export default Navbar;