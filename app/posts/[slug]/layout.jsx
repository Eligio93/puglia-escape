import style from '@/styles/post.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedPosts } from '@/config/contentful/client'

export default async function PostLayout({ children }) {
    const featuredPosts = await getFeaturedPosts();
    return (
        <div className={style.postLayout}>
            <aside>
                <section className={style.featuredPosts}>
                    <hr className={style.divider} data-content="Featured Posts" />
                    <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {featuredPosts.items.map((post) =>
                            <Link href={`/posts/${post.fields.postSlug}`}>
                                <li key={post.sys.id} style={{ height: '100px', width: '100%', display: 'flex', gap: '10px', border: '1px solid var(--dark-blue)',borderRadius:'10px',padding:'10px' }}>

                                    <div className={style.featuredPostImage} style={{ position: 'relative', height: '100%', width: '40%' }}>
                                        <Image
                                            src={'https:' + post.fields.mainImage.fields.file.url}
                                            alt={post.fields.mainImage.fields.description}
                                            fill={true}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />

                                    </div>
                                    <p style={{ width: '60%' }}> {post.fields.postTitle}</p>





                                </li>
                            </Link>)}
                    </ul>
                </section>
            </aside>
            {children}
        </div >
    )
}