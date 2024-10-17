import { getTags } from "@/config/contentful/client"
import FilterBar from "@/components/Blog/FilterBar"
import styles from '@/styles/blog.module.css'
export default async function BlogLayout({ children }) {
    const tags = await getTags()
    return (
        <div className={styles.blogLayout}>
            <h2>Your Journey in Puglia</h2>
            <p>Explore a collection of stories, tips, and insights capturing the essence of Puglia. Dive in and let each post bring you closer to this remarkable region.</p>
            <hr />
            <section className={styles.blogContent}>
                <FilterBar
                    tags={tags} />
                {children}
            </section>
        </div>

    )

}