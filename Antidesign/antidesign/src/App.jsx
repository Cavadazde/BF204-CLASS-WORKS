import { useState } from 'react'
import './App.css'
import Tablee from './Table'
import { useEffect } from 'react'
import { getAll } from './services'
import { endpoints } from './services/constant'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAll(endpoints.products)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
console.log(products)
  return (
    <>
      <Tablee products={products} setProducts={setProducts}/>
    </>
  )
}

export default App
