'use client'

import { usePathname } from 'next/navigation'
import style from '@/styles/header.module.css'
import { useState, useEffect } from "react"
import Image from 'next/image'
import hamburgerIcon from '@/public/hamburgerIcon.svg'
import Link from 'next/link'
import AuthSection from './AuthSection'



export default function MobileMenu() {
    const [openMenu, setOpenMenu] = useState(false)
    const pathName = usePathname()


    useEffect(() => {
        setOpenMenu(false)
    },[pathName])


    useEffect(() => {
        const handleMouseDown = (event) => {
            if (!event.target.closest(`.${style.mobileMenuNav}`) && !event.target.closest(`.${style.mobileMenu}`)) {
                setOpenMenu(false);
            }
        };
        document.addEventListener('mousedown', handleMouseDown);
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [openMenu]);


    
    return (
        <div className={style.mobileMenu}>
            <Image
                onClick={() => setOpenMenu(!openMenu)}
                src={hamburgerIcon}
                alt='Mobile menu icon'
            />
            {openMenu ? <nav className={style.mobileMenuNav}>
                <ul className={style.mobileMenuList}>

                    <Link href='/'><li>Home</li></Link>
                    <Link href='/blog'><li>Blog</li></Link>
                    <Link href='/guides'><li>Guides</li></Link>
                    <Link href='/blog?category=Events'><li>Events</li></Link>
                    <Link href='/about'><li>About</li></Link>
                    <AuthSection />
                </ul>
            </nav> : null}

        </div>
    )
}