import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const CardHome = ({ product }) => {

    const navigate = useNavigate()
    const hadleCLick = () => {
        console.log(product.id)
        navigate(`/product/${product.id}`)
    }

    // funcion para agregar un producto a la api
    const handleBuy = (e) => {
        e.stopPropagation()
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const article = {
            id: product.id,
            quantity: 1
        }
        axios.post(url, article, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    // console.log(product)
    return (
        <article onClick={hadleCLick} className='cardProduct'>
            <header className='cardProduct__imgBx'>
                <img className='cardProduct__img' src={product.productImgs[0]} alt="" />
            </header>
            <div className="cardProduct__infoBx">
                <h3 className="cardProduct__title">
                    {product.title}
                </h3>
                <div className="priceBuy">
                    <h3 className='cardProduct__price'>
                        {product.price}
                    </h3>
                    <button onClick={handleBuy} className='ctaAdd btn'>
                        +
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CardHome