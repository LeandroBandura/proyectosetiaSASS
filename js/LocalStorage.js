localStorage.setItem('saludos','Hola como estas?')

let valorObj = {id:1, producto:'arroz',precio:120}
console.log(valorObj)

let valorStr = JSON.stringify(valorObj)
console.log(valorStr)

localStorage.setItem('obj',valorStr)
console.log(localStorage.getItem('obj'))
