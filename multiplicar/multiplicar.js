// requireds
const fs = require('fs');
const os = require("os");
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('======================================'.white.bgRed);
    console.log(`======= Tabla de ${ base } del 1 al ${ limite } =======`.white.bgRed);
    console.log('======================================'.white.bgRed);
    for (let indice = 1; indice <= limite; indice++) {
        producto = base * indice;
        console.log(`${ base } * ${ indice } = ${ producto }`.yellow);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La [base] no es un número');
        } else if (!Number(limite)) {
            reject('El [limite] no es un número');
        } else {
            let fileName = `tablas/tabla-${ base }.txt`;
            let data = '';

            let producto = null;

            for (let indice = 1; indice <= limite; indice++) {
                producto = base * indice;
                data += `${ base } * ${ indice } = ${ producto }${ os.EOL}`;
            }

            fs.writeFile(fileName, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(fileName);
                }
            });
        }

    });
};


module.exports = {
    crearArchivo,
    listarTabla
};