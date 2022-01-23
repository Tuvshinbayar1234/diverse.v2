import React from 'react'
import { Disclosure } from '@headlessui/react'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'



const ProjectAccordion = () => {
    return(
        <div className='container mx-auto block xl:hidden'>
            <div className='pt-10 container flex flex-col w-full'>
                <div className='text-4xl mb-3' style={{fontFamily: 'Magistral'}}>
                    Бид ?
                </div>
                {
                    whoWeAreLists.map((list, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="py-5">
                                        <div className='flex items-center justify-between'>
                                            <p className='text-xl' style={{ fontFamily: 'Magistral' }}>{list.title}</p>
                                            {
                                                open ? (
                                                    <FaAngleUp />
                                                ) : (
                                                    <FaAngleDown />
                                                )
                                            }
                                        </div>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-gray-500 w-11/12" style={{ fontFamily: 'MagistralRegular' }}>
                                            {list.description}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))
                }
                {/* <Disclosure>
                    <Disclosure.Button className="py-5">
                        <div className='flex items-center justify-between'>
                            <p className='text-xl' style={{ fontFamily: 'Magistral' }}>Алсын хараа</p> <FaAngleDown />
                        </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 w-11/12" style={{ fontFamily: 'MagistralRegular' }}>
                        Монгол хөгжүүлэгчдийг блокчэйн хөгжүүлэлтэд бэлтгэж, блокчэйн шийдлээр олон улсын тавцанд өрсөлдөх.
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="py-5">
                        <div className='flex items-center justify-between'>
                            <p className='text-xl' style={{ fontFamily: 'Magistral' }}>Бидний үнэ цэн</p> <FaAngleDown />
                        </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 w-11/12" style={{ fontFamily: 'MagistralRegular' }}>
                        Өөртөө итгэлтэй, чадварлаг, эрч хүчтэй залуусыг шалгаруулан бэлтгэж, харилцагчдынхаа бүтээгдэхүүнийг хамгийн өндөр түвшинд хүргээд зогсохгүй цаашдын үйл ажиллагааг дэмжин ажилладаг нь бидний үнэ цэн болно.
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="py-5">
                        <div className='flex items-center justify-between' style={{ fontFamily: 'MagistralRegular' }}>
                            <p className='text-xl' style={{ fontFamily: 'Magistral' }}>Бид хэн бэ</p> <FaAngleDown />
                        </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 w-11/12" style={{ fontFamily: 'MagistralRegular' }}>
                        “Дайверс Солюшнс ХХК” компани нь чадварлаг, эрч хүчтэй 12 хүний бүрэлдэхүүнтэйгээр таны компанийн дижитал шилжилтийн гүүрийг үүсгэхээр ажиллаж байна.
                    </Disclosure.Panel>
                </Disclosure> */}
            </div>
        </div>
    )
}


let whoWeAreLists = [
    {
        title: 'Эрхэм зорилго',
        description: 'Блокчэйн технологийн шийдлийг хамгийн өндөр түвшинд хөгжүүлж, харилцагчиддаа үнэ цэнийг бүтээхэд хамтран ажиллахыг зорьдог.'
    },
    {
        title: 'Алсын хараа',
        description: 'Монгол хөгжүүлэгчдийг блокчэйн хөгжүүлэлтэд бэлтгэж, блокчэйн шийдлээр олон улсын тавцанд өрсөлдөх.'
    },
    {
        title: 'Бидний үнэ цэн',
        description: 'Өөртөө итгэлтэй, чадварлаг, эрч хүчтэй залуусыг шалгаруулан бэлтгэж, харилцагчдынхаа бүтээгдэхүүнийг хамгийн өндөр түвшинд хүргээд зогсохгүй цаашдын үйл ажиллагааг дэмжин ажилладаг нь бидний үнэ цэн болно.'
    },
    {
        title: 'Бид хэн бэ',
        description: '“Дайверс Солюшнс ХХК” компани нь чадварлаг, эрч хүчтэй 12 хүний бүрэлдэхүүнтэйгээр таны компанийн дижитал шилжилтийн гүүрийг үүсгэхээр ажиллаж байна.'
    },
]

export default ProjectAccordion;