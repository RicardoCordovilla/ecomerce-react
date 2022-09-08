import React from 'react'

const ProductPurchase = ({ info }) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <th>{info.brand} </th>
                    <th>{info.productsInCart.quantity}</th>
                    <th>{info.price}</th>
                </tr>

            </table>

        </div>
    )
}

export default ProductPurchase