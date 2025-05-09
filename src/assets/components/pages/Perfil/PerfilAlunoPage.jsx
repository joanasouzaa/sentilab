import ImportarImagem from "../../layout/ImportarImagem";

export default function PerfilAlunoPage() {
    return (
        <div className="flex flex-col min-h-screen items-center">
            <main className="flex-1 container py-8">
                <div className="grid gap-8 md:grid-cols-[250px_1fr]">
                    <div className="space-y-6">
                        <div className="flex flex-col items-center space-y-2">
                           <ImportarImagem/>
                            <h2 className="text-xl font-bold">Maria Santos</h2>
                            <p className="text-sm text-gray-500">2º Ano - Turma B</p>
                        </div>

                        <div className="space-y-2">
                            <button className="w-full border p-2 text-left">👤 Perfil</button>
                            <button className="w-full border p-2 text-left">📄 Atividades</button>
                            <button className="w-full border p-2 text-left">⚙️ Configurações</button>
                            <button className="w-full border p-2 text-left text-red-500">🚪 Sair</button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 border-b pb-2">
                            <button className="border-b-2 border-black p-2">Atividades</button>
                            <button className="p-2">Progresso</button>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-lg font-medium">Minhas Atividades</h3>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div key={item} className="border p-4 rounded">
                                        <h4 className="font-bold">Atividade {item}</h4>
                                        <p className="text-sm text-gray-500">Y</p>
                                        <p className="text-sm text-gray-500">{item % 2 === 0 ? "Exercícios sobre afasda" : "Lista de problemas"}</p>
                                        <button className="mt-2 border p-2 w-full">{item <= 2 ? "Ver Resultado" : "Iniciar"}</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="border p-4 rounded">
                                <h4 className="font-bold">Progresso Geral</h4>
                                <p className="text-sm text-gray-500">Seu desempenho em todas as disciplinas</p>
                                <div className="space-y-2">
                                    {[{ nome: "X", valor: 75 }, { nome: "Y", valor: 60 }, { nome: "Z", valor: 85 }, { nome: "A", valor: 70 }].map((disciplina) => (
                                        <div key={disciplina.nome}>
                                            <div className="flex justify-between">
                                                <span className="text-sm font-medium">{disciplina.nome}</span>
                                                <span className="text-sm text-gray-500">{disciplina.valor}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-200 rounded">
                                                <div className="h-2 bg-blue-500" style={{ width: `${disciplina.valor}%` }}></div>
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
