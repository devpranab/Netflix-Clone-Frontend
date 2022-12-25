import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './ContextAPI/AuthContext';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;