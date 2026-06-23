import { getPosts, getPostsBySearch } from "@/config/contentful/client";
import BlogPosts from "@/components/Blog/BlogPosts";

export const metadata = {
  title: "Blog - From Puglia",
  description:
    "Welcome to the From Puglia blog, your go-to source for discovering Puglia. Find articles on must-visit spots, local traditions, and insider travel experiences from the heart of Italy’s heel.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  },
};

export default async function Blog({ searchParams }) {
  //the city param can hold multiple cities, comma separated
  const cityQueries = searchParams.city
    ? searchParams.city
        .split(",")
        .map((city) => "city" + city.split(" ").join(""))
    : [];
  const categoryQuery = searchParams.category
    ? "category" + searchParams.category.split(" ").join("")
    : null;
  const searchQuery = searchParams.searchValue;
  let posts;

  //Gets posts based on query params
  if (searchQuery) {
    posts = await getPostsBySearch(searchQuery);
  } else {
    posts = await getPosts(categoryQuery, cityQueries);
  }

  return <BlogPosts posts={posts.items} />;
}
