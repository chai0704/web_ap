window.onload = function() {
    console.log(' ページのレンダリング完了');
    var dom = document.getElementById('KOKO');
    var btn = document.getElementById('btnA');
    btn.onclick = function() {
    var date = new Date();
    dom.innerHTML = date;
    }
}