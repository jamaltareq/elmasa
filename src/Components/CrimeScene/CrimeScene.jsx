import React from 'react'

export default function CrimeScene() {
    return (
        <>
            <div id='wrapper' className="wrapper">
                <div className="text-center">
                    <p className="mt-4 mx-auto text-lg text-muted">
                        مما يتكون نظام شبكات الماسة
                    </p>
                    <h3 className="mt-2  fw-normal text-dark">
                        جميع المنتجات هي من السوق السعودي مما يجعل من نظامنا داعماً للمحتوى المحلي
                    </h3>
                </div>
                <section className='sections'>
                    <div className="boxs"></div>

                    <div className="boxs">
                        <span className='display-5 fw-bolder color-main'>1</span>
                        <span>جزء السقف</span>
                    </div>
                    <div className="boxs">
                        <span className='display-5 fw-bolder color-main'>2</span>
                        <span>قطاع الجدار والأرضية</span>
                    </div>
                    <div className="boxs">
                        <span className='display-5 fw-bolder color-main'>3</span>
                        <span>القاعدة الأرضية</span>
                    </div>
                </section>
            </div>
        </>
    )
}
