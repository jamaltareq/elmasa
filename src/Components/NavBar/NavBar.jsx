
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar fixed-top navbar-expand-md  navbar-light">
            <div className="container" style={{ direction: 'rtl' }}>
                <Link className="navbar-brand fw-bold" to="/">
                    <img src="https://images.pexels.com/photos/29804503/pexels-photo-29804503.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={70} />
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
                        <li className='nav-item'><a className='nav-link' href="#gallery">منتجاتنا</a></li>
                        <li className='nav-item'><a className='nav-link' href="#features">ماهي شبكات الألماس</a></li>
                        <li className='nav-item'><a className='nav-link' href="#wrapper">مم يتكون النظام</a></li>
                        <li className='nav-item'><a className='nav-link' href="#plan">الخطه</a></li>
                        <li className='nav-item'><a className='nav-link' href="#choose">لما تختارنا</a></li>
                        <li className='nav-item'><a className='nav-link' href="#Other"> خدمات أخرى</a></li>
                        <li className='nav-item'><a className='nav-link' href="#model">نماذج </a></li>
                        <li className='nav-item'><a className='nav-link' href="#ofer">العروض </a></li>
                        <li className='nav-item'><a className='nav-link' href="#faq">الاسئلة الشائعة</a></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                اتصل بنا
                            </Link>
                        </li>
                        <li className='nav-item me-3'><a className='btn bg-main rounded-pill text-white me-5' href="#brochure"> البروفايل</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
