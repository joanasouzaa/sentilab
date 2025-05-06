import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export default function LoginAluno() {

    const navigate = useNavigate();

    // const [email, setEmail] = useState('');
    // const [senha, setSenha] = useState('');

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     const response = await fetch('http://localhost:3001/auth/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email, senha })
    //     });

    //     const data = await response.json;

    //     if (response.ok) {
    //         localStorage.setItem('token', data.token);
    //         localStorage.setItem('usuario', JSON.stringify(data.usuario));

    //         if (data.usuario === 'Professor') {
    //             navigate('/perfil/professor')
    //         } else {
    //             navigate('perfil/aluno')
    //         }
    //     } else {
    //         alert(data.mensagem)
    //     }
    // }
    return (
        <>
            <div className="flex flex-col min-h-screen items-center">
                <div className="container flex-1 flex items-center justify-center py-12">
                    <div className="mx-auto w-full max-w-md space-y-8">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold text-[#D97C2B]">Login de Aluno</h1>
                            <p className="text-muted-foreground">Entre para acessar sua conta</p>
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block">Email:</label>
                                <input id="email" placeholder="aluno@exemplo.com" type="email"  className="border-1 rounded-sm p-1 w-full outline-none" required />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password">Senha: </label>

                                </div>
                                <input id="password" type="password" className="w-full border-1 rounded-sm p-1 outline-none" required />
                                <button className="text-sm text-primary hover:underline" onClick={() => navigate("/recuperar-senha")}>Esqueceu a senha?</button>
                            </div>

                            <button className="w-full bg-[#D97C2B] text-white font-bold p-1 rounded-sm cursor-pointer" onSubmit={()=>handleLogin()}>Entrar</button>
                        </form>

                        <div className="flex justify-between pt-4">
                            <button onClick={() => navigate("/login")} className="cursor-pointer"> Voltar</button>

                            <button onClick={() => navigate("/cadastro")} className="cursor-pointer font-bold hover:bg-[#D97C2B] hover:text-white p-1 rounded-sm">Cadastrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}