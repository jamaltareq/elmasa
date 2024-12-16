
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar fixed-top navbar-expand-md  navbar-light">
            <div className="container" style={{ direction: 'rtl' }}>
                <Link className="navbar-brand fw-bold" to="/">
                    <img src="https://previews.dropbox.com/p/thumb/ACfnVDiAYWt3F09-4GwXkQ5M8LENZlvRC6ZOEF5rrLQMvK_b2S4lunVdfbRjreb57JhQmqKSrCh3xa3Xeaq-GEWfovVmMQkQk1uxTc8rsfDmpt0EGImOhGk2bEfaBEcTGQo_XYdbOWFTCka0nM7bvWPdRkNQ_rfbtORt2KdIr0_0v4yzHlpMxcoAr0lsOsFmkzrzy4KOsSu-kWFhZgsQxmZnvna2CY0aCAUpuOEcJEm-NLb2ULoGc7NuMx8PY_MxOKNKLQL2qdaOAtLk8a8ADizsXcNCWbBbLR3sGkhIJAZOPmI6DkiK-28l0EcKspdpAQoMLNgyekVL8m7mM_5ZW9tzw7gBDxODFa5ttEeY_aDJqg066wabRyPNzkyPzG6IQS-2ev3zlHwU7SBGISCri6fH/p.png?is_prewarmed=true" width={70} />
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
