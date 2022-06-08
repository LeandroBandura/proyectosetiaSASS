class hoteles{
    constructor (nombre, ubicación){
        this.nombre=nombre
        this.ubicacion=ubicacion
    }
}

let hoteles = [
    new hoteles ('JuanDPeron','Mar del Plata'),
    new hoteles ('ColoniaEvaPeron','Cordoba'),
    new hoteles ('Yana','San Clemente'),
    new hoteles ('Bareko','Bariloche')
]

let destino = document.getElementById('hoteles')

for (hotel of hoteles){
    let newEle = document.createElement('div')
    newEle.innerHTML = '<p> el ${hotel.nombre} esta en ${hotel.ubicacion}</p>'
    destino.append(newEle)
}