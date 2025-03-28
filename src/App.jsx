import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./assets/components/layout/Navbar"
import Home from "./assets/components/pages/Home";

function App() {
    return (
      <Router>
        <Navbar /> {/* A Navbar precisa estar dentro do Router */}
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    );
  }

export default App
