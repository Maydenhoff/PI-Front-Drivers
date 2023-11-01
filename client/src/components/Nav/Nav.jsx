import style from "./Nav.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { filterByOrigen, filterByTeams, getTeams, orderAlfabeticamente, orderFechaNacimiento } from "../../Redux/action"


const Nav = ({setPagina, setInput}) => {
    const dispatch = useDispatch()
    const teams = useSelector((state) => state.teams)

   const handleOrder = (event) => {
        dispatch(orderAlfabeticamente(event.target.value))
        setPagina(1)
        setInput(1)

    }
    const handleFechaOrder = (event) => {
        dispatch(orderFechaNacimiento(event.target.value))
        setPagina(1)
        setInput(1)
    }
    const handleTeam = (event) => {
        dispatch(filterByTeams(event.target.value))
        setPagina(1)
        setInput(1)
    }
    
    const handleOrigen = (event) => {
        dispatch(filterByOrigen(event.target.value))
        setPagina(1)
        setInput(1)
    }
    useEffect(() => {
        dispatch(getTeams())

    }, [dispatch])

    return (
        <>
            

         <Link to={"/creardriver"}>
                    <button className={style.btn}>CREAR DRIVER</button>
                    </Link>
            
                 

                    <select className={style.select} onChange={handleOrder}>
                    <option disabled selected>Ordenar alfabeticamente</option>
                    <option value="nombreAscendente">Nombre(ascendente)</option>
                    <option value="nombreDescendiente">Nombre(descendente)</option>
                    </select>
                 
                    <select  className={style.select} onChange={handleFechaOrder}>
                    <option disabled selected>Ordenar por fecha de nacimiento</option>
                    <option value="fechaAscendente">Fecha de Nacimiento(ascendente)</option>
                    <option value="fechaDescendiente">Fecha de Nacimiento(descendente)</option>
                    </select>
                    <select className={style.select} onChange={handleTeam}>
                        <option disabled selected>Filtrar por escuderia</option>
                    {teams?.map((team) => {
                        return (
                            <option value={team} key={team} >{team}</option>
                            )
                        })}
                        </select>
                        <select className={style.select}onChange={handleOrigen}>
                        <option disabled selected>Filtrar por origen</option>
                        <option value="allDrivers">Todos los conductores</option>
                        <option value="creados">Mis conductores</option>
                        <option value="API">API</option>
                    </select> 
                    </>
    )
}


export default Nav