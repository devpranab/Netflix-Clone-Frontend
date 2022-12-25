import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './ContextAPI/AuthContext';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Account from './components/Account/Account';

function App() {
  return (
    <AuthContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;