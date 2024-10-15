import Image from "next/image"
import Link from "next/link"
import logoPuglia from '@/public/logoPuglia.svg'
import styles from '@/styles/header.module.css'
import SearchBar from "./Searchbar"
import AuthSection from "./AuthSection"
import pugliaProjectLogo from '@/public/pugliaProjectLogo.webp'
import MobileMenu from "./MobileMenu"

export default function Header() {

    return (
        <header className={styles.header}>
            <MobileMenu />

            <Link href='/' className={styles.pugliaProjectLogo}>
                <Image
                    src={pugliaProjectLogo}
                    alt="logo puglia project"
                />
            </Link>

            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/blog'><li>Blog</li></Link>
                    <Link href='/guides'><li>Guides</li></Link>
                    <Link href='/blog?category=Events'><li>Events</li></Link>
                    <Link href='/about'><li>About</li></Link>
                </ul>
            </nav>

            <div className={styles.pugliaLogo}>
                <Image
                    src={logoPuglia}
                    alt="logo puglia region"
                />
            </div>


            <SearchBar />


            <AuthSection />


        </header>
    )
}