import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function CadastroPage() {

    const navigate = useNavigate();


    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [escolas, setEscolas] = useState([]);
    const[escolaSelecionada, setEscolaSelecionada] = useState("");
    const [senha, setSenha] = useState("");
    // const[confirmarSenha, setConfirmarSenha] = useState("");
    const [tipo, setTipo] = useState("");

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    console.log(tipo)
    useEffect(() => {
        fetch("http://localhost:3001/api/escolas")
            .then(res => res.json())
            .then(data => setEscolas(data))
            .catch(err => {
                console.log("Erro ao carregar escolas:", err);
                alert("Erro ao carregar escolas. Tente novamente mais tarde.");
            });
    }, []);

    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/auth/cadastro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome,
                    sobrenome,
                    email,
                    senha,
                    escola: Number(escolaSelecionada),
                    tipo
                })
            });

            if (response.ok) {
                setIsDialogOpen(true)
                setNome("");
                setSobrenome("");
                setEmail("");
                setSenha("");
                setEscolaSelecionada("");
                setTipo("");
            } else {
                const err = await response.text(); // ou .json() se o backend mandar JSON
                console.error("Erro no cadastro:" + err);
                alert("Erro no cadastro" + err)
            }
        } catch (erro) {
            console.error('Erro ao cadastrar usuário:' + erro);
            alert("Erro ao cadastrar usuário.")
        }

    }


    return (
        <main className="flex flex-col min-h-screen items-center">
            <div className="container flex-1 flex items-center justify-center py-12 rounded-lg">
                <div className={`mx-auto w-full max-w-md space-y-8 justify-center`}>
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold text-[#D97C2B]">Cadastro</h1>
                        <p className="text-muted-foreground">Crie sua conta no SentiLab</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleCadastro}>
                        <div className="grid grid-cols-2 gap-15">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="">Nome</label>
                                <input id="firstName" placeholder="João" value={nome} className="border-1 rounded-sm p-1" required onChange={(e) => setNome(e.target.value)} />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lastName">Sobrenome</label>
                                <input id="lastName" placeholder="Silva" value={sobrenome} className="border-1 rounded-sm p-1" required onChange={(e) => setSobrenome(e.target.value)} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email">Email:</label>
                            <input id="email" placeholder="seu@email.com" value={email} type="email" className="w-full border-1 rounded-sm p-1" required onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" value={senha} className="w-full border-1 rounded-sm p-1" required onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        {/* <div className="space-y-2">
                            <label htmlFor="confirmPassword">Confirmar Senha</label>
                            <input id="confirmPassword" type="password" value={senha} className="w-full border-1 rounded-sm p-1" required onChange={(e) => setSenha(e.target.value)} />
                        </div> */}

                        <div className="space-y-2">
                            <label htmlFor="escola">Qual sua escola?</label>
                            <select
                                name="escola"
                                id="escola"
                                value={escolaSelecionada}
                                onChange={(e) => setEscolaSelecionada(e.target.value)}
                                className="w-full border-1 rounded-sm" 
                                required
                                >
                                <option value="">Selecionar</option>
                                {escolas.map((item) => (

                                    <option key={item.id} value={item.id}>{item.nome}</option>
                                )
                                )}
                            </select>
                        </div>

                        <div className="space-y-2" required>
                            <label>Tipo de Usuário</label>

                            <div className="flex items-center space-x-2">
                                <input type="radio" name="type_user" id="aluno" value="aluno" onChange={(e) => setTipo(e.target.value)} />
                                <label htmlFor="aluno">Aluno</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" name="type_user" id="professor" value="professor" onChange={(e) => setTipo(e.target.value)} />
                                <label htmlFor="professor">Professor</label>
                            </div>

                        </div>

                        <button className="bg-[#D97C2B] w-full font-bold text-white rounded-sm p-1 hover:scale-105" >Cadastrar</button>
                    </form>

                    <div className="flex justify-between pt-4">
                        <button className="cursor-pointer hover:scale-105" onClick={() => navigate("/")}>Voltar</button>

                        <div className="text-sm text-muted-foreground">
                            Já tem uma conta?{" "}
                            <button className="text-primary cursor-pointer hover:underline" onClick={() => navigate("/login")}>Faça login</button>
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
                        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
                            <button className="bg-[#FFDC6B] w-full text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={() => navigate("/login")}>Fazer Login</button>
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