const argv = require('yargs')
    .options({
        'b':{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l':{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        },
        'h':{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Éste es el número hasta donde quieres la tabla'
        },
    })
    .check(( argv, options ) => {
        if( isNaN( argv.base ) ){
            throw 'La base tiene que ser un número';
        } else if( isNaN( argv.hasta ) ) {
            throw 'El hasta tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;