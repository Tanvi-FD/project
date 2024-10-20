import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Components/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Properties from './Components/Properties'
import PropertyDetails from './Components/PropertyDetails'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Properties' element={<Properties/>}></Route>
        <Route path='/PropertyDetails' element={<PropertyDetails/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

      
    </>
  )
}

export default App
