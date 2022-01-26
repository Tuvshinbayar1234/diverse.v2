import React ,{useState, Fragment} from 'react'
import Project1 from '../../assets/project.png'
import White from '../../assets/whitelogo.png'
import Mont from '../../assets/MONT.png'
import Krypto from '../../assets/krypto.png'
import ARDMs from '../../assets/ArdMoney.png'
import DAXL from '../../assets/dax-logo-light.png'
import DAXLs from '../../assets/dax-logo.png'
import {FaAngleRight , FaAngleLeft, FaWindowClose} from 'react-icons/fa'
import { Dialog, Transition } from '@headlessui/react'



export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(-1);
    const [isOpen, setIsOpen] = useState(false)


    function showProjectDetail(index) {
        if (index === selectedProject) {
            setSelectedProject(-1);
        } else {
            setSelectedProject(index);
        }
    }


    function openModal(index) {
        setIsOpen(true)
        setSelectedProject(index);
    }

    function closeModal() {
        setIsOpen(false)
        setSelectedProject(-1);
    }

    return (
        <div className='container mx-auto pb-40 lg:py-40'>
            <div className='flex flex-col px-5 md:px-0 lg:flex-row items-center'>
                <div style={{ fontFamily: 'MagistralRegular' }} className='flex  lg:pr-28 xl:pr-36 2xl:pr-44 flex-col w-full lg:w-1/2'>
                    <h2 className='text-5xl font-bold mb-10' style={{ fontFamily: 'Magistral' }}>Projects</h2>
                    <div>
                        <h3 className='font-bold text-2xl'>Blockchain Consultation</h3>
                        <p className='mt-2'>Recommend for those who are exploring blockchain and groundbreaking information technology as part of a solution to their products, services.</p>
                    </div>
                    <div className='mt-8'>
                        <h3 className='font-bold text-2xl' >Decentralized Applications</h3>
                        <p className='mt-2'>Security and Transparency have been a problem to solve in any system. Diverse Solutions is building Decentralized applications built on blockchain technology has transparency and trust built into the system and provide a solution to the aforementioned problem.</p>
                    </div>
                </div>
                <div className='w-full mt-14 lg:w-1/2  relative '>
                    <div className='w-full hidden sm:flex flex-wrap'>
                        {
                            projectImages.map((img, index) => (
                                <div key={index} className='w-full sm:w-1/2 flex justify-center'>
                                    <div onClick={() => showProjectDetail(index)}
                                        className={` ${selectedProject === index ? 'rounded-xl scale-110 sm:border border-black z-30' : 'hover:scale-110 hover:shadow-none sm:shadow-md'} bg-white w-full  h-52 flex  transition transform  cursor-pointer justify-center items-center  `}>
                                        {img.component}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full flex sm:hidden flex-wrap'>
                        {
                            projectImages.map((img, index) => (
                                <div key={index} className='w-full sm:w-1/2 flex justify-center'>
                                    <div onClick={() => openModal(index)}
                                        className={` ${selectedProject === index ? 'rounded-xl scale-110 sm:border border-black z-30' : 'hover:scale-110 hover:shadow-none sm:shadow-md'} bg-white w-full  h-52 flex  transition transform  cursor-pointer justify-center items-center  `}>
                                        {img.component}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`absolute transition h-full   text-white top-0 ${selectedProject == -1 ? '-z-10 opacity-0' : 'z-20 opacity-100'}  w-full h-full bg-black rounded-xl`}>
                        {
                            selectedProject !== -1 ? (
                                <div className={`w-full h-full flex  ${selectedProject >= 2 ? 'flex-col-reverse' : 'flex-col'}`}>
                                    <div className='flex'>
                                        {(selectedProject === 0 || selectedProject === 2) && <BlankSpace />}
                                        <div className='w-1/2 pt-10 pl-14 xl:pl-20 '>
                                            <ul className='list-disc'>
                                            {
                                                projects[selectedProject].listsLeft.map(list => (
                                                    <li>{list}</li>
                                                ))
                                            }
                                            </ul>
                                        </div>
                                        {(selectedProject === 1 || selectedProject === 3) && <BlankSpace />}
                                    </div>
                                    <div className={`px-10 xl:px-16 h-1/2  flex flex-col justify-center`}>
                                        <a href={projects[selectedProject].link} target="_blank" className='underline'>{projects[selectedProject].name}</a>
                                        <p className='mt-2'>{projects[selectedProject].description}</p>
                                    </div>
                                </div>
                            ) : (<></>)
                        }
                    </div>
                </div>
                <Transition appear show={isOpen} as={Fragment} >
                    <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto bg-white" onClose={closeModal} >
                        <div className="min-h-screen text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <div className='h-screen sm:p-10 w-screen '>
                                    <div className='text-left text-lg py-5 px-5' style={{ fontFamily: 'MagistralRegular' }} onClick={() => closeModal()}>
                                        <div className='shadow-md inline p-3'>
                                            Back
                                        </div>
                                    </div>
                                    {
                                        projects[selectedProject] ? (
                                            <div className='px-5' style={{ fontFamily: 'MagistralRegular' }}>
                                                <div className='text-3xl' style={{ fontFamily: 'Magistral' }}>{projects[selectedProject].name}</div>
                                                <div className='text-left mt-5'  >{projects[selectedProject].description}</div>
                                                <ul className='list-disc text-left px-5 mt-8'>
                                                    {
                                                        projects[selectedProject].listsLeft.map(list => (
                                                            <li>{list}</li>
                                                        ))
                                                    }
                                                </ul>
                                                <div className=' mt-10'>
                                                    <a href={projects[selectedProject].link} target='_blank' className='underline text-lg '>
                                                        {projects[selectedProject].link}
                                                    </a>
                                                </div>
                                            </div>
                                        ) : (<></>)
                                    }

                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    )
}

function BlankSpace() {
    return (
        <div className='w-1/2 h-52  transform scale-110'></div>
    )
}

const projectImages = [
    {
        component: <img className='w-40 h-40' src={DAXLs} alt="dax" />
    },
    {
        component: <img className='w-40 h-40' src={Krypto} alt="dax" />
    },
    {
        component: <img className='w-40 h-40' src={Mont} alt="dax" />
    },
    {
        component: <img className='w-40 h-40' src={ARDMs} alt="dax" />
    },
]


const projects = [
    {
        name: 'DAX',
        link: 'https://dax.mn/',
        description: 'DAX( Digital Assets Exchange) is the first Mongolian crypto and security token exchange operating since the December of 2020 with the investment of Ard Financial Group.',
        listsLeft: [
            'Front-End Code',
            'UI / UX Design'
        ],
    },
    {
        name: 'KryptoMN',
        link: '',
        description: 'KryptoMN is a Mongolian media focused on providing an all-in-one source of truth for cryptocurrencies and other blockchain-based innovations.',
        listsLeft: [
            'Front-End Code',
            'Back-End Code',
            'Architecture Setup & Maintenance',
            'UI / UX Design'
        ],
    },
    {
        name: 'ArdMoney',
        link: 'https://ardmoney.com/',
        description: 'Blockchain technology becomes more sophisticated, its use is becoming more advanced and closer to people’s daily needs.  As the first DAO project in Mongolia, ArdMoney brings decentralized financial benefits closer to the people.',
        listsLeft: [
            'Website Front-End Code',
            'Website UI / UX Design',
            'Smart Contract Code',
        ],
    },
    {
        name: 'MONT',
        link: 'https://stablecoin.mn/',
        description: 'The value of MONT is guaranteed and backed by Mongolian Tugrik. Every MONT is always 100% backed by our reserves. MONT will have regular audit reports to ensure the reserves are being maintained.',
        listsLeft: [
            'Website Front-End Code',
            'Website UI / UX Design',
            'Stable Coin Smart Contract Code',
        ],
    },
]
