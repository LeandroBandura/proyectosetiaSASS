class Usuarios {
    constructor(nombre,apellido,dni){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.pass
    }

setPass(){
    let randomNumber = Math.floor(Math.random()*999)+1
    this.pass = this.nombre.slice (0,3) + randomNumber + this.apellido.slice(1,4)

}
}

let arrayUsuarios = [ 
    new Usuarios("Lidia","Perotti","56"),
    new Usuarios("Maria","Zeolla","26"),
    new Usuarios("Nadia","Franzciut","24"),
]
console.table(arrayUsuarios)

alert("Se está generando su contraseña")

for (user of arrayUsuarios){
    user.setPass()
}

console.table(arrayUsuarios)