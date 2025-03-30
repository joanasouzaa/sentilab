import { Link, useNavigate } from "react-router-dom";

export default function LoginAluno() {

    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="container flex-1 flex items-center justify-center py-12">
                    <div className="mx-auto w-full max-w-md space-y-8">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold">Login de Aluno</h1>
                            <p className="text-muted-foreground">Entre para acessar sua conta</p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email">Email</label>
                                <input id="email" placeholder="professor@exemplo.com" type="email" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password">Senha</label>
                                        <button className="text-sm text-primary hover:underline" onClick={()=>navigate("/recuperar-senha")}>Esqueceu a senha?</button>
                                </div>
                                <input id="password" type="password" />
                            </div>

                            <button className="w-full" onClick={()=>navigate("/perfil/aluno")}>Entrar</button>
                        </div>

                        <div className="flex justify-between pt-4">
                                <button onClick={()=>navigate("/login")}> Voltar</button>

                                <button>Cadastrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}