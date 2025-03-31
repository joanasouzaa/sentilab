import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer className="w-full py-6">
                <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between" >
                    <p className="text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} SentiLab. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Termos de Uso
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Política de Privacidade
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}