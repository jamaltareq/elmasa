import React from 'react';

export default function Offer() {
    return (
        <section className="feat bg-main py-5" id="ofer" style={{ backgroundColor: '#f1f1f1' }}>
            <div className="container">
                <div className="row" style={{ direction: "rtl" }}>
                    <div className="text-center  col-sm-12" style={{ direction: "rtl" }}>
                        <h4 className=' color-offer fs-1'> العروض </h4>
                        <p className='text-white fs-4'>انتظر عروضنا القادمة على منتجات الحديد البارد، حيث الجودة العالية والأسعار التنافسية لتلبية كافة احتياجاتك الإنشائية.</p>
                    </div>
                    {[1, 2, 3].map((_, index) => (
                        <div className="col-md-4 mb-4 d-flex justify-content-center" key={index}>
                            <div className="card rounded-4 shadow-sm" style={{ width: '100%' }}>
                                <img
                                    src={require('../../Assets/soon.jpg')}
                                    className="card-img-top rounded-top-4"
                                    alt="العروض القادمة"
                                />
                                <div className="card-body text-center">
                                    <span className="text-muted">أخر العروض</span>
                                    <h3 className="card-text mt-2">
                                        إنتظروا عروضنا المميزة
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
