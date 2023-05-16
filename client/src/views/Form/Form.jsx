import axios from "axios";
import { useState } from "react";



const Form = () => {

    const [form, setForm] = useState({
        name:"",
        origin:"",
        life_span:"",
        weight:"",
        height:"",
        image:""
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
        const {data} = axios.post("http://localhost:3001/dogs", form)
        console.log(data)
        .then(res=>alert(res))
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            </div>
            <div>
                <label>Origin: </label>
                <input type="text" value={form.origin}onChange={changeHandler} name="origin"/>
                {/* {errors.email && <span>{errors.email}</span>} */}
            </div>
            <div>
                <label>Tiempo de vida: </label>
                <input type="text" value={form.life_span}onChange={changeHandler} name="life_span"/>
            </div>
            <div>
                <label>Peso: </label>
                <input type="text" value={form.weight}onChange={changeHandler} name="weight"/>
            </div>
            <div>
                <label>Altura: </label>
                <input type="text" value={form.height}onChange={changeHandler} name="height"/>
            </div>
            <div>
                <label>Imagen: </label>
                <input type="text" value={form.image}onChange={changeHandler} name="image"/>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;