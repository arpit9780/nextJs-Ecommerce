import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import offer1 from "../../assets/images/offer-1.jpg"
import offer2 from "../../assets/images/offer-2.jpg"

const Offer = () => {
    return (
        <>
            <Container fluid className="pt-5 pb-3">
                <Row className="px-xl-5">
                    <Col md={6}>
                        <div className="product-offer " style={{ height: "300px" }}>
                            <img className="img-fluid" src={offer1.src} alt="" />
                            <div className="offer-text">
                                <h6
                                    style={{ color: "#ffffff", textTransform: "uppercase" }}>
                                    Save 20%</h6>
                                <h3
                                    style={{ color: "#ffffff", marginBottom: "1rem" }}>
                                    Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="product-offer " style={{ height: "300px" }}>
                            <img className="img-fluid" src={offer2.src} alt="" />
                            <div className="offer-text">
                                <h6
                                    style={{ color: "#ffffff", textTransform: "uppercase" }}>
                                    Save 20%</h6>
                                <h3
                                    style={{ color: "#ffffff", marginBottom: "1rem" }}>
                                    Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Offer