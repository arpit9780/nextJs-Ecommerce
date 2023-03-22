import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Features = () => {
    return (
        <>
            {/* <div className="container-fluid pt-5"> */}
            <Container fluid className=" pt-5">
                <Row className="px-xl-5 pb-3">
                    <Col lg={3} md={6} sm={12} className="pb-1">
                        <div className=" features-item" style={{ padding: "30px" }}>
                            <h1 className="fa fa-check" style={{color:"#ffd333", marginRight:"1rem" }}></h1>
                            <h5 >Quality Product</h5>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="pb-1">
                        <div className="features-item" style={{ padding: "30px" }}>
                            <h1 className="fa fa-shipping-fast" style={{color:"#ffd333", marginRight:"1rem" }}></h1>
                            <h5>Free Shipping</h5>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="pb-1">
                        <div className="features-item" style={{ padding: "30px" }}>
                            <h1 className="fas fa-exchange-alt" style={{color:"#ffd333", marginRight:"1rem" }}></h1>
                            <h5>14-Day Return</h5>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="pb-1">
                        <div className="features-item" style={{ padding: "30px" }}>
                            <h1 className="fa fa-phone-volume" style={{color:"#ffd333", marginRight:"1rem" }}></h1>
                            <h5>24/7 Support</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Features