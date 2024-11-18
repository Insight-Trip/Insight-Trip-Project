
const EstadosDestaque = document.getElementById('estados-destaque');

function fetchEstadosDestaque(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    return fetch(`http://localhost:3000/api/estados-destaque?${queryParams}`)
        .then(response => {
            if (!response.ok) {
                console.error("Erro ao buscar dados de Estados em Destaque");
                return null;
            }
            return response.json();  
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
            return null;
        });
}

function initEstadosDestaque() {
    fetchEstadosDestaque()
        .then(data => {
            if (!data) return;

            new Chart(EstadosDestaque, {
                type: 'bar',  
                data: {
                    labels: data.map(item => item.estado),  
                    datasets: [{
                        label: 'Tendência e Segurança',
                        data: data.map(item => item.tendencia), 
                        borderColor: '#42a5f5',
                        backgroundColor: '#42a5f5',
                    }]
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
        });
}

initEstadosDestaque();

const tendenciasEstrangeiras = document.getElementById('tendencias-estrangeiras');

async function fetchTendenciasEstrangeiras(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`http://localhost:3000/api/tendencias-estrangeiras?${queryParams}`);
    if (!response.ok) {
        console.error("Erro ao buscar dados de Tendências Estrangeiras");
        return null;
    }
    return response.json();
}

async function initTendenciasEstrangeiras() {
    const data = await fetchTendenciasEstrangeiras();
    if (!data) return;

    new Chart(tendenciasEstrangeiras, {
        type: 'bar',
        data: data,
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

initTendenciasEstrangeiras();

const estacao = document.getElementById('viagens-estacao');

async function fetchViagensPorEstacao() {
    const response = await fetch('http://localhost:3000/api/viagens-estacao');
    if (!response.ok) {
        console.error("Erro ao buscar dados de Viagens por Estação");
        return null;
    }
    return response.json();
}

async function initViagensPorEstacao() {
    const data = await fetchViagensPorEstacao();
    if (!data) return;

    new Chart(estacao, {
        type: 'pie',
        data: data,
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

initViagensPorEstacao();
