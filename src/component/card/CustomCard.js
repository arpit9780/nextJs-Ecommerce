import { appRoute } from '@/constant'
import { addCart } from '@/redux/slicess/user/shopingSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const CustomCard = ({ data, person }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const { role, token } = useSelector((state) => {
        return {
            role: state?.RootReducer?.authSlice?.role,
            token: state?.RootReducer?.authSlice?.Token
        }
    })

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
        <Container fluid className="pt-5 pb-3">
            <Row className="px-xl-5">
                {data?.map((item, i) => {
                    return (
                        <Col lg={3} md={4} sm={6} key={i} className="pb-1">
                            <div className="product-item">
                                <div className="product-img">
                                    <img className="image-product"
                                        src={item.image} alt=""
                                    />
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
                                <div style={{ textAlign: "center", padding: "64px 0px" }}>
                                    <Link
                                        style={{ textDecoration: "none", color:"#3d464d" }}
                                        href="">{item.title}
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
                    )
                })}
            </Row>
        </Container>
    )
}

export default CustomCard