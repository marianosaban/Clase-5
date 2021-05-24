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
var transmisionElegida= "Piñon Fijo"
var ruedaDelElegida= "normal"
var ruedaTrasElegida= "normal"
var colorElegido= 'Negra'


function cambiaColor(nuevaFoto){
    image = document.getElementById("cambiaFoto");
    image.src = nuevaFoto;
}
function escribeColor(colorNuevo){
    var colorElegido = colorNuevo;
    actualizar()

}
function actualizar(){
    var transmisionElegida= document.getElementById("transmision").value;
    var ruedaDelElegida= document.getElementById("RuedaDel").value;
    var ruedaTrasElegida= document.getElementById("RuedaTras").value;
    document.getElementById("resultado").innerHTML = ("Cotizaremos una bicicleta " + transmisionElegida + ", con una rueda delantera " + ruedaDelElegida + " y una rueda trasera " + ruedaTrasElegida)
    
}

