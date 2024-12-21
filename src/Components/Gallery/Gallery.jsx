import React from 'react';

// Data Object for Cards
const cardsData = [
    {
        logo: require("../../Assets/prologo1.png"),
        title: "كشك",
        subtitle: "كشك بيع منتجات",
        image: require("../../Assets/pro1.avif"),
        description: "كشك مبيعات",
        uses: ["الصحف والمجلات", "الوجبات السريعة", "الهدايا الصغيرة"],
    },
    {
        logo: require("../../Assets/prologo2.png"),
        title: "حصن",
        subtitle: "حصن تأمين",
        image: require("../../Assets/pro2.jpg"),
        description: "حصن تأمين",
        uses: ["حماية", "سيطرة", "دعم"],
    },
    {
        logo: require("../../Assets/prologo3.png"),
        title: "حمام",
        subtitle: "بيت الراحة",
        image: require("../../Assets/pro3.jpg"),
        description: "بيت الراحة",
        uses: ["خصوصية", "متانة", "صرف"],
    },
    {
        logo: require("../../Assets/prologo4.png"),
        title: "مكتبة",
        subtitle: "مكتبة قراءة",
        image: require("../../Assets/pro4.webp"),
        description: "مكتبة قراءة",
        uses: ["تعليم", "بحث", "ترفيه"],
    },
    {
        logo: require("../../Assets/prologo5.png"),
        title: "صحارا",
        subtitle: "مجلس خارجي",
        image: require("../../Assets/pro5.jpg"),
        description: "صحارا",
        uses: ["راحة في الهواء الطلق", "تصميم مقاوم للعوامل الجوية", "إضاءة ومقاعد مريحة"],
    },
    {
        logo: require("../../Assets/prologo6.png"),
        title: "فيلا",
        subtitle: "فيلا دور واحد",
        image: require("../../Assets/pro6.jpg"),
        description: "فيلا دور واحد",
        uses: ["تصميم بسيط وعملي", "مساحة مفتوحة ومريحة", "سهولة في الوصول إلى جميع الغرف"],
    },
    {
        logo: require("../../Assets/prologo7.png"),
        title: "فيلا",
        subtitle: "فيلا دورين",
        image: require("../../Assets/pro7.jpg"),
        description: "فيلا دورين",
        uses: ["مساحة أكبر", "تنظيم أفضل", "خصوصية أكبر"],
    },
    {
        logo: require("../../Assets/prologo8.png"),
        title: "إسطبل",
        subtitle: "إسطبل خيول",
        image: require("../../Assets/pro8.jpg"),
        description: "إسطبل خيول",
        uses: ["مساحة واسعة", "تهوية جيدة", "مرافق للحيوانات"],
    },
];

export default function Gallery() {
    return (
        <div className="gallery-section container py-5" style={{ direction: 'rtl' }}>
            <div className="text-center  col-sm-12" style={{ direction: "rtl" }}>
                <h4 className='color-two fs-1'> منتجاتنا </h4>
                <p className='color-main'>منتجاتنا في الحديد البارد تجمع بين القوة والمتانة بتصاميم مبتكرة تضمن جودة عالية وحلولاً إنشائية فعالة لجميع المشاريع.</p>
            </div>
            <div className="row d-flex  justify-content-center align-items-stretch">
                {cardsData.map((card, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                        <div className="card border-0 shadow-sm w-100 card-content">
                            <div className="card-heade d-flex align-items-center p-2">
                                <div className="top-image pe-0 ">

                                    <img src={card.logo} alt={`Logo ${index + 1}`} width={35} className='pe-0' />
                                </div>
                                <div>
                                    <p className="m-0 fw-bold color-main">{card.title}</p>
                                    <p className="m-0 text-muted fs-7">{card.subtitle}</p>
                                </div>
                            </div>
                            <img src={card.image} alt={`Product ${index + 1}`} className="card-img-top card-picture" />
                            <div className="card-body">
                                <h5 className="card-title text-center color-main">{card.description}</h5>
                                <ul className="list-unstyled text-muted">
                                    {card.uses.map((use, useIndex) => (
                                        <li key={useIndex}>• {use}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
