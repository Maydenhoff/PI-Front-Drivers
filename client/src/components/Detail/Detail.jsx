import style from "./Detail.module.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { reiniciarDetail, searchById } from "../../Redux/action"

const Detail = () => {
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail)
    const { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(searchById(id))
        return () => {

            dispatch(reiniciarDetail())
        }
    }, [dispatch, id])
    return (
        <div >
            {detail ?
                (
                    <div className={style.divConteiner}>
                        <div className={style.divConteinerImage}>
                            {typeof detail.id === "number"
                            ?(<img className={style.image} src={detail.image.url } alt={detail.name} /> )
                            : (<img className={style.image} src={detail.image} alt={detail.name} />)
}
                            {/* <img className={style.image} src={detail ? detail.image : detail.image.url } alt={detail.name} /> */}
                        </div>
                        <div className={style.divContainerInfo}>

                            <h1 className={style.name}>{detail.name}</h1>
                            <h1 className={style.info}>ID:{detail.id}</h1>
                            <h2 className={style.info}>Fecha de nacimiento: {detail.dob}</h2>
                            <h2 className={style.info}>Nacionalidad: {detail.nationality}</h2>
                            <h2 className={style.description}>{detail.description}</h2>
                            {typeof id !== "number" ?
               (
                <h3 className={style.info}>{detail.teams}</h3>
               ) : (
                  ""
               )
}
                            
                        </div>
                    </div>
                )
                : null}
        </div>
    )

}

export default Detail