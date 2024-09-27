'use client'
import React from 'react'
import { useCallback } from 'react'
import styles from '@/styles/home.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import Image from 'next/image'



export default function EmblaCarousel({ posts }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false }),ClassNames({inView:''})])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    console.log(posts)
    return (
        <div className={styles.embla} >

            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {posts.map((post) => <div key={post.sys.id} className={styles.embla__slide}>
                        <Image
                            className={styles.carouselImg}
                            src={'https:' + post.fields.mainImage.fields.file.url}
                            alt={post.fields.mainImage.fields.description}
                            height={post.fields.mainImage.fields.file.details.image.height}
                            width={post.fields.mainImage.fields.file.details.image.width}
                        />
                        <div className={styles.carouselPostInfo}>
                            <p>{post.fields.postTitle}</p>
                            <p>{post.fields.postDescription}</p>
                        </div>
                        
                    </div>)}
                </div>
            </div>
            <div className={styles.carouselNav}>
                <button className={styles.embla__prev} onClick={scrollPrev}>Prev</button>
                <button className={styles.embla__next} onClickCapture={scrollNext}>Next</button>
            </div>

        </div>
    )
}