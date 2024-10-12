import Image from "next/image"
import Link from "next/link"
import logoPuglia from '@/public/logoPuglia.svg'
import styles from '@/styles/header.module.css'
import facebookIcon from '@/public/facebookIcon.svg'
import InstagramIcon from '@/public/instagramIcon.svg'
import SearchBar from "./Searchbar"
import AuthSection from "./AuthSection"
import pugliaProjectLogo from '@/public/pugliaProjectLogo.webp'

export default function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <Link href='/' className={styles.pugliaProjectLogo}>
                        <li>
                            <Image
                                src={pugliaProjectLogo}
                                alt="logo puglia project"
                            />
                        </li>

                    </Link>

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
                    height={100}
                    width={100}
                    style={{
                        width: '60px',
                        height: 'auto'
                    }}

                />
            </div>
            <div className={styles.socialBar}>

                <SearchBar />


                <div className={styles.socialSection}>
                    <a target='_blank' href={'https://facebook.com'}>
                        <Image
                            src={facebookIcon}
                            alt='facebook icon'
                            height={100}
                            width={100}
                            style={{
                                width: '30px',
                                height: 'auto'
                            }}
                        />
                    </a>
                    <a target='_blank' href={'instagram.com'}>
                        <Image
                            src={InstagramIcon}
                            alt='instagram icon'
                            height={100}
                            width={100}
                            style={{
                                width: '30px',
                                height: 'auto'
                            }}
                        />
                    </a>
                </div>
                <AuthSection />
            </div>

        </header>
    )
}