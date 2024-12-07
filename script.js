//Efeito maquina de escrever no titulo
const tituloGrande = document.querySelector('.nome-h1');

(function() {
    const getText = tituloGrande.textContent;

    const textSplit = getText.split('');

    tituloGrande.textContent = "";

    textSplit.map((letra, index) => {
        setTimeout(() => {
            tituloGrande.textContent += letra;
        }, 1000 * index);
    });
})();


const tituloPequeno = document.querySelector('.nome-p');

(function() {
    const getText2 = tituloPequeno.textContent;

    const textSplit2 = getText2.split('');

    tituloPequeno.textContent = "";

    textSplit2.map((letra, index) => {
        setTimeout(() => {
            tituloPequeno.textContent += letra;
        }, 1000 * index);
    })
})();



//Efeito ScrollReveal
window.sr = ScrollReveal({reset: true});

sr.reveal('.nome-central', {
    rotate: {x: 100, y: 100, z: 0},
    duration: 5000});

sr.reveal('.about', {duration: 2000});

sr.reveal('.container-skills', {duration: 2000});

sr.reveal('.project-1', {duration: 2000});

sr.reveal('.project-2', {duration: 2000});

sr.reveal('.project-3', {duration: 2000});

sr.reveal('.footer', {duration: 2000});



//Efeito de nuvem em cima das imagens de skills
const img01= document.querySelector('.img01');
const textHtml5 = document.querySelector('.text-html5');

const img02 = document.querySelector('.img02');
const textCss3 = document.querySelector('.text-css3');

const img03 = document.querySelector('.img03');
const textBootstrap = document.querySelector('.text-bootstrap');

const img04 = document.querySelector('.img04');
const textFigma = document.querySelector('.text-figma');

const img05 = document.querySelector('.img05');
const textLogica = document.querySelector('.text-logica');

const img06 = document.querySelector('.img06');
const textJavascript = document.querySelector('.text-javascript');

const img07 = document.querySelector('.img07');
const textGithub = document.querySelector('.text-github');

const img08 = document.querySelector('.img08');
const textGit = document.querySelector('.text-git');

const img09 = document.querySelector('.img09');
const textPhotoshop = document.querySelector('.text-photoshop');

const img10 = document.querySelector('.img10');
const textSqlServer = document.querySelector('.text-sql-server');

const img11 = document.querySelector('.img11');
const textPowerBI = document.querySelector('.text-power-bi');

const img12 = document.querySelector('.img12');
const textSql = document.querySelector('.text-sql');

img01.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textHtml5.style.opacity = 1;
    textHtml5.classList = 'style-text';
});

img01.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textHtml5.style.opacity = 0;
});

img02.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textCss3.style.opacity = 1;
    textCss3.classList = 'style-text';
});

img02.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textCss3.style.opacity = 0;
});

img03.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textBootstrap.style.opacity = 1;
    textBootstrap.classList = 'style-text';
});

img03.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textBootstrap.style.opacity = 0;
});

img04.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textFigma.style.opacity = 1;
    textFigma.classList = 'style-text';
});

img04.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textFigma.style.opacity = 0;
});

img05.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textLogica.style.opacity = 1;
    textLogica.classList = 'style-text';
});

img05.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textLogica.style.opacity = 0;
});

img06.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textJavascript.style.opacity = 1;
    textJavascript.classList = 'style-text';
});

img06.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textJavascript.style.opacity = 0;
});

img07.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textGithub.style.opacity = 1;
    textGithub.classList = 'style-text';
});

img07.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textGithub.style.opacity = 0;
});

img08.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textGit.style.opacity = 1;
    textGit.classList = 'style-text';
});

img08.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textGit.style.opacity = 0;
});

img09.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textPhotoshop.style.opacity = 1;
    textPhotoshop.classList = 'style-text';
});

img09.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textPhotoshop.style.opacity = 0;
});

img10.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textSqlServer.style.opacity = 1;
    textSqlServer.classList = 'style-text';
});

img10.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textSqlServer.style.opacity = 0;
});

img11.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textPowerBI.style.opacity = 1;
    textPowerBI.classList = 'style-text';
});

img11.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textPowerBI.style.opacity = 0;
});

img12.addEventListener('mouseover', function(event) {
    event.preventDefault();
    textSql.style.opacity = 1;
    textSql.classList = 'style-text';
});

img12.addEventListener('mouseout', function(event) {
    event.preventDefault();
    textSql.style.opacity = 0;
});


