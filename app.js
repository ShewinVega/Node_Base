const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yarg.js');

//Imprimiendo tabla del 5
console.clear();

//const base = 7;

/* const [ , , argBase = 'base=5' ] = argv;

const [,base = 5] = argBase.split('='); */


crearArchivo(argv.b, argv.l, argv.h);
