import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'
import SimiliarProducts from '../productDetail/SimiliarProducts'

const ProductDetail = () => {

  const { id } = useParams()

  const [productInfo, setProductInfo] = useState()

  useEffect(() => {
    // get products by id

    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then(res => setProductInfo(res.data))
      .catch(err => console.log(err))
  }, [])

  // console.log(productInfo)

  return (
    <div className='productDetail'>
      <ProductDescription
        productInfo={productInfo?.data.product}
      />

      <SimiliarProducts
        productInfo={productInfo?.data.product}
      />

    </div>
  )
}

export default ProductDetail