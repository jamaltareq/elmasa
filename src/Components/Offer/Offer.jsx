import React from 'react'

export default function Offer() {
    return (
        <div className="feat bg-gray pt-5 pb-5" id='ofer'>
            <div className="container">
                <div className="row" style={{ direction: "rtl" }}>
                    <div className="head col-sm-12 mb-5" style={{ direction: "rtl" }}>
                        <h2 className='fw-bold'>العروض</h2>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card rounded-4" style={{ width: '18rem' }}>
                            <img src={require('../../Assets/soon.jpg')} className="card-img-top rounded-4" alt="..." />
                            <div className="card-body relate">
                                <span>أخر العروض</span>
                                <h3 className="card-text">
                                    إنتظروا عروضنا المميزة
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded-4" style={{ width: '18rem' }}>
                            <img src={require('../../Assets/soon.jpg')} className="card-img-top rounded-4" alt="..." />
                            <div className="card-body relate">
                                <span>أخر العروض</span>
                                <h3 className="card-text">
                                    إنتظروا عروضنا المميزة
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded-4" style={{ width: '18rem' }}>
                            <img src={require('../../Assets/soon.jpg')} className="card-img-top rounded-4" alt="..." />
                            <div className="card-body relate">
                                <span>أخر العروض</span>
                                <h3 className="card-text">
                                    إنتظروا عروضنا المميزة
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
