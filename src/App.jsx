import './App.css'
import {Route, Routes} from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import CrearDriver from './components/Form/Form'

const App = ()=> {
  return (
    <div className='App'>

 <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/driver/:id" element={<Detail/>}/>
    <Route path="/crearDriver" element={<CrearDriver/>}/>

 </Routes>
    </div>
  )
}

export default App
