import { getPosts } from "@/config/contentful/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

export async function sitemap() {
  const posts = (await getPosts()).items;
  const postsEntries = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.fields.postSlug}`,
    lastModified: new Date(post.sys.updatedAt),
  }));
  return [
    {
      url: "https://frompuglia.com",
      changeFrequency: "yearly",
    },
    {
      url: "https://frompuglia.com/blog",
      changeFrequency: "monthly",
    },
    {
      url: "https://frompuglia.com/about",
      changeFrequency: "yearly",
    },
    ...postsEntries,
  ];
}
