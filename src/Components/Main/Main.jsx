import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import video1 from '../../Assets/homee.mp4'
export default function Main() {

    return (
        <div className='main rtl' >
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <div className=" swep  ">
                        <video className='videoedi' autoPlay loop muted>
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className=" swep ">
                        <video className='videoedi   ' autoPlay loop muted>
                            <source src="https://videos.pexels.com/video-files/29740269/12784265_2560_1440_24fps.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="overlay z-3 row ">
                            <div className="col-md-5">
                                <h1>أستعد لبناء يجمع بين الشغف والإتقان. نحول أحلامك إلى واقع بمشاريع تضيف قيمة وتبقى للأجيال.</h1>
                            </div>
                            <div className="col-md-7">
                                <img width={200} src="https://previews.dropbox.com/p/thumb/ACdFzpJ4H4WBPVd_1xKPTj_MHiQGD6RYKe5atp8mIb1KjmkBoMkqcP9CQl3owaWHeN7R31QjJaZBF5qLJR_Mz3X_Dckq-Tgr8ABra5MvMSfOE73_aE6PzhmJetOmkhT4u982dqvpAOWJ5kP6ASi7wpFUjHsuyEID047rqS7WZXoKLmDn3WsgUXc8Ib3JATRpr2iCYdqOl7yf0lEcfcLcHkmmPJd_OUFlbrnArOfpfImh2hpPDIN-bdXEWI_ccHEQAC0L6d8eCKYDmdmv2MV66vYY1e-FWPJCcM4Z9QwC4sqFDnWahLkILltbJOvTpgDCCmM/p.png" />
                            </div>
                        </div>
                        <div className="work-section"></div>
                    </div>
                </SwiperSlide> */}


            </Swiper>
        </div>
    )
}
