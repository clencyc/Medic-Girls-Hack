import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Pages/auth/Signup";
import Login from './Pages/auth/Login';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Resources from "./Pages/Resources";
import Communityreports from "./Components/Communityreports/Communityreports"; // Import the Communityreports component

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('sw')}>Swahili</button>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community-reports" element={<Communityreports />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


