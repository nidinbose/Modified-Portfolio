
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { motion } from 'framer-motion';
import Port from './components/Port'
import Add from './additionals/Add';
import About from './components/About';
import Service from './components/Services';
import Projects from './components/Projects';
import Contact from './components/ContactMe';
// import photo from './components/Photo';




function App() {

  // const jetbrains


  return (
    <>
   
       <BrowserRouter>
       <Routes>

          <Route path='/' Component={Port}/>
          <Route path='/add' Component={Add}/>
          <Route path='/about' Component={About}/>
          <Route path='/services' Component={Service}/>
          <Route path='/project' Component={Projects}/>
          <Route path='/contact' Component={Contact}/>z



       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
