import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {FaTimes,FaBars} from 'react-icons/fa'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
        closed: {
            x: '-100%',
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <nav className="relative">
            <button
                onClick={toggleMenu}
                className="text-white bg-transperent p-2 rounded-md focus:outline-none "
            >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-50"
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-2xl focus:outline-none"
                >
                    &times;
                </button>
                <ul className="flex flex-col gap-8 text-lg mb-20 ">
                    <li className='hover:text-emerald-400 '>
                        <Link to="/" onClick={toggleMenu} className="hover:text-emerald-400 font-mono">Home</Link>
                    </li>
                    <li className='hover:text-emerald-400 '>
                        <Link to="/project" onClick={toggleMenu} className="hover:text-emerald-400 font-mono">Projects</Link>
                    </li>
                    <li className='hover:text-emerald-400 '>
                        <Link to="/about" onClick={toggleMenu} className="hover:text-emerald-400 font-mono">About</Link>
                    </li>
                    <li className='hover:text-emerald-400 '>
                        <Link to="/services" onClick={toggleMenu} className="hover:text-emerald-400 font-mono">Services</Link>
                    </li>
                    <li className='hover:text-emerald-400 '>
                        <Link to="/contact" onClick={toggleMenu} className="hover:text-emerald-400 font-mono">Contact</Link>
                    </li>
                </ul>
            </motion.div>
        </nav>
    );
};

export default MobileNav;
