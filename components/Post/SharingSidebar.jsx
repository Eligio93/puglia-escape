import ShareButtons from './ShareButtons'
import styles from '@/styles/post.module.css'

export default function SharingSidebar() {
    return (
        <aside className={styles.sharingSidebar}>
            <hr />
            <h3>Share On:</h3>
            <ShareButtons />

        </aside>
    )
}