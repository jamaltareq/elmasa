import React, { useEffect, useState } from 'react'

export default function Top() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // تنظيف الحدث عند إزالة المكون
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        fontSize: '16px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '5px',
                        backgroundColor: '#000',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: '1000',
                        borderRadius: '50%',
                    }}
                >
                    <i className="fa-solid fa-chevron-up"></i>
                </button>
            )}
        </>
    );
}
