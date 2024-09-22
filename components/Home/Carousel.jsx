'use client'
import React from 'react'
import { useCallback } from 'react'
import styles from '@/styles/home.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'



export default function EmblaCarousel({ posts }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false })])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    console.log(posts)
    return (
        <div className={styles.embla} >
            <button className={styles.embla__prev} onClick={scrollPrev}>Prev</button>
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

                        {post.fields.postTitle}
                    </div>)}
                </div>
            </div>

            <button className={styles.embla__next} onClickCapture={scrollNext}>Next</button>
        </div>
    )
}