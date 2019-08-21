//--- diferencias entre Axios y Request ---
//Axios trabaja con Promesas
//Request trabaja con Callbacks
const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-key': '728fe2090emsh514c7226b41caf9p1e0b7ejsndee32e4fde89'
        }
    });

    // instance.get().then((result) => {
    //     console.log(result.data.Results[0]);
    // }).catch((err) => {
    //     console.log('ERROR!!!!', err);
    // });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`)

    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}