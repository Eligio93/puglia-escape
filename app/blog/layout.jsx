import { getTags } from "@/config/contentful/client"
import FilterBar from "@/components/Blog/FilterBar"
import styles from '@/styles/blog.module.css'
export default async function BlogLayout({ children }) {
    const tags = await getTags()
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Blog Title Layout</h2>
            <div className={styles.blogLayout}>
                <FilterBar
                    tags={tags} />
                {children}
            </div>

        </>
    )
}