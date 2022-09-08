import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductsCart = ({ articleInfo, getAllproducts }) => {

  const handleTrash = () => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${articleInfo.id}`
    axios.delete(url, getConfig())
      .then(() => getAllproducts())
      .catch(err => console.log(err))
  }


  return (
    <div className="cart">
      <article className='articleCard'>
        <h3>Brand: {articleInfo.brand}</h3>
        <p>Article: {articleInfo.title}</p>
        <p>Quantity: {articleInfo.productsInCart.quantity}</p>
        <button className='btnTrash btn' onClick={handleTrash}>Trash</button>
      </article>
    </div>
  )
}

export default ProductsCart