import { pagesPath } from '@/constant'
import Link from 'next/link'
import React from 'react'


const Categories = () => {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    {pagesPath?.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                <Link className="text-decoration-none" href={item.url}>
                                    <div className="cat-item d-flex align-items-center mb-4">
                                        <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                            <img className="img-fluid" src={item.img} alt="" height="100px" width="auto"/>
                                        </div>
                                        <div className="flex-fill pl-3">
                                            <h6>{item.name}</h6>
                                            <small className="text-body">75 Products</small>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div></>
    )
}

export default Categories