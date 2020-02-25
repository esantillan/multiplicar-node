// const { argv } = require('./config/yargs');// otra forma de utilizar require
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Comando [listar]');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Comando  [crear]');
        crearArchivo(argv.base, argv.limite)
            .then(
                archivo => console.log(`Archivo creado: ${ archivo.green }`)
            )
            .catch(
                err => console.error(err)
            );
        break;
    default:
        console.log('comando no reconocido');
}