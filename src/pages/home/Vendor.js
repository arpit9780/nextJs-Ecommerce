import { vendors } from '@/constant'
import React from 'react'

const Vendor = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel d-flex">
                            {vendors.map((item,i) => {
                                return (
                                    <div key={i} className="bg-light p-4">
                                        <img src={item.image} alt="" />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vendor