import Link from "next/link"
import Image from "next/image"
import { getFeaturedPosts } from "@/config/contentful/client";
import styles from '@/styles/post.module.css'


export default async function SideBarLeft() {
    const featuredPosts = await getFeaturedPosts();
    return (
        <aside className={styles.postSidebarLeft}>
            <section className={styles.featuredPosts}>
                <hr className={styles.divider} data-content="Featured Posts" />
                <ul>
                    {featuredPosts.items.map((post) =>
                        <Link key={post.sys.id} href={`/posts/${post.fields.postSlug}`}>
                            <li className={styles.featuredPost}>
                                <div className={styles.featuredPostImage}>
                                    <Image
                                        src={'https:' + post.fields.mainImage.fields.file.url}
                                        alt={post.fields.mainImage.fields.description}
                                        fill={true}
                                    />
                                </div>
                                <p style={{ width: '60%' }}> {post.fields.postTitle}</p>
                            </li>
                        </Link>)}
                </ul>
            </section>
            <section>
                <hr className={styles.divider} data-content="Book your experience in Puglia" />

            </section>
        </aside>
    )
}