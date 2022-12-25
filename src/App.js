import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;