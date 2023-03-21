import { appRoute, pagesPath } from '@/constant'
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import offer1 from "../../assets/images/offer-1.jpg"
import offer2 from "../../assets/images/offer-2.jpg"


const CarouselFile = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Container fluid>
                <Row className='px-xl-5'>
                    <Col xs lg="8">
                        <Carousel activeIndex={index} onSelect={handleSelect}  >
                            {pagesPath?.map((item, i) => {
                                return (
                                    <Carousel.Item key={i}>
                                        <div
                                            className="carousel-item active"
                                            style={{ height: "430px" }}>
                                            <img
                                                className="carousel-image"
                                                src={item.img} alt="image1"
                                                style={{ objectFit: "cover" }} />
                                            <div
                                                className="carousel-caption">
                                                <div
                                                    style={{ maxWidth: "700px", padding: "12px" }}>
                                                    <h1
                                                        className="carousel-name animate__animated animate__fadeInDown" >
                                                        {item.name}</h1>
                                                    <p
                                                        className="carousel-details animate__animated animate__bounceIn" >
                                                        {item.details}</p>
                                                    <Link
                                                        className="carousel-button animate__animated animate__fadeInUp"
                                                        href={item.url}>
                                                        Shop Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                )
                            })
                            }
                        </Carousel>
                    </Col>
                    <Col xs lg="4">
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CarouselFile