import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'

const ProductsCart = ({ articleInfo, getAllproducts }) => {

  const [hide, setHide] = useState(true)

  const handleTrash = () => {
    setHide(false)
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${articleInfo.id}`
    axios.delete(url, getConfig())
      .then(() => getAllproducts())
      .catch(err => console.log(err))
  }


  return (
    <div className={hide?'box':'hide'}>
      <div className="carts">
        <article className='articleCard'>
          <h3>Brand: {articleInfo.brand}</h3>
          <p>Article: {articleInfo.title}</p>
          <p>Quantity: {articleInfo.productsInCart.quantity}</p>
          <button className='btnTrash btn' onClick={handleTrash}>Trash</button>
        </article>
      </div>
    </div>
  )
}

export default ProductsCart