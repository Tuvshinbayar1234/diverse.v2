import React, { Fragment, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bataa from '../../assets/bataa.png'
import amaraa from '../../assets/amaraa.png'
import bo from '../../assets/bo.png'
import anhaa from '../../assets/anhaa.png'
import muugii from '../../assets/muugii.png'
import odko from '../../assets/odko.png'
import zaya from '../../assets/zaya.png'
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

    return (
        <div className="lg:hidden block w-full container mx-auto">
            <div style={{fontFamily: 'Magistral'}} className=" text-lg px-5 md:px-0 pb-5 flex justify-between items-center">
                <h2 >Members</h2>
                <p onClick={openModal} className=" cursor-pointer underline" >See all</p>
            </div>
            <div className='flex overflow-x-scroll pb-4'>
                {team.map((i, x) => {
                    return (
                        <div key={x} className="flex justify-center items-center  mr-5 shadow-md" >
                            <div className="flex justify-center items-center w-48 h-64">
                                <div className="">
                                    <img alt='image' width={'140px'} height={'188px'} src={i.img} />
                                    <div className='pl-3'>
                                        <p className="pt-3 text-sm font-bold" style={{ fontFamily: 'MagistralRegular' }}>{i.name}</p>
                                        <p className="text-sm pb-3" style={{ fontFamily: 'MagistralRegular' }}>{i.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto bg-white" onClose={closeModal} >
                    <div className="min-h-screen text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <div className='h-screen sm:p-10 w-screen '>
                                <div className='text-left text-lg py-5 px-5' style={{ fontFamily: 'MagistralRegular' }} onClick={() => closeModal()}>
                                    <div className='p-3 shadow-md inline'>
                                        Back
                                    </div>
                                </div>
                                <div className='w-full  flex flex-wrap'>
                                    {team.map((member, index) => (
                                        <div key={index} className='w-1/2 mt-5'>
                                            <img src={member.img} className='w-4/5 sm:w-3/5 mx-auto object-contain' alt="" />
                                            <p className="pt-3 text-sm font-bold" style={{ fontFamily: 'MagistralRegular' }}>{member.name}</p>
                                            <p className="text-sm pb-3" style={{ fontFamily: 'MagistralRegular' }}>{member.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}


const team = [

    {
        img: eegii,
        name: 'M. Enkhamgalan',
        title: 'CEO',
    },
    {
        img: odko,
        name: 'G. Munkod',
        title: 'CTO',
    },
    {
        img: bo,
        name: 'M. Bolortoli',
        title: 'COO',
    },
    {
        img: anhaa,
        name: 'D. Ankhbayasgalan',
        title: 'Advisor',
    },
    {
        img: tulgaa,
        name: 'B. Battulga',
        title: 'FullStack Developer',
    },
    {
        img: buri,
        name: 'B. Buri',
        title: 'DevOps',
    },
    {
        img: tseku,
        name: 'T. Bumtsend',
        title: 'Designer',
    },
    {
        img: muugii,
        name: 'O. Munkhzorig',
        title: 'Developer',
    },
    {
        img: zaya,
        name: 'J. Amarzaya',
        title: 'Secretary',
    },
    {
        img: amaraa,
        name: 'A. Amartuvshin',
        title: 'Blockchain Consultant',
    },
    {
        img: Bataa,
        name: 'G. Uuganbat',
        title: 'Developer',
    },
]


export default TeamSlider;