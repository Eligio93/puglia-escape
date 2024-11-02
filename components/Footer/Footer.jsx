import projectPugliaLogo from '@/public/pugliaProjectLogo.webp'
import style from '@/styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
        <footer className={style.footer}>

            <div className={style.footerInfoContainer}>
                <div className={style.footerLogoContainer}>
                    <Image
                        src={projectPugliaLogo}
                        alt="logo puglia project"
                    />
                </div>
                <div className={style.footerInfo}>
                    <ul>
                        <li>Blog</li>
                        <li><Link href='/blog?category=Eat+And+Drink'>Eat And Drink</Link></li>
                        <li><Link href='/blog?category=Experience'>Experience</Link></li>
                        <li><Link href='/blog?category=Events'>Events</Link></li>
                        <li><Link href='/blog?category=Discover'>Discover</Link></li>
                    </ul>
                    <ul>
                        <li>From Puglia</li>
                        <li><Link href='/about'>About</Link></li>
                        <li><a href="mailto:hello@frompuglia.com">hello@frompuglia.com</a></li>
                    </ul>

                </div>
            </div>

            <div className={style.footerCopyright}>

                <p>Copyright © 2023 From Puglia. All rights reserved. Developed by <a href='https://ec-webdev.netlify.app/' target='_blank'>Eligio Cristantielli</a></p>
            </div>

        </footer>

    )
}