import { client } from '@/config/contentful/client'
import styles from '@/styles/home.module.css'
import Carousel from './Carousel'



export default async function LatestBlogPosts() {

    const response = await client.getEntries({
        content_type: 'blogPost',
        limit: 5,
        order: '-sys.createdAt' // order the results from the last blog post created
    })

    return (
        <section className={styles.latestBlogPosts}>
            <h2>Latest Blog Posts from Puglia</h2>
            <p>Journey through our curated insights and tales that capture the true essence of Puglia, inviting you to explore, savor, and connect with its soul.</p>
            <hr />
            <Carousel
                posts={response.items}
            />


        </section>
    )
}