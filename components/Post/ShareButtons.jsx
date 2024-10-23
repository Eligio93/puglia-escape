'use client'

import copyUrlIcon from '@/public/copyUrlIcon.svg'
import facebookIcon from '@/public/facebookIconB.svg'
import whatsappIcon from '@/public/whatsappIcon.svg'
import linkedinIcon from '@/public/linkedinIcon.svg'
import xIcon from '@/public/xIcon.svg'
import Image from 'next/image'
import style from '@/styles/post.module.css'
import { usePathname } from 'next/navigation'

//TWITTER: https://twitter.com/intent/tweet
//FACEBOOK: https://www.facebook.com/sharer/sharer.php
//WHATSAPP: https://api.whatsapp.com/send
//LINKEDIN: https://www.linkedin.com/shareArticle

export default function ShareButtons() {
    const path = 'http://localhost:3000' + usePathname();
    return (
        <div className={style.shareButtons}>
            <Image
                src={copyUrlIcon}
                alt='copy url icon'
                title='Copy URL' />
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(path)}`}>
            <Image
                src={facebookIcon}
                alt='facebook icon'
                title='Share on Facebook'
            />
            </a>
            <Image
                src={whatsappIcon}
                alt='whatsapp icon'
                title='Share on WhatsApp'
            />

            <Image
                src={linkedinIcon}
                alt='linkedin icon'
                title='Share on LinkedIn'
            />
            <Image
                src={xIcon}
                alt='x icon'
                title='Share on X'
            />

        </div>
    )
}