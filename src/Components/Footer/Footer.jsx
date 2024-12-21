import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-section p-4" style={{ direction: 'rtl' }}>
            <div className="container">
                <div className="footer-cta pt-5 ">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta" >
                                <div className="cta-text">
                                    <h4>العنوان</h4>
                                    <span>غرناطه، الرياض، المملكة العربية السعودية</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone text-whites"></i>
                                <div className="cta-text" >
                                    <h4>اتصل بنا</h4>
                                    <span style={{ direction: 'ltr' }}>+966 54 444 2552</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open text-white"></i>
                                <div className="cta-text">
                                    <h4>البريد الالكتروني</h4>
                                    <span>shabakat.alalmas@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    )
}
