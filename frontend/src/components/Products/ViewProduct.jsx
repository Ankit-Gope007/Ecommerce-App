import React, { useEffect, useState } from 'react'
import S_Card from '../Cards/Card.seller'
import axios from 'axios'

const ViewProduct = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await axios.get('/api/products/getProductsBySeller', {
          // Include cookies in the request
          withCredentials: true,
        })
        // console.log(response.data.data)
        // console.log(Array.isArray(response.data.data))
        setProducts(response.data.data)
      }
      fetchProducts()
      // console.log(products)

    } catch (error) {
      console.log(error)

    }
  }, [])





  return (<>
    <div className='grid grid-cols-2'>
      {
        products.map((product) => (
          <div >
            <S_Card key={product._id} 
              _id={product._id}
              name={product.name}
              category={product.category}
              price={product.price}
              description={product.description}
              countInStock={product.countInStock}
              imageUrl={product.imageUrl[0]} />

          </div>
        ))
      }
    </div>

  </>

  )
}

export default ViewProduct