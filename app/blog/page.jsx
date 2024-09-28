import { getPosts } from "@/config/contentful/client";
import BlogPosts from "@/components/Blog/BlogPosts";
import styles from '@/styles/blog.module.css'



export default async function Blog({ searchParams }) {
    const cityQuery = searchParams.city ? 'city' + searchParams.city.split(' ').join('') : null;
    const categoryQuery = searchParams.category ? 'category' + searchParams.category.split(' ').join('') : null;
    const posts = await getPosts(categoryQuery, cityQuery);


    //controllare i parametri e fare il get post con i parametri selezionati altrimenti gettutti i post
    return (
        <div className={styles.blog}>
            <BlogPosts
                posts={posts.items}
            />
        </div>


    )
}