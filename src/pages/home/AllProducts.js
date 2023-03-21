import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getProduct } from '@/redux/slicess/admin/productSlice'
import { addCart, addItem } from '@/redux/slicess/user/shopingSlice'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Col, Container, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { appRoute } from '@/constant'


const Products = () => {
    const dataFetchedRef = useRef(false);

    const [isloaded, setLoaded] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const { product, role, token, addProduct } = useSelector((state) => {
        return {
            role: state?.RootReducer?.authSlice?.role,
            product: state?.RootReducer?.ProductSlice?.product?.products,
            token: state?.RootReducer?.authSlice?.Token,
            addProduct: state?.RootReducer?.ShoppingSlice?.addCWA
        }
    })

    useEffect(() => {
        dispatch(getProduct())
        setLoaded(true)
    }, [])


    const fetchData = () => {
        console.log('Fetching data...');
        if (token) {
            if (addProduct.length > 0) {
                console.log(7854, isloaded, addProduct)
                dispatch(addCart(addProduct))
            }
        }
    }
    
    useEffect(() => {
        console.log(741,dataFetchedRef)
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        fetchData();
    }, [addProduct, token])

    const shoppingCart = (id) => {
        if (token && role === "Welcome user..!!") {
            const body = { "itemId": id, "quantity": 1 }
            dispatch(addCart(body))
        }
        else if (token && role === "Welcome admin..!!") {
            toast.error("you are admin. Only user can buy products ")
        }
        else {
            const body = { "itemId": id, "quantity": 1 }
            dispatch(addItem(body))
            router.push(appRoute.SIGNIN)
        }
    }

    return (
        <>

            <Container fluid style={{ padding: "20px 0px 12px 0px" }}>
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={5}
                    slidesPerView={5}
                    navigation
                    onSwiper={(swiper) => null}
                    onSlideChange={() => null}
                >
                    {product && product?.map((item, i) => {
                        return (
                            <SwiperSlide >
                                <Col xs lg="12" md="4" sm="6"
                                    style={{ height: "460px", paddingBottom: "16px" }}>
                                    <div className="product-item" key={i}>
                                        <div className="product-img"
                                            style={{ position: "relative", overflow: "hidden" }}>
                                            <img
                                                className="image-product"
                                                src={item.image} alt="" />

                                            <div className="product-action">
                                                <button
                                                    className="btn btn-outline-dark btn-square"
                                                    onClick={() => shoppingCart(item._id)}>
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                                <button
                                                    className="btn btn-outline-dark btn-square" >
                                                    <i className="far fa-heart"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: "center", padding: "64px 0px" }}>
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                href="">
                                                <h6>{item.title}</h6>
                                            </Link>
                                            <div className="product-Price">
                                                <h5>${item.price}</h5>
                                                <h6 style={{ color: "#6c757d", marginLeft: "8px" }}>
                                                    <del>$123.00</del>
                                                </h6>
                                            </div>
                                            <div className="product-star">
                                                {[1, 2, 3, 4, 5].map((data, i) =>
                                                    <small
                                                        className="fa fa-star text-primary"
                                                        style={{ marginRight: "4px" }}></small>
                                                )}
                                                <small>(99)</small>
                                            </div>
                                            <div>
                                                <small>{item.description}</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </>
    )
}

export default Products