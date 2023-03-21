import { deleteCard, getToCard, incrementCard } from '@/redux/slicess/user/shopingSlice'
import { useSelect } from '@mui/base'
import { Backdrop, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RingLoader } from 'react-spinners'

const index = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { carts, card } = useSelector((state) => {
        return {
            carts: state?.RootReducer?.ShoppingSlice?.allCards?.data,
            card: state?.RootReducer?.ShoppingSlice?.cart,
        }
    })

    useEffect(() => {
        dispatch(getToCard())
        setLoading(false)
    }, [card])


    const handleDelete = (id) => {
        setLoading(true)
        const body = { "itemId": id }
        dispatch(deleteCard(body))
    }

    const handleIncrement = (id) => {
        setLoading(true)

        const body = {
            "itemId": id,
            "action": "increment"
        }
        dispatch(incrementCard(body))
    }

    const handleDecrement = (id) => {
        setLoading(true)
        const body = {
            "itemId": id,
            "action": "decrement"
        }
        dispatch(incrementCard(body))
    }

    return (

        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                    <table className="table table-light table-borderless table-hover text-center mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th>Image</th>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {carts && carts?.items?.map((item, i) => {
                            const totaly = item.price * item.quantity
                            return (
                                <tbody key={i} className="align-middle">
                                    <tr>
                                        <td className="align-middle"><img src="img/product-1.jpg" alt="" style={{ width: "50px" }} /> </td>
                                        <td className="align-middle">{item.title}</td>
                                        <td className="align-middle">${item.price}</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                <div className="input-group-btn">
                                                    <button
                                                        className="btn btn-sm btn-primary btn-minus"
                                                        onClick={() => { handleDecrement(item.itemId) }}
                                                        disabled={item.quantity <= 1 ? true : false}>
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={item.quantity} />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus" onClick={() => { handleIncrement(item.itemId) }}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{totaly}</td>
                                        <td className="align-middle"><button className="btn btn-sm btn-danger" onClick={() => { handleDelete(item.itemId) }}><i className="fa fa-times"></i></button></td>
                                    </tr>
                                </tbody>
                            )
                        })}

                    </table>
                </div>
                {loading ?
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={loading}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    :
                    null
                }
                <div className="col-lg-4">
                    <form className="mb-30" action="">
                        <div className="input-group">
                            <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
                            <div className="input-group-append">
                                <button className="btn btn-primary">Apply Coupon</button>
                            </div>
                        </div>
                    </form>
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Carts Summary</span></h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="border-bottom pb-2">
                            <div className="d-flex justify-content-between mb-3">
                                <h6>Subtotal</h6>
                                <h6>{carts?.bill}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium" style={{ color: "green" }}>Free</h6>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex justify-content-between mt-2">
                                <h5>Total</h5>
                                <h5>{carts?.bill}</h5>
                            </div>
                            <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default index