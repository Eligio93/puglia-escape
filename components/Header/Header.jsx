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
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/blog'><li>Blog</li></Link>
                    <Link href='/guides'><li>Guides</li></Link>
                    <Link href='/blog?category=Events'><li>Events</li></Link>
                    <Link href='/about'><li>About</li></Link>
                </ul>
            </nav>
            <Link href='/' className={styles.pugliaProjectLogo}>
                <Image
                    src={pugliaProjectLogo}
                    alt="logo puglia project"
                />
            </Link>

            <SearchBar />
            <AuthSection />



        </header>
    )
}