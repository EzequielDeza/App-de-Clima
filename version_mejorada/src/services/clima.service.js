import axios from "axios";

const apiKey = import.meta.env.VITE_OPENWEATHER_KEY; // guardala en .env
const URL_API = "https://api.openweathermap.org/data/2.5/weather";

export const getClimaPorCoords = async (lat, lon) => {
    try {
        const response = await axios.get(URL_API, {
        params: {
            lat: lat,
            lon: lon,
            appid: apiKey,
            units: "metric", // para que devuelva °C
            lang: "es"       // para que devuelva descripciones en español
        }
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener el clima:", error);
        throw error;
    }
};

export const climaService = {
    getClimaPorCoords
};
