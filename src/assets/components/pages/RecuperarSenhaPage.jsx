import { useNavigate } from "react-router-dom"

export default function RecuperarSenhaPage() {

  const navigate = useNavigate();


  return (
    <div className="flex flex-col min-h-screen items-center ">
      <div className="container flex-1 flex items-center justify-center py-12">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#D97C2B]">Recuperar Senha</h1>
            <p className="text-muted-foreground">Enviaremos um link para redefinir sua senha</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="gap-1">Email:</label>
              <input id="email" placeholder="seu@email.com" type="email" className="border-1 rounded-sm p-1 w-full outline-none" required />
            </div>

            <button className="w-full cursor-pointer text-white font-bold rounded-sm p-1 bg-[#D97C2B]" onSubmit={(e)=>alert("link enviar")}>Enviar Link de Recuperação</button>
            <div className="flex justify-between pt-4">
              <button onClick={() => navigate("/login")} className="cursor-pointer text-black p-1 rounded-sm underline">Voltar para Login</button>
            </div>
          </form>
        </div>
      </div>

    </div>

  )
}