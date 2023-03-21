import { appRoute } from '@/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Nav } from "react-bootstrap";


const Navbar = () => {
    const router = useRouter()
    const slug = router.pathname

    const [item, setItem] = useState(0)
    const { carts, role,token } = useSelector((state) => {
        return {
            carts: state?.RootReducer?.ShoppingSlice?.allCards?.data,
            role: state?.RootReducer?.authSlice?.role,
            token : state?.RootReducer?.authSlice?.Token,
        }

    })
    useEffect(() => {
        setItem(carts?.items?.length)

    }, [carts, role])


    return (
        <>
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-9">
                        <Nav activeKey={slug} className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mx-auto py-0">
                                    <Link
                                        href="/"
                                        className={slug === appRoute.HOME ? "nav-item nav-link active" : "nav-item nav-link"}
                                    >
                                        Home
                                    </Link>
                                    {token !== undefined &&  role === "Welcome admin..!!"
                                        ?
                                        <Link
                                            href={appRoute.SHOP}
                                            className={slug === appRoute.SHOP ? "nav-item nav-link active" : "nav-item nav-link"}
                                        >
                                            Shop
                                        </Link>
                                        :
                                        <>
                                            <Link
                                                href={appRoute.CATEGORIES}
                                                className={slug === appRoute.CATEGORIES ? "nav-item nav-link active" : "nav-item nav-link"}>
                                                Categories
                                            </Link>
                                            <Link
                                                href={appRoute.OFFERS}
                                                className={slug === appRoute.OFFERS ? "nav-item nav-link active" : "nav-item nav-link"}>
                                                Offers
                                            </Link>
                                            <Link
                                                href={appRoute.RECENT_PRODUCT}
                                                className={slug === appRoute.RECENT_PRODUCT ? "nav-item nav-link active" : "nav-item nav-link"} >
                                                Recent Product
                                            </Link>
                                        </>
                                    }
                                    {token !== undefined && role === "Welcome user..!!"
                                        ?
                                        <>
                                            <div className="navbar-nav ml-auto py-0 d-none d-lg-block" style={{position: "relative",left: "150px",top: "12px"}}>
                                                <Link
                                                    href=""
                                                    className="btn px-0" >
                                                    <i className="fas fa-heart text-primary"></i>
                                                    <span
                                                        className="badge text-secondary border border-secondary rounded-circle"
                                                        style={{ paddingBottom: "2px" }}>
                                                        0
                                                    </span>
                                                </Link>
                                                <Link
                                                    href={appRoute.SHOPPING_CARD}
                                                    className="btn px-0 ml-3" >
                                                    <i className="fas fa-shopping-cart text-primary"></i>
                                                    <span
                                                        className="badge text-secondary border border-secondary rounded-circle"
                                                        style={{ paddingBottom: "2px" }}>
                                                        {item ? item : 0}
                                                    </span>
                                                </Link>
                                            </div>
                                        </>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </Nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-0">
                {slug !== appRoute.HOME ?
                    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">{slug.replace("/", "")}</span></h2>
                    :
                    null}
            </div>
        </>
    )
}

export default Navbar