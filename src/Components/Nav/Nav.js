import React from 'react'
import Logo from '../../assets/Logo.png'
import Hamburger from './hamburger';
import './underline.css'

const Nav = () => {

    return (
        <div className='w-full py-5 px-5'>
            <div className="xl:hidden flex justify-between">
                <img alt='IMAGE' className='z-50' src={Logo} />
                <Hamburger />
            </div>
            <div className='hidden xl:block'>
                <div className='container mx-auto flex items-center'>
                    <div className='pl-5 w-60'>
                        <img width={'123px'} height={'35px'} src={Logo} alt='logo'/>
                    </div>
                    <ul className='flex w-2/5 justify-between items-center'>
                        <a href='#We'>
                            <li>
                                Бид
                            </li>
                        </a>
                        <a href='#WeWork'>
                            <li>
                                Бид юу хийдэг вэ
                            </li>
                        </a>
                        <a href='#Team'>
                            <li>
                                Манай хамт олон
                            </li>
                        </a>
                        <a href='#Project'>
                            <li>
                                Төслүүд
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Nav;
