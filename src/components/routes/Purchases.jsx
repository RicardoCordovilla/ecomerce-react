import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchaseCard from '../shared/purchases/PurchaseCard'

const Purchases = () => {
  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(url, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])

  // console.log(purchases)
  return (
    <div>
      {
        purchases?.map(purchase => (
          <PurchaseCard
            key={purchase.id}
            purchase={purchase}

          />
        ))
      }

    </div>
  )
}

export default Purchases