// solicitar al usuario que escoga un prestamista personal de acuerdo a su preferencia

class prestamista {
    caracteristicas(nombre, id, tasa24, tasa12, tasa6, tasa3) {
        this.nombre = nombre
        this.id = id
        this.tasa12 = tasa12
        this.tasa6 = tasa6
        this.tasa3 = tasa3
    }
}

const carlos = new prestamista('carlos', 6, 12)
const marcela = new prestamista('marcela', 3, 6)
const claudio = new prestamista('claudio', 12, 24)

console.log(carlos, marcela, claudio);

let prestamistaDeseado = paresint(
    prompt('escoga el prestamista de acuerdo a sus opciones de devolucion en cuotas 1.carlos 2.marcela 3.claudio')
)

//variable para que escoga uno de los 3 prestamistas

while (prestamistaEscogido == false) {
    if (prestamistaEscogido == 1) {
        prestamistaEscogido = true
        infoprestamistaEscogido = carlos
    } else if (prestamistaEscogido == 2) {
        prestamistaEscogido = true
        infoprestamistaEscogido = marcela
    } else if (prestamistaEscogido == 3) {
        prestamistaEscogido = true
        infoprestamistaEscogido = claudio
    } else {
        prestamistaEscogido = paresint(
            prompt(
                'Escoge un numero de prestamista correcto 1.carlos - 2.marcela - 3.claudio'
            )
        )
    }
}

const montoSolicitado = parseInt(
    prompt('ingresa el monto del prestamo que desea solicitar')
)

const cuota6 = calcularCuota(montoSolicitado, infoprestamistaEscogido.tasa6, 6)
const cuota12 = calcularCuota(montoSolicitado, infoprestamistaEscogido.tasa12, 12)
const cuota24 = calcularCuota(montoSolicitado, infoprestamistaEscogido.tasa24, 24)

function calcularCuota(monto, intereses, meses) {
    const cuota = (monto + monto * intereses) / 100 / meses
    return cuota
}

alert(
    'Las opciones que te ofrece ${infoprestamistaEscogido.nombre} son 1. ${cuota6} mensuales a 6 meses - 2. ${cuota12} mensuales a 12 meses - 3. ${cuota 24} mensuales a 24 meses'
)
console.log('prestamistaEscogido', infoprestamistaEscogido, montoSolicitado)
alert('las opciones ofrecidas son ' + infoprestamistaEscogido + nombre+' son: 1. ' + cuota6 + ' mensuales a 6 meses')s