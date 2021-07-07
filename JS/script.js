var colorActual= "negra"
var precio = 50000;
let transmision = $("#transmision");
transmision.change(actualizar);
let ruedaDel = $('[name="RuedaDel"]');
ruedaDel.change(actualizar);
let ruedaTras = $('[name="RuedaTras"]');
ruedaTras.change(actualizar);

function cambiarImagen(){
    foto = document.getElementById("cambiaFoto");
    var boton = this.id;
    if (boton === "botonNegro") {
            foto.src = "../IMAGENES/bici_cuadro_negro.png";
            colorActual="negra";
            actualizar()
        }
        else if (boton === "botonBlanco") {
            foto.src = "../IMAGENES/bici_cuadro_blanco.png";
            colorActual="blanca";
            actualizar()
        }
        else if (boton === "botonRojo") {
            foto.src = "../IMAGENES/bici_cuadro_rojo.png";
            colorActual="roja";
            actualizar()
        }
        else if (boton === "botonVerde") {
            foto.src = "../IMAGENES/bici_cuadro_verde.png";
            colorActual="verde";
            actualizar()
        }
        else if (boton === "botonAzul") {
            foto.src = "../IMAGENES/bici_cuadro_azul.png";
            colorActual="azul";
            actualizar()
        }
    }
$("#botonNegro").click(cambiarImagen);
$("#botonBlanco").click(cambiarImagen);
$("#botonRojo").click(cambiarImagen);
$("#botonVerde").click(cambiarImagen);
$("#botonAzul").click(cambiarImagen);
function actualizar(){
    precio = 50000;
    var transmisionElegida= $("#transmision").val();
    if (transmisionElegida === "con 6 cambios"){
        precio=precio+20000
    };
    var ruedaDelElegida= $('[name="RuedaDel"]:checked').val();
    if (ruedaDelElegida === "triple pared"){
        precio=precio+2000
    }
    else if(ruedaDelElegida === "perfil alto"){
        precio=precio+5000
    }
    var ruedaTrasElegida=$('[name="RuedaTras"]:checked').val();
    if (ruedaTrasElegida === "triple pared"){
        precio=precio+2000
    }
    else if(ruedaTrasElegida === "perfil alto"){
        precio=precio+5000
    }
    $("#resultado").html("Cotizaremos una bicicleta " + colorActual+ ", "+ transmisionElegida + ", con una rueda delantera " + ruedaDelElegida + " y una rueda trasera " + ruedaTrasElegida);
    $("#resultadoPesos").html("el valor total de tu configuracion actual es de $" +precio );
    $("#cambios").fadeIn(500);
    $("#cambios").fadeOut(500);
}