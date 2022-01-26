import React from 'react'
import { Disclosure } from '@headlessui/react'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'



const ProjectAccordion = () => {
    return(
        <div className='container mx-auto block xl:hidden'>
            <div className='pt-10 px-5 container flex flex-col w-full'>
                <div className='text-4xl mb-3' style={{fontFamily: 'Magistral'}}>
                    Who we are ?
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
            </div>
        </div>
    )
}


let whoWeAreLists = [
    {
        title: 'Our Mission',
        description: 'Contribute to the globalization of the world by utilizing the full potential of blockchain and information technology to build a secure, eco-friendly, innovative systems.'
    },
    {
        title: 'Our Vision',
        description: 'Becoming a leading blockchain development and consulting firm by providing innovative solutions. Building a Better World from Blockchain'
    },
    {
        title: 'Our Values',
        description: 'Specialized and skilled team, good business etiquette, and quality products.'
    },
    {
        title: 'Our Team',
        description: 'In the 20 months of our operations, we have built a team with growth and pioneering mindset specializing in blockchain and information technology.'
    },
]

export default ProjectAccordion;