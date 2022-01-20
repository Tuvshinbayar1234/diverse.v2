import React ,{useState} from 'react'
import Project1 from '../../assets/project.png'
import White from '../../assets/whitelogo.png'
import Mont from '../../assets/MONT.png'
import Monnom from '../../assets/Monnom.png'
import ARDMs from '../../assets/ArdMoney.png'
import DAXL from '../../assets/dax-logo-light.png'
import DAXLs from '../../assets/dax-logo.png'
import {FaAngleRight , FaAngleLeft, FaWindowClose} from 'react-icons/fa'


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(-1);

    function showProjectDetail(index) {
        if (index === selectedProject) {
            setSelectedProject(-1);
        } else {
            setSelectedProject(index);
        }
    }

    return (
        <div className='container mx-auto py-40'>
            <div className='flex items-center'>
                <div style={{ fontFamily: 'MagistralRegular' }} className='flex pr-24 flex-col w-1/2'>
                    <h2 className='text-5xl font-bold mb-10' style={{ fontFamily: 'Magistral' }}>Төслүүд</h2>
                    <div>
                        <h3 className='font-bold text-2xl'>Хөгжүүлэлт</h3>
                        <p className='mt-2'>Бид хэрэглэгчдийнхээ онцлогийг шинжлэн, хэрэгцээнд зориулсан дизайн, брэндинг, вэбсайт, вэб болон утасны апп, блокчэйн дээр суурилсан токен, dapp-н ухаалаг гэрээг хөгжүүлж байна. Бид Монголын анхны төгрөгтэй 1:1 үнэ цэнтэй стэйблкойн болон Монголын анхны төвлөрсөн бус санхүүгийн систем болох ArdMoney төслийг гардан хэрэгжүүлж байгаа болно.</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className='font-bold text-2xl' >Зөвлөх</h3>
                        <p className='mt-2'>Блокчэйн болон бусад дэвшилтэт технологийн шийдлийг таны бизнест тохируулан боловсруулж, зөвлөж өгөх болно. Манай харилцагчид мөн бидний улирал бүр гаргах технологийн тайлангуудыг хамгийн түрүүнд хүлээн авдаг.</p>
                    </div>
                </div>
                <div className='w-1/2  relative '>
                    <div className='w-full flex flex-wrap'>
                        {
                            projectImages.map((img, index) => (
                                <div key={index} className='w-1/3 flex justify-center'>
                                    <div onClick={() => showProjectDetail(index)}
                                        className={` ${selectedProject === index ? 'rounded-xl scale-110 border border-black z-30' : 'hover:scale-110 hover:shadow-none shadow-md'} bg-white w-full  h-52 flex  transition transform  cursor-pointer justify-center items-center  `}>
                                        {img.component}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`absolute transition flex  text-white top-0 ${selectedProject == -1 ? '-z-10 opacity-0' : 'z-20 opacity-100'}  w-full h-full bg-black rounded-xl`}>
                        {
                            selectedProject !== -1 ? (
                                <div className={`w-full flex  ${selectedProject >= 3 ? 'flex-col-reverse' : 'flex-col'}`}>
                                    <div className='flex'>
                                        {(selectedProject === 0 || selectedProject === 3) && <BlankSpace />}
                                        <div className='w-1/3 pt-10 pl-14'>
                                            <ul className='list-disc'>
                                            {
                                                projects[selectedProject].listsLeft.map(list => (
                                                    <li>{list}</li>
                                                ))
                                            }
                                            </ul>
                                        </div>
                                        {(selectedProject === 1 || selectedProject === 4) && <BlankSpace />}
                                        <div className='w-1/3 pt-10 pl-14'>
                                            <ul className='list-disc'>
                                            {
                                                projects[selectedProject].listsRight.map(list => (
                                                    <li>{list}</li>
                                                ))
                                            }
                                            </ul>
                                        </div>
                                        {(selectedProject === 2 || selectedProject === 5) && <BlankSpace />}
                                    </div>
                                    <div className={`px-10 h-1/2  flex flex-col justify-center`}>
                                        <h3>{projects[selectedProject].name}</h3>
                                        <p className='mt-2'>{projects[selectedProject].description}</p>
                                    </div>
                                </div>
                            ) : (<></>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function BlankSpace() {
    return (
        <div className='w-1/3 h-52  transform scale-110'></div>
    )
}

const projectImages = [
    {
        component: <img className='w-40 h-40' src={DAXLs} alt="dax" />
    },
    {
        component: <img className='w-40 h-40' src={Monnom} alt="dax" />
    },
    {
        component: <img className='w-40 h-40' src={Mont} alt="dax" />
    },
    {
        component: <img className='w-40 h-40' src={Monnom} alt="dax" />
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
        description: 'Монголын том 4 биржийн нэг. Хамгийн анх Ард Санхүүгийн Нэгдэлийн крипто арилжааны биржийг',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    {
        name: 'MONNOM',
        link: 'https://monnom.mn/',
        description: '“Monnom” аппликейшн нь цахим, аудио, хэвлэмэл номыг онлайнаар худалдаалдаг номын төвлөрсөн платформ юм. Бид 2021 оноос үйл ажиллагаагаа явуулж эхэлсэн ба Монгол хэл дээрх бүх төрлийн номыг цахим, аудио, хэвлэмэл гэсэн гурван хэлбэрээр хэрэглэгчдэд хүргэдэг.',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    {
        name: 'MONT',
        link: 'https://stablecoin.mn/',
        description: 'Монголын анхны Стэйблкойн. Монгол төгрөгтэй үнэ цэнээ аргамжсан энэхүү койн нь крипто арилжаанд төгрөгийг төлөөлөх хамгийн зөв хэрэгсэл болно. Энэхүү койны ухаалаг гэрээг Diverse Solutions хөгжүүлж, хэрэглээнд нэвтрүүлсэн болно.',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    {
        name: 'MONNOM',
        link: 'https://monnom.mn/',
        description: '“Monnom” аппликейшн нь цахим, аудио, хэвлэмэл номыг онлайнаар худалдаалдаг номын төвлөрсөн платформ юм. Бид 2021 оноос үйл ажиллагаагаа явуулж эхэлсэн ба Монгол хэл дээрх бүх төрлийн номыг цахим, аудио, хэвлэмэл гэсэн гурван хэлбэрээр хэрэглэгчдэд хүргэдэг.',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    {
        name: 'MONT',
        link: 'https://stablecoin.mn/',
        description: 'Монголын анхны Стэйблкойн. Монгол төгрөгтэй үнэ цэнээ аргамжсан энэхүү койн нь крипто арилжаанд төгрөгийг төлөөлөх хамгийн зөв хэрэгсэл болно. Энэхүү койны ухаалаг гэрээг Diverse Solutions хөгжүүлж, хэрэглээнд нэвтрүүлсэн болно.',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    {
        name: 'ARDMONEY',
        link: 'https://ardmoney.com/',
        description: 'Монголын анхны DAO төсөл. Төвлөрсөн бус санхүүг Монголын болон Төв Азийн зах зээлд авчирч, крипто хэрэглэгчдийн хэрэглээнд нэвтрэх зорилготой.',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    // {
    //     name: 'MONNOM',
    //     link: 'https://monnom.mn/',
    //     description: '“Monnom” аппликейшн нь цахим, аудио, хэвлэмэл номыг онлайнаар худалдаалдаг номын төвлөрсөн платформ юм. Бид 2021 оноос үйл ажиллагаагаа явуулж эхэлсэн ба Монгол хэл дээрх бүх төрлийн номыг цахим, аудио, хэвлэмэл гэсэн гурван хэлбэрээр хэрэглэгчдэд хүргэдэг.',
    //     development: 'Development',
    //     development1: 'Code',
    //     development2: 'FrontEnd',
    //     development3: 'BackEnd',
    //     development4: 'Designs',
    //     development5: 'Designs',
    //     development6: 'Designs',
    // },
    // {
    //     name: 'MONT',
    //     link: 'https://www.stablecoin.mn/',
    //     description: 'Монголын анхны Стэйблкойн. Монгол төгрөгтэй үнэ цэнээ аргамжсан энэхүү койн нь крипто арилжаанд төгрөгийг төлөөлөх хамгийн зөв хэрэгсэл болно. Энэхүү койны ухаалаг гэрээг Diverse Solutions хөгжүүлж, хэрэглээнд нэвтрүүлсэн болно.',
    //     development: 'BackEnd',
    //     development1: 'Website front-end',
    //     development2: 'Token smart contracts',
    //     development3: 'Website front-end',
    //     development4: 'Design',
    //     development5: 'Branding',
    //     development6: 'Ecosystem consulting',
    // },
    // {
    //     name: 'MONNOM',
    //     link: 'https://monnom.mn/',
    //     description: '“Monnom” аппликейшн нь цахим, аудио, хэвлэмэл номыг онлайнаар худалдаалдаг номын төвлөрсөн платформ юм. Бид 2021 оноос үйл ажиллагаагаа явуулж эхэлсэн ба Монгол хэл дээрх бүх төрлийн номыг цахим, аудио, хэвлэмэл гэсэн гурван хэлбэрээр хэрэглэгчдэд хүргэдэг.',
    //     development: 'Development',
    //     development1: 'Code',
    //     development2: 'FrontEnd',
    //     development3: 'BackEnd',
    //     development4: 'Designs',
    //     development5: 'Designs',
    //     development6: 'Designs',
    // },
    // {
    //     name: 'MONT',
    //     link: 'https://www.stablecoin.mn/',
    //     description: 'Монголын анхны Стэйблкойн. Монгол төгрөгтэй үнэ цэнээ аргамжсан энэхүү койн нь крипто арилжаанд төгрөгийг төлөөлөх хамгийн зөв хэрэгсэл болно. Энэхүү койны ухаалаг гэрээг Diverse Solutions хөгжүүлж, хэрэглээнд нэвтрүүлсэн болно.',
    //     development: 'BackEnd',
    //     development1: 'Website front-end',
    //     development2: 'Token smart contracts',
    //     development3: 'Website front-end',
    //     development4: 'Design',
    //     development5: 'Branding',
    //     development6: 'Ecosystem consulting',
    // },
    // {
    //     name: 'ARDMONEY',
    //     link: 'https://www.ardmoney.com/',
    //     description: 'Монголын анхны DAO төсөл. Төвлөрсөн бус санхүүг Монголын болон Төв Азийн зах зээлд авчирч, крипто хэрэглэгчдийн хэрэглээнд нэвтрэх зорилготой.',
    //     development: 'Branding',
    //     development1: 'Ecosystem',
    //     development2: 'Website front-end',
    //     development3: 'Website back-end',
    //     development4: 'Designs',
    //     development5: 'Token smart contracts',
    //     development6: 'DAP smart contracts ',
    // },
]
