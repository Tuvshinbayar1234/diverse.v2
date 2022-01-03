import React,{Fragment , useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bataa from '../../assets/bataa.png'
import amaraa from '../../assets/amaraa.png'
import bo from '../../assets/bo.png'
import anhaa from '../../assets/anhaa.png'
import muugii from '../../assets/muugii.png'
import odko from '../../assets/odko.png'
import zaya from '../../assets/zaya.png'
import tuku from '../../assets/tuku.png'
import tulgaa from '../../assets/tulgaa.png'
import buri from '../../assets/buri.png'
import eegii from '../../assets/eegii.png'
import tseku from '../../assets/tseku.png'
import { Dialog, Transition } from '@headlessui/react'

const TeamSlider = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    const Team = [
        {
            img: eegii,
            name: 'М. Энх-Амгалан',
            title: 'CEO',
        },
        {
            img: odko,
            name: 'Г. Мөнх-Од',
            title: 'CTO',
        },
        {
            img: bo,
            name: 'М. Болортоль',
            title: 'COO',
        },
        {
            img: anhaa,
            name: 'Д. Анхбаясгалан',
            title: 'Advisor',
        },
        {
            img: tulgaa,
            name: 'Б. Баттулга',
            title: 'FullStack Developer',
        },
        {
            img: Bataa,
            name: 'Г. Ууганбат',
            title: 'Senior Developer',
        },
        {
            img: buri,
            name: 'Б. Бүри',
            title: 'DevOps',
        },
        {
            img: tseku,
            name: 'Т. Бумцэнд',
            title: 'Designer',
        },
        {
            img: muugii,
            name: 'О. Мөнхзориг',
            title: 'Developer',
        },
        {
            img: tuku,
            name: 'О. Түвшинбаяр',
            title: 'Developer',
        },
        {
            img: zaya,
            name: 'Ж. Амарзаяа',
            title: 'Secretary',
        },
        {
            img: amaraa,
            name: 'А. Амартүвшин',
            title: 'Blockchain Consultant',
        },

    ]

      const teamPeopleleft = [
        {
            img: eegii,
            name: 'М. Энх-Амгалан',
            title: 'CEO',
        },
        {
            img: odko,
            name: 'Г. Мөнх-Од',
            title: 'CTO',
        },
        {
            img: bo,
            name: 'М. Болортоль',
            title: 'COO',
        },
        {
            img: anhaa,
            name: 'Д. Анхбаясгалан',
            title: 'Advisor',
        },
        {
            img: tulgaa,
            name: 'Б. Баттулга',
            title: 'FullStack Developer',
        },
        {
            img: Bataa,
            name: 'Г. Ууганбат',
            title: 'Senior Developer',
        },
      ]

      const teamPeopleRight = [
        {
            img: buri,
            name: 'Б. Бүри',
            title: 'DevOps',
        },
        {
            img: tseku,
            name: 'Т. Бумцэнд',
            title: 'Designer',
        },
        {
            img: muugii,
            name: 'О. Мөнхзориг',
            title: 'Developer',
        },
        {
            img: tuku,
            name: 'О. Түвшинбаяр',
            title: 'Developer',
        },
        {
            img: zaya,
            name: 'Ж. Амарзаяа',
            title: 'Secretary',
        },
        {
            img: amaraa,
            name: 'А. Амартүвшин',
            title: 'Blockchain Consultant',
        },
      ]

    return(
        <div className="lg:hidden block w-full container mx-auto">
            <div className=" text-lg px-3 pb-5 flex justify-between items-center">
                <h1>Манай хамт олон</h1>
                <p onClick={openModal} className="text-xs cursor-pointer">Бүгдийг үзэх</p>
            </div>
            <div className='flex overflow-x-scroll pb-4'>
            {Team.map((i, x) => {
                return (
                <div className="flex justify-center items-center rounded-xl mr-5 sm:mr-3 lg:mr-10 xl:mr-24" style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                    <div key={x} className="flex justify-center items-center w-48 h-64">
                        <div className="">
                            <img alt='image' width={'140px'} height={'188px'} src={i.img} />
                            <h1 className="pt-3 text-xs font-bold">{i.name}</h1>
                            <p className="text-xs pb-3">{i.title}</p>
                        </div>
                    </div>
                </div>                    
                )
            })}
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
                            <div className="inline-block w-full px-2 max-w-full h-full overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    <div className="flex flex-col items-center p-5 w-full">
                                        <div className="flex justify-start w-full">
                                            <p onClick={closeModal} className="text-left cursor-pointer">Буцах</p>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <h1 className="text-center">Манай хамт олон</h1>
                                        </div>
                                    </div>
                                </Dialog.Title>
                                <div className="flex justify-around w-full space-x-3">
                                    <div className=" w-6/12 space-y-5">
                                        {teamPeopleleft.map((i , x) => {
                                            return (
                                                <div className="flex justify-center items-center rounded-xl mr-5 sm:mr-3 lg:mr-10 xl:mr-24" style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                                                    <div key={x} className="flex justify-center items-center w-48 h-64">
                                                        <div className="">
                                                            <img alt='image' width={'140px'} height={'188px'} src={i.img} />
                                                            <h1 className="pt-3 text-xs font-bold">{i.name}</h1>
                                                            <p className="text-xs pb-3">{i.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="w-6/12 space-y-5">
                                        {teamPeopleRight.map((i, x) => {
                                            return (
                                                <div className="flex justify-center items-center rounded-xl mr-5 sm:mr-3 lg:mr-10 xl:mr-24" style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                                                    <div key={x} className="flex justify-center items-center w-48 h-64">
                                                        <div className="">
                                                            <img alt='image' width={'140px'} height={'188px'} src={i.img} />
                                                            <h1 className="pt-3 text-xs font-bold">{i.name}</h1>
                                                            <p className="text-xs pb-3">{i.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )   
}

export default TeamSlider;