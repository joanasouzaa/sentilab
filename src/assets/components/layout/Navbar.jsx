import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../images/logo.png';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === "/";

    return (
        <>
            <header className="border-black sticky top-0 z-1000">
                <nav className={`border-b-gray-200 flex items-center p-2 bg-white text-black ${isHome ? "justify-between" : "justify-center"}`}>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="" className="w-10 h-10" />
                        <h1 className="text-xl font-bold">SentiLab</h1>
                    </div>
                    {isHome && (
                        <div className="flex justify-center items-center gap-4 mr-2">
                            <a href="#sobre" className="p-1 rounded-sm font-bold">Sobre</a>
                            <a href="#contato" className="justify-center rounded-sm font-bold">Contato</a>
                            <button className="bg-[#D97C2B] p-1 items-center cursor-pointer rounded-sm text-white font-bold" onClick={() => navigate("/login")}>Login</button>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default Navbar;