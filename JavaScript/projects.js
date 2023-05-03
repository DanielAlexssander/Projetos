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
            informations: "Este projeto tem funcionalidades como: Adicionar/Remover tarefa e editar o nome da tarefa já criada. Para que isso funcione corretamente, a CheckList está sendo armazenada no seu navegador (LocalStorage) fazendo assim para que não perca os dados salvos!",
            urlSite: "https://danielalexssander.github.io/CheckList/",
            urlCod: "https://github.com/DanielAlexssander/CheckList/",
        },
        {
            urlLogo: "Images/formulario-card.png",
            urlGif: "Images/formulario.gif",
            nameProject: "Formulário",
            liTec: HTML + CSS + JavaScript,
            informations: "Formulário simples com algumas funcionalidade de contador de caracteres e erro caso não seja preenchido os campos.",
            urlSite: "https://danielalexssander.github.io/Formulario/",
            urlCod: "https://github.com/DanielAlexssander/Formulario/",
        },
        {
            urlLogo: "Images/strata-card.png",
            urlGif: "Images/strata.gif",
            nameProject: "Strata",
            liTec: HTML + CSS,
            informations: "Informações do projeto",
            urlSite: "https://danielalexssander.github.io/Strata/",
            urlCod: "https://github.com/DanielAlexssander/Strata/",
        },
        {
            urlLogo: "Images/rangehotels-card.png",
            urlGif: "Images/rangehotels.gif",
            nameProject: "RangeHotels (Responsivo)",
            liTec: HTML + CSS,
            informations: "Informações do projeto",
            urlSite: "https://danielalexssander.github.io/RangeHotels-Responsivo/",
            urlCod: "https://github.com/DanielAlexssander/RangeHotels-Responsivo/",
        },
        {
            urlLogo: "Images/cursowebfundamentos-card.png",
            urlGif: "Images/cursowebfundamentos.gif",
            nameProject: "CURSO WEB FUNDAMENTOS",
            liTec: HTML + CSS + JavaScript,
            informations: "Informações do projeto",
            urlSite: "https://danielalexssander.github.io/CursoWebFundamentos/",
            urlCod: "https://github.com/DanielAlexssander/CursoWebFundamentos/",
        },
        {
            urlLogo: "Images/media-card.png",
            urlGif: "Images/media.png",
            nameProject: "Média de Alunos",
            liTec: HTML + CSS + JavaScript,
            informations: "Informações do projeto",
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