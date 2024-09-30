import { getPostBySlug } from "@/config/contentful/client";

export async function generateMetadata({ params }) {
    const slug = params.slug;
    const post = await getPostBySlug(slug)
    console.log(post.items[0].fields)
    return {
        title: post.items[0].fields.seo.fields.seoTitle,
        description: post.items[0].fields.seo.fields.seoDescription,
        openGraph: {
            title: post.items[0].fields.seo.fields.ogtitle,
            description: post.items[0].fields.seo.fields.ogdescription,
            url: post.items[0].fields.seo.fields.ogurl,
            // type: post.items[0].fields.seo.fields.ogtype,
            images: post.items[0].fields.seo.fields.ogimage,


        }
    }
}
export default async function Post({ params }) {
    const slug = params.slug;
    const post = await getPostBySlug(slug)
    console.log(post.items[0].fields.postTitle)

    return (
        <h1>{post.items[0].fields.postTitle}</h1>
    )
}