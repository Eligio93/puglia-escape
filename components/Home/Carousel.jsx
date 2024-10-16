'use client'
import React from 'react'
import { useCallback } from 'react'
import styles from '@/styles/home.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import Image from 'next/image'
import previousIcon from '@/public/previousIcon.svg'
import nextIcon from '@/public/nextIcon.svg'
import { format } from 'date-fns'
import Link from 'next/link'



export default function EmblaCarousel({ posts }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false }), ClassNames({ inView: '' })])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className={styles.embla} >

            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {posts.map((post) => <Link  href={'/posts/' + post.fields.postSlug} key={post.sys.id} className={styles.embla__slide}>
                        <Image
                            className={styles.carouselImg}
                            src={'https:' + post.fields.mainImage.fields.file.url}
                            alt={post.fields.mainImage.fields.description}
                            height={post.fields.mainImage.fields.file.details.image.height}
                            width={post.fields.mainImage.fields.file.details.image.width}
                        />
                        <div className={styles.carouselPostInfo}>
                            <p className={styles.carouselPostDate}>{format(post.fields.publishingDate, 'MMMM dd, yyyy')}</p>
                            <p className={styles.carouselPostTitle}>{post.fields.postTitle}</p>
                            <hr />
                            <p className={styles.carouselPostSubtitle}>{post.fields.postSubtitle}</p>
                        </div>

                    </Link>)}
                </div>
            </div>
            <div className={styles.carouselNav}>
                <button className={styles.embla__prev} onClick={scrollPrev}>
                    <Image
                        src={previousIcon}
                        alt='previous icon'
                    />
                </button>
                <button className={styles.embla__next} onClickCapture={scrollNext}>
                    <Image
                        src={nextIcon}
                        alt='next icon'
                    />
                </button>
            </div>
        </div>
    )
}