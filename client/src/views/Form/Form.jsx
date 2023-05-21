import axios from "axios";
import { useState } from "react";
import './Form.css'



const Form = () => {

    const [form, setForm] = useState({
        name:"",
        origin:"",
        breed_group:"",
        life_span:"",
        weightMin:"",
        weightMax:"",
        height:"",
        image:"",
        temperament: 0
    })

    // const [errors, setErrors] = useState({
    //     name:"",
    //     origin:"",
    //     life_span:"",
    //     weight:"",
    //     height:"",
    //     image:""
    // })

    const changeHandler = (event) => {
        // esta funcion tiene que leer lo que se escribe y cambiarlo en el estado
        const property = event.target.name;
        const value = event.target.value

        setForm({...form, [property]:value})
        // validate({...form, [property]:value})   //porque demora en testear
        // validate(form)
    }

    // const validate = (form) => {
    //     if(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
    //         setErrors({...errors,email:""})
    //     }
    //     else setErrors({...errors,email:"Hay un error en el email"})
    //     if(form.email === "") setErrors({...errors, email:"Email vacío"})
    // }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/dogs", form)
        .then(res=>alert(res))

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="nombre">
                <label>Nombre: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            </div>
            <div className="origen">
                <label>Origen: </label>
                <input type="text" value={form.origin} onChange={changeHandler} name="origin"/>
                {/* {errors.email && <span>{errors.email}</span>} */}
            </div>
            <div className="tiempoDeVida">
                <label>Tiempo de vida: </label>
                <input type="text" value={form.life_span} onChange={changeHandler} name="life_span"/>
            </div>
            <div className="pesoMinimo">
                <label>Peso mínimo: </label>
                <input type="text" value={form.weightMin} onChange={changeHandler} name="weightMin"/>
            </div>
            <div className="pesoMaximo">
                <label>Peso máximo: </label>
                <input type="text" value={form.weightMax} onChange={changeHandler} name="weightMax"/>
            </div>
            <div className="altura">
                <label>Altura: </label>
                <input type="text" value={form.height} onChange={changeHandler} name="height"/>
            </div>
            <div className="imagen">
                <label>Imagen: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image"/>
            </div>
            <div className="raza">
                <label>Raza: </label>
                <input type="text" value={form.breed_group} onChange={changeHandler} name="breed_group"/>
            </div>
            <div className="temperamento">
                <label>Temperamento: </label>
                <input type="number" value={form.temperament} onChange={changeHandler} name="temperament"/>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;