const EstadosDestaque = document.getElementById('EstadosDestaque');


function constructUrlDashboard({
    ibge,
    clima,
    evento,
    periodo,
    user
}) {
    const url = new URL(window.location.href);

    // Criando array de pares [chave, valor]
    const params = [
        ['estado', ibge],
        ['clima', clima],
        ['evento', evento],
        ['periodo', periodo],
        ['user', user]
    ];

    // Filtrando apenas os pares que têm valor definido
    const validParams = params
        .filter(([_, value]) => value !== null && value !== undefined)
        .map(([key, value]) => `${key}/${value}`);

    // Construindo o path
    url.pathname = ['dashboard/construir', ...validParams].join('/');

    console.log("URL gerada:", url.toString());

    const contexto = {
        estado: ibge,
        clima: clima,
        evento: evento,
        periodo: periodo,
        user: user
    };

    construirGraficos(contexto, 1);

    return fetch(url.toString())
        .then(response => {
            if (!response.ok) {
                throw new Error("Houve um erro na requisição da dashboard");
            }
            return response.json();
        })
        .then(dados => {
            construirGraficos(contexto, dados);
            return dados;
        })
        .catch(error => {
            console.error("Erro na chamada da requisição:", error);
            throw error;
        });
    }

function construirGraficos(contexto, dados) {
    console.log("Iniciando construirGraficos com:", { contexto, dados });
    
    let graficoBarrasEstadosDemandaSeguranca = false;
    let graficoBarrasLateraisDemandaEstrangeira = false;
    let graficoPizzaDemandaEventos = false;

    const contextKey = `${contexto.estado || 'null'}-${contexto.periodo || 'null'}-${contexto.clima || 'null'}-${contexto.user || 'null'}-${contexto.evento || 'null'}`;
    console.log("Chave do contexto:", contextKey);

    switch (contextKey) {
        case 'null-null-null-gerente-carnaval':
            console.log('Caso encontrado: Dashboard Brasil - Gerente - Carnaval');
            graficoPizzaDemandaEventos = true;
            graficoBarrasEstadosDemandaSeguranca = true;
            graficoBarrasLateraisDemandaEstrangeira = true;
            break;
        default:
            console.log('Nenhum caso correspondente encontrado para:', contextKey);
    }

    // Verifica se os elementos do DOM existem antes de criar os gráficos
    if (graficoBarrasEstadosDemandaSeguranca && !EstadosDestaque) {
        console.error('Elemento EstadosDestaque não encontrado no DOM');
        return;
    }

    if (graficoBarrasLateraisDemandaEstrangeira && !document.getElementById('cidadesSeguras')) {
        console.error('Elemento cidadesSeguras não encontrado no DOM');
        return;
    }

    if (graficoPizzaDemandaEventos && !document.getElementById('estacao')) {
        console.error('Elemento estacao não encontrado no DOM');
        return;
    }

    if(graficoBarrasEstadosDemandaSeguranca){
        new Chart(EstadosDestaque, {
            type: 'bar',
            data: {
                label: 'Estados em Destaque (Carnaval)',
                labels: ['São Paulo', 'Rio de Janeiro', 'Bahia', 'Santa Catarina', 'Rio Grande do Norte', 'Paraná', 'Minas Gerais', 'Amazonas'],
                datasets: [
                    {
                        label: 'Taxa de Tendência',
                        data: [80, 75, 70, 65, 60, 55, 50, 45],
                        backgroundColor: ['#d0c7ff'],
                        borderColor: ['#7E3FE1'],
                        borderWidth: 1
                    },
                    {
                        label: 'Taxa de Segurança',
                        data: [20, 15, 20, 30, 70, 65, 40, 60],
                        backgroundColor: ['#b2e2ca'],
                        borderColor: ['#0B4900'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: false,
                indexAxis: 'x',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            font: {
                                family: 'Abel',
                                size: 14
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            font: {
                                family: 'Abel',
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Estados em Destaque (Carnaval)',
                        position: 'top',
                        font: {
                            size: 14,
                            family: 'Abel',
                            weight: 'normal'
                        }
                    },
                    legend: {
                        labels: {
                            font: {
                                family: 'Abel',
                                size: 14
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }
        });
    }
    
    if(graficoBarrasLateraisDemandaEstrangeira){
        const cidadesSeguras = document.getElementById('cidadesSeguras');

        new Chart(cidadesSeguras, {
            type: 'bar',
            data: {
                labels: ['Estados Unidos (EUA)', 'Chile', 'Argentina'],
                datasets: [{
                    label: 'Maior Tendência Estrangeira',
                    data: [80, 50, 30, 59, 27],
                    borderWidth: 1,
                    backgroundColor: ['#8BE4F0'],
                    borderColor: ['#0085EA']
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            font: {
                                family: 'Abel',
                                size: 14
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            font: {
                                family: 'Abel',
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Maior tendência de Origens Estrangeiras',
                        position: 'top',
                        font: {
                            size: 14,
                            family: 'Abel',
                            weight: 'normal'
                        }
                    },
                    legend: {
                        labels: {
                            font: {
                                family: 'Abel',
                                size: 14
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    intersect: false,
                },
            }
        });
    }
   
    if(graficoPizzaDemandaEventos){
        const estacao = document.getElementById('estacao');

        new Chart(estacao, {
            type: 'pie',
            data: {
                labels: ['Primavera', 'Verão', 'Outono', 'Inverno'],
                datasets: [{
                    label: 'Viagens por Estação do Ano',
                    data: [10, 50, 10, 30],
                    backgroundColor: [
                        '#EB9191',
                        '#8BE4F0',
                        '#EBE591',
                        '#b2e2ca'
                    ],
                    borderColor: [
                        '#EB1E1A',
                        '#0085EA',
                        '#EBC201',
                        '#0B4900'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Viagens por Estação do Ano',
                        position: 'top',
                        font: {
                            size: 14,
                            family: 'Abel',
                            weight: 'normal'
                        }
                    },
                    legend: {
                        position: 'right',
                        labels: {
                            font: {
                                family: 'Abel',
                                size: 14
                            }
                        }
                    }
                }
            }
        });
    }
   
}

const parametrosTeste = {
    ibge: undefined,
    clima: undefined,
    evento: "carnaval",
    periodo: undefined,
    user: "gerente"
};

constructUrlDashboard(parametrosTeste);

