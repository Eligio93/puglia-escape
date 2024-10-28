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
                        <p>Blog</p>
                        <Link href='/blog?category=Eat+And+Drink'><li>Eat And Drink</li></Link>
                        <Link href='/blog?category=Experience'><li>Experience</li></Link>
                        <Link href='/blog?category=Events'><li>Events</li></Link>
                        <Link href='/blog?category=Discover'><li>Discover</li></Link>
                    </ul>
                    <ul>
                        <p>From Puglia</p>
                        <Link href='/about'><li>About</li></Link>
                        <a href="mailto:hello@frompuglia.com">hello@frompuglia.com</a>
                    </ul>

                </div>
            </div>

            <div className={style.footerCopyright}>

                <p>Copyright © 2023 From Puglia. All rights reserved. Developed by <a href='https://ec-webdev.netlify.app/' target='_blank'>Eligio Cristantielli</a></p>
            </div>

        </footer>

    )
}