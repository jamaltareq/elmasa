import React from 'react';

export default function Brochure() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Assets/almasa.pdf'; // المسار الصحيح للملف
        link.download = 'alalmasa.pdf';  // اسم الملف
        document.body.appendChild(link); // أضف العنصر مؤقتًا إلى DOM
        link.click(); // قم بفتح الرابط
        document.body.removeChild(link); // أزل العنصر بعد التنزيل
    };

    return (
        <section id="brochure" className="work-sections bg-im" style={{ direction: "rtl" }}>
            <div className="container m-auto row">
                <div className="col-md-9 sec-title light" style={{ direction: "rtl" }}>
                    <h2 className='fs-3'>الآن يمكنك تحميل معلومتنا الإسترشادية المفصلة من خلال الضغط على الرابط التالي لتحميل البروفايل الخاص ب "أنظمة الحديد البارد LGS" وإكتشف المميزات والخدمات والمواصفات الفريدة. . . </h2>
                    <p className='text-light'> للمزيد من المساعدة يرجى التواصل مع فريق العمل الخاص بنا</p>
                </div>
                <div style={{ zIndex: '54455655596988', }}
                    className="col-md-3  d-flex align-content-center justify-content-center align-items-start mt-4 pointer">
                    <button
                        onClick={handleDownload}
                        style={{ position: 'relative', cursor: 'pointer !important' }}
                        className='text-decoration-none z-3 text-white bg-main p-2 ps-5 rounded-2 d-flex'
                    >
                        <span className='m-2'>إضغط لتحميل</span>
                        <div style={{ position: 'absolute', top: "-3px", left: "-30px", border: "7px solid rgb(96, 139, 193)" }} className="rounded-circle bg-main p-1">
                            <img width={40} src={require('../../Assets/tap1.png')} alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
