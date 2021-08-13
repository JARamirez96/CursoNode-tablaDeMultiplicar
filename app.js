const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

// console.log(process.argv);

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then(( nombreArchivo ) => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(( err ) => console.log( err ));