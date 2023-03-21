import { appRoute } from '@/constant'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAdminProduct } from '@/redux/slicess/admin/productSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { RingLoader } from 'react-spinners'
import CustomCard from '@/component/card/CustomCard'

const Shop = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const { role, oneProduct, products, token } = useSelector((state) => {
        return {
            role: state?.RootReducer?.authSlice?.role,
            products: state?.RootReducer?.ProductSlice?.product,
            oneProduct: state?.RootReducer?.ProductSlice?.oneProduct,
            token : state?.RootReducer?.authSlice?.Token
        }
    })

    useEffect(() => {
        if (token !== undefined && role === "Welcome admin..!!") {
            dispatch(getAdminProduct())
        }

    }, [role, oneProduct])

    return (
        <>
            <div className='container'>
                <Box
                    m={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end">
                    <Link href={appRoute.PRODUCT_CREATE}>
                        <Button 
                        variant='contained'
                            style={{ color: "#FFD333", backgroundColor: "#3D464D" }}>
                            Add Product
                        </Button>
                    </Link>
                </Box>
            </div>
            <CustomCard data={products?.post} person="admin" />
        </>
    )
}

export default Shop