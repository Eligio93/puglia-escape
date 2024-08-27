import Image from "next/image"
import Link from "next/link"
import logoPuglia from '@/public/logoPuglia.svg'
import styles from '@/styles/header.module.css'
import facebookIcon from '@/public/facebookIcon.svg'
import InstagramIcon from '@/public/instagramIcon.svg'
import SearchBar from "./Searchbar"
import AuthSection from "./AuthSection"

export default function Header() {

    return (
        <header className={styles.header}>
            <nav>
                <Link href='/'>Logo Sito</Link>
                <Link href='/'>Home</Link>
                <Link href='/posts'>Blog</Link>
                <Link href='/guides'>Guides</Link>
                <Link href='/Events'>Events</Link>
                <Link href='/about'>About</Link>
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
                    <Link href={'instagram.com'}>
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
                    </Link>
                </div>
                <AuthSection />
            </div>

        </header>
    )
}