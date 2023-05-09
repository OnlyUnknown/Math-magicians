import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import About from './components/About';


function App() {
  return (
    <>
    <nav>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quotes</Link></li>
    </nav>
    <Routes>
    <Route path='/About' element={<About/>}/>
      <Route path='/calculator' element={<Calculator/>}/>
      <Route path='/quote' element ={<Quote />} />
      </Routes>
      </>
  );
}

export default App;
