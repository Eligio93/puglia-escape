import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/blog.module.css'
import { format } from "date-fns";



export default async function BlogPosts({ posts }) {
    return (
        <div className={styles.blogPosts} >
            {posts.length > 0 && posts.map((post) => <Link href={'/posts/' + post.fields.postSlug} key={post.sys.id} className={styles.blogPost}>
                <div className={styles.blogPostCover}>
                    <Image
                        src={'https:' + post.fields.mainImage.fields.file.url}
                        alt="prova descrizione"
                        fill={true}
                    //needs to add sizes or check if in the image there are dimensions
                    />
                </div>
                <p className={styles.blogPostDate}>{format(post.fields.publishingDate, 'MMMM dd, yyyy')}</p>     {/*date needs to be formatted with date-fns*/}
                <p className={styles.blogPostTitle}>{post.fields.postTitle}</p>
                <p className={styles.blogPostSubtitle}>{post.fields.postSubtitle}</p>
                <div className={styles.blogPostFooter}>
                    <div className={styles.authorInfo}>
                        <Image
                            src={'https:' + post.fields.postAuthor.fields.authorPicture.fields.file.url}
                            alt={post.fields.postAuthor.fields.authorPicture.fields.description}
                            height={236}
                            width={236}
                        />
                        <p>{post.fields.postAuthor.fields.authorName}</p>

                    </div>
                    <p className={styles.readingTime}>{post.fields.readingTime + ' min read'}</p>

                </div>

            </Link>)}
            {posts.length == 0 && <p>No posts found</p>}
        </div>

    )
}