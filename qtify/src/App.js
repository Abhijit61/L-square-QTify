import Navbar from "./Navbar/Navbar"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let emptystr = "";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar searchData={emptystr}/>} />
      </Routes>
    </Router>
  );
}

export default App;
