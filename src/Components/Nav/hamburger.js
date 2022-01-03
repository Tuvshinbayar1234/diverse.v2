import React, { useState } from 'react';
import Logo from '../../assets/Logo.png'
import { FaTimes, FaAlignJustify, FaBars } from "react-icons/fa";

export default function Hamburger() {

    const [navOpen, setNavOpen] = useState(false);
   
    const handleToggle = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <div className=''>
                <div className="relative flex items-center justify-between">
                    <div className="xl:hidden block space-x-3">
                        <button onClick={handleToggle} className="flex items-center text-blue-600">
                            <FaAlignJustify className="text-black w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="navbar-menu">
                    <nav
                        className={`bg-white fixed top-0 h-screen  w-full max-w-full overflow-y-auto  ${
                            navOpen
                                ? 'fixed right-0 transition-all duration-200 ease-in '
                                : 'fixed -right-full transition-all duration-200 ease-in '
                        }`}>
                        <div className={'flex items-center justify-between pt-6 mr-5'}>
                            <div className="">
                                <img className='' src={Logo.src} />
                            </div>
                            <button onClick={handleToggle} className="navbar-close">
                                <FaTimes className="h-7 w-7 text-black text-brand-black" />
                            </button>
                        </div>
                        <div className="mx-5">
                            <ul className="z-20">
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded" href="#We">Бид</a>
                                </li>
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded" href="#WeWork">Бид юу хийдэг вэ?</a>
                                </li>
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Team">Манай хамт олон</a>
                                </li>
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Project">Төслүүд</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto z-20">
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span>Copyright © 2021</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

