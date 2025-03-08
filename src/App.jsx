import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/main.css';
import Experience from './components/Experience';

function App() {
  return (
    <>
    <div className='app'>
      <Router> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Experience/>}/>
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
