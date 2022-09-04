import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Blog from './pages/Blog';
import Project from './pages/Project';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PageFound from './pages/PageFound';

function App() {

  return (
    <>
        <BrowserRouter>       
          <Routes>
            <Route path='/' element={ <Main/>}/>  
            <Route path='/blog' element={ <Blog />}/> 
            <Route path='/project' element={ <Project />}/> 
            <Route path='/contact' element={ <Contact />}/> 
            <Route path='/complexsign' element={ <SignUp />}/> 
            <Route path='/complexlogin' element={ <Login />}/>
            <Route path='*' element={ <PageFound />}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
