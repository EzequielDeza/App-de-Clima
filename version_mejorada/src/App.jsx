import { useState, useEffect } from 'react'
import './App.css'
import { buscarCiudades } from './services/ciudad.service'
import { useForm } from 'react-hook-form'

function App() {

  const [ciudad, setCiudad] = useState()

  {/* Comento el useEffect porque sino me busca todas las ciudades al iniciar la App y eso me consume la prueba gratuita de la API */}
  { /*
  useEffect(() => {
    cargarCiudades()
  }, [])
  */ }

  const cargarCiudades = async (ciudad ) => {
    try {
      const data = await buscarCiudades(ciudad)
      setCiudad(data)
      {/* console.log(data) */}
    } catch (error) {
      console.error('Error al cargar las ciudades:', error)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    cargarCiudades(data.ciudad)
  }
  
  return (
    <>
    <section>
      <form className="city_name_form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="ciudad">Nombre Ciudad:</label>
        <input 
          type="text" 
          id="ciudad" 
          {...register("ciudad", {required: true},)}
        />
        {errors.ciudad && <span>Este campo es obligatorio</span>}
        <button type="submit">Buscar</button>
      </form>
    </section>

    <section className="city_list">
      <ul>
        {ciudad && ciudad.map((c) => (
          <li key={c.id}>
            <h2>{c.name}</h2>
            <p>País: {c.country}</p>
            <p>Latitud: {c.latitude}</p>
            <p>Longitud: {c.longitude}</p>
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}

export default App
