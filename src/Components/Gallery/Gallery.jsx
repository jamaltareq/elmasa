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
                            <p className='p-0 m-0 color-main'>حصن</p>
                            <p className='m-0 fs-7'>حصن تأمين</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro2.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">حصن تأمين</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>حماية</li>
                                <li>سيطرة</li>
                                <li>دعم</li>
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
                            <p className='p-0 m-0 color-main'>حمام</p>
                            <p className='m-0 fs-7'>بيت الراحه</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro3.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main"> بيت الراحه</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>خصوصية.</li>
                                <li>متانة.</li>
                                <li>صرف.</li>
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
                            <p className='p-0 m-0 color-main'>مكتبه</p>
                            <p className='m-0 fs-7'> مكتبه قراءه </p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro4.webp')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">مكتبه قراءه </h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>تعليم.</li>
                                <li>بحث.</li>
                                <li>ترفيه.</li>
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
                            <p className='p-0 m-0 color-main'>صحارا</p>
                            <p className='m-0 fs-7'> مجلس خارجي</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro5.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">صحارا</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>راحة في الهواء الطلق.</li>
                                <li>تصميم مقاوم للعوامل الجوية.</li>
                                <li>توفير إضاءة ومقاعد مريحة.</li>
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
                            <p className='p-0 m-0 color-main'>فيلا</p>
                            <p className='m-0 fs-7'> فيلا دور واحد </p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro6.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main"> فيلا دور واحد  </h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>تصميم بسيط وعملي.</li>
                                <li>مساحة مفتوحة ومريحة.</li>
                                <li>سهولة في الوصول إلى جميع الغرف.</li>
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
                            <p className='p-0 m-0 color-main'>فيلا</p>
                            <p className='m-0 fs-7'>فيلا دورين</p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro7.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main"> فيلا دورين</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>مساحة أكبر.</li>
                                <li>تنظيم أفضل.</li>
                                <li>خصوصية أكبر.</li>
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
                            <p className='p-0 m-0 color-main'>اسطبل</p>
                            <p className='m-0 fs-7'> اسطبل خيول </p>
                        </div>
                    </div>
                    <img className="card-picture" src={require('../../Assets/pro8.jpg')} />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main"> اسطبل خيول </h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>مساحة واسعة.</li>
                                <li>تهوية جيدة.</li>
                                <li>مرافق للحيوانات.</li>
                            </ul>
                        </span>
                    </div>
                </div>


            </div>
        </>

    );
}
