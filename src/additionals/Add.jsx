import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");

  const [projectt, setProject] = useState({
    number: "",
    category: "",
    title: "",
    description: "",
    stack: "",
  });

  const handleChange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const convert = async (e) => {
    setPhoto(await convertToBase64(e.target.files[0]));
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // const AddProject = async () => {
  //   try {
  //     const projectData = {
  //       ...project,
  //       stack: project.stack.split(',').map((item) => ({ name: item.trim() })),
  //     };

  //     const res = await axios.post("http://localhost:3008/api/add", { project: projectData, photo });
  //     if (res.status === 201) {
  //       navigate('/');  // Navigate to the Projects page after adding a project
  //     }
  //   } catch (error) {
  //     console.error("Error adding project:", error);
  //   }
  // };

  const AddProject=async()=>{
    console.log(projectt);
    console.log(`photo is ${photo}`);
    const res=await axios.post("http://localhost:3008/api/add",{projectt,photo})
    console.log(res);
    if(res.status==201){
      navigate('/')}}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-white mb-5">Add New Project</h1>
        <div className="mb-5">
          {photo && <img src={photo} alt="Project" className="w-full h-48 object-cover rounded-lg mb-4" />}
          <input
            type="file"
            onChange={convert}
            id="photo"
            name="photo"
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-gray-700 hover:file:bg-emerald-100"
          />
        </div>

        <form className="space-y-4">
          <input
            type="text"
            name="number"
            placeholder="Project Number"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="text"
            name="stack"
            placeholder="Stack (comma separated)"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </form>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={AddProject}
            className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-all duration-300"
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
