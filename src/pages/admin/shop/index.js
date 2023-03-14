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

const Shop = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const { role, oneProduct, products } = useSelector((state) => {
        return {
            role: state?.RootReducer?.authSlice?.role,
            products: state?.RootReducer?.ProductSlice?.product,
            oneProduct: state?.RootReducer?.ProductSlice?.oneProduct,
        }
    })

    useEffect(() => {
        if (role === "Welcome admin..!!") {
            dispatch(getAdminProduct())
        }
        
    }, [role, oneProduct])


    const handleUpdate = (id) => {
        router.push(`/admin/shop/${id}`)
    }
    return (
        <>
            <div className='container'>

                <Box
                    m={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Link href={appRoute.PRODUCT_CREATE}>
                        <Button variant='contained' style={{ color: "#FFD333", backgroundColor: "#3D464D" }}>Add Product</Button>
                    </Link>
                </Box>

                <div className="container-fluid pt-5 pb-3">
                    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Products</span></h2>
                    <div className="row px-xl-5">

                        {products.post ? products?.post?.map((item, i) => {
                            return (
                                <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                    <div className="product-item bg-light mb-4">
                                        <div className="product-img position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src={item.image} alt="" style={{ height: "220px", width: "auto", objectFit: "contain" }} />
                                            <div className="product-action">
                                                <button className="btn btn-outline-dark btn-square" onClick={() => { dispatch(deleteProduct(item._id)) }} >
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                                <button className="btn btn-outline-dark btn-square" onClick={() => handleUpdate(item._id)} >
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-center py-4">
                                            <Link className="h6 text-decoration-none text-truncate" href="">{item.title}</Link>
                                            <div className="d-flex align-items-center justify-content-center mt-2">
                                                <h5>${item.price}</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa fa-star text-primary mr-1"></small>
                                                <small className="fa fa-star text-primary mr-1"></small>
                                                <small className="fa fa-star text-primary mr-1"></small>
                                                <small className="fa fa-star text-primary mr-1"></small>
                                                <small className="fa fa-star text-primary mr-1"></small>
                                                <small>(99)</small>
                                            </div>
                                            <div>
                                                <small>{item.description}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                            :
                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" style={{ position: "relative", height: "20vh" }}>
                                <RingLoader color="#6C757D" style={{ position: 'absolute', top: "50%", left: "500px" }} />
                            </div>
                        }


                    </div>
                </div>


            </div>
        </>
    )
}

export default Shop