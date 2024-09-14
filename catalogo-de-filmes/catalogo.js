const filme = document.querySelectorAll("section div");

function reatribuirEventListeners() {
    let filme = document.querySelectorAll("section div");
    
    filme[0]?.addEventListener('click', abriVideo);
    filme[1]?.addEventListener('click', abriVideo1);
    filme[2]?.addEventListener('click', abriVideo2);
    filme[3]?.addEventListener('click', abriVideo3);
    filme[4]?.addEventListener('click', abriVideo4);
    filme[5]?.addEventListener('click', abriVideo5);
}

filme[0].addEventListener('click', abriVideo);
filme[1].addEventListener('click', abriVideo1);
filme[2].addEventListener('click', abriVideo2);
filme[3].addEventListener('click', abriVideo3);
filme[4].addEventListener('click', abriVideo4);
filme[5].addEventListener('click', abriVideo5);

function abriVideo() {
    const iframe = document.createElement("iframe");
    document.querySelector('section').appendChild(iframe);
    iframe.src = 'https://www.youtube.com/embed/NmTPDA15lPA?t=8s';
    iframe.classList.add("iframe");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";  
    iframe.allowFullscreen = true;

    const btnFechar = document.createElement("img");
    document.querySelector('section').appendChild(btnFechar);
    btnFechar.src = 'botao-cancelar.png';
    btnFechar.classList.add("btn-fechar");

    btnFechar.addEventListener('click', function() {
        iframe.remove();
        btnFechar.remove();
    });
}

function abriVideo1() {
    const iframe = document.createElement("iframe");
    document.querySelector('section').appendChild(iframe);
    iframe.src = 'https://www.youtube.com/embed/dEbe0rS4Z2A';
    iframe.classList.add("iframe");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";  
    iframe.allowFullscreen = true;

    const btnFechar = document.createElement("img");
    document.querySelector('section').appendChild(btnFechar);
    btnFechar.src = 'botao-cancelar.png';
    btnFechar.classList.add("btn-fechar");

    btnFechar.addEventListener('click', function() {
        iframe.remove();
        btnFechar.remove();
    });
}

function abriVideo2() {
    const iframe = document.createElement("iframe");
    document.querySelector('section').appendChild(iframe);
    iframe.src = 'https://www.youtube.com/embed/exeVIM3j3y0';
    iframe.classList.add("iframe");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";  
    iframe.allowFullscreen = true;

    const btnFechar = document.createElement("img");
    document.querySelector('section').appendChild(btnFechar);
    btnFechar.src = 'botao-cancelar.png';
    btnFechar.classList.add("btn-fechar");

    btnFechar.addEventListener('click', function() {
        iframe.remove();
        btnFechar.remove();
    });
}

function abriVideo3() {
    const iframe = document.createElement("iframe");
    document.querySelector('section').appendChild(iframe);
    iframe.src = 'https://www.youtube.com/embed/GMmb63nsDIc';
    iframe.classList.add("iframe");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";  
    iframe.allowFullscreen = true;

    const btnFechar = document.createElement("img");
    document.querySelector('section').appendChild(btnFechar);
    btnFechar.src = 'botao-cancelar.png';
    btnFechar.classList.add("btn-fechar");

    btnFechar.addEventListener('click', function() {
        iframe.remove();
        btnFechar.remove();
    });
}

function abriVideo4() {
    const iframe = document.createElement("iframe");
    document.querySelector('section').appendChild(iframe);
    iframe.src = 'https://www.youtube.com/embed/59iAzYuo2Qk';
    iframe.classList.add("iframe");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";  
    iframe.allowFullscreen = true;

    const btnFechar = document.createElement("img");
    document.querySelector('section').appendChild(btnFechar);
    btnFechar.src = 'botao-cancelar.png';
    btnFechar.classList.add("btn-fechar");

    btnFechar.addEventListener('click', function() {
        iframe.remove();
        btnFechar.remove();
    });
}

function abriVideo5() {
    const iframe = document.createElement("iframe");
    document.querySelector('section').appendChild(iframe);
    iframe.src = 'https://www.youtube.com/embed/3pRaqZ2hoNk';
    iframe.classList.add("iframe");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";  
    iframe.allowFullscreen = true;

    const btnFechar = document.createElement("img");
    document.querySelector('section').appendChild(btnFechar);
    btnFechar.src = 'botao-cancelar.png';
    btnFechar.classList.add("btn-fechar");

    btnFechar.addEventListener('click', function() {
        iframe.remove();
        btnFechar.remove();
    });
}


const primeiroBtn = document.querySelector('#primeiro');

primeiroBtn.addEventListener('click', () => {
    botaoPorCategoria();    
});

function botaoPorCategoria () {
    const section = document.querySelector('section');
    let listasDeFilmes = document.querySelectorAll("section div");
    let listasDeFilmesArray = Array.from(listasDeFilmes);
    let parteArray = listasDeFilmesArray.slice(0, 3);
    
    section.innerHTML = parteArray.map(item => item.outerHTML).join('');

    const botaoVoltarAoinicio = document.createElement('button');
    botaoVoltarAoinicio.classList.add('btnVoltarAoInicio');
    botaoVoltarAoinicio.innerText = "voltar ao inicio";
    section.appendChild(botaoVoltarAoinicio);

    reatribuirEventListeners();

    botaoVoltarAoinicio.addEventListener('click', () => {
        section.innerHTML = listasDeFilmesArray.map(item => item.outerHTML).join('');
        reatribuirEventListeners();
    });
}

const segundoBtn = document.querySelector('#segundo');

segundoBtn.addEventListener('click', () => {
    botaoPorCategoria2();    
});

function botaoPorCategoria2 () {
    const section = document.querySelector('section');
    let listasDeFilmes = document.querySelectorAll("section div");
    let listasDeFilmesArray = Array.from(listasDeFilmes);
    let parteArray = listasDeFilmesArray.slice(3, 6);
    
    section.innerHTML = parteArray.map(item => item.outerHTML).join('');

    const botaoVoltarAoinicio = document.createElement('button');
    botaoVoltarAoinicio.classList.add('btnVoltarAoInicio');
    botaoVoltarAoinicio.innerText = "voltar ao inicio";
    section.appendChild(botaoVoltarAoinicio);

    reatribuirEventListeners();

    botaoVoltarAoinicio.addEventListener('click', () => {
        section.innerHTML = listasDeFilmesArray.map(item => item.outerHTML).join('');
        reatribuirEventListeners();
    });
}