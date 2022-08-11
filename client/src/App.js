import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Main/>}/>  
            <Route path="/blog" element={ <Main/>}/>  
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
