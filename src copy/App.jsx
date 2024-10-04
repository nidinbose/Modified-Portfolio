
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { motion } from 'framer-motion';
import Port from './components/Port'
// import photo from './components/Photo';




function App() {

  // const jetbrains


  return (
    <>
   
       <BrowserRouter>
       <Routes>

          <Route path='/' Component={Port}/>
          {/* <Route path='photo' Component={photo}/> */}



       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
