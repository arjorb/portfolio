import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Main/>}/>  
            <Route path='/blog' element={ <Blog />}/> 
            <Route path='/project' element={ <Project />}/> 
            <Route path='/contact' element={ <Contact />}/> 
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
