import style from '@/styles/post.module.css'
import Image from 'next/image'

export default function PostHero({ post }) {
    return (
        <>
            <section className={style.postHero}>
                <h1 className={style.postTitle}>{post.items[0].fields.postTitle}</h1>
                <div className={style.postMainImageBox}>
                    <Image
                        className={style.postMainImage}
                        src={'https:' + post.items[0].fields.mainImage.fields.file.url}
                        alt={post.items[0].fields.mainImage.fields.description}
                        fill={true}
                    />
                </div>
                <h2 className={style.postSubtitle}>{post.items[0].fields.postSubtitle}</h2>
            </section>
            <hr />
        </>
    )
}