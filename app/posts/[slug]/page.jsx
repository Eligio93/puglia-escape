import { getPostBySlug } from "@/config/contentful/client";
import SideBarLeft from "@/components/Post/SideBarLeft";
import PostHeader from "@/components/Post/PostHeader";
import PostHero from "@/components/Post/PostHero";
import PostBody from "@/components/Post/PostBody";
import styles from '@/styles/post.module.css'
import SharingSidebar from "@/components/Post/SharingSidebar";
import Link from "next/link";
import Image from "next/image";

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
            url: 'https://puglia-escape.vercel.app/' + slug,
            //Name of the site
            siteName: 'From Puglia',
            //type is article
            type: 'article',
            // image must m
            images: [{
                url: 'https:' + post.items[0].fields.seo.fields.ogimage.fields.file.url,//must be an absolute URL so https://url.com
                width: /*1260*/ post.items[0].fields.seo.fields.ogimage.fields.file.details.image.width,
                height: /*800*/ post.items[0].fields.seo.fields.ogimage.fields.file.details.image.height
            }],
            //locale e la lingua
            locale: 'en-US'
        },
        twitter: {
            card: 'summary_large_image',
            title: post.items[0].fields.postTitle,
            description: post.items[0].fields.seo.fields.seoDescription,
            images: {
                url: 'https:' + post.items[0].fields.seo.fields.ogimage.fields.file.url,
                alt: post.items[0].fields.seo.fields.ogimage.fields.description
            }

        }
    }
}
export default async function Post({ params }) {
    const slug = params.slug;
    const post = await getPostBySlug(slug)
    const relatedPosts = post.items[0].fields.relatedPosts
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
            <SharingSidebar />
            {relatedPosts && relatedPosts.length > 0 &&
                <section className={styles.relatedPostsContainer} >
                    <h2>Related Posts</h2>
                    <hr />
                    <ul className={styles.relatedPostsList}>
                        {relatedPosts && relatedPosts.map((post) =>
                            <>
                                <li key={post.sys.id}>
                                    <Link className={styles.relatedPost} href={`/posts/${post.fields.postSlug}`}>
                                        <div className={styles.relatedPostImage}>
                                            <Image
                                                src={'https:' + post.fields.mainImage.fields.file.url}
                                                alt={post.fields.mainImage.fields.description}
                                                height={post.fields.mainImage.fields.file.details.image.height}
                                                width={post.fields.mainImage.fields.file.details.image.width}
                                            />
                                        </div>
                                        <p className={styles.relatedPostTitle}>{post.fields.postTitle}</p>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </section >
            }

        </>
    )
}