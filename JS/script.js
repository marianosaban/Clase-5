var colorActual= "negra"
var precio = 50000;
let transmision = $("#transmision");
transmision.change(actualizar);
let ruedaDel = $('[name="RuedaDel"]');
ruedaDel.change(actualizar);
let ruedaTras = $('[name="RuedaTras"]');
ruedaTras.change(actualizar);
function Bici(colorActual, transmision, ruedaDel, ruedaTras) 
{
    this.colorActual = colorActual;
    this.transmision = transmision;
    this.ruedaDel = ruedaDel;
    this.ruedaTras = ruedaTras;   
}
var bici="todavia no has hecho una primera seleccion";
localStorage.setItem('datos',JSON.stringify(bici));
$("#botonNegro").click(cambiarImagen);
$("#botonBlanco").click(cambiarImagen);
$("#botonRojo").click(cambiarImagen);
$("#botonVerde").click(cambiarImagen);
$("#botonAzul").click(cambiarImagen);
$("#botonGuardar").click(cotizar);
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
    bici = new Bici(colorActual,transmisionElegida,ruedaDelElegida,ruedaTrasElegida);
}
function cotizacionAnterior(){
    let datosCotizados = localStorage.getItem('datos');
    let biciCotizada = JSON.parse(datosCotizados); 
    if (biciCotizada.transmision === undefined) {
        $("#cotizacionAnterior").html("Aqui verás la consulta anterior que hiciste para que puedas comparar");
    } else {
        $("#cotizacionAnterior").html("(Tu consulta anterior fue por "+ biciCotizada.colorActual+ ", "+ biciCotizada.transmision + ", con una rueda delantera " +biciCotizada.ruedaDel + " y una rueda trasera " +biciCotizada.ruedaTras+" y valia : $" +localStorage.getItem('costo')+")");
    }
}
function cotizar (){
    cotizacionAnterior();
    localStorage.clear;
    localStorage.setItem('datos',JSON.stringify(bici));
    localStorage.setItem('costo', precio);
    $("#resultado").html("Bicicleta " + colorActual+ ", "+ bici.transmision + ", con una rueda delantera " +bici.ruedaDel + " y una rueda trasera " +bici.ruedaTras+" tiene un valor de: $"+localStorage.getItem('costo') );
}
function cambiarImagen(){
    foto = document.getElementById("cambiaFoto");
    var boton = this.id;
    if (boton === "botonNegro") {
            foto.src = "./IMAGENES/bici_cuadro_negro.png";
            colorActual="negra";
            actualizar()
        }
        else if (boton === "botonBlanco") {
            foto.src = "./IMAGENES/bici_cuadro_blanco.png";
            colorActual="blanca";
            actualizar()
        }
        else if (boton === "botonRojo") {
            foto.src = "./IMAGENES/bici_cuadro_rojo.png";
            colorActual="roja";
            actualizar()
        }
        else if (boton === "botonVerde") {
            foto.src = "./IMAGENES/bici_cuadro_verde.png";
            colorActual="verde";
            actualizar()
        }
        else if (boton === "botonAzul") {
            foto.src = "./IMAGENES/bici_cuadro_azul.png";
            colorActual="azul";
            actualizar()
        }
    }
  } 

