const suma = (a,b) =>{
    return a + b
}

const rest = (a,b) =>{
    return a - b
}

console.log(suma(3,2))

//const nome = "hola norma"

//module.exports = nome

module.exports = {suma, rest}

// lo podemos exportar como objeto

const mate = {}

mate.suma = (a,b) =>{
    return a + b
}

mate.rest = (a,b) =>{
    return a - b
}

//mate.name ="normita"

module.exports = mate




