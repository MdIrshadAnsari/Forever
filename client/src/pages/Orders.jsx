import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const{products, currency} = useContext(ShopContext)
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title Text1={'MY'} Text2={'ORDERS'}/>
      </div>
      <div>
        {products.slice(1, 4).map((item, index)=>(
          <div key={index} className='py-4 border-t'>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders