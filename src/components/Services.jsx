import React from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const Service = () => {
  return (
    <div className="pb-20 xl:pb-[100px] xl:pt-[75px] bg-transparent">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-5xl font-bold font-mono mb-8 ml-7 hover:text-emerald-400">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 bg-transparent rounded-lg shadow-lg transition-transform transform hover:scale-105 h-64 w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <BsArrowDownRight className="text-emerald-400 text-3xl mr-2" />
                <h1 className="text-7xl font-bold text-white hover:text-emerald-400">
                  {`0${index + 1}`}
                </h1>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-3xl font-bold text-white hover:text-emerald-400">
                {service.title}
              </h1>
              <p className="text-base sm:text-sm md:text-sm lg:text-sm xl:text-sm mt-2 text-gray-400 mb-6 hover:text-emerald-400">
                {service.description}
              </p>
              <hr className="border-gray-500 mb-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Web Development",
    description:
      "The two main categories of software are application software and system software. An application is software that fulfills a specific need or performs tasks.",
  },
  {
    title: "UI/UX Design",
    description:
      "User experience design defines the experience a user would go through when interacting with a company, its services, and its products.",
  },
  {
    title: "Logo Designing",
    description:
      "A logo designer is a creative professional who specializes in crafting visual identities for businesses and organizations.",
  },
  {
    title: "Graphic Designing",
    description:
      "Graphic design is the art and craft of creating visual content to communicate messages, combining images, text, and other elements.",
  },
];

export default Service;
