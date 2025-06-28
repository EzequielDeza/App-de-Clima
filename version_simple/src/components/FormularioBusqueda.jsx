import { useForm } from 'react-hook-form';

function FormularioBusqueda({ onBuscar }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        onBuscar(data.ciudad);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <div className="mb-3">
            <label htmlFor="ciudad" className='m-2'>
                <strong>Nombre de Ciudad</strong></label>
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