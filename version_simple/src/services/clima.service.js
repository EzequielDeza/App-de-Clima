import axios from "axios";

const API_KEY = 'cab87dd7b5ec5f75a1355fb2f879f79f'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getClimaPorCiudad = async (ciudad) => {
    const response = await axios.get(API_URL, {
        params: {
        q: ciudad,
        appid: API_KEY,
        units: 'metric',
        lang: 'es',
        },
    });
    return response.data;
};

export const climaService = { getClimaPorCiudad };
