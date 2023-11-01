import { useDispatch, useSelector } from "react-redux"
import { getDriverPrueba } from "../../Redux/action"

const Home1 = () => {
    const dispatch = useDispatch()
    const pruebaDrivers = useSelector((state)=> state.pruebaDrivers)


    const driverHandler = () => {
            dispatch(getDriverPrueba())
    }


    return (
        <div>

        <h1>hola</h1>
        <button onClick={driverHandler}>QUE APAREZCAN</button>
        {
            pruebaDrivers?.map((driver)=> {
                return (
                    <h1>{driver.name}</h1>
                )
            })
        }
        </div>
    )
}

export default Home1