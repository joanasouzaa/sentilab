import { useNavigate } from "react-router-dom"

export default function RecuperarSenhaPage() {

  const navigate = useNavigate();
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container flex-1 flex items-center justify-items-center py-12">
          <div className="mx-auto w-full max-w-md space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Recuperar Senha</h1>
              <p className="text-muted-foreground">Enviaremos um link para redefinir sua senha</p>
            </div>
  
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="gap-1">Email:</label>
                <input id="email" placeholder="seu@email.com" type="email" className="border-1 rounded-sm p-1 w-full" />
              </div>
  
              <button className="w-full cursor-pointer bg-black text-white rounded-sm p-1" onClick={()=>alert("Confira seu email")}>Enviar Link de Recuperação</button>
            </div>
  
            <div className="flex justify-between pt-4">

                <button onClick={()=>navigate("/login")} className="cursor-pointer bg-gray-200 text-black p-1 rounded-sm">Voltar para Login</button>

            </div>
          </div>
        </div>
      </div>
    )
  }