import React from 'react';

const About = () => {
  return (

<div className="container mx-auto p-4">
  <div className="grid gap-6 w-full items-start text-left lg:grid-cols-3">
    {/* <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 font-mono">
      <div className="flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40">
        <button className="w-full sm:w-auto text-lg font-medium hover:text-purple-400 bg-gray-500 text-white px-4 py-2 rounded-md">Hire</button>
      </div>
    </div> */}

    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 font-mono">
      <div className="flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40">
        <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 font-bold text-gray-500 hover:text-emerald-400">Name</p>
        <h1 className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 text-xl font-medium hover:text-purple-400">Nidinbose</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40 mt-6">
        <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 font-bold text-gray-500 hover:text-emerald-400">Experience</p>
        <h1 className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 text-lg font-medium hover:text-purple-400">10 Months</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40 mt-6">
        <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 font-bold text-gray-500 hover:text-emerald-400">Nationality</p>
        <h1 className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 text-xl font-medium hover:text-purple-400">Indian</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40 mt-6">
        <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 font-bold text-gray-500 hover:text-emerald-400">Freelance</p>
        <h1 className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 text-xl font-medium hover:text-purple-400">Available</h1>
      </div>
    </div>

    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40">
        <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 font-bold text-gray-500 hover:text-emerald-400">Phone</p>
        <h1 className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 text-xl font-medium hover:text-purple-400">7012543724</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40 mt-6">
        <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 font-bold text-gray-500 hover:text-emerald-400">Email</p>
        <h1 className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 text-xl font-medium hover:text-purple-400 lg:text-lg">nidinbose700@gmail.com</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40 mt-4">
        <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 font-bold text-gray-500 hover:text-emerald-400">Languages</p>
        <h1 className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 text-xl font-medium hover:text-purple-400">English, Malayalam</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40 mt-4">
        <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 font-bold text-gray-500 hover:text-emerald-400">Instagram</p>
        <h1 className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 text-xl font-medium hover:text-purple-400">@Nidinbose_</h1>
      </div>
    </div>
  </div>
</div>




  );
};

export default About;
