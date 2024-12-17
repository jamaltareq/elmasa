import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null); // لحفظ الرقم الذي يكون مفتوح

    // دالة لتغيير حالة الفتح/الإغلاق
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index); // إذا كانت نفس الفقرة مفتوحة يتم إغلاقها، وإلا يتم فتحها
    };

    // البيانات الخاصة بالأسئلة والإجابات
    const faqData = [
        {
            "question": "هل يتحمل نظام الماسة العوامل الجوية المختلفة؟",
            "answer": "نعم، النظام مقاوم للظروف الجوية القاسية مثل الحرارة المرتفعة والعواصف الرملية، مما يجعله مناسبًا للبيئات القاسية."
        },
        {
            "question": "هل يمكننا فتح الجدران مستقبلاً لو رغبنا في توسعة الغرف؟",
            "answer": "نعم، يمكن فتح الجدران بسهولة مستقبلاً إذا لزم الأمر، حيث يتم توزيع الأحمال بشكل متوازن على الجدران."
        },
        {
            "question": "هل يمكننا توسيع الشبابيك مستقبلاً؟",
            "answer": "نعم، يمكن تعديل أو توسيع الشبابيك عند الحاجة."
        },
        {
            "question": "هل تأسيس مواسير السباكة والكهرباء يحتاج إلى تكسير وقطع في الجدران كما هو معمول في البناء التقليدي؟",
            "answer": "لا، نظام الماسة يسمح بتمرير المواسير بسهولة داخل الجدران دون الحاجة لتكسير أو قطع."
        },
        {
            "question": "هل القاعدة الإسمنتية للمبنى تحتاج إلى قواعد بنفس منهجية عمل البناء التقليدي؟",
            "answer": "لا، نظام الماسة يقلل الحاجة إلى قواعد ضخمة، حيث يتم توزيع الأحمال على الجدران."
        },
        {
            "question": "هل يقاوم الحديد البارد الحريق؟",
            "answer": "نعم، الحديد البارد يقاوم الحريق بشكل جيد ولا يساعد في انتقال النيران."
        },
        {
            "question": "هل يتحمل نظام الماسة الرياح الشديدة؟",
            "answer": "نعم، الهيكل المعدني يتحمل الرياح الشديدة بفضل تصميمه المتميز وقوته."
        },
        {
            "question": "كيف يتم صيانة السباكة والكهرباء في الجدران؟",
            "answer": "يمكن صيانة السباكة والكهرباء بسهولة دون الحاجة إلى تكسير الجدران بفضل النظام المدمج للمواسير."
        },
        {
            "question": "هل يتحمل الحديد البارد الضربات مثل صدمة سيارة؟",
            "answer": "الحديد البارد قوي ولكنه قد يتعرض للتلف في حال تعرضه لصدمة قوية مثل صدمة سيارة."
        },
        {
            "question": "هل أستطيع تركيب الدواليب واللوحات والتلفزيون والمكيف؟",
            "answer": "نعم، يمكن تركيب الأجهزة الثقيلة مثل التلفزيون والمكيف بسهولة على الجدران باستخدام التقنيات المناسبة."
        },
        {
            "question": "هل يصدأ الحديد البارد؟",
            "answer": "لا، الحديد البارد مقاوم للصدأ بفضل الطلاء الواقي والمواصفات التي تحميه من العوامل البيئية."
        },
        {
            "question": "هل تنتقل الأصوات بين الغرف أو من الشارع الخارجي أو بين الأدوار؟",
            "answer": "نظام الماسة يحتوي على خصائص عزل صوتي جيدة، لكن في بعض الحالات قد تحتاج إلى إضافة مواد عزل إضافية في الجدران لتحقيق أفضل عزل صوتي."
        },
        {
            "question": "هل نظام الماسة عازل للحرارة؟",
            "answer": "نعم، النظام يوفر عزل حراري جيد، ويعمل على تقليل انتقال الحرارة بين الداخل والخارج."
        },
        {
            "question": "هل أستطيع تشطيب أي نوع من المواد مثل الرخام والحجر والدهانات وغيرها في الخارج والداخل؟",
            "answer": "نعم، يمكن استخدام أي مواد تشطيب، مثل الرخام والحجر والدهانات، في الداخل والخارج."
        },
        {
            "question": "هل نظام الماسة يتحمل الاهتزازات الكبيرة مثل الزلازل؟",
            "answer": "نعم، النظام مصمم ليكون مقاومًا للاهتزازات وللتعامل مع الزلازل بشكل فعال."
        },
        {
            "question": "هل أسمع صوت الطرق على الجدران؟",
            "answer": "في بعض الأحيان قد تسمع الصوت، ولكن يمكن تقليل ذلك باستخدام مواد عزل صوتي."
        },
        {
            "question": "هل أستطيع تركيب مصعد؟",
            "answer": "نعم، يمكن تركيب مصعد داخل المبنى حسب متطلبات المشروع."
        },
        {
            "question": "هل أستطيع تركيب رخام للأرضيات والدرج أو أي مواد أخرى كالباركيه؟",
            "answer": "نعم، يمكنك تركيب الرخام، الباركيه أو أي مواد أخرى في الأرضيات والدرج."
        },
        {
            "question": "هل أستطيع إضافة غرفة إضافية مستقبلاً في السطح؟",
            "answer": "نعم، يمكن إضافة غرفة على السطح مستقبلاً بفضل التصميم المرن لنظام الماسة."
        },
        {
            "question": "ما نوع التكييف المناسب لتركيبه؟",
            "answer": "يمكن تركيب أنظمة تكييف متنوعة، لكن يفضل استخدام الأنظمة التي تتناسب مع الاحتياجات الحرارية والتهوية الخاصة بالبناء."
        },
        {
            "question": "بالنسبة لأعمال صبة الأرضية والخزان البيارة والسور هل هي بالحديد البارد؟",
            "answer": "لا، أعمال صبة الأرضية والخزان والبيارة تتم باستخدام المواد التقليدية مثل الخرسانة، ولا تدخل ضمن نظام الماسة للهيكل المعدني."
        },
        {
            "question": "هل أستطيع فك المنزل بعد مدة ونقله؟",
            "answer": "نعم، يمكن فك المنزل وإعادة تركيبه في مكان آخر بفضل التصميم المعياري للنظام."
        },
        {
            "question": "هل أستطيع تركيب حلوق الأبواب الألمونيوم والخشب؟",
            "answer": "نعم، يمكن تركيب الحلوق من الألومنيوم أو الخشب حسب الرغبة."
        },
        {
            "question": "هل النظام مطابق لكود البناء السعودي؟",
            "answer": "نعم، نظام الماسة يتوافق تمامًا مع كود البناء السعودي."
        },
        {
            "question": "كم عدد الأدوار الممكن بناءها بنظام الماسة؟",
            "answer": "يمكن بناء عدة أدوار، ولكن العدد يعتمد على التصميم والمتطلبات الهندسية للمبنى."
        },
        {
            "question": "هل بالإمكان أن أطلب منكم خدمة تصنيع وتركيب الهيكل الحديدي فقط وأنا سأقوم بأعمال التشطيب؟",
            "answer": "نعم، يمكننا تصنيع وتركيب الهيكل الحديدي فقط حسب احتياجاتك."
        },
        {
            "question": "هل بالإمكان أن أقوم بكامل الأعمال المدنية كبناء القواعد الخزان والبيارة أم يجب أن تقوموا بها أنتم؟",
            "answer": "يمكنك القيام بكامل الأعمال المدنية، لكننا نقدم أيضًا خدمات بناء الأساسات والخزانات إذا كنت بحاجة إليها."
        }
    ];

    return (
        <main id='faq'>
            <div className="container">
                <h2 className="faq-heading">الأسئلة الشائعة</h2>
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-card" style={{ direction: 'rtl' }}>
                        <summary
                            className="faq-summary"
                            onClick={() => toggleFAQ(index)} // عند النقر على السؤال
                        >
                            {faq.question}
                            <span className="faq-open-icon">{openIndex === index ? '—' : '+'}</span>
                        </summary>
                        {openIndex === index && <span className="faq-card-spoiler">{faq.answer}</span>}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default FAQ;