import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import Composiciones from './Screens/Composiciones'
import Footer from './Components/Footer'
import Clases from './Screens/Clases'
import Presupuestos from './Screens/Presupuestos'
import MiCarrera from './Screens/MiCarrera'
import ScrollTop from './Components/Scroll/ScrollToTop'

function App() {

  return (
    <>
      <Navbar />
      <ScrollTop/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/composiciones' element={<Composiciones />} />
          <Route path='/micarrera' element={<MiCarrera />} />
          <Route path='/infoClases' element={<Clases />} />
          <Route path='/presupuestoClases' element={<Presupuestos />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
