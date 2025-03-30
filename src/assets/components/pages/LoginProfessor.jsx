import { Link } from "react-router-dom";

export default function LoginProfessor() {
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
                                    <Link href="/recuperar-senha" className="text-sm text-primary hover:underline">
                                        Esqueceu a senha?
                                    </Link>
                                </div>
                                <input id="password" type="password" />
                            </div>

                            <button className="w-full">Entrar</button>
                        </div>

                        <div className="flex justify-between pt-4">
                            <Link href="/login">
                                <Button variant="ghost">
                                    Voltar
                                </Button>
                            </Link>

                            <Link href="/cadastro">
                                <button variant="outline">Cadastrar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}