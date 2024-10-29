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
    const path = 'https://puglia-escape.vercel.app' + usePathname();
    return (
        <div className={style.shareButtons}>
            {/* <p style={{opacity:0.8, fontSize:'12px'}}>Link copied to clipboard</p>
            <Image
                src={copyUrlIcon}
                alt='copy url icon'
                title='Copy URL' /> */}
            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(path)}`}>
                <Image
                    src={facebookIcon}
                    alt='facebook icon'
                    title='Share on Facebook'
                />
            </a>
            <a href={`https://api.whatsapp.com/send?text=${encodeURI(path)}`} target="_blank" rel="noopener noreferrer">
                <Image
                    src={whatsappIcon}
                    alt='whatsapp icon'
                    title='Share on WhatsApp'
                />
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=false&url=${encodeURI(path)}`} target="_blank" rel="noopener noreferrer">
                <Image
                    src={linkedinIcon}
                    alt='linkedin icon'
                    title='Share on LinkedIn'
                />
            </a>
            <a target="_blank" href={`https://twitter.com/intent/tweet?url=${encodeURI(path)}`}>
                <Image
                    src={xIcon}
                    alt='x icon'
                    title='Share on X'
                />
            </a>

        </div>
    )
}