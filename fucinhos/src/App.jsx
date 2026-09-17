import {Route, Routes} from 'react-router'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Cadastro } from './Forms/Cadastro'

function App() {


  return (
    <>
    <Header className='font'/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contratar' element={<Cadastro/>}/>
      </Routes>
      <Footer/>
    </>

  )
}

export default App
