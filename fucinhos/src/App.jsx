import {Route, Routes, useLocation} from 'react-router'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Cadastro } from './Forms/Cadastro'
import { useEffect } from 'react'

function App() {
  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


  return (
    <>
     <ScrollToTop/>
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
