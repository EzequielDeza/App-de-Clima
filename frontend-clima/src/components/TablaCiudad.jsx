import React from 'react';

function TablaCiudad({ clima }) {
    if (!clima) return null;

    return (
        <div className="mt-4">
        <h4>Clima en {clima.name}, {clima.sys.country}</h4>
        <p>🌡️ Temperatura: {clima.main.temp}°C</p>
        <p>📋 Condición: {clima.weather[0].description}</p>
        <p>💧 Humedad: {clima.main.humidity}%</p>
        <p>💨 Viento: {clima.wind.speed} m/s</p>
        <img
            src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
            alt="icono del clima"
        />
        </div>
    );
}

export default TablaCiudad;
