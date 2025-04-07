import { useNavigate } from "react-router-dom"

export default function LoginPage() {

    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="container flex-1 flex items-center py-12">
                    <div className="mx-auto w-full max-w-md space-y-8 items-center justify-center">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-muted-foreground m-t-1">Escolha como deseja entrar na plataforma</p>
                        </div>

                        <div className="space-y-4">

                            <button className="w-full h-16 text-lg justify-start border-1 rounded-sm cursor-pointer" onClick={() => navigate("/login/professor")}>Entrar como Professor </button>

                            <button className="w-full h-16 text-lg justify-start border-1 rounded-sm cursor-pointer" onClick={() => navigate("/login/aluno")}>Entrar como Aluno</button>
                        </div>

                        <div className="flex justify-between pt-4">
                            <button className="cursor-pointer" onClick={() => navigate("/")}>Voltar</button>
                            <button className="bg-black text-white p-2 rounded-sm cursor-pointer" onClick={() => navigate("/cadastrar")}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}