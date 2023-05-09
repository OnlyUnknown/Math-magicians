import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import About from './components/About';

function App() {
  return (
    <>
      <h1 className="Math">
        Math Magicians
      </h1>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/">About</Link>
            {' '}
            |&nbsp;
            {' '}
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
            {' '}
            |&nbsp;
            {' '}
          </li>
          <li><Link to="/quote">Quotes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
