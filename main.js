    const textArea = document.querySelector(".textarea");
    const mensaje = document.querySelector(".parrafo");
    const muñeco = document.querySelector(".muñeco");
    const subtitulo = document.querySelector("#texto1");
    const copiador = document.querySelector("#btn-copiar");
    const escuchar = document.querySelector("#escuchador");


    function btnEncriptar (){
       const textoEncriptado = encriptar(textArea.value)
       mensaje.value = textoEncriptado
       textArea.value = "";
       muñeco.style.display ="none";
       subtitulo.style.display = "none";
       copiador.style.display = "show";
       copiador.style.display = "inherit";
       escuchar.style.display = "show";
       escuchar.style.display = "inherit";
      
    }

    function encriptar(stringEncriptado){
        let textCifrado = [["e", "enter"], 
        ["i", "imes"],
         ["a", "ai"],
         ["o", "ober"], 
         ["u", "ufat"]]
        stringEncriptado = stringEncriptado.toLowerCase()

        for(let i = 0; i < textCifrado.length; i++){
            if(stringEncriptado.includes(textCifrado[i][0])){

              stringEncriptado = stringEncriptado.replaceAll(textCifrado[i][0], textCifrado[i][1])

            }

        }
        return stringEncriptado
    }

       function btnDesencriptar() {
         const textoEncriptado = desencriptar(textArea.value);
         mensaje.value = textoEncriptado;
         textArea.value = "";
         subtitulo.style.display = "none";
         copiador.style.display = "show";
         copiador.style.display = "inherit";
         escuchar.style.display = "show";
         escuchar.style.display = "inherit";
      
       }


    function desencriptar(stringDesencriptado) {
      let textCifrado = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]];
      stringDesencriptado = stringDesencriptado.toLowerCase();

      for (let i = 0; i < textCifrado.length; i++) {
        if (stringDesencriptado.includes(textCifrado[i][1])) {
          stringDesencriptado = stringDesencriptado.replaceAll(textCifrado[i][1],textCifrado[i][0]);
        }
      }
      return stringDesencriptado;
    }


/* función para escuchar el mensaje */   
function speech(){
  
  let voz = new SpeechSynthesisUtterance();
  voz.lang = "es-Es";
  voz.volume = 1;
  voz.rate = 0.5;
  voz.pitch = 1;

  let text = document.getElementById("texto2").value;
  
    if(text != ""){
      voz.text=text
      window.speechSynthesis.speak(voz);
    }
  }

  /* funcion de copiar el texto */

function copiar(){

  let contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");

}