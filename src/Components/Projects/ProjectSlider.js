import React, {Fragment, useState } from 'react'
import Project1 from '../../assets/project.png'
import Mont from '../../assets/MONT.png'
import Monnom from '../../assets/Monnom.png'
import ARDMWEB from '../../assets/ARDMWEB.png'
import DAXWEB from '../../assets/DAXWEB.png'
import MONTWEB from '../../assets/MONTWEB.png'
import DAXLs from '../../assets/dax-logo.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dialog, Transition } from '@headlessui/react'
import {FaAngleRight , FaAngleLeft} from 'react-icons/fa'


const ProjectSlider = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenSecond, setIsOpenSecond] = useState(false)
    const [isOpenThird, setIsOpenThird] = useState(false)
    const [isOpenFourth, setIsOpenFourth] = useState(false)

    function closeModal() {
    setIsOpen(false)
    }

    function closeModalSecond() {
        setIsOpenSecond(false)
    }

    function closeModalThird() {
        setIsOpenThird(false)
    }

    function closeModalFourth() {
        setIsOpenFourth(false)
    }

    
    function openModal() {
        setIsOpen(true)
    }
    function openModalSecond() {
        setIsOpenSecond(true)
    }
    function openModalThird() {
        setIsOpenThird(true)
    }
    function openModalFourth() {
        setIsOpenFourth(true)
    }
    
    return (
        <div className="xl:hidden block w-full container mx-auto py-10">
            <div className="text-2xl pb-5 px-5">
                <h1>Төслүүд</h1>
            </div>
            <div className='rounded-xl'>
            <div className="inset-0 flex flex-col space-y-5 items-center justify-center">
                <div className='flex w-full justify-evenly space-x-5'>
                    <button type="button" onClick={openModal} className="px-4 py-2 flex justify-center items-center text-sm font-medium shadow-lg rounded-xl">
                        <img alt='IMAGE' width={'164px'} height={'164px'} src={DAXLs} />
                        <FaAngleRight className='text-black' />
                    </button>
                    <button type="button" onClick={openModalSecond} className="px-4 py-2 flex justify-center items-center text-sm font-medium shadow-lg rounded-xl">
                        <img alt='IMAGE' width={'164px'} height={'164px'} src={Mont} />
                        <FaAngleRight className='text-black' />
                    </button>
                </div>
                <div className='flex w-full justify-evenly space-x-5'>
                    <button type="button" onClick={openModalThird} className="px-4 py-2 flex justify-center items-center text-sm font-medium shadow-lg rounded-xl">
                        <img alt='IMAGE' width={'164px'} height={'164px'} src={Project1} />
                        <FaAngleRight className='text-black' />
                    </button>
                    <button type="button" onClick={openModalFourth} className="px-4 py-2 flex justify-center items-center text-sm font-medium shadow-lg rounded-xl">
                        <img alt='IMAGE' width={'164px'} height={'164px'} src={Monnom} />
                        <FaAngleRight className='text-black'/>
                    </button>
                </div>
            </div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal} >
                    <div className="min-h-screen text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="relative inline-block w-full px-2 max-w-full h-screen overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                <img alt='IMAGE' className='w-24 h-24' src={DAXLs} />
                            </Dialog.Title>
                            <div className="mt-2">
                                <a href='#' target='_blank'>dax.mn</a>
                            </div>
                            <div className='pt-5 flex flex-col justify-center items-center'>
                                <p>Монголын том 4 биржийн нэг. Хамгийн анх Ард Санхүүгийн Нэгдэлийн крипто арилжааны биржийг хөгжүүлж, хэрэглээнд нэвтрүүлснээс хойш 2 шинэчлэлтийг хийгээд байгаа билээ.</p>
                                <img alt='IMAGE' height={'270px'} className='pt-5' src={DAXWEB} />
                            </div>
                            <div className=" absolute bottom-0 pb-2 right-0 pr-2">
                                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModal}>
                                    Буцах
                                </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
                <Transition appear show={isOpenSecond} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModalSecond} >
                    <div className="min-h-screen text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="relative inline-block w-full px-2 max-w-full h-screen overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                <img alt='IMAGE' className='w-1/4' src={Mont} />
                            </Dialog.Title>
                            <div className="mt-2">
                                <a href='#' target='_blank'>stablecoin.mn</a>
                            </div>
                            <div className='pt-5 flex flex-col justify-center items-center'>
                                <p>Монголын анхны Стэйблкойн. Монгол төгрөгтэй үнэ цэнээ аргамжсан энэхүү койн нь крипто арилжаанд төгрөгийг төлөөлөх хамгийн зөв хэрэгсэл болно. Энэхүү койны ухаалаг гэрээг Diverse Solutions хөгжүүлж, хэрэглээнд нэвтрүүлсэн болно.</p>
                                <img alt='IMAGE' height={'270px'} className='pt-5' src={MONTWEB} />
                            </div>
                            <div className="mt-4 absolute bottom-0 right-0 pb-2 pr-2">
                                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModalSecond}>
                                    Буцах
                                </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
                <Transition appear show={isOpenThird} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModalThird} >
                    <div className="min-h-screen text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="relative inline-block w-full px-2 max-w-full h-screen overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                <img alt='IMAGE' className='w-1/4' src={Project1} />
                            </Dialog.Title>
                            <div className="mt-2">
                                <a href='#' target='_blank'>ardmoney.com</a>
                            </div>
                            <div className='pt-5 flex flex-col justify-center items-center'>
                                <p>Монголын анхны DAO төсөл. Төвлөрсөн бус санхүүг Монголын болон Төв Азийн зах зээлд авчирч, крипто хэрэглэгчдийн хэрэглээнд нэвтрэх зорилготой.</p>
                                <img alt='IMAGE' height={'270px'} className='pt-5' src={ARDMWEB} />
                            </div>
                            <div className="mt-4 absolute bottom-0 right-0 pb-2 pr-2">
                                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModalThird}>
                                    Буцах
                                </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
                <Transition appear show={isOpenFourth} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModalFourth} >
                    <div className="min-h-screen text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="relative inline-block w-full px-2 max-w-full h-screen overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                <img alt='IMAGE' className='w-1/4' src={Monnom} />
                            </Dialog.Title>
                            <div className="mt-2">
                                <a href='#' target='_blank'>monnom</a>
                            </div>
                            <div className='pt-5'>
                                <p>“Monnom” аппликейшн нь цахим, аудио, хэвлэмэл номыг онлайнаар худалдаалдаг номын төвлөрсөн платформ юм. Бид 2021 оноос үйл ажиллагаагаа явуулж эхэлсэн ба Монгол хэл дээрх бүх төрлийн номыг цахим, аудио, хэвлэмэл гэсэн гурван хэлбэрээр хэрэглэгчдэд хүргэдэг. Мөн подкаст, монлайв, номтой холбоотой бүх төрлийн мэдээ мэдээлэл, контентын цогцоор нь багтаасан.</p>
                            </div>
                            <div className="mt-4 absolute bottom-0 right-0 pb-2 pr-2">
                                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-500 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModalFourth}>
                                    Буцах
                                </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    )
}

export default ProjectSlider;


