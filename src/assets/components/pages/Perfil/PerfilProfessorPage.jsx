import { useNavigate } from "react-router-dom";
 import ImportarImagem from "../../layout/ImportarImagem";


export default function PerfilProfessorPage() {

    const navigate = useNavigate();
    const enviarImagem = async (imagem, id) => {
        const formData = new FormData();
        formData.append('imagem', imagem);
        formData.append('id', id);
      
        try {
          const resposta = await axios.post('http://localhost:3001/api/foto', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Upload bem-sucedido:', resposta.data);
        } catch (erro) {
          console.error('Erro no upload:', erro);
        }
      };
      

    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1 container py-8">
                <div className="grid gap-8 md:grid-cols-[250px_1fr]">
                    <div className="space-y-6">
                        <div className="flex flex-col items-center space-y-2">
                            <ImportarImagem /> 
                          <button onClick={()=>enviarImagem(imagem)}>Alterar foto</button>
                            <h2 className="text-xl font-bold">Prof. { }</h2>
                            <p className="text-sm text-muted-foreground"></p>
                        </div>

                        <div className="space-y-2 p-2 m-1">
                            <button variant="outline" className="w-full justify-start outline cursor-pointer">Perfil</button>
                            <button variant="outline" className="w-full justify-start outline cursor-pointer">Conteúdos</button>
                            <button variant="outline" className="w-full justify-start outline cursor-pointer">Configurações</button>
                            <button variant="outline" className="w-full text-destructive outline cursor-pointer outline-red-400 hover:bg-red-300" onClick={() => navigate("/")}>
                                Sair
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="tabs">
                            <div className="tabs-list grid w-full grid-cols-2">
                                <button className="tab-trigger">Conteúdos</button>
                                <button className="tab-trigger">Turmas</button>
                            </div>

                            <div className="tab-content conteudos space-y-4 pt-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">Meus Conteúdos</h3>
                                    <button>

                                        + Novo Conteúdo
                                    </button>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <div key={item} className="card">
                                            <div className="card-header pb-2">
                                                <h4 className="card-title">Álgebra Linear</h4>
                                                <p className="card-description">Módulo {item}</p>
                                            </div>
                                            <div className="card-content">
                                                <p className="text-sm text-muted-foreground">
                                                    Conteúdo sobre matrizes, determinantes e sistemas lineares.
                                                </p>
                                                <div className="flex justify-end mt-4">
                                                    <button size="sm">
                                                        Editar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="tab-content turmas space-y-4 pt-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">Minhas Turmas</h3>
                                    <button>
                                        + Nova Turma
                                    </button>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="card">
                                            <div className="card-header pb-2">
                                                <h4 className="card-title">Turma {item}º Ano</h4>
                                                <p className="card-description">Matemática - 2024</p>
                                            </div>
                                            <div className="card-content">
                                                <p className="text-sm text-muted-foreground">{20 + item} alunos matriculados</p>
                                                <div className="flex justify-end mt-4">
                                                    <button size="sm">
                                                        Gerenciar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
