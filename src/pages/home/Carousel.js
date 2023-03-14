import { appRoute, pagesPath } from '@/constant'
import Link from 'next/link'
import React, { useState } from 'react'
import Carousels from 'react-bootstrap/Carousel';
import offer1 from "../../assets/images/offer-1.jpg"
import offer2 from "../../assets/images/offer-2.jpg"


const Carousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className="container-fluid mb-3">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                        <div className="carousel-inner">
                        <Carousels activeIndex={index} onSelect={handleSelect} >
                            {
                                pagesPath?.map((item, i) => {
                                    return (
                                        <Carousels.Item key={i}>
                                            <div className="carousel-item position-relative active" style={{ height: "430px" }}>
                                                <img className="position-absolute w-100 h-100" src={item.img} alt="image1" style={{ objectFit: "cover" }} />
                                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                                    <div className="p-3" style={{ maxWidth: "700px" }}>
                                                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">{item.name}</h1>
                                                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">{item.details}</p>
                                                        <Link className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href={item.url}>Shop Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousels.Item>
                                    )
                                })
                            }
                        </Carousels>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-offer mb-30" style={{ height: "200px" }}>
                            <img className="img-fluid" src={offer1.src} alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <Link href="" className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                        <div className="product-offer mb-30" style={{ height: "200px" }}>
                            <img className="img-fluid" src={offer2.src} alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <Link href="" className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carousel