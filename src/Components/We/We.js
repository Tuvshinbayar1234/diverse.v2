import React from 'react'

const We = () => {
    return (
        <div className='w-full py-20 hidden lg:block'>
            <div className='container mx-auto'>
                <div className='flex'>
                    <div className='w-2/4 flex flex-col justify-center items-center'>
                        <div className='text-center'>
                            <h1 className=' text-larger' id='We' style={{fontFamily: 'Magistral'}}>Бид ?</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center pt-10'>
                            <h1 className=' pt-10 text-2xl font-bold w-9/12'>Эрхэм зорилго</h1>
                            <p className='origin-center transform rotate-1 py-5 w-9/12 font-extralight'>Блокчэйн технологийн шийдлийг хамгийн өндөр түвшинд хөгжүүлж, харилцагчиддаа үнэ цэнийг бүтээхэд хамтран ажиллахыг зорьдог.</p>
                        </div>
                    </div>
                    <div className=' w-2/4'>
                        <div className=''>
                            <h1 className='font-bold text-2xl'>Алсын хараа</h1>
                            <p className=' origin-bottom-left transform -rotate-1 py-5 font-extralight'>Монгол хөгжүүлэгчдийг блокчэйн хөгжүүлэлтэд бэлтгэж, блокчэйн шийдлээр олон улсын тавцанд өрсөлдөх.</p>
                        </div>
                        <div className=''>
                            <h1 className='origin-bottom-left transform -rotate-1 py-5 font-bold text-2xl'>Бидний үнэ цэн</h1>
                            <p className='font-extralight'>Өөртөө итгэлтэй, чадварлаг, эрч хүчтэй залуусыг шалгаруулан бэлтгэж, харилцагчдынхаа бүтээгдэхүүнийг хамгийн өндөр түвшинд хүргээд зогсохгүй цаашдын үйл ажиллагааг дэмжин ажилладаг нь бидний үнэ цэн болно.</p>
                        </div>
                        <div className='origin-center transform rotate-1 py-10'>
                            <h1 className='font-bold text-2xl'>Бид хэн бэ</h1>
                            <p className='font-extralight pt-5'>““Дайверс Солюшнс ХХК” компани нь чадварлаг, эрч хүчтэй 12 хүний бүрэлдэхүүнтэйгээр таны компанийн дижитал шилжилтийн гүүрийг үүсгэхээр ажиллаж байна.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default We;
