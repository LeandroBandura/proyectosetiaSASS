class Afiliado {
    constructor (edad,empresa,nombre){
        this.edad = edad;
        this.empresa = empresa;
        this.nombre = nombre;
    }

    Hablar(){
        console.log(this.nombre + " " + "Hola quiero afiliarme")
    }
}

const Sanchez = new Afiliado ("28","TextilCrack","Victor")
console.table(Sanchez)
Sanchez.Hablar()