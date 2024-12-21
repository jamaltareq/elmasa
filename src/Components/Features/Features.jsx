import React from 'react'

export default function Features() {
    return (
        <>
            <div id='features' className="py-5" style={{ backgroundColor: "#f1f1f1" }}>
                <div className="container">
                    <div className="text-center">
                        <h3 className="mt-4 mx-auto text-lg fs-2 color-two">
                            ما هو نظام شبكات الألماس                        </h3>
                        <p className="mt-2  fw-normal  fs-4 color-main">
                            شبكات الألماس هو نظام ذكي للبناء بالحديد البارد يتميز بـ
                        </p>
                    </div>

                    <div className="mt-5">
                        <ul className="row text-center list-unstyled justify-content-center" style={{ direction: "rtl" }}>

                            <li className="col-6 col-md-2 my-4">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="rounded-circle d-flex justify-content-center align-items-center circle  p-3">
                                        <img width={90} src={require("./../../Assets/sys1.png")} />
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="h5 text-muted">جوده عاليه</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="col-6 col-md-2 my-4">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="rounded-circle d-flex justify-content-center align-items-center circle  p-3">
                                        <img width={90} src={require("./../../Assets/sys2.png")} />
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="h5 text-muted"> سرعه في التنفيذ</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="col-6 col-md-2 my-4">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="rounded-circle d-flex justify-content-center align-items-center circle  p-3">
                                        <img width={90} src={require("./../../Assets/sys3.png")} />
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="h5 text-muted"> أوزان وأحمال المبنى متوزعة على الجدران وليست على القواعد</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="col-6 col-md-2 my-4">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="rounded-circle d-flex justify-content-center align-items-center circle  p-3">
                                        <img width={90} src={require("./../../Assets/sys4.png")} />
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="h5 text-muted"> مطابق لكود البناء السعودية</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="col-6 col-md-2 my-4">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="rounded-circle d-flex justify-content-center align-items-center circle  p-3">
                                        <img width={90} src={require("./../../Assets/sys5.png")} />
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="h5 text-muted"> التوفير في الهدر</h4>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
