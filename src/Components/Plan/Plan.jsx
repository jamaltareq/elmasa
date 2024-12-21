import React from 'react'

export default function Plan() {
    return (
        <section id="plan" className="work-section" style={{ backgroundImage: "url(https://i.ibb.co/r4xf3sK/newslater.jpg)" }} >
            <div className="container">
                <div className="sec-title light" style={{ direction: "rtl" }}>
                    <div className="title fs-2 color-two">الخطه التقدمية</div>
                    <h2>رحلة البناء بنظام شبكات الألماس إختصرناها إلى 4 مراحل وهي:</h2>
                </div>
                <div className="row clearfix" style={{ direction: "rtl" }}>

                    <div className="work-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box" >
                            <div className="icon-box">
                                <i className="overlay-icon fas fa-book-open"></i>
                            </div>
                            <div className="step" style={{ direction: 'rtl' }}>الخطوه الاول</div>
                            <h2>التصميم والتخطيط</h2>
                            <div className="overlay-box">
                                <div className="overlay-inner">
                                    <div className="overlay-content" style={{ direction: 'rtl' }}>
                                        <i className="overlay-icon fas fa-book-open"></i>
                                        <div className="overlay-step">الخطوه الاولي</div>
                                        <ul className="text list-style-one1">
                                            <li>إعداد الرسومات الهندسية والدراسات الإنشائية.</li>
                                            <li>تحديد المواد والمواصفات الفنية.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="work-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="overlay-icon fas fa-briefcase"></i>
                            </div>
                            <div className="step">الخطوه الثانية</div>
                            <h2>تجهيز الموقع والبنية التحتية</h2>
                            <div className="overlay-box">
                                <div className="overlay-inner">
                                    <div className="overlay-content">
                                        <i className="overlay-icon fas fa-briefcase"></i>
                                        <div className="overlay-step">الخطوه الثانية</div>
                                        <ul className="text list-style-one1">
                                            <li>تسوية الأرض وحفر الأساسات.</li>
                                            <li>إنشاء القواعد الخرسانية وتأسيس أعمال الكهرباء والسباكة والتكييف.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="work-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="overlay-icon fas fa-chart-bar"></i>
                            </div>
                            <div className="step">الخطوه الثالثة</div>
                            <h2> التصنيع والتركيب</h2>
                            <div className="overlay-box">
                                <div className="overlay-inner">
                                    <div className="overlay-content">
                                        <i className="overlay-icon fas fa-chart-bar"></i>
                                        <div className="overlay-step">الخطوه الثالثة</div>
                                        <ul className="text list-style-one1">
                                            <li>تصنيع وتجميع الهيكل الحديدي.</li>
                                            <li>تركيب الهيكل المعدني والإكساءات الخارجية والداخلية.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="work-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="overlay-icon fas fa-landmark"></i>
                            </div>
                            <div className="step">الخطوه الرابعة</div>
                            <h2>لتشطيبات النهائية</h2>
                            <div className="overlay-box">
                                <div className="overlay-inner">
                                    <div className="overlay-content">
                                        <i className="overlay-icon fas fa-landmark"></i>
                                        <div className="overlay-step">الخطوه الرابعة</div>
                                        <ul className="text list-style-one1 text-white">
                                            <li>تنفيذ أعمال الطلاء، تركيب الأرضيات، الأبواب، والنوافذ.</li>
                                            <li>التأكد من جاهزية الموقع للاستخدام.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
