import React from "react";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/your-github' },
    { icon: <FaLinkedinIn />, path: 'https://linkedin.com/in/your-linkedin' },
    { icon: <FaYoutube />, path: 'https://youtube.com/your-channel' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/nidinbose_/' },
];

const Social = () => {
    return (
        <div className='flex gap-6'>
            {socials.map((item, index) => (
                <a 
                    key={index} 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='w-9 h-9 border border-emerald-400 rounded-full flex justify-center items-center text-emerald-400 text-base hover:bg-emerald-400 hover:text-white duration-500'
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
}

export default Social;
