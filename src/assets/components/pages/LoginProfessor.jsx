import { useNavigate } from "react-router-dom";

export default function LoginProfessor() {

    const navigate = useNavigate();


    const handleLogin = (e) =>{
        e.preventDefault
    }



    return (
        <>
            <div className="flex flex-col min-h-screen items-center">
                <div className="container flex-1 flex items-center justify-center py-12">
                    <div className="mx-auto w-full max-w-md space-y-8">
                        <div className="space-y-2 text-center ">
                            <h1 className="text-3xl font-bold text-[#D97C2B]">Login de Professor</h1>
                            <p className="text-muted-foreground">Entre para acessar sua conta</p>
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block">Email:</label>
                                <input id="email" placeholder="professor@exemplo.com" type="email" className="border-1 rounded-sm w-full p-1 outline-none" required />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block">Senha:</label>

                                </div>
                                <input id="password" type="password" className="border-1 rounded-sm w-full p-1 outline-none" required />
                                <button onClick={() => navigate("/recuperar-senha")} className="text-sm text-primary hover:underline">Esqueceu a senha?</button>
                            </div>

                            <button onSubmit={handleLogin} className="w-full text-white font-bold rounded-sm p-1 cursor-pointer bg-[#D97C2B]">Entrar</button>
                        </form>

                        <div className="flex justify-between pt-4">

                            <button onClick={() => navigate("/login")} className="cursor-pointer">Voltar</button>
                            <button onClick={() => navigate("/cadastro")} className="cursor-pointer font-bold hover:bg-[#D97C2B] hover:text-white p-1 rounded-sm">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}