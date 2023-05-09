import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import About from './components/About';


function App() {
  return (
    <>
    <About/>
    <Routes>
      <Route path='/calculator' element={<Calculator/>}/>
      <Route path='/quote' element ={<Quote />} />
      </Routes>
      </>
  );
}

export default App;
