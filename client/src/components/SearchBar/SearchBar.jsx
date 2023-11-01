import style from "./SearchBar.module.css"


const SearchBar = ({handleChange, handleSubmit}) => {

    return (
        <div className={style.conteiner}>

    <div className={style.div}>
        <input className={style.input}name="search" onChange={handleChange}></input>
        <button className={style.btn} onClick={handleSubmit}>Buscar</button>
    </div>
        </div>
    )
}

export default SearchBar