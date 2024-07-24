import GeneralContainer from '@/components/containers/GeneralContainer'
import GeneralRowContainer from '@/components/containers/GeneralRowContainer'
import Newsletter from '@/components/others/Newsletter/Newsletter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
    <Newsletter></Newsletter>
    <footer className='bg-black py-8 '>
       <GeneralContainer>
        <GeneralRowContainer className='flex flex-col xl:gap-6 lg:gap-6 md:gap-8 sm:gap-8 xs:gap-8'>
        <div>
            <ul className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col items-center justify-center xl:gap-8 lg:gap-8 md:gap-8 sm:gap-5 xs:gap-5 flex-wrap'>
                <li>
                    <Link href={`/`} className='flex items-center p-3 transition-all uppercase text-[#6e7392] font-bold hover:bg-gray-800 rounded-md hover:text-white h-[40px]'>¿Tienes un evento?</Link>
                </li>
                <li>
                    <Link href={`/`} className='flex items-center p-3 transition-all uppercase text-[#6e7392] font-bold hover:bg-gray-800 rounded-md hover:text-white h-[40px]'>centro de ayuda</Link>
                </li>
                <li>
                    <Link href={`/`} className='flex items-center p-3 transition-all uppercase text-[#6e7392] font-bold hover:bg-gray-800 rounded-md hover:text-white h-[40px]'>blog</Link>
                </li>
                <li>
                    <Link href={`/`} className='flex items-center p-3 transition-all uppercase text-[#6e7392] font-bold hover:bg-gray-800 rounded-md hover:text-white h-[40px]'>contáctanos</Link>
                </li>
            </ul>
        </div>
        <hr className='border-b-[1px] border-t-0 border-gray-50 opacity-20 xl:hidden- lg:hidden md:hidden' />
        <div className='flex flex-col gap-3'>
        <Image
                src={`/images/logos/logo.svg`}
                alt="logo" 
                className='mx-auto block'
                width={132}
                height={20}
              ></Image>
              <span className='block mx-auto text-center text-[#6e7392]'>© VAOpe.com - Todos los derechos reservados</span>
        </div>
        <hr className='border-b-[1px] border-t-0 border-gray-50 opacity-20 xl:hidden- lg:hidden md:hidden' />
        <div className='flex flex-row  self-center items-center gap-4 flex-wrap'>
            <Link href={`/`}><BsYoutube className='text-[#6e7392] size-7 transition-all hover:opacity-90' />
            </Link>
            <Link href={`/`}><RiInstagramFill className='text-[#6e7392] size-7 transition-all hover:opacity-90' />
            </Link>
            <Link href={`/`}><FaFacebookF 
            className='text-[#6e7392] size-7 transition-all hover:opacity-90' />
            </Link>
            <Link href={`/`}><BsTwitterX
            className='text-[#6e7392] size-7 transition-all hover:opacity-90' />
            </Link>
        </div>
        <hr className='border-b-[1px] border-t-0 border-gray-50 opacity-20 xl:hidden- lg:hidden md:hidden' />
        <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-6 justify-center items-center self-center flex-wrap'>
        <Image
                src={`/images/logos/book-claim-icon.png`}
                alt="logo" 
                className='mx-auto block'
                width={80}
                height={33}
              ></Image>
              <Link href={`/`} className='text-[#6e7392] transition-all hover:opacity-90'>Términos y condiciones</Link>
              <div className='xs:hidden'>
                <span className='border-r-[1px] border-gray-500 '></span>
              </div>
              <Link href={`/`} className='text-[#6e7392] transition-all hover:opacity-90'>Políticas de privacidad</Link>
        </div>
        </GeneralRowContainer>
       </GeneralContainer>
    </footer>
    </>
  )
}

export default Footer