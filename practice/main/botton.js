window.onload = function() {
    var childs = document.getElementsByClassName('CLD');
    var childsJP = document.getElementsByClassName('CLD JP');
    var btnA = document.getElementById('btnA');
    var btnB = document.getElementById('btnB');
    btnA.onclick = function() {
    for(i = 0; i < childs.length; i++) {
    childs[i].style.backgroundColor = '#cccccc';
    }
    }
    btnB.onclick = function() {
    for(i = 0; i < childsJP.length; i++) {
    childsJP[i].style.backgroundColor = '#888888';
    }
    }
   }