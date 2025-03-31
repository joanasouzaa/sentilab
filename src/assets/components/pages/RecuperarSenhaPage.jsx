import { useNavigate } from "react-router-dom"

export default function RecuperarSenhaPage() {

  const navigate = useNavigate();
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container flex-1 flex items-center justify-center py-12">
          <div className="mx-auto w-full max-w-md space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Recuperar Senha</h1>
              <p className="text-muted-foreground">Enviaremos um link para redefinir sua senha</p>
            </div>
  
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="seu@email.com" type="email" />
              </div>
  
              <button className="w-full" onClick={()=>alert("Confira seu email")}>Enviar Link de Recuperação</button>
            </div>
  
            <div className="flex justify-between pt-4">

                <button onClick={()=>navigate("/login")}>Voltar para Login</button>

            </div>
          </div>
        </div>
      </div>
    )
  }