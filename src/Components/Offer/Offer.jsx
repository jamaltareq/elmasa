import React from 'react';

export default function Offer() {
    return (
        <section className="feat bg-gray py-5" id="ofer">
            <div className="container">
                <div className="row" style={{ direction: "rtl" }}>
                    <div className="col-12 mb-5 text-center">
                        <h2 className="fw-bold">العروض</h2>
                    </div>
                    {[1, 2, 3].map((_, index) => (
                        <div className="col-md-4 mb-4" key={index}>
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
