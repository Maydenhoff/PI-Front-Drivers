import style from "./Paginacion.module.css"
import { useState } from "react"

const Paginacion = ({pagina, setPagina, maximo, setInput, input}) => {

    // const [input, setInput] = useState(1)

    const nextPage = ()=> {
        setInput(parseInt(input)+1)
        setPagina(parseInt(pagina) +1)
    }
    const previousPage = ()=> {
        setInput(parseInt(input)-1)
        setPagina(parseInt(pagina) -1)
    }

//     const onkeyDown = (e) => {
//         if(e.keyCode === 13) {
//             setPagina(perseInt(e.target.value))
// if(
//     parseInt(e.target.value < 1) || 
//     parseInt(e.target.value) > Math.ceil(maximo) || 
//     isNaN(parseInt(e.target.value))) {
//         setPagina(1)
//         setInput(1)

//     } else {
//         setPagina(parseInt(e.target.value))
//     }

//         }
//     }

    // const onChange = (e)=> {
    //     setInput(e.target.value)

    // }
    return (
       <div className={style.div}>
        <button className={style.flecha}disabled={pagina === 1 || pagina <1 } onClick={previousPage}>◀</button>
        <p className={style.span}  name="page" value={input}>{input}</p>
        <span className={style.span}> de {maximo}</span>
        <button className={style.flecha} disabled={pagina === Math.ceil(maximo) || pagina >  Math.ceil(maximo) } onClick={nextPage}>▶</button>
       </div>
    )
}

export default Paginacion