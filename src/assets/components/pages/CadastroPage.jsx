import { useNavigate } from "react-router-dom"

export default function CadastroPage() {

const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container flex-1 flex items-center justify-center py-12">
                <div className="mx-auto w-full max-w-md space-y-8">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Cadastro</h1>
                        <p className="text-muted-foreground">Crie sua conta na EduPlataforma</p>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="firstName">Nome</label>
                                <input id="firstName" placeholder="João" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lastName">Sobrenome</label>
                                <input id="lastName" placeholder="Silva" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email">Email</label>
                            <input id="email" placeholder="seu@email.com" type="email" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="confirmPassword">Confirmar Senha</label>
                            <input id="confirmPassword" type="password" />
                        </div>

                        <div className="space-y-2">
                            <label>Tipo de Usuário</label>

                            <div className="flex items-center space-x-2">
                                <input type="radio" value="aluno" id="aluno" />
                                <label htmlFor="aluno">Aluno</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" value="professor" id="professor" />
                                <label htmlFor="professor">Professor</label>
                            </div>
                        </div>

                        <button className="w-full" onClick={()=>alert("usuário cadastrado")}>Cadastrar</button>
                    </div>

                    <div className="flex justify-between pt-4">
                        <button onClick={()=>navigate("/")}>Voltar</button>

                        <div className="text-sm text-muted-foreground">
                            Já tem uma conta?{" "}
                            <button className="text-primary hover:underline" onClick={()=>navigate("/login")}>Faça login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}