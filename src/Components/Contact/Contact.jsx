import React from 'react'

export default function Contact() {
    return (
        <>
            <section className="contact_us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="contact_inner">
                                <div className="row" >
                                    <div className="col-md-10" style={{ direction: "rtl" }}>
                                        <div className="contact_form_inner">
                                            <div className="contact_field text-white" >
                                                <h3>تواصل معنا </h3>
                                                <p>موقعنا يقع في منطقة الغرناطه بالرياض، المملكة العربية السعودية. تشتهر هذه المنطقة بأجوائها الحيوية وقربها من المعالم الرئيسية في العاصمة.</p>
                                                <input type="text" className="form-control form-group" placeholder="Name" />
                                                <input type="text" className="form-control form-group" placeholder="Email" />
                                                <textarea className="form-control form-group" placeholder="Message"></textarea>
                                                <button className="contact_form_submit">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="right_conatct_social_icon d-flex align-items-end">
                                            <div className="socil_item_inner d-flex">
                                                <li><a href="https://www.instagram.com/shabakat_alalmas?igsh=MXBrenJqa21uaGZiaA%3D%3D&utm_source=qr"><i className="fab fa-tiktok"></i></a></li>
                                                <li><a href="https://www.instagram.com/shabakat_alalmas?igsh=MXBrenJqa21uaGZiaA%3D%3D&utm_source=qr"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="https://wa.me/966544442552"><i className="fab fa-whatsapp"></i></a></li>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="map_inner">
                                <h4>العنوان</h4>
                                <p>موقعنا يقع في منطقة الغرناطه بالرياض، المملكة العربية السعودية. تشتهر هذه المنطقة بأجوائها الحيوية وقربها من المعالم الرئيسية في العاصمة.</p>
                                <div className="map_bind">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3527.6743645365214!2d46.73835999822612!3d24.799879738419115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzU5LjYiTiA0NsKwNDQnMjkuMCJF!5e1!3m2!1sen!2seg!4v1733274867394!5m2!1sen!2seg" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
