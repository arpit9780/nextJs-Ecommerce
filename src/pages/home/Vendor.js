import React from 'react'
import vendor1 from '../../assets/images/vendor-1.jpg'
import vendor2 from '../../assets/images/vendor-2.jpg'
import vendor3 from '../../assets/images/vendor-3.jpg'
import vendor4 from '../../assets/images/vendor-4.jpg'
import vendor5 from '../../assets/images/vendor-5.jpg'
import vendor6 from '../../assets/images/vendor-6.jpg'
import vendor7 from '../../assets/images/vendor-7.jpg'
import vendor8 from '../../assets/images/vendor-8.jpg'

const vendors = [
    { image: vendor1.src },
    { image: vendor2.src },
    { image: vendor3.src },
    { image: vendor4.src },
    { image: vendor5.src },
    { image: vendor6.src },
    { image: vendor7.src },
    { image: vendor8.src },
]

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