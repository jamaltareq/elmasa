import React from 'react'
import { Link } from 'react-router-dom'

export default function about() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column" style={{ direction: "rtl" }}>
                            <div className="sec-title" style={{ direction: "rtl" }}>
                                <span className="title"> من نحن</span>
                                <h2> شبكات الألماس هياكل البناء بالحديد البارد</h2>
                            </div>
                            <div className="text">تُعد شركة شبكات الألماس للألمنيوم والمعادن من الشركات الرائدة في السعودية في مجالي الألمنيوم والحديد، وقد تطورت لتصبح من المصانع المتقدمة بفضل اعتمادها على الابتكار. أطلق المؤسسان سلطان النجار وبندر شيكان نظام بريسكو للحديد البارد، الذي يُعد ثورة تقنية في عالم البناء، معتمدًا على آلات حديثة وفرق عمل مدربة ومطابقًا لكود البناء السعودي. هدفنا هو إنهاء معاناة البناء التقليدي عبر تقنيات تُقلل التكاليف والأخطاء وتضمن تجربة بناء سلسة وممتعة.


                            </div>
                            <ul className="list-style-one">
                                <li> تعتمد الشركة على تقنية حديثة لتصنيع هياكل البناء من الفولاذ المجلفن والمسحوب على البارد، بما يضمن متانة ودقة عالية في المنتجات.</li>
                                <li>تصمم الشركة منتجاتها وفقًا لأعلى المعايير الهندسية، مما يضمن الجودة والابتكار في جميع الحلول الإنشائية</li>
                                <li>تقدم الشركة حلول بناء حديثة وسريعة باستخدام أنظمة قائمة بالكامل على تقنيات الذكاء الاصطناعي لتحسين الكفاءة والإنتاجية</li>
                            </ul>

                        </div>
                    </div>


                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img src="https://previews.dropbox.com/p/thumb/ACczeGnEIHoc58DYkb7HlYkIWgrxyettpA74afb4F0ZYa_qTzIqHlLaKoZM6niWOtaqNRGnJemz-lMcCZY62Z8kGgqroif17PaJk-W8NarRrwfBLK0xO_EIgUO7Ya3RMK39kzZmCS9ASopzfjRbOU7kto9RKdyd2gy8DlLnQWOF854qlJeBMqP_ZhHuJdkP1z33ULPkRlZEPdjgoGTGeAMU9-Y5qA1eofXs1oD-tGJIixOkW3Lp_EiMuhDWDEMaMleAMC-1oMIjXrsRix9vlZXxXxiGbfKngizkOvJdBuneFQN-DeCJg4B2smq3ZRgna8G6w4asAZHV2o0ajU1-4iBBy/p.png?is_prewarmed=true" alt="" /></a></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
