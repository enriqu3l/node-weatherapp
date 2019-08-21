const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=45fee121798d44aca89d4f26583989f7&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}