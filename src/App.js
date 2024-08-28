import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Pages/auth/Signup";
import Login from './Pages/auth/Login'
import Home from './Pages/Home'




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
