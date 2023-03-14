import { appRoute } from '@/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'


const Navbar = () => {
    const router = useRouter()
    const slug = router.pathname.replace("/","")
    const [item, setItem] = useState(0)
    const { carts, role } = useSelector((state) => {
        return {
            carts: state?.RootReducer?.ShoppingSlice?.addToCard?.data,
            role: state?.RootReducer?.authSlice?.role,
        }

    })
    useEffect(() => {
        setItem(carts?.items?.length)
    }, [carts, role])

    return (
        <>
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">

                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link href="/" className="nav-item nav-link active">Home</Link>
                                    {role === "Welcome admin..!!" ?
                                        <Link href={appRoute.SHOP} className="nav-item nav-link">Shop</Link>
                                        :
                                        null
                                    }
                                    {role === "Welcome user..!!" ?
                                        <>
                                            <div className="nav-item dropdown">
                                                <Button className="nav-link dropdown-toggle" data-toggle="dropdown">Pages </Button>
                                                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                                    <Link href={appRoute.SHOPPING_CARD} className="dropdown-item">Shopping Cart</Link>
                                                    <Link href="/" className="dropdown-item">Checkout</Link>
                                                </div>
                                            </div>
                                        </>
                                        : null}
                                    <Link href="/categories" className="nav-item nav-link">Categories</Link>
                                    <Link href="/offers" className="nav-item nav-link">Offers</Link>
                                    <Link href="/recent-product" className="nav-item nav-link">Recent Product</Link>
                                </div>
                                {role === "Welcome user..!!" ?
                                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                        <Link href="" className="btn px-0">
                                            <i className="fas fa-heart text-primary"></i>
                                            <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                                        </Link>
                                        <Link href="" className="btn px-0 ml-3">
                                            <i className="fas fa-shopping-cart text-primary"></i>
                                            <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: "2px" }}>{item ? item : 0}</span>
                                        </Link>
                                    </div>

                                    : null}

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-0">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">{slug}</span></h2>
            </div>
        </>
    )
}

export default Navbar