import { client } from '@/config/contentful/client'
import Link from 'next/link'
import Image from 'next/image'
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
            <h2>Our Latest News From Puglia</h2>
            <Carousel
                posts={response.items}
            />


        </section>
    )
}