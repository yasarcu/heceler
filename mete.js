// var besceTiklaAc = 3;
// window.onload = function () {
//     let genislik = document.getElementById('omnom').offsetWidth;
//     let uzunluk = document.getElementById('omnom').offsetHeight;
//     document.getElementById('metefe').style.width = genislik + 'px';
//     document.getElementById('metefe').style.height = uzunluk + 'px';
// }

function fareUzerinde(bir, iki) {
    play(bir, iki)
  }
function play(deger, _deger) {

    if (audio != undefined) {
    audio.pause();
    audio.currentTime = 0;
    }
    var audio = document.getElementById(deger);
    // ikinci defer buttona tiklaninca tekrar eski rengine donsun hatasina bak
    // var sayiBack = _deger.style.backgroundColor;
    // if (sayiBack != "rgb(227, 26, 23)") {
    //     _deger.style.backgroundColor = "#e31a17";
    // }
    // else {
    //     _deger.style.backgroundColor = "#000";
    // }
    audio.play();
}
// function isimler() {
//     let isim = document.getElementById("metefe").textContent;
//     if(isim == "Efe") {
//         document.getElementById('metefe').textContent = "Mete";

//     } else {
//     document.getElementById('metefe').textContent = "Efe";
// }
// }
 
// if(document.getElementById("metefe").textContent = "Mete")

    // else {
    //     document.getElementById("metefe").textContent = "Efe";
// if (condition) {
    
// } else {
    
// }
