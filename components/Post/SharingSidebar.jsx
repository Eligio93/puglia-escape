import ShareButtons from './ShareButtons'
import styles from '@/styles/post.module.css'

export default function SharingSidebar() {
    return (
        <aside className={styles.sharingSidebar}>
            <ShareButtons />
         
        </aside>
    )
}