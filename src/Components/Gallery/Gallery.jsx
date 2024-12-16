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
                            <img width={25} src="https://previews.dropbox.com/p/thumb/ACdy6xFm3ZXjP8sxLrdcNJ5996bPCeualj0-y2lwJy7fBgekZD7EBCzqMqHV8m8sWIID_oopXM9AYwPP1XHYqjqtc67fWWZTxPixdRFchDBOS9EUmfezWwNMKt5NvyN-a3-nf1PmY4ovQCOeRC6MPNS30tpb1oPVAqQRJp36I7rdOq5fSYhabIsyREauzX5dbGYGtAtwLOVLGixSMgbHCZ_8YNAA76fDvazc6qqH_5QKl3Bt02mFUr3ZtF3e91PICCJkfavA96FuKQvPaNGOeXJa0Ky7DvAu3XaUIOwh0mwTjOB_fPnI97F8GBooLQw2Q8M/p.png" />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>كشك</p>
                            <p className='m-0 fs-7'>كشك بيع منتجات</p>
                        </div>
                    </div>
                    <img className="card-picture" src="https://previews.dropbox.com/p/thumb/ACfd4uDt63ZJYlkamdqse9QfQermTH9l2Kk1BIzhzVTkv5onMDs1ftLEJBqs-HTePXEn6bpSeNvesDP_8icxbIlHK_wKMvl25XRvkE-6rMH-0WlMwlPZCHEoA3YI3OLUSKtxWGPzS_BZTzRi74UPmwHTWS139XS03crfqb-1AUQuV1Nk53s6Od68FdTd6XDtQBouRVSN-b41kPY3DiB4LRv2W0i9l70wfaaJA8I3PC1LvBO3y4kggEcpycrYDOcLbCTjl_5pFt0H1gZLHeiMgm-6YpNopchYKRBv_c9bNtoXpCO-LV3bNFF20qt_nG9qIdYi24f2Jzjzr5Z6k-gtBrY9/p.jpeg?is_prewarmed=true" />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">كشك مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li> المنتجات مثل الصحف والمجلات.</li>
                                <li> المشروبات والوجبات السريعة.</li>
                                <li> التذكارات والهدايا الصغيرة.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards col-md-4 col-xl-3">
                    <div className="d-flex m-2   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src="https://previews.dropbox.com/p/thumb/ACcqcYiVcHwwQv_6lbE6T5Aa9FEEUVDTe7eXMeyb5ZskS9gMIWQ-lCxW8639Hp22Ygwwt1lb_ZMi_fLbivba0XP3bbKbi7mK4GuwKxViYVfVwxNHRx-uXeeT8KT_-cAqbp7YsNh8-nmp3h6Y7zYKbFqVu8lyauivv4hbhtMeocGjv9ZoK-JEYngnjm-gJVRL_emGScaI--dfRqtkYyRdVMewYhQHLov12Eka_rYl9qjlsUw2z9r6IbNqf8yjQ7Sd31_PT3R9mlNOSZTikIf3daaWVZ4jE2DaNzsQ5HxBBEvwHSmRQezdm5dH15BoJi_wuq0/p.png" />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>حصن</p>
                            <p className='m-0 fs-7'>حصن للحراسه</p>
                        </div>
                    </div>
                    <img className="card-picture" src="https://previews.dropbox.com/p/thumb/ACca87kJ4R2jEj3zFtxyIYxR15ZXRDk7HAoli7T4rSGEbxRxEt40mKtVzjpjp52D9yxnpD6SKrjBGQUgGc5CriUfXuUj3o4v9gECo_1_xFzcxPtk8J8OQUFp1FP2LeQF_YZt5dE4z9asuIxjuEUOxp4m3rcWoFIZWMTOanYgjxgx_iB4CpEpLn3wRRC9DpMOM1_AjkL7A3Y7AC0laQOR2tPWWkNzSJjIh01SWVIcVGTq8W3I1sBBAYcIhRbyWs0_BUUHrOec-wg3n3qGAGcC7WuVoU7sldSOIBqw9ns2F406L8cMGj7hEUdAawIxLVHi_p12jJaRzh5G4pUBW-gf9N4K/p.jpeg" />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">حصن للحراسه </h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li> تأمين مداخل ومخارج الفلل أو الأماكن السياحية.</li>
                                <li> مراقبة محيط الموقع لضمان السلامة.</li>
                                <li>توفير نقطة تجمع للحراس والأمن.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src="https://previews.dropbox.com/p/thumb/ACdhkE8NSOXRPEfDqg6KX5yZUZN3GrwFQop9z2U9T1mgMWue1-qhgdABY4ASBoDM4PgXRF7MEIbynIRhhv4kq6JpzQtI2lzyNzvXwUdkmolfrFS6PjyCuSTMAGhzjTsEs0O5ZkLxeetVckselgGHGIq4bWcCrAFILzLFcf9YaXb9g_mRHV0hO1p6w6XeKzvhWGBcHWM80L_Rc1-RgLXNXvI-3q6QT3f994OV1V_aML5fY7tXSuSZDZIxoQJjXglJ4PuVGPB2JzABC8bX56cydW4pg8fGocNx4yWngDEtgak0L8_eT5YRB_NmD2LL7xk3SWs/p.png" />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>بيت الراحة</p>
                            <p className='m-0 fs-7'> دورات مياه متنقلة فاخرة </p>
                        </div>
                    </div>
                    <img className="card-picture" src="https://previews.dropbox.com/p/thumb/ACcCFN1HZjClLfYCdaF_6_jZIW0dPmv9EzfR7vBGUY_R-53xdut_Nvc3nNela-MBoQG9lzMt0_KVwmR1GlPWQr9pzxFZUtUDWdi9avVOPu-pripBuF13zLaGv9xItNeCqh7H27opLunecM4KBBf_Ifvpch5hJIQuBzwo2cflIejkHwnTDXAyg4QRGgpqV3UwPcQS8AFS63tQVrjqa2cKM5dgRPOuGccb-BqE12-trrqNtGzExbYslgziGYW7LVTPk65MxlAm2DOpXV7fKV4iBSUgXzSyw9sr90r70A4Dy0HoghSSocaJdxVP16SPIO207aKd8UiPDUGIG23mNA8ByBk5/p.jpeg" />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main"></h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام في</span>
                            <ul className=''>
                                <li> الإستراحات</li>
                                <li> المهرجانات</li>
                                <li> الحدائق</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src="https://previews.dropbox.com/p/thumb/ACdYNpxauWl0Q3Vw_fKUwP6H81vrGbNY4K0SIQj3HSzNZVW9b50BBd71YYwkLIWGAdkMAo_1llwZS_qoh9vCC2v1UG7-fEOJCDdsktCvS3ahtWT9UPUuPPUL-IS1tAHOBIQNpE5eJCz2jUFXMqxfAfZTB-RuXlOb4lDpfVbHvTgVMuuwAD63M8oSo9VO2kMQrSlALwIkxP8thLmKk0WcvkZbRMmO2YgUCC46ZaWHNvRFin37irO-uVit72oFZ81JPmohJooH_W7g69E6QFOuKjOaXPWZxwlTMI_YS4Xnh7DnvL7EpGEWOCCOJDdohX4SylA/p.png" />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>مكتبة</p>
                            <p className='m-0 fs-7'>مكتبه بيع ودراسه</p>
                        </div>
                    </div>
                    <img className="card-picture" src="https://previews.dropbox.com/p/thumb/ACfXIKDDqbLs2ltRn88_5SfqdunuiTGkNQ1CqctllD7rlnnm6mGmE78XxdjJtXNfhXoQLtYqJRQ081wvi1enGU6Q96dYDvCAkZvYE8TYPAr_rZK-sKwCHWuo-qkxGdkz-9LAbNmAh8IBW7mT38HVFcisNxOlBpWqOLDf4JKF6678Yr_0roJHiQKNog980hnpv7LBZKJji75qXu2Py04JG1bZ5mr679U9ZHyAxSfP3MPJON899vgRLikBam9x4TxUBmmpu8z9vMliteU2kGap_ImWGCRIwYnhgkQsD6HLTIMEa_anfk-QuC1sw-fSiWZCeYw0lynbWU09AFYsr6GeSNe4/p.jpeg" />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">مكتبه مبيعات</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>قراءة.</li>
                                <li> دراسة</li>
                                <li> فعاليات</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src="https://previews.dropbox.com/p/thumb/ACe9DQBvCklKfcaNgjzvQIs8m5txeR1BhUxKoEQX62FVt266U1bDxdVgkCOmeq0_t7D3wxNbwBr36uUu6gpwrvqWLdnvukUZR0Waq7IHCj_bLPGlBmOJcX8j36nn8bFp_WgJROn0XeEI_zU_EJcxv0ir_183M1qjEFNe_HsMkkCdPQxTpV6qJQdse8zonud7gMdXbn_yfqCj7d8COW5T9k0LNw8R3kyK4GME5A3UgjgkwYsvI0tvIBlU3o6MEYTDDm2LtVcFI0Vuvdj6Vo-CvEzQHqIMMnihMgCaf626q_i-kqGSg_XLbaPEfx9mPyCKSDo/p.png" />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>استديو</p>
                            <p className='m-0 fs-7'>  استديو دور واحد</p>
                        </div>
                    </div>
                    <img className="card-picture" src="https://previews.dropbox.com/p/thumb/ACc8GPETp9qdXGF0bPWKxS32HFvIzyNtO5pw2kBebcilsWbTR1M10YHMNh_xmscmtzvtWS19nn5MGfzwxo8s6tL5GdztMUqec1Bi1vuGAl9n2fEWlHBsYhYmHf_5SVcLPfLxF5nwpuQd4OZ6OuAX7SQlGOBd--JhUyv7V8zEiR-Qn5K_bIleOoo3U6QK0Qq8KlAm_XiNKfWGJlUeH3uAWRPUVk2Rdeer-L3JMzNO66r9R7AN3tK-AruL-vobK571mUmOck0kWVjToCyYyeHgSxlweFxIZ8Zm1NRLog9RajsyGH0lZ3_zpfmrwrqZ_DvlAhJ2Boo9bQUFeOCt48ClcDZd/p.jpeg" />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main"> استديو غرفه واحده </h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li> غرفة نوم مع حمام خاص</li>
                                <li> مطبخ صغير أو ميني بار.</li>
                                <li> تجهيزات فندقية مثل تلفزيون وإنترنت.</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src="https://previews.dropbox.com/p/thumb/ACfvG70sxipa2AJ-8yaMIFOtlKvlrUI-UxqKaMoei2GWauLMxuSCm_UGE8uxSbmyVBZ71weqN4eKWoH24a1lxWdYSpSn99LN-KtAx64wuCF2qdkx0ZCTSkeXfpSWkquavjukNEPYYPvWguV6h7UuRnAeHA3uJxBN-EbR75cKFhSiA5t39XbnwxBpiZEO9kzmmRRgFS9Q1cfy54b2eALpQY3V2hOyVILaw8YjU44tYGd8fT9Hb_fKYgxI24iTCq4q-er__ukHusBsUSFKk03hnLDKgOAAMk2gGgN_Zu-1I-Vmjlws4IY3djbjMwMS8eUAJTs/p.png" />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>فيلا</p>
                            <p className='m-0 fs-7'>فيلا من دور واحد</p>
                        </div>
                    </div>
                    <img className="card-picture" src="https://previews.dropbox.com/p/thumb/ACe4dMH9IG2KG7AF55d-CvMZ12fec0usdFZ1qSEVQWJ26-XWKBQhGRqz6fnwsTmeAM3NNlMI0Q0IhnPGHPwubs0Qx585mpODwh765Ga7fBfjHnT6XVo0RpprlnL_2mmA3mlmEry3Up0l8KS5w8mVRqGgwjVdGVevtv--FDXViWHdHHcBkNrSDeurQ9oVbkHamxBbYfyj-Zc43AgLmyzwvjz1LZdpiNVi8y71KLO0NeF8tL64czJlZw9hWsKNRl7KgDCLC3eib7nZRLiVXl_7EsFQjN3G1BEEuPXxfdOFMf_Z6PC4rpR49tSgu3MTX7PpPV_TuX0JcHoK6QJyQhZYBVP2/p.jpeg" />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main">فيلا دور واحد</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li> غرفة نوم رئيسية</li>
                                <li> صالة معيشة واسعة</li>
                                <li> حديقة أو فناء</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src="https://previews.dropbox.com/p/thumb/ACez26xzV9amwWcOp4WKDrT2cHrJxO-4oCiv7qJK_vjLppZlSMyPPDv3z-_9cTi7dopiO0EuZMb14rjneC2uk9O4fEE42OITBzvJ_fvIEdUEUMMasrRQsb5LezlCOq0gWr0F7c6-jnRiAP1Cub_h6PNEhudDDw9daIN7vDaDbHNoD1IoaGa8UIA9jkjnGhUSeaUvAmGtYD6VkvOR8XapGkQPjPMh_B7XGqCMb1sgyvZd4cd9MhYirHpRc4KkA06y_PmWgfT5cfFz3Sjt6xTcSKZDRjE7m4zhlC1miv-n8ISwDvvMG484aF1ypXYt5rsr_i4/p.png" />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>فيلا</p>
                            <p className='m-0 fs-7'>  فيلا دورين</p>
                        </div>
                    </div>
                    <img className="card-picture" src="https://previews.dropbox.com/p/thumb/ACd8Iutyzole7u-38qXsimvJoIR35R3QE_xtYwfALjKcTtEbgfdO8cjct2pNfbHIYU4Qx9h2mlQsqtQYdFO7AXxlZRA63H5q0s3M2G1w2zuSJGyZfcPF4DJ1zZqcBTu2_yDA1FQv8K9giDhc90djhT0qK9myjYu3N9qZIRoC_wKTRH5B0KC0MXSDJw6TLjfzD1wJVDPUW_NM-SbMBUIkIInYW-qlNjKNcmEhC0bd-a8WSXCj1EfxC3Ui2K8ck57bECDp0tmYbZSDWF71yS62UxHW2CcWu9SXcCuBhCAlxSkQ6NiZ9Q6wYga7f7gv1pMJYzt14JavVCjN2rqH6QgkPQo5/p.jpeg" />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main"> فيلا اكثر من دور</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>عدد كبير من غرف النوم.</li>
                                <li>صالات معيشة متعددة.</li>
                                <li>حديقة أو مسبح واسع.</li>

                            </ul>
                        </span>
                    </div>
                </div>
                <div className="cards col-md-4 col-xl-3">
                    <div className="d-flex   justify-content-center align-items-center align-content-center">
                        <div className="ms-2 p-2 border-1">
                            <img width={25} src="https://previews.dropbox.com/p/thumb/ACfr0Mhcf_3RbnePSWQd5MqFKUFt8bm2tON5kMoW0dsflaS7qXD2CUJtgEqmQLGM6x4GQFi0YecDYXI1tGfxpS5e7u_bHJvQFXl8ujR97i5NtZBEf36rQvvSSx4u1GRdwfNv9K_JX4VJ_Hl5nSNaGBBkEoqs6aqFyLMPykJZY_Y7lSoucrm2as7B--a1Lvl8mIpbhegX14T4f1QeGrMYnQZyrW57HF1x7gJP8zLtvwEiuh3Dt0zDlA9Jrp0QIAOMwZRYtY7pSXqTLYRsq97QwVlDW4c0MP7cQOfoxJkFMs15n5ami_gisWzT80qo4vh25xc/p.png" />
                        </div>
                        <div className="">
                            <p className='p-0 m-0 color-main'>اسطبل</p>
                            <p className='m-0 fs-7'>أسطبل خيول</p>
                        </div>
                    </div>
                    <img className="card-picture" src="https://previews.dropbox.com/p/thumb/ACcNXFM8OG8h5rZm-r2CLRNdlC-kAb8XNzpOn7LFe19gYRu37zEREBx9EDzE1MXTq8_cEuLvOmJa3Ut--TMRSsSyCLSAKJicSGxZwkbuFlkefuDxajzP6uS1jbDWsT2FJBihIteE_Q5XHQYcmsSD8i6x-hxgKpGXXUqZYTHZGOCsjhbL4YZfFAwGJioatAfMXkghxLczkaCCnnp4fyOxLlEeQYp2SFgXnGwLulTi3_7NFDgjfyqJixXsu5BHd1jAMvpnr5v2tLMU_8OA0CbLuqWeQWpGgYFrAvSflam-SjVeKg1vqxf2VKb7efnbmE9sMr8/p.png" />
                    <div className="card-info">
                        <h2 className=" fs-3 color-main"> اسطبل خيول</h2>
                        <span className="card-desc">
                            <span className='m-0 fw-bold'>الاستخدام</span>
                            <ul className=''>
                                <li>أماكن لتخزين المعدات.</li>
                                <li>مناطق لحجز الخيول.</li>
                                <li>ساحة تدريب أو ممارسة.</li>

                            </ul>
                        </span>
                    </div>
                </div>

            </div>
        </>

    );
}
