import { getPosts, getPostsBySearch } from "@/config/contentful/client";
import BlogPosts from "@/components/Blog/BlogPosts";
import styles from '@/styles/blog.module.css'

export const metadata = {
    title: "Blog - From Puglia",
    description: "Welcome to the From Puglia blog, your go-to source for discovering Puglia. Find articles on must-visit spots, local traditions, and insider travel experiences from the heart of Italy’s heel.",
};



export default async function Blog({ searchParams }) {
    const cityQuery = searchParams.city ? 'city' + searchParams.city.split(' ').join('') : null;
    const categoryQuery = searchParams.category ? 'category' + searchParams.category.split(' ').join('') : null;
    const searchQuery = searchParams.searchValue
    let posts;

    //Gets posts based on query params  
    if (searchQuery) {
        posts = await getPostsBySearch(searchQuery);
    } else {
        posts = await getPosts(categoryQuery, cityQuery);
    }

    return (
        <div className={styles.blog}>
            <BlogPosts
                posts={posts.items}
            />
        </div>


    )
}