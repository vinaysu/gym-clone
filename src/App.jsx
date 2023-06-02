import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import AboutUs from './pages/about-us/AboutUs'
import Programs from './pages/programs/Programs'
import Trainer from './pages/trainer/Trainer'
import Pricing from './pages/pricing/Pricing'
import JoinUs from './pages/join-us/JoinUs'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'


function App() {

  return (
    <div>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/program' element={<Programs/>}/>
        <Route path='/trainer' element={<Trainer/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/joining' element={<JoinUs/>}/>
        <Route path='/*' element={<div style={{height:'55vh'}}><h1>404: Page Not Found</h1></div>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
