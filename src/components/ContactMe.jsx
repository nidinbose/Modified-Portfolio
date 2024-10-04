import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+91) 7025968641'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'nidinbose700@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: 'Koramangala,Bengaluru'
    },
];

const Contact = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="py-6 pb-20 xl:pb-[140px] xl:pt-[110px]"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-8">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-1">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-emerald-400 font-mono">Let's Work Together</h3>
                            <p className="text-white/60 font-mono">
                                If you have any questions, feel free to reach out.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full h-[48px] rounded-md border border-white/10 focus:border-emerald-400 font-light bg-transparent px-4 py-2 text-base placeholder:text-white/60 outline-none font-mono text-emerald-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full h-[48px] rounded-md border border-white/10 focus:border-emerald-400 font-light bg-transparent px-4 py-2 text-base placeholder:text-white/60 outline-none font-mono text-emerald-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-[48px] rounded-md border border-white/10 focus:border-emerald-400 font-light bg-transparent px-4 py-2 text-base placeholder:text-white/60 outline-none font-mono text-emerald-400"
                                />
                                <input
                                    type="phone"
                                    placeholder="Phone Number"
                                    className="w-full h-[48px] rounded-md border border-white/10 focus:border-emerald-400 font-light bg-transparent px-4 py-2 text-base placeholder:text-white/60 outline-none font-mono text-emerald-400"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Type your message here"
                                className="w-full h-[158px] rounded-md border border-white/10 focus:border-emerald-400 font-light bg-transparent px-4 py-2 text-base placeholder:text-white/60 outline-none font-mono text-emerald-400"
                            />
                            <button className="uppercase flex items-center gap-2 bg-transparent border-emerald-400 hover:bg-emerald-400 border-2 text-white font-bold py-2 px-4 rounded-full mt-5 ease-out duration-300 font-mono w-36">
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-2 mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-8">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-emerald-400 rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60 font-mono hover:text-emerald-400 transition-colors duration-200">{item.title}</p>
                                        <h3 className="text-xl text-white font-mono hover:text-emerald-400 transition-colors duration-200">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
