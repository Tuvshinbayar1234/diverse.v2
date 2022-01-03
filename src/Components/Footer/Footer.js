import React from 'react'
import logo from '../../assets/footerlogo.png'
import {FaInstagram , FaFacebookF , FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full py-5 px-0 sm:px-10' style={{backgroundColor: '#1E1E1E'}}>
            <div className='hidden sm:block'>
                <div className='container mx-auto flex space-x-24 items-center'>
                    <div className=''>
                        <img alt='IMAGE' src={logo} />
                    </div>
                    <div className='text-white text-xs'>
                        <div className='flex space-x-2'>
                            <h1>Имайл:</h1>
                            <span>info@dsolutions.mn</span>
                        </div>
                        <div className='py-5 flex space-x-5'>
                            <h1>Хаяг:</h1>
                            <span>Сүхбаатар дүүрэг, 8-р хороо, Централ цамхаг, 17 давхар Өдөр бүр</span>
                        </div>
                        <div className='flex space-x-5'>
                            <h1>Утас:</h1>
                            <span>+976 91951199</span>
                        </div>
                        <div className='flex text-xl space-x-5 py-5'>
                        <a className=' cursor-pointer' href='https://www.instagram.com/diverse.solutions/' target='_blank'><FaInstagram /></a> 
                        <a className=' cursor-pointer' href='https://www.facebook.com/aidiversesolutions/' target='_blank'><FaFacebookF /></a>
                        <a className=' cursor-pointer' href='https://www.linkedin.com/company/diversesolutions/' target='_blank'><FaLinkedinIn /></a> 
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>
            <div className='block sm:hidden w-full'>
                <div className='flex justify-center items-center space-x-2'>
                    <div className=' w-4/12'>
                        <img alt='IMAGE' width={'101px'} height={'70px'} src={logo} />
                    </div>
                    <div className=' w-6/12 text-xs text-white'>
                        <div className='flex space-x-2'>
                            <p>Имайл:</p>
                            <p>info@dsolutions.mn</p>
                        </div>
                        <div className='py-3 flex space-x-5'>
                            <p>Хаяг:</p>
                            <p>Цэнтрал товер 17 давхар</p>
                        </div>
                        <div className='flex space-x-5'>
                            <p>Утас:</p>
                            <p>+976 91951199</p>
                        </div>
                    </div>
                </div>
                <div className='flex text-2xl text-center justify-center items-center text-white space-x-5 py-5'>
                       <a className=' cursor-pointer' href='https://www.instagram.com/diverse.solutions/' target='_blank'><FaInstagram /></a> 
                       <a className=' cursor-pointer' href='https://www.facebook.com/aidiversesolutions/' target='_blank'><FaFacebookF /></a>
                       <a className=' cursor-pointer' href='https://www.linkedin.com/company/diversesolutions/' target='_blank'><FaLinkedinIn /></a> 
                        <FaGithub />
                    </div>
            </div>
        </div>
    )
}

export default Footer;
