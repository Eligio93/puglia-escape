import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/header.module.css'
import SearchBar from "./Searchbar"
import AuthSection from "./AuthSection"
import pugliaProjectLogo from '@/public/pugliaProjectLogo.webp'
import MobileMenu from "./MobileMenu"

export default function Header() {

    return (
        <header className={styles.header}>
            <MobileMenu />


            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/blog'>Blog</Link></li>
                    {/* <Link href='/guides'><li>Guides</li></Link> */}
                    <li> <Link href='/blog?category=Events'>Events</Link></li>
                    <li><Link href='/about'>About</Link></li>
                </ul>
            </nav>
            <Link href='/' className={styles.pugliaProjectLogo}>
                <Image
                    src={pugliaProjectLogo}
                    alt="logo puglia project"
                />
            </Link>

            <SearchBar />
            {/* <AuthSection /> */}



        </header>
    )
}