import './App.css'
import { useState } from 'react';
import { climaService } from './services/clima.service';
import FormularioBusqueda from './components/FormularioBusqueda'
import TablaCiudad from './components/TablaCiudad';

function App() {
  const [clima, setClima] = useState(null);

  const buscarClima = async (ciudad) => {
    try {
      const resultado = await climaService.getClimaPorCiudad(ciudad);
      setClima(resultado);
    } catch (error) {
      console.error("Error al buscar el clima:", error);
      alert("No se pudo encontrar la ciudad. Por favor, verifica el nombre e intenta nuevamente.");
    }
  }
  
  return (
    <>
    <div className="container">
      <h1>CLIMA DE LAS CIUDADES DEL MUNDO</h1>
      < FormularioBusqueda onBuscar={buscarClima}/>
      < TablaCiudad clima={clima} />
    </div>
    </>
  )
}

export default App
