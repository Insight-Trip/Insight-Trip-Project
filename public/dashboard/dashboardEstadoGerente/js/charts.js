function buscarCidadesMaisVisitadas(apiUrl, elementoId, tituloGrafico) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const contextoGrafico = document.getElementById(elementoId);

            new Chart(contextoGrafico, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.cidade),  
                    datasets: [{
                        label: "Cidades Visitadas",
                        data: data.map(item => item.turistas_percentual),  
                        backgroundColor: ['#8BE4F0'],
                        borderColor: ['#0085EA'],
                        borderWidth: 1,
                        barThickness: 20
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
                            text: tituloGrafico || 'Cidades Mais Visitadas (Janeiro a Junho)',   
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
        })
        .catch(error => console.error('Erro ao buscar os dados das cidades:', error));
}

function buscarEventosComMaisTuristas(apiUrl, elementoId, tituloGrafico) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const contextoGrafico = document.getElementById(elementoId);
            
            new Chart(contextoGrafico, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.evento),  
                    datasets: [{
                        label: "Eventos",
                        data: data.map(item => item.turistas_percentual),  
                        backgroundColor: ['#b2e2ca'],
                        borderColor: ['#0B4900'],
                        borderWidth: 1,
                        barThickness: 20
                    }]
                },
                options: {
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
                            text: tituloGrafico || 'Eventos com Mais Turistas',  
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
        })
        .catch(error => console.error('Erro ao buscar os dados dos eventos:', error));
}

function buscarCidadesPerigosas(apiUrl, elementoId, tituloGrafico) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const contextoGrafico = document.getElementById(elementoId);

            new Chart(contextoGrafico, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.cidade),  
                    datasets: [{
                        label: "Cidades Perigosas",
                        data: data.map(item => item.criminosos_percentual),
                        backgroundColor: ['#d0c7ff'],
                        borderColor: ['#7E3FE1'],
                        borderWidth: 1,
                        barThickness: 20
                    }]
                },
                options: {
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
                            text: tituloGrafico || 'Cidades em Crescimento de Turistas',
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
        })
        .catch(error => console.error('Erro ao buscar os dados das cidades perigosas:', error));
}

function buscarSegurasVisitadas(apiUrl, elementoId, tituloGrafico) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const contextoGrafico = document.getElementById(elementoId);

            new Chart(contextoGrafico, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.cidade),  
                    datasets: [
                        {
                            label: 'Mais Visitadas',
                            data: data.map(item => item.turistas_percentual), 
                            backgroundColor: ['#d0c7ff'],
                            borderColor: ['#7E3FE1'],
                            borderWidth: 1
                        },
                        {
                            label: 'Mais Seguras',
                            data: data.map(item => item.qtd_crimes),  
                            backgroundColor: ['#b2e2ca'],
                            borderColor: ['#0B4900'],
                            borderWidth: 1
                        }
                    ]
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
                            text: tituloGrafico || 'Cidades Mais Visitadas e Seguras',
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
        })
        .catch(error => console.error('Erro ao buscar os dados das cidades seguras e visitadas:', error));
}

function buscarProximosEventos(apiUrl, elementoId, tituloGrafico) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const contextoGrafico = document.getElementById(elementoId);

            new Chart(contextoGrafico, {
                type: 'line',
                data: {
                    labels: data.map(item => item.evento),
                    datasets: [{
                        label: 'Próximos Eventos Globais',
                        data: data.map(item => item.percentual_participantes),
                        borderWidth: 2,
                        backgroundColor: ['#EB9191'],
                        borderColor: ['#EB1E1A'],
                        fill: true
                    }]
                },
                options: {
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
                            text: tituloGrafico || 'Próximos Eventos Globais',
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
        })
        .catch(error => console.error('Erro ao buscar os dados dos próximos eventos globais:', error));
}

function buscarViagensPorEstacao(apiUrl, elementoId, tituloGrafico) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const contextoGrafico = document.getElementById(elementoId);

            new Chart(contextoGrafico, {
                type: 'pie',
                data: {
                    labels: data.map(item => item.estacao), 
                    datasets: [{
                        label: tituloGrafico || 'Viagens por Estação do Ano',
                        data: data.map(item => item.totalViagens), 
                        backgroundColor: [
                            '#EB9191', '#8BE4F0', '#EBE591', '#b2e2ca'
                        ],
                        borderColor: [
                            '#EB1E1A', '#0085EA', '#EBC201', '#0B4900'
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
                            text: tituloGrafico || 'Viagens por Estação do Ano',
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
        })
        .catch(error => console.error('Erro ao buscar dados das viagens por estação:', error));
}

module.exports = {
    buscarCidadesMaisVisitadas,
    buscarEventosComMaisTuristas,
    buscarCidadesPerigosas,
    buscarSegurasVisitadas,
    buscarProximosEventos,
    buscarViagensPorEstacao
};