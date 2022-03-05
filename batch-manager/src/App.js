import React from 'react'
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
//import Home from './components/home';
import About from './components/About';
import Status from './components/Status';

const App = () => {
  return (
      <Router>
    <Navbar/>
   
    </Router>
  )
}

export default App