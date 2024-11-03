const cidadesVisitadas = document.getElementById('cidadesVisitadas');

new Chart(cidadesVisitadas, {
    type: 'bar',
    data: {
        labels: ['São Paulo (Capital)', 'Campos de Jordão', 'Santos', 'Ilhabela', 'Ubatuba'],
        datasets: [{
            label: 'Cidades Mais Visitadas (Janeiro a Junho)',
            data: [80, 50, 30, 59, 27],
            borderWidth: 1,
            backgroundColor: ['#c2e0eb'],
            borderColor: ['#7f9db5'],
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            }
        },
        plugins: {
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


const cidadesSeguras = document.getElementById('cidadesSeguras');

new Chart(cidadesSeguras, {
    type: 'bar',
    data: {
        labels: ['Jaguariúna', 'Vinhedo', 'Valinho'],
        datasets: [{
            label: 'Cidades Mais Seguras',
            data: [80, 95, 74],
            backgroundColor: ['#85d1b1'],
            borderColor: ['#6da688'],
            borderWidth: 1,
            barThickness: 20
        }]
    },
    options: {
        indexAxis: 'x',
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            }
        },
        plugins: {
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

const cidadesPerigosas = document.getElementById('cidadesPerigosas');

new Chart(cidadesPerigosas, {
    type: 'bar',
    data: {
        labels: ['São Paulo (Capital)', 'Guarulhos', 'Campinas'],
        datasets: [{
            label: 'Cidades Mais Perigosas',
            data: [12, 19, 3],
            backgroundColor: ['#a68cff'],
            borderColor: ['#8b6ab2'],
            borderWidth: 1,
            barThickness: 20
        }]
    },
    options: {
        indexAxis: 'x',
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            }
        },
        plugins: {
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

const segurasVisitadas = document.getElementById('segurasVisitadas');

new Chart(segurasVisitadas, {
    type: 'bar',
    data: {
        labels: ['São Paulo (Capital)', 'Campos de Jordão', 'Santos'],
        datasets: [
            {
                label: 'Mais Visitadas',
                data: [82, 59, 30],
                backgroundColor: ['#a68cff'],
                borderColor: ['#8b6ab2'],
                borderWidth: 1
            },
            {
                label: 'Mais Seguras',
                data: [52, 39, 20],  
                backgroundColor: ['#85d1b1'],
                borderColor: ['#6da688'],
                borderWidth: 1
            }
        ]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            }
        },
        plugins: {
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


const proximosEventos = document.getElementById('proximosEventos');

new Chart(proximosEventos, {
    type: 'line',
    data: {
        labels: ['Dia das crianças', 'Festival de Inverno', 'Festa do Peão', 'Natal', 'Ano Novo'],
        datasets: [{
            label: 'Próximos eventos',
            data: [20, 15, 30, 80, 95],
            borderWidth: 2,
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            borderColor: ['#fccfa5'],
            fill: true
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        family: 'Abel',
                        size: 14
                    }
                }
            }
        },
        plugins: {
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


const estacao = document.getElementById('estacao');

new Chart(estacao, {
    type: 'pie',
    data: {
        labels: ['Primavera', 'Verão', 'Outono', 'Inverno'],
        datasets: [{
            label: 'Viagens por Estação do Ano',
            data: [10, 50, 10, 30],
            backgroundColor: [
                'rgba(255, 105, 180, 0.8)',
                'rgba(135, 206, 250, 0.8)',
                'rgba(255, 221, 51, 0.8)', 
                'rgba(150, 223, 50, 0.8)'
            ],
            borderColor: [
                'rgba(255, 105, 180, 1)',
                'rgba(135, 206, 250, 1)',
                'rgba(255, 221, 51, 1)',
                'rgba(150, 223, 50, 1)'
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
