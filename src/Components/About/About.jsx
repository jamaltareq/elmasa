import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column" style={{ direction: "rtl" }}>
                            <div className="sec-title" style={{ direction: "rtl" }}>
                                <span className="title fs-4 color-two"> عن الشركه </span>
                                <h2 className='color-main'> شبكات الألماس للبناء بنظام الحديد البارد (LGS)</h2>
                            </div>
                            <div className="text " style={{ textAlign: "justify", color: '#222222' }}>
                                شركة شبكات الألماس تُعد من أبرز المصانع المتقدمة في المملكة العربية السعودية، حيث تخصصت في مجالي الحديد البارد والألمنيوم. بفضل الابتكار واعتماد أحدث التقنيات، استطاعت الشركة أن تحقق مكانة رائدة في الصناعة.

                                أسس الشركة "فيصل العتابي"، وأطلق نظام شبكات الألماس للحديد البارد والألمنيوم، الذي يمثل نقلة نوعية في عالم البناء الحديث. يعتمد النظام على آلات متطورة وفرق عمل ذات خبرة، مع التزام كامل بمعايير كود البناء السعودي.

                                تركز الشركة على مواجهة تحديات البناء التقليدي عبر تقديم حلول مبتكرة تُسهم في تقليل التكاليف والأخطاء، مع ضمان تجربة بناء سهلة وفعالة.
                            </div>

                            {/* القائمة بالنقاط */}
                            <ul className='list-style-one' style={{ textAlign: "justify", paddingLeft: "20px", listStyle: "disc" }}>
                                <li>تعتمد الشركة على تقنية حديثة لتصنيع هياكل البناء من الفولاذ المجلفن والمسحوب على البارد، بما يضمن متانة ودقة عالية في المنتجات.</li>
                                <li>تصمم الشركة منتجاتها وفقًا لأعلى المعايير الهندسية، مما يضمن الجودة والابتكار في جميع الحلول الإنشائية.</li>
                                <li>تقدم الشركة حلول بناء حديثة وسريعة باستخدام أنظمة قائمة بالكامل على تقنيات الذكاء الاصطناعي لتحسين الكفاءة والإنتاجية.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1">
                                <a href="#" className="lightbox-image" data-fancybox="images">
                                    <img src={require('./../../Assets/about.png')} style={{ width: '600px' }} alt="About" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
