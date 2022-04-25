const pickRandom = (...srting) => srting.reduce((resultado, str) => {
    if(resultado !== ''){    // creo un if para que me ecoja cada espacion no vacion y se agregue
        resultado += ', ';
    }
    resultado += str; // uno  todas los datos del string
    resultado=resultado.split(', '); //cambio de str a array
    var rand = Math.floor(Math.random()*resultado.length);
    return `${resultado[rand]}`;
}, '');

var cpu = pickRandom(
    'piedra',
    'papel',
    'tijera',
);
console.log(cpu);

var jugador = pickRandom(
    'piedra',
    'papel',
    'tijera'
);
console.log (jugador);
var a = 'piedra';
var b = 'papel';
var c = 'tijera';

function juego(){
    if (cpu == jugador){
        console.log(`La jugador saco ${jugador} y la CPU sacó ${cpu} : Esto es un Empate!`)
    }else if (cpu == a && jugador == b || cpu == c && jugador == a || cpu == b && jugador == c){
        console.log(`La jugador saco ${jugador} y la CPU sacó ${cpu} : La jugador Gana!`);
    }else{
        var scoreCPU = 0;
        console.log(++scoreCPU)
        console.log("La jugador saco ${jugador} y la CPU sacó ${cpu} : La jugador Gana!");
    }
}


juego();

/******** Otras condiciones If ^^*/