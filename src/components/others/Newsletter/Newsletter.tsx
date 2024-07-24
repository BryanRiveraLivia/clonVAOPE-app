import GeneralContainer from '@/components/containers/GeneralContainer';
import GeneralRowContainer from '@/components/containers/GeneralRowContainer';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

interface Props {
    background?:string;
}

const Newsletter:FC<Props> = ({background = `/images/backgrounds/suscribete.jpg`}) => {
  return (
    <section>
        <div className="relative flex w-full items-center justify-center bg-slate-800 bg-cover bg-center py-20 md:py-40 h-screen">
            <div className="absolute inset-0 z-0">
            <Image loading="lazy" width="1200" height="508" src={background} alt="Suscríbete" className="h-full w-full object-cover object-center opacity-30" />
            <div className='absolute left-0 top-0 w-full h-screen flex items-center'>
                <GeneralContainer className='!max-w-[576px]'>
                    <GeneralRowContainer>
                        <form action="" className='flex flex-col gap-4'>
                            <h3 className='d-block text-center text-white text-xl font-bold'>¡Suscríbete a próximos eventos!</h3>
                            <span className='d-block text-center text-white'>Ingresa tu correo electrónico y WhastApp para recibir nuevas ofertas y cupones directamente en tu buzón de entrada.</span>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 '>
                                    <input type="text" placeholder='+51' className='w-[64px] p-4 h-[52px]  rounded-sm shadow-sm placeholder:text-gray-300 placeholder:font-medium placeholder:xl:text-lg placeholder:lg:text-lg' />
                                    <input type="text" placeholder='Tu Whatsapp' className='w-[100%] p-4 flex-1 h-[52px]  rounded-sm shadow-sm placeholder:text-gray-300 placeholder:font-medium placeholder:xl:text-lg placeholder:lg:text-lg' />
                                </div>
                                <div>
                                    <input type="text" placeholder='tu@correo.com' className='w-[100%] p-4 flex-1 h-[52px]  rounded-sm shadow-sm placeholder:text-gray-300 placeholder:font-medium placeholder:xl:text-lg placeholder:lg:text-lg' />
                                </div>
                            </div>
                            <label className='text-white'>
                                <input type="checkbox" id="cbox1" value="first_checkbox" /> Acepto el uso de mi información para fines publicitarios de acuerdo a la <Link href={`/`} className='underline'>Política de Privacidad.</Link>
                                </label>
                                <button type="submit" className="mx-auto xl:min-w-[140px] lg:min-w-[140px] md:min-w-[140px] sm:min-w-full xs:min-w-full appearance-none rounded border-none bg-cornflower-300 px-4 py-4 text-center font-display text-sm  uppercase leading-4 text-white hover:bg-cornflower-200 focus:outline-none md:w-auto md:flex-shrink-0 bg-red-600 hover:bg-red-400 transform transition-all font-bold shadow-2xl">
                                Suscríbete
                            </button>
                        </form>
                    </GeneralRowContainer>
                </GeneralContainer>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter