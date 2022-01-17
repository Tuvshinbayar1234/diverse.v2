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


    return (
        <div className='w-full container mx-auto px-5'>
            <div className='hidden lg:block'>
                <h1 id="Team" className='text-4xl' style={{fontFamily: 'Magistral'}}>Манай хамт олон</h1>
            </div>
            <div className="hidden lg:block">
                <div className="flex flex-wrap py-5 pt-10">
                    {Team.map((i , index) => {
                        return (
                            <div key={index} className='w-1/4  xl:w-1/6 flex justify-center py-5'>
                                <div  className="flex justify-center items-center w-48 h-64 rounded-3xl " style={{ backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                                    <div className="">
                                        <img alt='IMAGE' width={'185px'} height={'200px'} src={i.img} />
                                        <div className='px-7'>
                                            <h1 className="pt-1 text-sm font-bold" style={{ fontFamily: 'MagistralRegular' }}>{i.name}</h1>
                                            <p className="lg:text-xs sm:text-xs pb-1" style={{ fontFamily: 'MagistralRegular' }}>{i.title}</p>
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

export default Team;
