import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext()

export function ProductsProvider ({ children }) { 
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <ProductsContext.Provider value={{products}}>
      { children }
    </ProductsContext.Provider>
  )
}

