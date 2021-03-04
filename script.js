function tipo(nombre,transmision){
    this.nombre = nombre
    this.transmision = transmision
    alert("Bueno, "+nombre+" hagamos tu bicicleta "+transmision)
}
var nombre = prompt("¿Cómo te llamas?")
alert("Hola "+nombre+" esta pagina es un simulador que te permitirá presupuestar cuanto te saldria armar tu bici con nosotres.")
alert("¿Qué tipo de bici queres armar?")
var transmision = prompt("¿piñon fijo o libre?" )
tipo(nombre,transmision)
class bici {
    constructor(color, transmision, manubrio, ruedaDel, ruedaTras){
        this.color=color;
        this.transmision=transmision;
        this.manubrio=manubrio;
        this.ruedaDel=ruedaDel
        this.ruedaTras=ruedaTras
    }
}

var mibici = new bici(color=prompt("De que color sera tu bici"),transmision=transmision,manubrio=prompt("¿Qué tipo de manubrio?"),ruedaDel=prompt("¿La rueda delantera: doble pared, perfil alto o triple pared?"),ruedaTras=prompt("¿La rueda Trasera: doble pared, perfil alto o triple pared?"))
//getMiBici = function () {return this.color,this.transmision,this.manubrio,this.ruedaDel,this.ruedaTras}
console.log(nombre +" Entonces vamos a hacer una bici " +transmision+ " de color "+this.color+" con un manubrio "+this.manubrio+". La rueda delantera "+this.ruedaDel+" y la trasera "+this.ruedaTras)