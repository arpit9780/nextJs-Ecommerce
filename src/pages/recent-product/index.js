// import button from 'next/button'
import Link from 'next/link'
import React from 'react'
import product1 from '../../assets/images/product-1.jpg'
import product2 from '../../assets/images/product-2.jpg'
import product3 from '../../assets/images/product-3.jpg'
import product4 from '../../assets/images/product-4.jpg'
import product5 from '../../assets/images/product-5.jpg'
import product6 from '../../assets/images/product-6.jpg'
import product7 from '../../assets/images/product-7.jpg'
import product8 from '../../assets/images/product-8.jpg'

const products = [
    { image: product1.src },
    { image: product2.src },
    { image: product3.src },
    { image: product4.src },
    { image: product5.src },
    { image: product6.src },
    { image: product7.src },
    { image: product8.src },

]
const RecentProduct = () => {

    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">
                    {products?.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src={item.image} alt="" />
                                        <div className="product-action">
                                            <button className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></button>
                                            <button className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></button>
                                            <button className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></button>
                                            <button className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <Link className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</Link>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small>(99)</small>
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

export default RecentProduct