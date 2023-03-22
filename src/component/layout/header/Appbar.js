import { appRoute } from '@/constant'
import { logoutAuth, searchProduct } from '@/redux/slicess/commonSlice/authSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


const Appbar = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [search, setSearch] = useState()
    const { authToken, role } = useSelector((state) => {
        return {
            role: state?.RootReducer?.authSlice?.role,
            authToken: state?.RootReducer?.authSlice?.Token
        }
    })
    useEffect(() => {
    }, [authToken])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(78, search)
        if (search) {
            dispatch(searchProduct(search))
            router.push(appRoute.SEARCH)
        }
    }
    return (
        <>
            <Container fluid>    
                <Row className="appbar-row">
                    <Col lg={6} style={{display:"block"}}>
                       <div className="appbar-ele"> 
                            <Link className="appbar-link" href="">About</Link>
                            <Link className="appbar-link" href="">Contact</Link>
                            {authToken !== undefined && role === "Welcome admin..!!" ?
                                <Link className="appbar-link" href={appRoute.ADMIN}>Profile</Link>
                                :
                                authToken !== undefined && role === "Welcome user..!!" ?
                                    <Link className="appbar-link" href="/user">User</Link>
                                    :
                                    null
                            }
                            <Link className="appbar-link" href="">FAQs</Link>
                        </div>
                    </Col>
                    {/* <div className="col-lg-6 text-center text-lg-right"> */}
                    <Col lg={6} className="text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    {authToken ?
                                        <Link className="dropdown-item" href={appRoute.SIGNIN} type="button" onClick={() => { dispatch(logoutAuth()) }}>
                                            Logout
                                        </Link> :
                                        <>
                                            <Link className="dropdown-item" href={appRoute.SIGNIN} type="button">Sign in</Link>
                                            <Link className="dropdown-item" href={appRoute.SIGNUP} type="button">Sign up</Link>
                                        </>
                                    }
                                </div>
                            </div>

                            <div className="btn-group mx-2">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">EUR</button>
                                    <button className="dropdown-item" type="button">GBP</button>
                                    <button className="dropdown-item" type="button">CAD</button>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">FR</button>
                                    <button className="dropdown-item" type="button">AR</button>
                                    <button className="dropdown-item" type="button">RU</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <Link href="" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ addingBottom: "2px" }}>0</span>
                            </Link>
                            <Link href="" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <Link href="" className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">next</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" onChange={(e) => { setSearch(e.target.value) }} />
                                <div className="input-group-append">
                                    <button className="input-group-text text-primary bg-transparent" type='submit' >
                                        <i className='fa fa-search'></i>
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+012 345 6789</h5>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Appbar