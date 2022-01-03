import React from 'react'

const WeWork = () => {
    return (
        <div className='w-full pt-10 sm:py-10'>
            <div className='container mx-auto hidden xl:block'>
                <div className='flex justify-between w-full space-x-5'>
                    <span id='WeWork' class="relative w-128 h-72 flex-col inline-flex justify-center border-black rounded-2xl border-4">
                    <h1 className=' text-4xl w-3/12 mx-10 font-bold'>Smart Contract</h1>
                        <p className=' text-sm w-3/4 mx-10 py-5'>Ухаалаг гэрээг ERC-20, BEP-20, ERC-1557, SPL стандартын дагуу хөгжүүлж байна.</p>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-64 -mr-5">
                            <span class="absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span class="relative inline-flex h-10 w-10 bg-black"></span>
                        </span>
                    </span>
                    <span class="relative w-128 h-72 flex-col inline-flex justify-center mt-36 border-black rounded-2xl border-4">
                    <h1 className=' text-4xl w-3/12 mx-10 font-bold'>Blockchain architecture</h1>
                        <p className=' text-sm w-3/4 mx-10 py-5'>Бид харилцагчдынхаа хэрэглээнд тохирсон Dapp-н блокчэйн архитехтурыг гаргаж, хамгийн дэвшилтэт шийдлийг хүргэх болно.</p>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-64 -mr-5">
                            <span class="absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-10 w-10 bg-black"></span>
                        </span>
                    </span>
                    <span class="relative w-128 h-72 flex-col inline-flex justify-center border-black rounded-2xl border-4">
                    <h1 className=' text-4xl w-3/12 mx-10 font-bold'>Blockchain зөвлөгөө</h1>
                        <p className=' text-sm w-3/4 mx-10 py-5'>Бид харилцагчдынхаа бизнесийн онцлог, хэрэгцээг харгалзан үзэж, блокчэйн шийдлийн гарааны болон цаашдын төлөвлөгөөнд зөвлөж байна.</p>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-64 -mr-5">
                            <span class="absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span class="relative inline-flex h-10 w-10 bg-black"></span>
                        </span>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-64 -mr-5 origin-center transform rotate-45">
                            <span class="absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span class="relative inline-flex h-10 w-10 bg-black"></span>
                        </span>
                    </span>
                </div>
            </div>
            {/* mobile */}
            <div className='container mx-auto block xl:hidden'>
                <div className='flex flex-col justify-center items-center px-5'>
                    <span class="w-full h-40 flex-col flex justify-center rounded-2xl">
                    <h1 className='text-2xl text-left font-bold'>Smart Contract</h1>
                    <p className=' text-sm w-full mx-1'>Ухаалаг гэрээг ERC-20, BEP-20, ERC-1557, SPL стандартын дагуу хөгжүүлж байна.</p>
                    </span>
                    <span class="w-full h-28 flex-col flex rounded-2xl">
                    <h1 className='text-2xl w-9/12 font-bold'>Blockchain architecture</h1>
                    <p className=' text-sm w-full'>Бид харилцагчдынхаа хэрэглээнд тохирсон Dapp-н блокчэйн архитехтурыг гаргаж, хамгийн дэвшилтэт шийдлийг хүргэх болно.</p>    
                    </span>
                    <span class="w-full h-40 pt-5 flex-col flex justify-center rounded-2xl">
                    <h1 className='text-2xl text-left font-bold w-3/12'>Blockchain зөвлөгөө</h1>
                        <p className=' text-sm w-full mx-1'>Бид харилцагчдынхаа бизнесийн онцлог, хэрэгцээг харгалзан үзэж, блокчэйн шийдлийн гарааны болон цаашдын төлөвлөгөөнд зөвлөж байна.</p>
                        
                    </span>
                </div>
            </div>
        </div>
    )
}
export default WeWork
