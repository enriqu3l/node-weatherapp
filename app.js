const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//Aqui vamos a mandar parametros directamente al comando principal, por eso lo hacemos de manera diferente a las otras app que hemos realizado
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const cords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cords.lat, cords.lng);

        return `El clima de ${ cords.direccion} es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);