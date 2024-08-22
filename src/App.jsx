import './App.css'
import Nav from './components/navigation/Nav.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home.jsx'
import Single from './routes/sinle/Single.jsx'
import Footer from './components/footer/Footer.jsx'
import Refurbished from './routes/refurbished/Refurbished.jsx'
import Login from './routes/login/Login.jsx'

function App() {
  

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single' element={<Single/>}/>
        <Route path='/refurbished' element={<Refurbished/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/single-product/:id' element={<Single/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
