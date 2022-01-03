import React from "react";
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
        }
    ]

    const Team2 = [
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
        }
    ]

    return (
        <div className='w-full container mx-auto px-5'>
            <div className='hidden lg:block'>
                <h1 id="Team" className='text-4xl' style={{fontFamily: 'Magistral'}}>Манай хамт олон</h1>
            </div>
            <div className="hidden lg:block">
                <div className="flex items-center justify-between space-x-4 py-5">
                    {Team.map((i , x) => {
                        return(
                        <div key={x} className="flex justify-center items-center w-48 h-64 rounded-3xl " style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                            <div className="">
                                <img alt='IMAGE' width={'140px'} height={'188px'} src={i.img} />
                                <h1 className="pt-3 text-sm font-bold">{i.name}</h1>
                                <p className="lg:text-xs sm:text-xs pb-3">{i.title}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="flex items-center justify-between space-x-4 py-5">
                    {Team2.map((i , x) => {
                        return(
                        <div key={x} className="flex justify-center items-center w-48 h-64 rounded-3xl " style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                            <div className="">
                                <img alt='IMAGE' width={'140px'} height={'188px'} src={i.img} />
                                <h1 className="pt-3 text-sm font-bold">{i.name}</h1>
                                <p className="lg:text-xs sm:text-xs pb-3">{i.title}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="flex items-center justify-between space-x-4 py-5">
                    <div className="flex justify-center items-center w-48 h-64 rounded-3xl " style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className="">
                            <img alt='IMAGE' width={'140px'} height={'188px'} src={zaya} />
                            <h1 className="pt-3 text-sm font-bold">Ж. Амарзаяа</h1>
                            <p className="lg:text-xs sm:text-xs pb-3">Secretary</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-48 h-64 rounded-3xl " style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className="">
                            <img alt='IMAGE' width={'140px'} height={'188px'} src={amaraa} />
                            <h1 className="pt-3 text-sm font-bold">А. Амартүвшин</h1>
                            <p className="lg:text-xs sm:text-xs pb-3">Blockchain Consultant</p>
                        </div>
                    </div>
                    <div className="flex opacity-0 justify-center items-center w-48 h-64 rounded-3xl " style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className="">
                            <img alt='IMAGE' width={'140px'} height={'188px'} src={zaya} />
                            <h1 className="pt-3 text-sm font-bold">Ж. Амарзаяа</h1>
                            <p className="lg:text-xs sm:text-xs pb-3">Secretary</p>
                        </div>
                    </div>
                    <div className="flex opacity-0 justify-center items-center w-48 h-64 rounded-3xl " style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className="">
                            <img alt='IMAGE' width={'140px'} height={'188px'} src={zaya} />
                            <h1 className="pt-3 text-sm font-bold">Ж. Амарзаяа</h1>
                            <p className="lg:text-xs sm:text-xs pb-3">Secretary</p>
                        </div>
                    </div>
                    <div className="flex opacity-0 justify-center items-center w-48 h-64 rounded-3xl " style={{backgroundColor: '#FBFBFB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className="">
                            <img alt='IMAGE' width={'140px'} height={'188px'} src={zaya} />
                            <h1 className="pt-3 text-sm font-bold">Ж. Амарзаяа</h1>
                            <p className="lg:text-xs sm:text-xs pb-3">Secretary</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;
