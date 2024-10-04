import React from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const about = {
  title: "About me",
  description: "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies",
  info: [
    { fieldName: "Name", fieldValue: "Nidinbose" },
    { fieldName: "Phone", fieldValue: "(+91) 7012543724" },
    { fieldName: "Experience", fieldValue: "12 years" },
    { fieldName: "Skype", fieldValue: "Nidinbose_" },
    { fieldName: "Nationality", fieldValue: "India" },
    { fieldName: "Email", fieldValue: "nidinbose@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Malayalam" },
  ]
};

const experience = {
  title: 'My Experience',
  description: 'Here is a summary of my professional experience.',
  items: [
    { company: 'Syneffo Solutions', position: 'Full Stack Developer intern', duration: '6 months' },
    { company: 'Techbolt Solutions', position: 'Frontend Developer intern', duration: '10 months' },
  ]
};

const education = {
  title: 'My Education',
  description: 'Here is a summary of my educational background.',
  items: [
    { institution: 'Syneffo Solutions', proffisational: 'Full Stack Web Development', duration: '1 year' },
    { institution: 'Musaliar College Pathanamthitta', degree: 'B.Com Finance and Taxation', duration: '3 years' },
    { institution: 'Govt HSS Thekkuthodu', degree: 'Computerised Commerce', duration: '2 years' },
  ]
};

const skills = {
  title: 'My Skills',
  description: 'A list of my technical skills.',
  items: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'MongoDB', 'Tailwind'],
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='min-h-[80vh] flex items-center py-12 xl:py-0'
    >
      <div className="container mx-auto pb-20 pt-[100px]">
        <h1 className="text-left text-5xl font-mono hover:text-emerald-400 xl:pr-[670px] mb-20 font-bold text-white">
          Abo<span className="text-emerald-400 hover:text-red-500 mb-20 font-bold">ut</span> me
        </h1>
        <Tabs className="flex flex-col xl:flex-row gap-12">
          <TabList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <Tab className="text-white hover:bg-emerald-400 hover:text-gray-700 font-bold font-mono rounded-md pb-1 pt-1 bg-white/10 pt-2 pb-2 text-center">Experience</Tab>
            <Tab className="text-white hover:bg-emerald-400 hover:text-gray-700 font-bold font-mono rounded-md pb-1 pt-1 bg-white/10 pt-2 pb-2 text-center">Education</Tab>
            <Tab className="text-white hover:bg-emerald-400 hover:text-gray-700 font-bold font-mono rounded-md pb-1 pt-1 bg-white/10 pt-2 pb-2  text-center">Skills</Tab>
            <Tab className="text-white hover:bg-emerald-400 hover:text-gray-700 font-bold font-mono rounded-md pb-1 pt-1 bg-white/10 pt-2 pb-2  text-center">About me</Tab>
          </TabList>

          <div className='min-h-[] w-full'>
         

                    <TabPanel className="h-96 w-full overflow-y-scroll gap-5">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-emerald-400 font-mono">{experience.title}</h2>
                <p className="mb-4 text-white/60 hover:text-emerald-400 font-mono">{experience.description}</p>
                <ul className="grid grid-cols-1 gap-4">
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className="p-4 bg-white/10 rounded-lg border border-white/20 text-white hover:text-emerald-400 shadow-lg transition hover:scale-105"
                    >
                      <strong className="block text-lg">{item.company}</strong>
                      <span>{item.position}</span> <br />
                      <span className="text-sm text-gray-300">({item.duration})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabPanel>

            {/* Education Tab Panel */}
            <TabPanel className="h-96 w-full overflow-y-scroll">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-emerald-400 font-mono">{education.title}</h2>
                <p className="mb-4 text-white/60 hover:text-emerald-400 font-mono">{education.description}</p>
                <ul className="grid grid-cols-1 gap-4">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="p-4 bg-white/10 rounded-lg border border-white/20 text-white hover:text-emerald-400 shadow-lg transition hover:scale-105"
                    >
                      <strong className="block text-lg">{item.institution}</strong>
                      <span>{item.degree}</span> <br />
                      <span className="text-sm text-gray-300">({item.duration})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabPanel>

            {/* Skills Tab Panel */}
            <TabPanel>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-emerald-400 font-mono">{skills.title}</h2>
                <p className="mb-4 text-white hover:text-white/60">{skills.description}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {skills.items.map((skill, index) => (
                    <li key={index} className='text-white hover:text-emerald-400'>{skill}</li>
                  ))}
                </ul>
              </div>
            </TabPanel>

            {/* About Me Tab Panel */}
            <TabPanel>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-emerald-400 font-mono">{about.title}</h2>
                <p className="mb-4 text-white hover:text-white/60">{about.description}</p>
                <ul className="space-y-4">
                  {about.info.map((info, index) => (
                    <li key={index} className='text-white hover:text-emerald-400'>
                      <strong>{info.fieldName}</strong>: {info.fieldValue}
                    </li>
                  ))}
                </ul>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
