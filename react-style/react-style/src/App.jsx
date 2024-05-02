import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Footer/>
    </>
  )
}

export default App
