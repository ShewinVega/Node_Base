const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, l, h ) => {

   try {
       
        let salida = '';

        for (let i = 1; i <= h; i++){
            salida += ` ${ base } x ${ i } = ${base*i}\n`;
            
        }


        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        if( l === true ) {
            console.log(`tabla-${ base }.txt creado`.yellow);
            console.log(salida);
        }

        if(l === false) {
            console.log(colors.rainbow(`tabla-${ base }.txt creado`));
            console.log('no habilito listar la tabla de multiplicar'.red);
        }

   } catch (error) {
       console.error(error);
       console.log('Multiplicacion no Realizada');
       throw error
   }

}

module.exports = {
    crearArchivo
}