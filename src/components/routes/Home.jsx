import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'

const Home = () => {

  const actions = useDispatch()

  useEffect(() => {
    actions(getProducts())
  }, [])

  const products = useSelector(state => state.products)
  // console.log(products)


  return (
    <div className='home'>

      {
        products?.map(product => (
          <CardHome
            key={product.id}
            product={product}
          />
        ))
      }



    </div>
  )
}

export default Home