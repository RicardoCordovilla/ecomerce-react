import React from 'react'
import ProductPurchase from './ProductPurchase'

const PurchaseCard = ({ purchase }) => {
    console.log(purchase)
    return (
        <div className='purchaseCard'>
            <h2 className='purchaseTitle'>Purchase</h2>
            <div className="purchaseBody">
                <h3>Date: {purchase.updatedAt}</h3>
                {
                    purchase.cart.products?.map(product => (
                        <ProductPurchase
                            key={product.id}
                            info={product}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default PurchaseCard