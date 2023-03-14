import CustomCard from '@/component/card/CustomCard'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const WomenDress = () => {
    const [data,setData] = useState([])
    const { product } = useSelector((state) => {
        return {
            product: state?.RootReducer?.ProductSlice?.product?.products,
        }
    })

    useEffect(() => {
       const obj = product?.filter((item) => item?.description == "Womens wear")
        setData(obj)
    }, [])


    return (
        <>
            <CustomCard data={data} />
        </>
    )
}

export default WomenDress