import { appRoute } from '@/constant'
import { addCart } from '@/redux/slicess/user/shopingSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const CustomCard = ({ data, person }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    
    const { role,token } = useSelector((state) => {
        return {
            role: state?.RootReducer?.authSlice?.role,
            token : state?.RootReducer?.authSlice?.Token
        }
    })

    console.log(654125,role)
    const shoppingCart = (id) => {
        if (token !== undefined && role === "Welcome user..!!") {
            const body = { "itemId": id, "quantity": 1 }
            dispatch(addCart(body))
        }
        else {
            router.push(appRoute.SIGNIN)
            toast.error("your not login. Please login first")
        }
    }

    const handleUpdate = (id) => {
        router.push(`/profile/shop/${id}`)
    }

    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">
                    {data?.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        <img className="img-fluid w-100"
                                            
                                            src={item.image} alt=""
                                            style={{ height: "220px", width: "auto", objectFit: "contain" }} />
                                        <div className="product-action">
                                            {
                                                person === "user" ?
                                                    <>
                                                        <button
                                                            className="btn btn-outline-dark btn-square"
                                                            onClick={() => shoppingCart(item._id)}>
                                                            <i className="fa fa-shopping-cart"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-outline-dark btn-square" >
                                                            <i className="far fa-heart"></i>
                                                        </button>
                                                    </>
                                                    :
                                                    <>
                                                        <button
                                                            className="btn btn-outline-dark btn-square"
                                                            onClick={() => { dispatch(deleteProduct(item._id)) }} >
                                                            <i className="fa fa-trash"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-outline-dark btn-square"
                                                            onClick={() => handleUpdate(item._id)} >
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                    </>
                                            }
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
                    })}
                </div>
            </div>
        </>
    )
}

export default CustomCard