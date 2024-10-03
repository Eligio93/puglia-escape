import { getPostBySlug } from "@/config/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PostInfo from "@/components/Post/PostInfo";
import PostHero from "@/components/Post/PostHero";
import styles from '@/styles/post.module.css'
import { options } from "@/config/contentful/RichTextOptions";

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
    const body = documentToReactComponents(post.items[0].fields.postBody, options)
    // console.log(post.items[0].metadata.tags.sys.id)

    return (
        <div className={styles.post}>
            <PostInfo post={post} />
            <PostHero post={post} />
            <section className={styles.mainContent}>
                {body}
            </section>
        </div>

    )
}