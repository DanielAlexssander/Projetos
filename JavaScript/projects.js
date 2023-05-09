;(function () {
    "use strict"

    const sectionProjects = document.querySelector(".sectionProjects")
    const divs = document.getElementsByClassName("project")


    const HTML = `<li class="liTec"><i class="fa-brands fa-html5 orange"></i></li>`
    const CSS = `<li class="liTec"><i class="fa-brands fa-css3-alt blue"></i></li>`
    const JavaScript = `<li class="liTec"><i class="fa-brands fa-square-js yellow"></i></li>`

    const arrObjectProject = [
        {
            urlLogo: "Images/checklist-card.png",
            urlGif: "Images/checklist.gif",
            nameProject: "CheckList",
            liTec: HTML + CSS + JavaScript,
            informations: `Este projeto tem funcionalidades como: Adicionar/Remover tarefa e editar o nome da tarefa já criada. Para que isso funcione corretamente, a CheckList está sendo armazenada no seu navegador (LocalStorage) fazendo assim para que não perca os dados salvos.`,
            urlSite: "https://danielalexssander.github.io/CheckList/",
            urlCod: "https://github.com/DanielAlexssander/CheckList/",
        },
        {
            urlLogo: "Images/formulario-card.png",
            urlGif: "Images/formulario.gif",
            nameProject: "Formulário",
            liTec: HTML + CSS + JavaScript,
            informations: `Formulário simples com algumas funcionalidade de contador de caracteres e um erro caso não seja preenchido o titulo.`,
            urlSite: "https://danielalexssander.github.io/Formulario/",
            urlCod: "https://github.com/DanielAlexssander/Formulario/",
        },
        {
            urlLogo: "Images/strata-card.png",
            urlGif: "Images/strata.gif",
            nameProject: "Strata",
            liTec: HTML + CSS,
            informations: `O projeto Strata foi desenvolvido com base no design da "HTML5 UP".`,
            urlSite: "https://danielalexssander.github.io/Strata/",
            urlCod: "https://github.com/DanielAlexssander/Strata/",
        },
        {
            urlLogo: "Images/rangehotels-card.png",
            urlGif: "Images/rangehotels.gif",
            nameProject: "Range Hotels (Responsivo)",
            liTec: HTML + CSS,
            informations: `A Range Hotels é um projeto responsivo. Compatível com computador, tablet e celular.`,
            urlSite: "https://danielalexssander.github.io/RangeHotels-Responsivo/",
            urlCod: "https://github.com/DanielAlexssander/RangeHotels-Responsivo/",
        },
        {
            urlLogo: "Images/cursowebfundamentos-card.png",
            urlGif: "Images/cursowebfundamentos.gif",
            nameProject: "CURSO WEB FUNDAMENTOS",
            liTec: HTML + CSS + JavaScript,
            informations: `O Curso WEB FUNDAMENTOS foi um dos meu primeiros projetos com HTML5, CSS3 e JavaScript.`,
            urlSite: "https://danielalexssander.github.io/CursoWebFundamentos/",
            urlCod: "https://github.com/DanielAlexssander/CursoWebFundamentos/",
        },
        {
            urlLogo: "Images/media-card.png",
            urlGif: "Images/media.png",
            nameProject: "Média de Alunos",
            liTec: HTML + CSS + JavaScript,
            informations: `Projeto com base em um boletim de alunos, com algumas funcionalidades em JavaScript como: calculador de média, a cor verde representa o aluno que está com a média maior que 5 e a vermelha com o aluno que está com a média inferior a 5.`,
            urlSite: "https://danielalexssander.github.io/Media/",
            urlCod: "https://github.com/DanielAlexssander/Media/",
        },
    ]

    
    const html = arrObjectProject.map(project => `
            <div class="project">
                <img class="logo" src="${project.urlLogo}" alt="#">
                <div class="contentProject">
                    <img class="gif" src="${project.urlGif}" alt="">
                    <h1 class="nameProject">${project.nameProject}</h1>
                    <div class="tecDiv flex blue">
                        <h2 class="technologyUsed">Tecnologias Utilizadas:</h2>
                        <ul class="ulTec flex">
                            ${project.liTec}
                        </ul>
                    </div>    
                    <p class="informations">${project.informations}</p>
                    <div class="btn">
                        <a class="siteBtn" target="_blank" href="${project.urlSite}">Site</a>
                        <a class="codBtn" target="_blank" href="${project.urlCod}">Código</a>
                    </div>
                </div>
            </div>
        `).join("")

    sectionProjects.innerHTML = html



})()

const navBtn = document.querySelector(".navBtn")
const ulNav = document.querySelector(".ulNav")

function ClickButtonNav() {
    ulNav.classList.toggle('block')
    if (ulNav.classList.value === 'ulNav block') {
        navBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
}