import axios from "axios";

const apiKey = import.meta.env.VITE_GEODB_KEY;
const host = "wft-geo-db.p.rapidapi.com";
const URL_API = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

// Export al definir la función
export const buscarCiudades = async (filtro = "") => {
    try {
        const response = await axios.get(URL_API, {
        params: {
            namePrefix: filtro,
            limit: 10,
        },
        headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": host,
        },
        });
        return response.data.data;
    } catch (error) {
        console.error("Error al buscar ciudades:", error);
        return [];
    }
};

