import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/login.js';
import Register from './pages/registration.js';
import Home from './pages/home.js'; // Add this page if you have it or create a simple Home component

function App() {
  return (
    <Router>
      <Routes>
        {/* No navbar on login or register */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Show navbar only on Home page */}
        <Route
          path="/home"
          element={
            <>
             
              <Home />
            </>
          }
        />
      </Routes>

      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
