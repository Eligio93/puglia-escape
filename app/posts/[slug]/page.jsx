import { getPostBySlug } from "@/config/contentful/client";
import SideBarLeft from "@/components/Post/SideBarLeft";
import PostHeader from "@/components/Post/PostHeader";
import PostHero from "@/components/Post/PostHero";
import PostBody from "@/components/Post/PostBody";
import styles from '@/styles/post.module.css'

import Link from "next/link";
import Image from "next/image";
import { min } from "date-fns";

export async function generateMetadata({ params }) {
    const slug = params.slug;
    const post = await getPostBySlug(slug)
    return {
        //max 60 characters
        title: post.items[0].fields.postTitle,
        //max 155 characters and need to describe the whole page
        description: post.items[0].fields.seo.fields.seoDescription,
        openGraph: {
            //page title
            title: post.items[0].fields.postTitle,
            //page description
            description: post.items[0].fields.seo.fields.seoDescription,
            //url del sito 'https://pugliaProject.com
            url: post.items[0].fields.seo.fields.ogurl,
            //Name of the site
            siteName: 'Puglia Project',
            //type is article
            type: 'article',
            // image must m
            images: [{
                url: 'https:' + post.items[0].fields.seo.fields.ogimage.fields.file.url,//must be an absolute URL so https://url.com
                width: 1260,
                height: 800
            }],
            //locale e la lingua
            locale: 'en-US'
        }
    }
}
export default async function Post({ params }) {
    const slug = params.slug;
    const post = await getPostBySlug(slug)
    const relatedPosts = post.items[0].fields.relatedPosts
    console.log(relatedPosts[0].fields.mainImage.fields.file)
    return (
        <>
            <div className={styles.postContainer}>
                <SideBarLeft />
                <article className={styles.postArticle}>
                    <PostHeader post={post} />
                    <PostHero post={post} />
                    <PostBody post={post} />
                </article>
            </div>
            <section className={styles.relatedPostsContainer} style={{ backgroundColor: 'var(--blue)', color: 'white',padding:'30px' }}>
                <h2>Related Posts</h2>
                <hr />
                <ul>
                    {relatedPosts && relatedPosts.map((post) =>
                        <>
                            <Link key={post.sys.id} href={`/posts/${post.fields.postSlug}`}>
                                <li className={styles.relatedPost}>
                                    <div className={styles.relatedPostImage}>
                                        <Image
                                            src={'https:' + post.fields.mainImage.fields.file.url}
                                            alt={post.fields.mainImage.fields.description}
                                            height={post.fields.mainImage.fields.file.details.image.height}
                                            width={post.fields.mainImage.fields.file.details.image.width}
                                        />
                                    </div>
                                    <p>{post.fields.postTitle}</p>

                                </li>
                            </Link>
                            <Link key={post.sys.id} href={`/posts/${post.fields.postSlug}`}>
                                <li className={styles.relatedPost}>
                                    <div className={styles.relatedPostImage}>
                                        <Image
                                            src={'https:' + post.fields.mainImage.fields.file.url}
                                            alt={post.fields.mainImage.fields.description}
                                            height={post.fields.mainImage.fields.file.details.image.height}
                                            width={post.fields.mainImage.fields.file.details.image.width}
                                        />
                                    </div>
                                    <p>{post.fields.postTitle}</p>

                                </li>
                            </Link>
                            <Link key={post.sys.id} href={`/posts/${post.fields.postSlug}`}>
                                <li className={styles.relatedPost}>
                                    <div className={styles.relatedPostImage}>
                                        <Image
                                            src={'https:' + post.fields.mainImage.fields.file.url}
                                            alt={post.fields.mainImage.fields.description}
                                            height={post.fields.mainImage.fields.file.details.image.height}
                                            width={post.fields.mainImage.fields.file.details.image.width}
                                        />
                                    </div>
                                    <p className={styles.relatedPostTitle}>{post.fields.postTitle}</p>

                                </li>
                            </Link>
                        </>
                    )}
                </ul>


            </section >
        </>
    )
}