import React, { useState } from 'react';

export default function Other() {
    const [isDownloadingGlass, setIsDownloadingGlass] = useState(false);
    const [isDownloadingWood, setIsDownloadingWood] = useState(false);

    const handleDownload = (filePath, fileName, setDownloading) => {
        setDownloading(true);
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => setDownloading(false), 2000); // Simulate download complete
    };

    return (
        <div className="feat bg-main pt-5 pb-5" id='Other'>
            <div className="container">
                <div className="row g-3" style={{ direction: "rtl" }}>
                    <div className="section-head text-white col-sm-12" style={{ direction: "rtl" }}>
                        <h4 className='text-white'><span style={{ color: '#fbd789' }}>خدمات ومنتجات</span> أخرى</h4>
                        <p className='text-white'>نظام الماسة هو تقنية مبتكرة تعتمد على الهياكل المصنوعة من الحديد البارد، ويتميز بعدة مزايا أساسية:</p>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-2 gag rounded-2 bg-light shadow-sm">
                            <div className="navbar rounded-2 p-3 text-center d-flex flex-column align-content-center">
                                <h3 className='fs-5 text-primary'>وجهات زجاجية</h3>
                                <p className='fs-7 text-black-50'
                                >
                                    نحن من بين أكبر المصانع الرائدة والمتخصصة في تصنيع الواجهات الزجاجية وأعمال إكساء المباني الخارجية (الكلادينج) والقباب السماوية. نتميز بتقديم منتجات ذات جودة عالية تضمن متانة طويلة الأمد مع الحفاظ على جاذبيتها وأناقتها.
                                    منتجاتنا مصممة بعناية لتوفير أعلى مستويات العزل الحراري ومنع تسرب الماء، الهواء، والغبار، مما يضمن أداءً متميزاً في جميع الظروف.
                                    نحرص على تصنيع قطاعاتنا لدى أرقى المصانع العالمية المعروفة بجودة منتجاتها، لنقدم لكم حلولاً تواكب أعلى معايير الجودة والتمي                                    </p>
                                <button
                                    onClick={() => handleDownload('/Assets/almasa.pdf', 'almasa.pdf', setIsDownloadingGlass)}
                                    className={`btn ${isDownloadingGlass ? 'btn-secondary' : 'btn-primary'} d-flex align-items-center justify-content-center gap-2`}
                                    disabled={isDownloadingGlass}
                                >
                                    {isDownloadingGlass ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span>تحميل...</span>
                                        </>
                                    ) : (
                                        <>
                                            <img width={24} src={require('../../Assets/tap1.png')} alt="Download Icon" />
                                            <span>تحميل الملف</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-2 wood rounded-2 bg-light shadow-sm pb-5">
                            <div className="navbar rounded-2 p-3 text-center d-flex flex-column align-content-center">
                                <h3 className='fs-5 text-primary'>تميز في صناعة المنتجات الخشبية</h3>
                                <p className='fs-7 text-black-50'
                                >
                                    مهمتنا هي تقديم منتجات خشبية عالية الجودة تجمع بين الابتكار والتميز الإبداعي، مع ضمان تلبية احتياجات عملائنا. نحن متخصصون في تصنيع وتركيب المنتجات حسب رؤية العميل، بدعم من فريق تصميم متميز وأحدث تقنيات التصنيع. نلتزم بتطوير قطاع النجارة في المملكة عبر تطبيق أنظمة الجودة الصارمة ومتابعة الأداء لضمان أفضل النتائج. كما أننا على أتم الاستعداد لتنفيذ المشاريع بمختلف أحجامها، مع الالتزام بالجودة والاحترافية.
                                </p>
                                <button
                                    onClick={() => handleDownload('/Assets/wood.pdf', 'wood.pdf', setIsDownloadingWood)}
                                    className={`btn ${isDownloadingWood ? 'btn-secondary' : 'btn-primary'} d-flex align-items-center justify-content-center gap-2`}
                                    disabled={isDownloadingWood}
                                >
                                    {isDownloadingWood ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span>تحميل...</span>
                                        </>
                                    ) : (
                                        <>
                                            <img width={24} src={require('../../Assets/tap1.png')} alt="Download Icon" />
                                            <span>تحميل الملف</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
