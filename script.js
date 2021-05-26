/*class bici {
    constructor(color, transmision, manubrio, ruedaDel, ruedaTras){
        this.color=color;
        this.transmision=transmision;
        this.manubrio=manubrio;
        this.ruedaDel=ruedaDel
        this.ruedaTras=ruedaTras
    }
}

//var mibici = new bici(color=colorElegido,transmision=transmisionElegida,manubrio=manubrioElegido,ruedaDel=ruedaDelElegida,ruedaTras=ruedaTrasElegida);
*/
var arrayImagenes = ["IMAGENES/bici_cuadro_azul.png" , "IMAGENES/bici_cuadro_blanco.png", "IMAGENES/bici_cuadro_negro.png", "IMAGENES/bici_cuadro_rojo.png", "IMAGENES/bici_cuadro_verde.png"]
var imagenActual = 0;

function cambiarImagen(){
    foto = document.getElementById("cambiaFoto");
    var boton = this.id;
    if (boton === "botonNegro") {
            foto.src = "IMAGENES/bici_cuadro_negro.png";
            actualizar()
        } else if (boton === "botonBlanco") {
            foto.src = "IMAGENES/bici_cuadro_blanco.png";
            actualizar()
        }
        else if (boton === "botonRoho") {
            foto.src = "IMAGENES/bici_cuadro_rojo.png";
            actualizar()
        }
        else if (boton === "botonVerde") {
            foto.src = "IMAGENES/bici_cuadro_verde.png";
            actualizar()
        }
        else if (boton === "botonAzul") {
            foto.src = "IMAGENES/bici_cuadro_azul.png";
            actualizar()
        }
    }

document.getElementById("botonNegro").addEventListener("click", cambiarImagen);
document.getElementById("botonBlanco").addEventListener("click", cambiarImagen);
document.getElementById("botonRojo").addEventListener("click", cambiarImagen);
document.getElementById("botonVerde").addEventListener("click", cambiarImagen);
document.getElementById("botonAzul").addEventListener("click", cambiarImagen);

let transmision = document.getElementById("transmision");
transmision.addEventListener("change", actualizar);
let ruedaDel = document.getElementById("RuedaDel");
ruedaDel.addEventListener("change", actualizar);
let ruedaTras = document.getElementById("RuedaTras");
ruedaTras.addEventListener("change", actualizar);


function actualizar(){
    var transmisionElegida= document.getElementById("transmision").value;
    var ruedaDelElegida= document.getElementById("RuedaDel").value;
    var ruedaTrasElegida= document.getElementById("RuedaTras").value;
    document.getElementById("resultado").innerHTML = ("Cotizaremos una bicicleta " + transmisionElegida + ", con una rueda delantera " + ruedaDelElegida + " y una rueda trasera " + ruedaTrasElegida) 
}

/* function escribeColor(colorNuevo){
    var colorElegido = colorNuevo;
    actualizar() */


