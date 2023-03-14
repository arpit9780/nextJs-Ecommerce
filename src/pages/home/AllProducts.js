import React, { useEffect } from 'react'
import { getProduct } from '@/redux/slicess/admin/productSlice'
import { addCart } from '@/redux/slicess/user/shopingSlice'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { slug } from '@/constant'




const Products = () => {
    const dispatch = useDispatch()
    const { product, role } = useSelector((state) => {
        return {
            role: state?.RootReducer?.authSlice?.role,
            product: state?.RootReducer?.ProductSlice?.product?.products,
        }
    })

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    useEffect(() => {

    }, [product, role])

    const shoppingCart = (id) => {
        if (role === "Welcome user..!!") {
            const body = { "itemId": id, "quantity": 1 }
            console.log(body)
            dispatch(addCart(body))
        }
        else {
            toast.error("your not login. Please login first")
        }
    }
    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">{slug}</span></h2>
                {/* <div className="row px-xl-5"> */}
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={5}
                    slidesPerView={5}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {product && product?.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div  className="col-lg-12 col-md-4 col-sm-6 pb-1" key={i}>
                                    <div className="product-item bg-light mb-4">
                                        <div className="product-img position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src={item.image} alt="" style={{ height: "220px", width: "auto", objectFit: "contain" }} />
                                            <div className="product-action">
                                                <button className="btn btn-outline-dark btn-square" onClick={() => shoppingCart(item._id)}><i className="fa fa-shopping-cart"></i></button>
                                                <button className="btn btn-outline-dark btn-square" ><i className="far fa-heart"></i></button>
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
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
            {/* </div> */}
        </>
    )
}

export default Products