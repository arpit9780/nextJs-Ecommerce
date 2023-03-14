import CustomCard from '@/component/card/CustomCard'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Food = () => {
    const [data,setData] = useState([])
    const { product } = useSelector((state) => {
        return {
            product: state?.RootReducer?.ProductSlice?.product?.products,
        }
    })

    console.log(444,product,data)

    useEffect(() => {
       const obj = product?.filter((item) => item?.description == "Food")
        console.log(666, obj)
        setData(obj)
    }, [])


    return (
        <>
            <CustomCard data={data} />
        </>
    )
}

export default Food