import style from "./Form.module.css"
import { useDispatch, useSelector } from "react-redux"
import { createNewDriver, getTeams } from "../../Redux/action"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { validation, validationSubmit } from "../validation"

const CrearDriver = () => {
    const dispatch = useDispatch()
    const teams = useSelector((state) => state.teams)
    const navigate = useNavigate()
    let indice = 0
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        nationality: "",
        image: "",
        dob: "",
        team: [],
        description: ""

    })

    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        nationality: "",
        image: "",
        dob: "",
        description: "",
        team: "Debes elegir al menos una escuderia"
    })


    const handleChange = (event) => {
        if (event.target.name === "team") {
            if (!userData.team.includes(event.target.value)) {
                setUserData({ ...userData, team: [...userData.team, event.target.value] })
                setErrors((prevValue) => {
                    return { ...prevValue, team: "" }
                })
            } else {
                setUserData({ ...userData, team: userData.team.filter((e) => e !== event.target.value) })
                setErrors((prevValue) => {
                    return { ...prevValue, team: "Debes elegir al menos una escuderia" }
                })
            }
        } else {


            setUserData({ ...userData, [event.target.name]: event.target.value })

            validation(event.target, setErrors)
        }





        if (userData.team.length) {
            console.log(userData);
            setErrors({ ...errors, team: "" })
        }

    }





    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createNewDriver(userData, navigate))

    }


    useEffect(() => {
        dispatch(getTeams())
    }, [])



    return (

        <div className={style.divContainer}>

            <form className={style.form} onSubmit={handleSubmit} >
                <Link to="/home">
                    <button>Home</button>
                </Link>

                <div className={style.divContainerInfo}>
                    <p className={style.p}>¡Crea tu corredor!</p>
                    <label className={style.label}>Nombre:</label>
                    <input className={style.inputField} name="name" onChange={handleChange} />
                    {errors.name.length ? (<p className={style.signupContainer}>{errors.name}</p>) : ""}

                    <br />

                    <label className={style.label}>Apellido:</label>
                    <input className={style.inputField} name="surname" onChange={handleChange} />
                    {errors.surname.length ? (<p className={style.signupContainer}>{errors.surname}</p>) : ""}

                    <br />

                    <label className={style.label}>Nacionalidad:</label>
                    <input className={style.inputField} name="nationality" onChange={handleChange} />
                    {errors.nationality.length ? (<p className={style.signupContainer}>{errors.nationality}</p>) : ""}

                    <br />

                    <label className={style.label}>Imagen:</label>
                    <input className={style.inputField} name="image" onChange={handleChange} />
                    {errors.image.length ? (<p className={style.signupContainer}>{errors.image}</p>) : ""}

                    <br />

                    <label className={style.label}>Fecha de nacimiento:</label>
                    <input className={style.date} type="date" name="dob" onChange={handleChange} />
                    {errors.dob.length ? (<p className={style.signupContainer}>{errors.dob}</p>) : ""}

                    <br />

                    <label className={style.label}>Descripcion: </label>
                    <br />
                    <textarea className={style.textarea} name="description" onChange={handleChange}></textarea>
                    {errors.description.length ? (<p className={style.signupContainer}>{errors.description}</p>) : ""}

                    <br />

                    <label className={style.label}>Escuderías:</label>
                    <br />
                    <select multiple className={style.select} name="team" onChange={handleChange}>
                        <option disabled selected>Escuderias(podes elegir mas de uno)</option>

                        {teams?.map((team) => {
                            return (

                                <option value={team} key={team}>{team}</option>
                            )
                        })}
                    </select>

                    <br />

                    {!userData.team.length ? (<p className={style.signupContainer}>Debes elegir al menos una escuderia</p>) : ""}
                    <p className={style.pTeam}>Escuderias seleccionadas: {userData.team.map((data) => {

                        indice = indice + 1
                        if (indice === userData.team.length) {
                            return data
                        } else {

                            return data + " / "
                        }
                    })}</p>

                    {!errors.name.length || !errors.surname.length || !errors.nationality.length || !errors.image.length || !errors.dob.length || !errors.description.length || !errors.team.length ?

                        <button className={style.button} type="submit"  >CREAR</button>

                        :
                        null
                    }

                </div>
            </form>

        </div>
    )
}

export default CrearDriver