import React from 'react'

export default function Brochure() {
    return (
        <section id="brochure" className="work-sections bg-im" style={{ direction: "rtl" }} >
            <div className="container m-auto row">
                <div className="col-md-9 sec-title light" style={{ direction: "rtl" }}>
                    <h2 className='fs-3'>الآن يمكنك تحميل معلومتنا الإسترشادية المفصلة من خلال الضغط على الرابط التالي لتحميل البروشور الخاص ب "أنظمة التركيب للألمنيوم" وإكتشف المميزات والخدمات والمواصفات الفريدة. . . </h2>
                    <p className='text-light'> للمزيد من المساعدة يرجى التواصل مع فريق العمل الخاص بنا</p>
                </div>
                <div className="col-md-3 z-3 d-flex align-content-center justify-content-center align-items-start mt-4">
                    <a href='https://www.dropbox.com/home?preview=Profile++al-almas+network+for+cold+steel+(2).pdf' download style={{ position: 'relative' }} className='text-decoration-none z-3 text-white bg-main p-2 ps-5 rounded-2 d-flex'>
                        <span className='m-2'>إضغط لتحميل</span>
                        <div style={{ position: 'absolute', top: "-3px", left: "-30px", border: "7px solid rgb(96, 139, 193)" }} className="rounded-circle bg-main p-1">
                            <img width={40} src={require('../../Assets/tap1.png')} alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
