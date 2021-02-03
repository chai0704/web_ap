window.addEventListener('load',function() {
    var itemPhoto = document.getElementById('itemPhoto');
    var selA = document.getElementById('selA');
    var tboxA = document.getElementById('tboxA');
    var singlePrice = document.getElementById('singlePrice');
    var totalPrice = document.getElementById('totalPrice');
    var rdSize = document.getElementsByClassName('rdSize');
    selA.addEventListener('change', imageChange, false);
    function imageChange() {
    if(selA.value == ' 白') {
    itemPhoto.src = "shirt0.jpg";
    }
    if(selA.value == ' 赤') {
    itemPhoto.src = "shirt1.jpg";
    }
    if(selA.value == ' 黒') {
    itemPhoto.src = "shirt2.jpg";
    }
    }
    tboxA.addEventListener('change', culcTotal, false);
    function culcTotal() {
    var TP = tboxA.value * singlePrice.value;
    totalPrice.innerHTML = TP.toLocaleString();
    }
    for(i = 0; i < rdSize.length; i++) {
    rdSize[i].addEventListener('click', sizeChange, false);
    }
    function sizeChange(event) {
    if(event.currentTarget.value == 'S') {
    itemPhoto.height = '80';
    }
    if(event.currentTarget.value == 'M') {
    itemPhoto.height = '100';
    }
    if(event.currentTarget.value == 'L') {
    itemPhoto.height = '120';
    }
    }
   },false);