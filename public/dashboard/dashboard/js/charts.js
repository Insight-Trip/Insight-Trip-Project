const EstadosDestaque = document.getElementById('EstadosDestaque');

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
