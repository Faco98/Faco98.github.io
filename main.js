
function encriptar(){

  var texto = document.getElementById("textarea").value;
  

    var textoCifrado = texto.replace(/e/igm, "enter");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("muñecoimg").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML= textoCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
    document.getElementById("escuchador").style.display = "show";
    document.getElementById("escuchador").style.display = "inherit";


}

function desencriptar() {
  
  var texto = document.getElementById("textarea").value;
  

  var textoCifrado = texto.replace(/enter/igm,"e");
  var textoCifrado = textoCifrado.replace(/imes/igm,"i");
  var textoCifrado = textoCifrado.replace(/ai/igm,"a");
  var textoCifrado = textoCifrado.replace(/ober/igm,"o");
  var textoCifrado = textoCifrado.replace(/ufat/igm,"u");



  document.getElementById("muñecoimg").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").innerHTML = textoCifrado;
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
  document.getElementById("escuchador").style.display = "show";
  document.getElementById("escuchador").style.display = "inherit";
}


/* función para escuchar el mensaje */   
function speech(){
  
  var voz = new SpeechSynthesisUtterance();
  voz.lang = "es-Es";
  voz.volume = 1;
  voz.rate = 0.5;
  voz.pitch = 1;

  var text = document.getElementById("texto2").value;
  
    if(text != ""){
      voz.text=text
      window.speechSynthesis.speak(voz);
    }
  }



  /* funcion de copiar el texto */

function copiar(){

  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");

}