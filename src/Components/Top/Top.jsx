import React, { useEffect, useState } from 'react';

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

    const openWhatsApp = () => {
        window.open('https://wa.me/+966544442552', '_blank');
    };

    return (
        <>
            <button
                onClick={openWhatsApp}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    fontSize: '16px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: '1000',
                    animation: 'ring 2s infinite',
                }}
            >
                <i className="fa-brands fs-2 fa-whatsapp"></i>
            </button>

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '90px',
                        right: '20px',
                        fontSize: '16px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#000',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: '1000',
                    }}
                >
                    <i className="fa-solid fa-chevron-up"></i>
                </button>
            )}

            <style >{`
                @keyframes ring {
                    0% {
                        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
                    }
                }
            `}</style>
        </>
    );
}
