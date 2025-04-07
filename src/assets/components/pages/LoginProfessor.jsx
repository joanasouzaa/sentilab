import { useNavigate } from "react-router-dom";

export default function LoginProfessor() {

    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="container flex-1 flex items-center justify-center py-12">
                    <div className="mx-auto w-full max-w-md space-y-8">
                        <div className="space-y-2 text-center ">
                            <h1 className="text-3xl font-bold">Login de Aluno</h1>
                            <p className="text-muted-foreground">Entre para acessar sua conta</p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block">Email:</label>
                                <input id="email" placeholder="professor@exemplo.com" type="email" className="border-1 rounded-sm w-full p-1" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block">Senha:</label>
                                    
                                </div>
                                <input id="password" type="password" className="border-1 rounded-sm w-full p-1" />
                                <button onClick={() => navigate("/recuperar-senha")} className="text-sm text-primary hover:underline">Esqueceu a senha?</button>
                            </div>

                            <button onClick={()=>navigate("/perfil/professor")} className="w-full bg-black text-white rounded-sm p-1">Entrar</button>
                        </div>

                        <div className="flex justify-between pt-4">

                            <button onClick={() => navigate("/")}>Voltar</button>
                            <button onClick={() => navigate("/cadastrar")}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}