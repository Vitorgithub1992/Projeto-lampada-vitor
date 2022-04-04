const desligada = document.getElementById('desligada');
const ligada = document.getElementById('ligada');
const lampada = document.getElementById('lampada');


function lampOn() {
    if (!isLampBroken() )
    lampada.src = './img/ligada.jpg';
}

function lampOff () {
    if (!isLampBroken() )
    lampada.src = './img/apagada.jpg';
}

function broken() {
    lampada.src = './img/quebrada.jpg';
    alert('Atualizar a página para restaurar a lâmpada.')
}

function isLampBroken (){
    return lampada.src.indexOf ('quebrada') > -1;
}

ligada.addEventListener('click', lampOn);
desligada.addEventListener('click', lampOff);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('click', broken);