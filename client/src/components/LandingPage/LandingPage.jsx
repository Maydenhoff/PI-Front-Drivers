import style from "./LandingPage.module.css"

import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
    <div >
        <h1 className={style.h1}>¡Bienvenidos!</h1>
            <h3>Bienvenidos a la aplicacion donde vas a poder informarte todo sobre F1 y crear tus propios equipos personalizados  </h3>
        <Link to={"/home"}>
        <button className={style.btn}>INGRESAR</button>
        </Link>


    </div>
    )
}

export default LandingPage