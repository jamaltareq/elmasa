import React from 'react'

export default function Brochure() {
    return (
        <section id="brochure" className="work-sections" style={{ backgroundImage: "url(https://previews.dropbox.com/p/thumb/ACdjwIzebp-lY9FQ73s5IhZNrTTg-EUO6TD4S3wcUkLaIghX20_DB7Sy9DC8rGP3euQSUirQuG3pva6dS_PODG4xNm7AvYjODgG8_vyc3gM4XwaZMkDNHWTujCM3wiDd9nFX53oUSbTrcdvaNLxJOwPDFNEPzCTOH1xOvQyC90oWcHlbppkz6qPWycG60qmVIi4O9lMOHi4fmNLc3FmFsrOtMBMcDKB7ae672jYJOr0XM3JGAIIw9X38eFUFA_mv9ArvmCszcD1xmqOkOO5pIc38NVIMMoIPiPNt7I-r3W5pucS-GL0ZQsc3bM8yQYdnv_o/p.jpeg)", direction: "rtl" }} >
            <div className="container m-auto row">
                <div className="col-md-9 sec-title light" style={{ direction: "rtl" }}>
                    <h2 className='fs-3'>الآن يمكنك تحميل معلومتنا الإسترشادية المفصلة من خلال الضغط على الرابط التالي لتحميل البروشور الخاص ب "أنظمة التركيب للألمنيوم" وإكتشف المميزات والخدمات والمواصفات الفريدة. . . </h2>
                    <p className='text-light'> للمزيد من المساعدة يرجى التواصل مع فريق العمل الخاص بنا</p>
                </div>
                <div className="col-md-3 z-3 d-flex align-content-center justify-content-center align-items-start mt-4">
                    <a href='https://www.dropbox.com/home?preview=Profile++al-almas+network+for+cold+steel+(2).pdf' download style={{ position: 'relative' }} className='text-decoration-none z-3 text-white bg-main p-2 ps-5 rounded-2 d-flex'>
                        <span className='m-2'>إضغط لتحميل</span>
                        <div style={{ position: 'absolute', top: "-3px", left: "-30px", border: "7px solid rgb(96, 139, 193)" }} className="rounded-circle bg-main p-1">
                            <img width={40} src="https://previews.dropbox.com/p/thumb/ACftqUv94SsyyLMlkwEjcREVkIPLbQJjxliazRMoNXUnwChmNn8NfO_s02fGfyMqIabdE9TrlRGKMop4v6XKokQEXTwBtEyPMV376VO427SS74QP8sFM4Z-JWOtyE45EeTMB61QwE_O8c73f6NcpBRDpFse1AEVbkT-Ny-nWn6J567Mzo1oy9AD9HpIlq0rzei4kv1H2PWDRuJlQs6WoaerkY4dTGRlwCpqkK6jk4BqgSdPIHANT1OSMhA2NqBDU3EyX203YLtXNATmbP3Vyukmk6L0iRPLLxFc7ke6YmHmbaod7IM5lNW2UCPXO14rcae4/p.png" alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
