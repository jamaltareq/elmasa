import React, { useState, useEffect } from "react";

const Loader = () => {
    const [loading, setLoading] = useState(true); // حالة التحميل

    useEffect(() => {
        // محاكاة تأخير التحميل
        const timer = setTimeout(() => {
            setLoading(false); // سيتم إخفاء الـ Loader بعد 3 ثواني
        }, 3000);

        return () => clearTimeout(timer); // تنظيف المؤقت عند الخروج
    }, []);

    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <span className="loader"></span>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Loader;
