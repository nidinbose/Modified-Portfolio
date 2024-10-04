import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: 'Home',
    path:'/'
  },
  {
    name: 'Services',
    path:'/services'
  },
  {
    name: 'Resume',
    path:'/about'
  },
  {
    name: 'Project',
    path:'/project'
  },
  {
    name: 'Contact',
    path:'/contact'
  },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => (
        <Link to={link.path} key={index} className='text-white font-mono hover:text-green-400 hover:border-b hover:border-emerald-400 font-medium transition-all'>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;