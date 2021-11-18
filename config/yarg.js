

const argv = require('yargs')
    .option('b',{
        alias:'base',
        type: 'number',
        demandOption: true,
        description: 'para mandar que tabla de multip[licar generar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        description: 'Para mostrar la tabla de multiplicar'
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        description: 'hasta dnde seguira muyltiplicando',
        default:10
    })
    .check((argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw ' La base tiene que ser un numero';
        }
        return true;
    })
    .argv;


module.exports = argv;