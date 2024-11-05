// function detectionColor() {
//     let theme = localStorage.getItem("theme") || "light"; // Padrão é light se não houver tema salvo

//     if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("theme")) {
//         theme = "light"; // O tema vai ser escuro se for o padrão do sistema
//     }

//     applyTheme(theme);
// }

// // Função para aplicar o tema
// function applyTheme(theme) {
//     document.documentElement.setAttribute("data-theme", theme);
//     toggleSwitch.checked = (theme === "light");
// }

// // Função para alternar o tema
// function switchTheme(e) {
//     const newTheme = e.target.checked ? "light" : "dark";
//     localStorage.setItem('theme', newTheme);
//     applyTheme(newTheme);
// }

// // Seleciona o checkbox
// // const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

// // // Adiciona o evento de mudança ao checkbox
// // toggleSwitch.addEventListener('change', switchTheme);

// // Inicializa o tema
// detectionColor();

// //pre-check the dark-theme checkbox if dark-theme is set
// if (document.documentElement.getAttribute("data-theme") == "light") {
//     toggleSwitch.checked = true;
// }


// const buttonFilter = document.getElementById('buttonFilter')
// const filter = document.querySelector('.dropdown-filter')

// let isShow = false;
// buttonFilter.addEventListener('click', () => {
//     isShow = !isShow;

//     if (isShow) {
//         filter.classList.add('activate')
//         return
//     }

//     filter.classList.remove('activate')
// });

const mapAcess = document.getElementById('mapAcess')

mapAcess.addEventListener('click', () => {
    mapAcess.classList.add('fullscreen')

    setTimeout(() => {
        acessarMapa();
    }, 500)
});

function acessarMapa() {
    window.location = "../mapa/mapaData.html"
}