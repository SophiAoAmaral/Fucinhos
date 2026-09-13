import {Route, Routes} from 'react-router'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Plano } from './pages/Plano'

function App() {


  return (
    <>
      <Routes>
        <Header/>
          <Route path='/contratar' element={<Plano/>}/>
        <Footer/>
      </Routes>
    </>
  )
}

export default App
