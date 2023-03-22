import CustomCard from '@/component/card/CustomCard'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const index = () => {
  
    const {product} = useSelector((state) => {
        return{
          product : state?.RootReducer?.authSlice?.products?.data?.data
        }
      })
      console.log("search",product)
    return (
    <div>
        <CustomCard data={product} person="user"/>
    </div>
  )
}

export default index