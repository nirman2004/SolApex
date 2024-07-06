import React from "react"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Feature from './components/Feature'
import News from "./components/News"
import About from './components/About'
import Login from "./components/Login"
import Logout from "./components/Logout"
import Register from "./components/Register"
const App = () => {
  return (
    <div>  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Feature' element={<Feature/>}/>
      <Route path='/News' element={<News/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path="/logout" element={<Logout/>} />
      <Route path='/Register' element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App