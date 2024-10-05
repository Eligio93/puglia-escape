import ShareButtons from './ShareButtons'
import style from '@/styles/post.module.css'
import Image from 'next/image'
import { format } from 'date-fns'

export default function PostHeader({ post }) {
    return (
        <>
            <div className={style.postHeader}>
                <div className={style.authorInfo}>
                    <Image
                        src={'https:' + post.items[0].fields.postAuthor.fields.authorPicture.fields.file.url}
                        width={236}
                        height={236}
                        alt={post.items[0].fields.postAuthor.fields.authorPicture.fields.description}
                    />
                    <div className={style.authorName}>
                        <p>{post.items[0].fields.postAuthor.fields.authorName}</p>
                        <p>{format(post.items[0].fields.publishingDate, 'MMMM dd, yyyy')}</p>
                    </div>
                </div>
                <ShareButtons />


            </div>
            <hr />
        </>
    )
}