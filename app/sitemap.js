import { getPosts } from "@/config/contentful/client"

export default async function sitemap() {
  const posts = (await getPosts()).items;
  const postsEntries = posts.map(post => (
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.fields.postSlug}`,
      lastModified: new Date(post.sys.updatedAt)
    }
  ))
  return [
    {
      url: 'https://frompuglia.com',
      changeFrequency: 'yearly',
    },
    {
      url: 'https://frompuglia.com/blog',
      changeFrequency: 'monthly',
    },
    {
      url: 'https://frompuglia.com/about',
      changeFrequency: 'yearly',
    },
    ...postsEntries
  ]
}