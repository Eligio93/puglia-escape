import style from '@/styles/post.module.css'
import Image from 'next/image'

export default function PostInfo({ post }) {
    return (
        <>
        <div className={style.postInfo}>
            <div className={style.authorInfo}>
                <Image
                    src={'https:' + post.items[0].fields.postAuthor.fields.authorPicture.fields.file.url}
                    width={236}
                    height={236}
                    alt={post.items[0].fields.postAuthor.fields.authorPicture.fields.description}
                />
                <div className={style.authorName}>
                    <p>{post.items[0].fields.postAuthor.fields.authorName}</p>
                    <p>Author</p>
                </div>
            </div>
            <div className={style.publishingDate}>
                <p>Published on:</p>
                <p >{post.items[0].fields.publishingDate}</p> {/*format date with date-fns*/}
            </div>
        </div>
        <hr />
        </>
    )
}