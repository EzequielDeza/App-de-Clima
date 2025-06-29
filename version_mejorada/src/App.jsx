import { useState } from 'react'
import './App.css'
import { buscarCiudades } from './services/ciudad.service'
import { getClimaPorCoords } from './services/clima.service'
import { useForm } from 'react-hook-form'

function App() {
  const [ciudades, setCiudades] = useState([])
  const [accion, setAccion] = useState("F") // "F" = Formulario, "D" = Detalle
  const [clima, setClima] = useState(null) // datos del clima

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const cargarCiudades = async (nombreCiudad) => {
    try {
      const data = await buscarCiudades(nombreCiudad)
      setCiudades(data)
    } catch (error) {
      console.error('Error al cargar las ciudades:', error)
    }
  }

  const onSubmit = (data) => {
    cargarCiudades(data.ciudad)
  }

  const detalleClima = async (latitud, longitud) => {
    try {
      const dataClima = await getClimaPorCoords(latitud, longitud)
      setClima(dataClima)
      setAccion("D")
    } catch (error) {
      console.error('Error al obtener el clima:', error)
      alert('No se pudo obtener el clima para esta ubicación.')
    }
    reset()
  }

  return (
    <>
      {accion === "F" && (
        <>
          <section>
            <form className="city_name_form" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="ciudad">Nombre Ciudad:</label>
              <input
                type="text"
                id="ciudad"
                {...register("ciudad", { required: true })}
              />
              {errors.ciudad && <span>Este campo es obligatorio</span>}
              <button type="submit">Buscar</button>
            </form>
          </section>

          <section className="city_list">
            <ul className="city_card">
              {ciudades.map((c) => (
                <li key={c.id}>
                  <h2>{c.city}</h2>
                  <p>País: {c.country}</p>
                  <p>Latitud: {c.latitude}</p>
                  <p>Longitud: {c.longitude}</p>
                  <button className='detail_btn'
                    onClick={() => detalleClima(c.latitude, c.longitude)}>
                    Ver Clima
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {accion === "D" && clima && (
        <section className="city_detail">
          <h2>Clima en {clima.name}</h2>
          <p>🌡️ Temperatura: {clima.main.temp}°C</p>
          <p>📋 Condición: {clima.weather[0].description}</p>
          <p>💧 Humedad: {clima.main.humidity}%</p>
          <p>💨 Viento: {clima.wind.speed} m/s</p>
          <img
            src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
            alt="icono del clima"
          />
          <br />
          <button onClick={() => setAccion("F")}>Volver</button>
        </section>
      )}
    </>
  )
}

export default App
