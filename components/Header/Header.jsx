import Image from "next/image"
import Link from "next/link"
import logoPuglia from '@/public/logoPuglia.svg'
import styles from '@/styles/header.module.css'
import facebookIcon from '@/public/facebookIcon.svg'
import InstagramIcon from '@/public/instagramIcon.svg'
import SearchBar from "./Searchbar"

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

                <SearchBar/>


                <div className={styles.socialSection}>
                    <Link href={'facebook.com'}>
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
                    </Link>
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
                <div className={styles.authSection}>
                    <Link href='/login' className={styles.logInLink}>Login</Link>
                    <Link href='/register' className={styles.registerLink}>Register</Link>
                </div>
            </div>

        </header>
    )
}