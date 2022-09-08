import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'

const ProductDescription = ({ productInfo }) => {

    const [cant, setCant] = useState(1)

    // console.log(productInfo)

    const obj = {
        id: productInfo?.id,
        quantity: cant
    }

    const handleAdd = () => {
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.post(url, obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }


    const clickIncr = () => {
        if (cant > 0)
            setCant(cant + 1)
    }
    const clickDecr = () => {
        if (cant > 1)
            setCant(cant - 1)
    }


    return (
        <div className="productInfo">

            <section className='productInfoBx'>
                <img className='productInfo__img' src={productInfo?.productImgs[0]} alt="" />
                <div className="produtInfo__descriptionBx">

                    <h2 className="productInfo__name">{productInfo?.title}</h2>
                    <p className="productInfo__desctription">
                        {productInfo?.description}
                    </p>
                </div>
                <div className="productInfo__body">
                    <article className="productInfo__price">
                        <h3 className="productInfo__priceLabel">Price</h3>
                        <span className="productInfo_priceValue">
                            {productInfo?.price}
                        </span>

                    </article>
                    <div className="btns">

                        <button className='ctaAdd btn' onClick={clickDecr}>-</button>
                        <span>{cant}</span>
                        <button className='ctaAdd btn' onClick={clickIncr}>+</button>

                        <button className='ctaBuy btn' onClick={handleAdd}>add</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDescription