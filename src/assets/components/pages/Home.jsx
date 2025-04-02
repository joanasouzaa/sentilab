import { useNavigate } from "react-router-dom";
import imagemHome from '../../images/inteligencia_emocional_educacao.png';
import styles from '../../styles/Home/Home.module.css'

function Home() {

    const navigate = useNavigate();


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
                                <button className={`${styles.btnComeçar} font-bold text-white p-2 rounded-sm cursor-pointer hover:shadow-md`} onClick={()=> navigate("/login")}>Começar Agora</button>
                                <button className={`${styles.btnSaibaMais} font-bold border-1 p-2 rounded-sm cursor-pointer hover:shadow-md`}>Saiba Mais</button>
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
                                <div className="space-y-2 flex flex-col">
                                    <label htmlFor="email" className="text-sm font-medium leading-none ">
                                        Email
                                    </label>
                                    <input id="email" placeholder="seu@email.com" type="email" className="border-1 p-1 outline-none rounded-sm"/>
                                </div>
                                <div className={`space-y-2 flex flex-col`}>
                                    <label htmlFor="message" className="text-sm font-medium leading-none">Mensagem</label>
                                    <textarea id="message" placeholder="Digite sua mensagem aqui..." className="min-h-[150px] border-1 p-1 resize-none outline-none rounded-sm" />
                                </div>
                                <button className="w-full bg-black text-white rounded-sm p-1 font-semibold" onClick={() => alert('Mensagem enviada')} onOpen>Enviar Mensagem</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;