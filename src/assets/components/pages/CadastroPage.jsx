import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Cadastro/CadastroPage.module.css"


export default function CadastroPage() {

const navigate = useNavigate();
// const [isTeacher, setIsTeacher] = useState('');
const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar qualquer outra lógica de envio
        setIsDialogOpen(true);
    };


    return (
    <main className="flex flex-col min-h-screen items-center">
            <div className="container flex-1 flex items-center justify-center py-12 bg-gray-100 rounded-lg">
                <div className={`mx-auto w-full max-w-md space-y-8 justify-center`}>
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Cadastro</h1>
                        <p className="text-muted-foreground">Crie sua conta no SentiLab</p>
                    </div>

                    <form className={`${styles.formCadastro} space-y-4 `} onSubmit={handleSubmitMessage}>
                        <div className="grid grid-cols-2 gap-15">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="">Nome</label>
                                <input id="firstName" placeholder="João" className="border-1 rounded-sm p-1" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lastName">Sobrenome</label>
                                <input id="lastName" placeholder="Silva" className="border-1 rounded-sm p-1"/>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email">Email:</label>
                            <input id="email" placeholder="seu@email.com" type="email" className="w-full border-1 rounded-sm p-1"/>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" className="w-full border-1 rounded-sm p-1"/>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="confirmPassword">Confirmar Senha</label>
                            <input id="confirmPassword" type="password" className="w-full border-1 rounded-sm p-1" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="school">Qual sua escola?</label>
                            <select name="school" id="school" className="w-full border-1 rounded-sm">
                                <option value="Selecionar" >Selecionar</option>
                                <option value="valor1">Valor1</option>
                                <option value="valor2">Valor2</option>
                                <option value="valor3">Valor3</option>
                            </select>
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

                        <button className={`${styles.btnFormCadastro} w-full font-bold text-white rounded-sm p-1 hover:scale-105`} onOpen>Cadastrar</button>
                    </form>

                    <div className="flex justify-between pt-4">
                        <button className="cursor-pointer hover:scale-105" onClick={()=>navigate("/")}>Voltar</button>

                        <div className="text-sm text-muted-foreground">
                            Já tem uma conta?{" "}
                            <button className="text-primary cursor-pointer hover:underline" onClick={()=>navigate("/login")}>Faça login</button>
                        </div>
                    </div>
                </div>
            </div>
            {isDialogOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                            <div className="mb-4">
                                <h2 className="text-xl font-bold">Usuário cadastrado com sucesso!</h2>
                                <p className="text-sm text-gray-600">
                                    Aproveite ao máximo nosso sistema.
                                </p>
                            </div>
                            <div className="py-4">
                                <p className="text-center text-gray-500 text-size-48">
                                    Acesse agora sua conta
                                </p>
                            </div>
                            <div className={"flex flex-col sm:flex-row sm:justify-center sm:space-x-2"}>
                                    <button className={`${styles.btnLoginCadastro} w-full text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition`} onClick={()=>navigate("/login")}>Fazer Login</button>
                            </div>
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => setIsDialogOpen(false)}
                                    className="text-sm text-gray-500 underline hover:text-gray-700">Fechar</button>
                            </div>
                        </div>
                    </div>
                )}
        </main>
    )
}