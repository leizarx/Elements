let log = {
style: 'font-size: 12px; padding: 5px; border-radius: 5px; margin: 5px 0px; font-weight: bold;  ',
info: (msg) => {
console.log(`%c${msg}`, `color: #3b8aff; ${log.style}`)
},
warn: (msg) => {
console.log(`%c${msg}`, `color: #f9cf2e; ${log.style}`)
},
success: (msg) => {
console.log(`%c${msg}`, `color: #91fa49; ${log.style}`)
},
error: (msg) => {
console.log(`%c${msg}`, `color: #f22727; ${log.style}`)
},
table: (msg) => {
console.log(`%c${msg}`, `color: #ff7a29; ${log.style}`)
}
}


var cssId = 'panel';  
if (!document.getElementById(cssId)){
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.id   = cssId;
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdn.jsdelivr.net/gh/leizarx/Elements@a3eb69dbb9ddd84d7aa0ece3d7f8c55fe8a08777/elements.css';
link.media = 'all';
head.appendChild(link);
}

function generarHashNumerico(longitud) {
let hash = '';
for (let i = 0; i < longitud; i++) {hash += Math.floor(Math.random() * 10);}
console.log('Hash:', hash);
}

generarHashNumerico(5); 

$(document).keydown(function(event) {
if (event.ctrlKey && event.key === " ") {
var FILLL = localStorage.getItem('FILLL');
activeElements();
event.preventDefault();
}
});

function activeElements() {
var elementos = document.querySelectorAll('input, select, button');
elementos.forEach(function(elemento) {
var randomColor = getRandomColor();
console.groupCollapsed('%c' + elemento.getAttribute('id'), 'color: ' + randomColor);
console.log('%cId: ' + elemento.getAttribute('id'), 'color: ' + randomColor);
console.log('%cValue: ' + elemento.getAttribute('value'), 'color: ' + randomColor);
console.log('%cRequired: ' + elemento.getAttribute('required'), 'color: ' + randomColor);
console.log('%cClass: ' + elemento.getAttribute('class'), 'color: ' + randomColor);
console.log('%cType: ' + elemento.getAttribute('type'), 'color: ' + randomColor);
console.groupEnd();
elemento.style.border = '3px solid ' + randomColor;
});

function getRandomColor() {
var letters = 'ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 6)];
}
return color;
}
var cookies = document.cookie.split('; ');
cookies.forEach(function(cookie) {
var [key, value] = cookie.split('=');
if (document.getElementById(key) !== null) {
document.getElementById(key).value = value;
}
});
elementos.forEach(function(elemento) {
elemento.addEventListener('click', function(event) {
event.stopPropagation();
var id = elemento.getAttribute('id');
var copyText = document.createElement('input');
copyText.type = 'text';
copyText.value = id;
document.body.appendChild(copyText);
copyText.select();
document.execCommand('copy');
document.body.removeChild(copyText);
console.clear();
console.log('ID copiado: ' + id);
});
});
elementos.forEach(function(elemento) {
if (elemento.style.display === 'none' || elemento.style.visibility === 'hidden') {
elemento.style.display = 'block';
elemento.style.visibility = 'visible';
}
});
}

function crearRingContainer() {
const ringContainer = document.createElement('div');
ringContainer.classList.add('ring-container');
const ringring = document.createElement('div');
ringring.classList.add('ringring');
const circle = document.createElement('div');
circle.classList.add('circle');
ringContainer.appendChild(ringring);
ringContainer.appendChild(circle);
return ringContainer;
}
function agregarEstilosRingContainer() {
const estilo = document.createElement('style');
estilo.textContent = `
.ring-container {
height: 20px;
width: 20px;
position: fixed;
bottom: 25px !important;
right: 25px !important;
z-index: 5555;
}
.circle {
width: 10px;
height: 10px;
background-color: #F44336;
border-radius: 50%;
position: absolute;
top: 23px;
left: 23px;
}
.ringring {
border: 3px solid #F44336;
-webkit-border-radius: 30px;
height: 25px;
width: 25px;
position: absolute;
left: 15px;
top: 15px;
-webkit-animation: pulsate 1s ease-out;
-webkit-animation-iteration-count: infinite;
opacity: 0.0
}
@-webkit-keyframes pulsate {
0% { -webkit-transform: scale(0.1, 0.1); opacity: 0.0; } 50% { opacity: 1.0; } 100% { -webkit-transform: scale(1.2, 1.2); opacity: 0.0; }
}
`;



document.head.appendChild(estilo);
}
const ringContainer = crearRingContainer();
document.body.appendChild(ringContainer);
agregarEstilosRingContainer();
