import Navbar from './Components/Navbar'
import { Routes, Route} from 'react-router-dom'
import Home from './Screens/Home'
import Clases from './Screens/Clases'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/composiciones' element={<Clases/>}/>
        <Route path='/micarrera' element={<Clases/>}/>
        <Route path='/infoClases' element={<Clases/>}/>
        <Route path='/presupuestoClases' element={<Clases/>}/>
      </Routes>
    </>
  )
}

export default App
