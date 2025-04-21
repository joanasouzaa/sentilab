import { useNavigate } from "react-router-dom"

export default function LoginPage() {

    const navigate = useNavigate();


    return (
        <>
            <div className=" flex flex-col min-h-screen items-center">
                <div className="container flex-1 flex items-center py-12">
                    <div className="mx-auto w-full max-w-md space-y-8 items-center justify-center">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold text-[#D97C2B]">Login</h1>
                            <p className="text-muted-foreground m-t-1">Escolha como deseja entrar na plataforma</p>
                        </div>

                        <div className="space-y-4">

                            <button className="border-[#D97C2B] w-full h-16 text-lg font-bold justify-start border-1 rounded-sm cursor-pointer hover:bg-[#D97C2B] hover:text-white focus:outline-offset-2" onClick={() => navigate("/login/professor")}>Entrar como Professor </button>

                            <button className="border-[#D97C2B] w-full h-16 text-lg font-bold justify-start border-1 rounded-sm cursor-pointer hover:bg-[#D97C2B] hover:text-white" onClick={() => navigate("/login/aluno")}>Entrar como Aluno</button>
                        </div>

                        <div className="flex justify-between pt-4">
                            <button className="cursor-pointer hover:scale-105 hover:underline" onClick={() => navigate("/")}>Voltar</button>
                            <button className="bg-[#D97C2B] text-white font-bold p-2 rounded-sm cursor-pointer" onClick={() => navigate("/cadastrar")}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}