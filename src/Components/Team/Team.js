import React from "react";
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

const Team = () => {



    return (
        <div className='w-full container mx-auto px-5'>
            <div className='hidden lg:block'>
                <h1 id="Team" className='text-5xl text-center' style={{fontFamily: 'Magistral'}}>Members</h1>
            </div>
            <div className="hidden lg:block">
                <div className="flex flex-wrap justify-center py-5 pt-10">
                    {team.map((i , index) => {
                        return (
                            <div key={index} className='w-1/4  flex justify-center py-5'>
                                {/* <div  className="flex justify-center items-center w-48 h-64 rounded-3xl " style={{ backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}> */}
                                <div  className="flex justify-center items-center w-52 h-64 " >
                                    <div className="">
                                        <img alt='IMAGE'  src={i.img} />
                                        <div className='pl-7 text-lg'>
                                            <p className="pt-1  font-bold" style={{ fontFamily: 'MagistralRegular' }}>{i.name}</p>
                                            <p className="text-sm " style={{ fontFamily: 'MagistralRegular' }}>{i.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
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

export default Team;
