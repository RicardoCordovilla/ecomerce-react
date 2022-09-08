import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductsCart from '../Cart/ProductsCart'


const Cart = () => {

    const [cartArticles, setCartArticles] = useState()

    const [totalValue, setTotalValue] = useState()

    const getAllproducts = () => {
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(url, getConfig())
            .then(res => {
                const products = res.data.data.cart.products
                setCartArticles(res.data.data.cart.products)
                console.log(res.data.data.cart.products)

                const total = products.reduce((sum, i) => {
                    return Number(i.price) * i.productsInCart.quantity + sum
                }, 0)
                setTotalValue(total)

            })
            .catch(err => setCartArticles())
    }


    useEffect(() => {
        getAllproducts()
    }, [])

    // console.log(cartArticles)

    const handleCheckout = () => {
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const body = {
            "street": "Green St. 1456",
            "colony": "Southwest",
            "zipCode": 12345,
            "city": "USA",
            "references": "Some references"
        }
        axios.post(url, body, getConfig())
            .then(res => {
                console.log(res.data)
                setTotalValue(0)
                getAllproducts()
            })
            .catch(err => console.log(err))

    }

    // console.log(cartArticles)

    return (
        <article className='cart'>
            <div className="bodyCart">
                <h2>My Cart</h2>
                {
                    cartArticles?.map(product => (
                        <ProductsCart
                            key={product.id}
                            articleInfo={product}
                            getAllproducts={getAllproducts}
                        />
                    ))
                }
            </div>

            <div className="cartFooter">
                <h2>Total:</h2>
                <h2>$ {totalValue}</h2>
                <button className='btnCheckout btn' onClick={handleCheckout}>CHECKOUT</button>
            </div>

        </article>
    )
}

export default Cart