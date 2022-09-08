import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'

const SimiliarProducts = ({ productInfo }) => {


    const [filterProducts, setFilterProducts] = useState()

    const products = useSelector(state => state.products)

    // console.log(productInfo)

    useEffect(() => {
        if (productInfo) {
            const filter = products?.filter(item => item.category.name === productInfo.category)
            setFilterProducts(filter)
        }
    }, [productInfo])

    // console.log(filterProducts)
    return (
        <div className='similarProducts'>
            <h2>Similar products you can check</h2>
            <div className='similarProductsBx'>
                {
                    filterProducts?.map(product => {
                        if (product.title !== productInfo.title) {
                            return (
                                <CardHome
                                    key={product.id}
                                    product={product}
                                />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default SimiliarProducts