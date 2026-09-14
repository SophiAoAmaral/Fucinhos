import {Route, Routes} from 'react-router'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Plano } from './pages/Plano'

function App() {


  return (
    <>
    <Header className='font'/>
      <Routes>
          <Route path='/contratar' element={<Plano/>}/>
      </Routes>
      <Footer/>
    </>

  )
}

export default App
