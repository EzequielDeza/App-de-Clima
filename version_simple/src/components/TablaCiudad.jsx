import React from 'react';

function TablaCiudad({ clima }) {
    if (!clima) return null;

    return (
        <div className="card mt-4 shadow-sm border-secondary">
            <div className="card-body">
                <h4 className="card-title">Clima en {clima.name}, {clima.sys.country}</h4>
                <p className="card-text">🌡️ Temperatura: {clima.main.temp}°C</p>
                <p className="card-text">📋 Condición: {clima.weather[0].description}</p>
                <p className="card-text">💧 Humedad: {clima.main.humidity}%</p>
                <p className="card-text">💨 Viento: {clima.wind.speed} m/s</p>
                <img
                src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
                alt="icono del clima"
                className="mt-3"
                />
            </div>
        </div>

    );
}

export default TablaCiudad;
