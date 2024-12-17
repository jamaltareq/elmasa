import React from 'react'
import video1 from '../../Assets/mainv.mp4'

export default function Model() {
    return (
        <div className="feat bg-gray pt-5 pb-5" id='model'>
            <div className="container">
                <div className="row" style={{ direction: "rtl" }}>
                    <div className="head col-sm-12 " style={{ direction: "rtl" }}>
                        <h2 className='fw-bold'>نماذج من تصاميم الحديد البارد</h2>
                    </div>
                    <div className="col-12">
                        <video className='videoedi' autoPlay loop muted>
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}
