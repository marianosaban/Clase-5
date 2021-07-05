
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
        else if (boton === "botonRojo") {
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

$("#botonNegro").click(cambiarImagen);
$("#botonBlanco").click(cambiarImagen);
$("#botonRojo").click(cambiarImagen);
$("#botonVerde").click(cambiarImagen);
$("#botonAzul").click(cambiarImagen);


let transmision = $("#transmision");
transmision.change(actualizar);
let ruedaDel = $('[name="RuedaDel"]');
ruedaDel.change(actualizar);
let ruedaTras = $('[name="RuedaTras"]');
ruedaTras.change(actualizar);


function actualizar(){
    var transmisionElegida= $("#transmision").val();
    var ruedaDelElegida= $('[name="RuedaDel"]:checked').val();
    var ruedaTrasElegida=$('[name="RuedaTras"]:checked').val();
    $("#resultado").html("Cotizaremos una bicicleta " + transmisionElegida + ", con una rueda delantera " + ruedaDelElegida + " y una rueda trasera " + ruedaTrasElegida);
    $("#cambios").fadeIn(500);
    $("#cambios").fadeOut(500);
    

}
