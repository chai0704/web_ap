window.addEventListener('load',function() {
    var btnA = document.getElementById('btnA');
    var PRT_B = document.getElementById('PRT_B');
    PRT_B.addEventListener('click', function() {
    alert(' 親div のイベント');
    }, false);
   
    btnA.addEventListener('click', foo, false);
    function foo(event) {
        alert(' 発生したイベントは ' + event.type + ' です');
        alert('X 座標:' + event.screenX + ' /Y 座標: ' + event.screenY);
        alert(event.currentTarget.innerHTML);
        event.stopPropagation();
       }
   },false);

   