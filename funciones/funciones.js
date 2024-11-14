//(1)Función para cambiar texto al pulsar botón
function cambiartexto(){
    let parrafoTexto = document.getElementById("parrafoIndex");
    parrafoTexto.textContent = "Has pulsado en un elemento modificado con JavaScript. Recarga la página para tener el texto original";
    
}

//(2)Función para cambiar el color a un texto al pulsar el botón
function cambiarColor(){
    let parrafoColor = document.getElementById("gastroTexto");
    parrafoColor.style.color = "blue";
}

//(3)Función para confirmar el envío del formulario
function confirmar(){
    let nombreForm = document.getElementById("Nombre").value;    
    let apellidoForm = document.getElementById("Apellido").value;
    let emailForm = document.getElementById("email").value;

    alert ("Se enviarán los siguientes datos: " +" Nombre:"+ nombreForm +" " + "Apellido:" + apellidoForm + " "  + "Email:" + " " + emailForm);
}
 //(4)Tiempo transcurrido en la página de cultura
 let segundos = 0;
 function tiempo(){
    document.getElementById('Tiempo').innerHTML ="Tiempo en esta página: " + segundos + " segundos";
    if (segundos == 300){
        alert('Llevas 5 minutos en esta ventana')
    }else{
        segundos++;
        setTimeout("tiempo()",1000);
    }  
}
    
//(5)Botón suma cantidad de "ME GUSTA"
let contador=0;
const valor = document.querySelector('#valor');
function contLike(){
    
    contador++;
    

    valor.textContent = contador;
    
}







