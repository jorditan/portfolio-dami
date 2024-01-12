import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import Composiciones from './Screens/Composiciones'
import Footer from './Components/Footer'
import Clases from './Screens/Clases'
import Presupuestos from './Screens/Presupuestos'
import MiCarrera from './Screens/MiCarrera'
import ScrollTop from './Components/Scroll/ScrollToTop'
import store from './Context/store'
import { Provider } from 'react-redux'
import Faqs from './Screens/Faqs'

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/composiciones' element={<Composiciones />} />
        <Route path='/micarrera' element={<MiCarrera />} />
        <Route path='/infoClases' element={<Clases />} />
        <Route path='/presupuestoClases' element={<Presupuestos />} />
        <Route path='/dudasFrecuentes' element={<Faqs />} />
      </Routes>
      <Footer />
    </Provider>
  )
}

export default App
