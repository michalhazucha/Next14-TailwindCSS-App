import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from "../../public/hilink-logo.svg"
import { NAV_LINKS } from '@/constants'
import Button from '../Button'

const Navbar = () => {
  return (
    <nav className='flex flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <Image src={Logo} alt="logo" width={74} height={29} /> 
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS?.map((link) =><li key={link?.key} > <Link href={link?.href} className="regular-16 text-gray-50 flex cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link> </li>)}
         
      </ul>
      <div className='lg:flexCenter hidden'>
        <Button type='button' title="Login" icon="/user.svg" variant='btn_dark_green' />
      </div>
      <Image src="/menu.svg" width={32} height={32} alt='menuIcon' className='inline-block cursor-pointer lg:hidden'/>
    </nav>
  )
}

export default Navbar