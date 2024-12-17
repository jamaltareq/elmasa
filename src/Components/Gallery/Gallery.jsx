import React, { useState } from 'react'

export default function Gallery() {



    return (
        <>
            <div id='gallery' className='container text-center my-5' style={{ direction: 'rtl', position: "relative" }}>
                <h3 className='line display-5 fw-medium'>منتجاتنا</h3>
            </div>
            <div className='container m-auto row  rtl justify-content-center align-content-center' style={{ direction: 'rtl' }}>
                <div className="cards d-flex flex-column justify-content-center col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src={require("../../Assets/prologo1.png")} />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>كشك</p>
                            <p className='m-0 fs-7'>كشك بيع منتجات</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro1.avif')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">كشك مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>   الصحف والمجلات.</li>
                                <li>  والوجبات السريعة.</li>
                                <li>  والهدايا الصغيرة.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards d-flex flex-column justify-content-center col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src={require("../../Assets/prologo2.png")} />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>كشك</p>
                            <p className='m-0 fs-7'>كشك بيع منتجات</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro2.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">كشك مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>   الصحف والمجلات.</li>
                                <li>  والوجبات السريعة.</li>
                                <li>  والهدايا الصغيرة.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards d-flex flex-column justify-content-center col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src={require("../../Assets/prologo3.png")} />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>كشك</p>
                            <p className='m-0 fs-7'>كشك بيع منتجات</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro3.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">كشك مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>   الصحف والمجلات.</li>
                                <li>  والوجبات السريعة.</li>
                                <li>  والهدايا الصغيرة.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards d-flex flex-column justify-content-center col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src={require("../../Assets/prologo4.png")} />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>كشك</p>
                            <p className='m-0 fs-7'>كشك بيع منتجات</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro4.webp')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">كشك مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>   الصحف والمجلات.</li>
                                <li>  والوجبات السريعة.</li>
                                <li>  والهدايا الصغيرة.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards d-flex flex-column justify-content-center col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src={require("../../Assets/prologo5.png")} />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>كشك</p>
                            <p className='m-0 fs-7'>كشك بيع منتجات</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro5.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">كشك مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>   الصحف والمجلات.</li>
                                <li>  والوجبات السريعة.</li>
                                <li>  والهدايا الصغيرة.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards d-flex flex-column justify-content-center col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src={require("../../Assets/prologo6.png")} />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>كشك</p>
                            <p className='m-0 fs-7'>كشك بيع منتجات</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro6.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">كشك مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>   الصحف والمجلات.</li>
                                <li>  والوجبات السريعة.</li>
                                <li>  والهدايا الصغيرة.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards d-flex flex-column justify-content-center col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src={require("../../Assets/prologo7.png")} />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>كشك</p>
                            <p className='m-0 fs-7'>كشك بيع منتجات</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro7.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">كشك مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>   الصحف والمجلات.</li>
                                <li>  والوجبات السريعة.</li>
                                <li>  والهدايا الصغيرة.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards d-flex flex-column justify-content-center col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src={require("../../Assets/prologo8.png")} />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>كشك</p>
                            <p className='m-0 fs-7'>كشك بيع منتجات</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro8.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">كشك مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>   الصحف والمجلات.</li>
                                <li>  والوجبات السريعة.</li>
                                <li>  والهدايا الصغيرة.</li>
                            </ul>
                        </span>
                    </div>
                </div>


            </div>
        </>

    );
}
