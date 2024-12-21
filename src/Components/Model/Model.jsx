import React from 'react'
import video1 from '../../Assets/mainv.mp4'

export default function Model() {
    return (
        <div className="feat bg-gray pt-5 pb-5" id='model'>
            <div className="container">
                <div className="row" style={{ direction: "rtl" }}>
                    <div className="text-center  col-sm-12" style={{ direction: "rtl" }}>
                        <h4 className='color-two fs-1'>نماذج من تصاميمنا </h4>
                        <p className='color-main fs-4'>نماذجنا المتنوعة في الحديد البارد تتميز بتصاميم عصرية تلبي مختلف الاحتياجات الإنشائية، مع ضمان الكفاءة والجودة العالية لتناسب جميع المشاريع</p>
                    </div>
                    <div className="col-12">
                        <video className='videoedi' autoPlay loop muted>
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}
