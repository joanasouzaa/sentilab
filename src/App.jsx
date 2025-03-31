import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./assets/components/layout/Navbar"
import Home from "./assets/components/pages/Home";
import Footer from "./assets/components/layout/Footer";
import LoginPage from "./assets/components/pages/LoginPage";
import LoginProfessor from "./assets/components/pages/LoginProfessor";
import LoginAluno from "./assets/components/pages/LoginAluno";
import PerfilAlunoPage from "./assets/components/pages/Perfil/PerfilAlunoPage";
import PerfilProfessorPage from "./assets/components/pages/Perfil/PerfilProfessorPage";
import RecuperarSenhaPage from "./assets/components/pages/RecuperarSenhaPage";
import CadastroPage from "./assets/components/pages/CadastroPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/professor" element={<LoginProfessor/>}/>
        <Route path="/login/aluno" element={<LoginAluno/>}/>
        <Route path="/perfil/professor" element={<PerfilProfessorPage/>}/>
        <Route path="/perfil/aluno" element={<PerfilAlunoPage/>}/>
        <Route path="/recuperar-senha" element={<RecuperarSenhaPage/>}/>
        <Route path="/cadastrar" element={<CadastroPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
