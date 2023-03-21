import CustomCard from '@/component/card/CustomCard'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const index = () => {
  
    const {product} = useSelector((state) => {
        return{
          product : state?.RootReducer?.authSlice?.products?.data?.data
        }
      })
    return (
    <div>
        <CustomCard data={product } />
    </div>
  )
}

export default index