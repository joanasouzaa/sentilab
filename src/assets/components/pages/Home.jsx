import { useLocation, useNavigate } from "react-router-dom";
import MensageHomeForm from "../layout/MensagemHomeForm";
import InputMensagemHome from "../layout/InputMensagemHome";
import styles from "../../styles/Home.module.css"
function Home() {

    const navigate = useNavigate();

  
    return (
        <>
            <section className={`${styles.container} border-black relative text-center justify-center items-center font-(family-name:<>)`}>

                <h1 className="font-medium text-5xl">SentiLab</h1>
                <p className="m-2 font-light tracking-wide italic">seu laboratório de sentimentos e emoções</p>
                <button className={`${styles.btnClick} rounded-sm`} onClick={() => navigate("/login")}>Vamos lá</button>
            </section>

            <section id="sobre" className={`${styles.container_sobre} text-center justify-center items-center m-h-750`}>
                <h2 className="font-medium text-3xl">Sobre nós</h2>
                <p className="block text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales elementum felis, ac mattis urna vehicula eget. Donec a ex vel nisl maximus efficitur eu a ligula. Quisque molestie magna vitae est sodales dapibus. Etiam lacinia vel arcu vel pellentesque. Donec auctor augue lorem, vitae posuere dolor ullamcorper scelerisque. Nam aliquet sem mi, vel commodo est sollicitudin auctor. Proin vel tincidunt metus, vel bibendum ipsum. Nam scelerisque, ligula sodales fermentum volutpat, elit massa cursus orci, id efficitur lacus felis non justo. Nunc suscipit rutrum auctor. Etiam gravida, arcu at dapibus venenatis, velit lectus feugiat mi, sed lacinia est enim vitae magna. Donec consequat velit id augue pharetra efficitur.</p>
            </section>
            <section id="contato" className={`${styles.container} text-center justify-center items-center bg-white m-h-750`}>
                <h2 className="font-medium  text-3xl">Entre em contato</h2>
                <form action="" className="">
                    <div className="">
                        <InputMensagemHome
                            type='email'
                            name='email'
                            placeholer='Informe seu melhor e-mail'
                        />
                        <MensageHomeForm
                            name='mensage'
                            placeholer='Escreva sua mensagem aqui'
                        />
                        <button className={`${styles.btnClick} rounded-sm`} onClick={()=>alert('Mensagem enviada')}>Enviar</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Home;