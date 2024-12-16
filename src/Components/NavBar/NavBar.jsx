
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar fixed-top navbar-expand-md  navbar-light">
            <div className="container" style={{ direction: 'rtl' }}>
                <Link className="navbar-brand fw-bold" to="/">
                    <img src="https://photos.fife.usercontent.google.com/pw/AP1GczPROlXcv4u0vc4VeYQCs5uvRrUlqwKvwD2Mzhl89GSU2JKV8JNU6L8=w1295-h879-s-no-gm?authuser=0" width={70} />
                </Link>
                <button
                    className="navbar-toggler custom-toggler"
                    type="button"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
                <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto">

                        <li className='nav-item'><a className='nav-link' href="#">الرئيسية</a></li>
                        <li className='nav-item'><a className='nav-link' href="#about">من نحن</a></li>
                        <li className='nav-item'><a className='nav-link' href="#brochure"> البروشر</a></li>
                        <li className='nav-item'><a className='nav-link' href="#gallery">منتجاتنا</a></li>
                        <li className='nav-item'><a className='nav-link' href="#features">ماهي الماسة</a></li>
                        <li className='nav-item'><a className='nav-link' href="#wrapper">مم يتكون النظام</a></li>
                        <li className='nav-item'><a className='nav-link' href="#plan">الخطه</a></li>
                        <li className='nav-item'><a className='nav-link' href="#choose">لما تختارنا</a></li>
                        <li className='nav-item'><a className='nav-link' href="#Other"> خدمات أخرى</a></li>
                        <li className='nav-item'><a className='nav-link' href="#ofer">العروض </a></li>
                        <li className='nav-item'><a className='nav-link' href="#faq">الاسئلة الشائعة</a></li>
                        <li className="nav-item">
                            <Link className="btn bg-main rounded-pill text-white" to="/contact">
                                اتصل بنا
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
