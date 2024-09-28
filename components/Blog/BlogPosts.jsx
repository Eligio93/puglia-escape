import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/blog.module.css'

export default async function BlogPosts({ posts }) {
    return (
        <div className={styles.blogPosts} >
            {posts.length > 0 && posts.map((post) => <Link href={'/posts/' + post.fields.postSlug} key={post.sys.id} className={styles.blogPost}>
                <div className={styles.blogPostCover}>
                    <Image
                        src={'https:' + post.fields.mainImage.fields.file.url}
                        alt="prova descrizione"
                        fill={true}
                    //needs to add sizes
                    />
                </div>
                <p className={styles.blogPostDate}>{post.fields.publishingDate}</p> {/*date needs to be formatted with date-fns*/}
                <p className={styles.blogPostTitle}>{post.fields.postTitle}</p>
                <p className={styles.blogPostDescription}>{post.fields.postDescription}</p>
            </Link>)}
            {posts.length == 0 && <p>No posts found</p>}
        </div>

    )
}