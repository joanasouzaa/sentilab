import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./assets/components/layout/Navbar"
import Home from "./assets/components/pages/Home/Home";
import Footer from "./assets/components/layout/Footer";
import LoginPage from "./assets/components/pages/login/LoginPage";
import LoginProfessor from "./assets/components/pages/login/LoginProfessor";
import LoginAluno from "./assets/components/pages/login/LoginAluno";
import PerfilAlunoPage from "./assets/components/pages/perfil/PerfilAlunoPage";
import PerfilProfessorPage from "./assets/components/pages/perfil/PerfilProfessorPage";
import RecuperarSenhaPage from "./assets/components/pages/recuperar_senha/RecuperarSenhaPage";
import CadastroPage from "./assets/components/pages/Cadastro/CadastroPage";

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
        <Route path="/cadastro" element={<CadastroPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
