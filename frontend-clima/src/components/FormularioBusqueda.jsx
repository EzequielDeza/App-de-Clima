import React from 'react';
import { useForm } from 'react-hook-form';
import './FormularioBusqueda.css'
import { climaService } from '../services/clima.service';

function FormularioBusqueda() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const resultado = await climaService.getClimaPorCiudad(data.ciudad);
            console.log("Resultado de la búsqueda:", resultado);
        } catch (error) {
            console.error("Error al buscar el clima:", error);
            alert("No se pudo encontrar la ciudad. Por favor, verifica el nombre e intenta nuevamente.");
        }
    };

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
            <div className="mb-3">
                <label htmlFor="ciudad" className=""><strong>Nombre de Ciudad</strong></label>
                <input
                type="text"
                id="ciudad"
                className={`form-control ${errors.ciudad ? 'is-invalid' : ''}`}
                {...register("ciudad", { required: "El nombre de la ciudad es obligatorio" })}
                />
                {errors.ciudad && (
                <div className="invalid-feedback">{errors.ciudad.message}</div>
                )}
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
    );
}

export default FormularioBusqueda;
