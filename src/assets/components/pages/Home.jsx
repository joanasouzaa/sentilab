import { useNavigate } from "react-router-dom";
import { useState } from "react";
import imagemHome from '../../images/inteligencia_emocional_educacao.png';
import styles from '../../styles/Home/Home.module.css'

function Home() {

    const navigate = useNavigate();

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar qualquer outra lógica de envio
        setIsDialogOpen(true);
    };


    return (
        <>
            <main className="flex-1">
                <section className={`${styles.welcome} w-full py-12 md:py-24 lg:py-32 bg-gray-600 justify-items-center`}>
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl tracking-tight">Bem-vindo ao SentiLab</h1>
                                <p className="max-w-[700px] text-muted-foreground md:text-xl italic tracking-wider">
                                    Seu laboratório de sentimentos e emoções
                                </p>
                            </div>
                            <div className="space-x-4">
                                <button className={`${styles.btnComeçar} font-bold text-white p-2 rounded-sm cursor-pointer hover:scale-105`} onClick={() => navigate("/login")}>Começar Agora</button>
                                <button className={`${styles.btnSaibaMais} font-bold border-1 p-2 rounded-sm cursor-pointer hover:scale-105`}>Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre Nossa Empresa</h2>
                                <p className="text-muted-foreground md:text-lg">
                                    O SentiLab nasceu com a missão de transformar a educação através da tecnologia e Inteligência Emocional. Oferecemos uma plataforma completa para professores compartilharem conteúdos e alunos acessarem atividades de forma organizada e intuitiva.
                                </p>
                                <p className="text-muted-foreground md:text-lg">
                                    Nossa equipe é formada por educadores e desenvolvedores apaixonados por criar soluções que facilitam o processo de ensino e aprendizagem.
                                </p>
                            </div>
                            <div className="flex items-center justify-center">

                                <img src={imagemHome} alt="Imagem de professora com livro mão, alunos sentados e na lousa escrio 'Emotional Intelligence'" className="rounded-lg w-full h-[400px] flex items-center justify-center" />

                            </div>
                        </div>
                    </div>
                </section>

                <section id="contato" className={`${styles.contact} w-full py-12 md:py-24 lg:py-32 bg-gray-600 justify-items-center`}>
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto max-w-2xl space-y-6">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Entre em Contato</h2>
                                <p className="text-muted-foreground md:text-lg">
                                    Tem alguma dúvida ou sugestão? Envie-nos uma mensagem.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <form action="" onSubmit={handleSubmitMessage}>
                                    <div className="space-y-2 flex flex-col">
                                        <label htmlFor="email" className="text-sm font-medium leading-none ">Email:</label>
                                        <input id="email" placeholder="seu@email.com" type="email" className="border-1 p-1 outline-none rounded-sm" />
                                    </div>
                                    <div className={`space-y-2 flex flex-col`}>
                                        <label htmlFor="message" className="text-sm font-medium leading-none mt-2">Mensagem:</label>
                                        <textarea id="message" placeholder="Digite sua mensagem aqui..." className="min-h-[150px] border-1 p-1 resize-none outline-none rounded-sm" />
                                    </div>
                                    <button className="w-full bg-black text-white rounded-sm p-1 font-semibold mt-5 hover:scale-102 cursor-pointer" onOpen>Enviar Mensagem</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {isDialogOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                            <div className="mb-4">
                                <h2 className="text-xl font-bold">Obrigado pela sua mensagem!</h2>
                                <p className="text-sm text-gray-600">
                                    Recebemos sua mensagem e entraremos em contato em breve.
                                </p>
                            </div>
                            <div className="py-4">
                                <p className="text-center text-gray-500">
                                    Deseja acessar sua conta ou criar uma nova?
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
                                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={()=>navigate("/login")}>Fazer Login</button>
                                
                                    <button className="w-full border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition" onClick={()=>navigate("/cadastrar")}>Cadastrar</button>
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

        </>
    )
}

export default Home;