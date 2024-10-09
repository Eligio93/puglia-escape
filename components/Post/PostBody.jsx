import { options } from "@/config/contentful/RichTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SharingSidebar from "./SharingSidebar";
import styles from '@/styles/post.module.css'




export default function PostBody({ post }) {
    const body = documentToReactComponents(post.items[0].fields.postBody, options)

    return (
        <section className={styles.postBody}>
            <div className={styles.stickySidebarWrapper}>
                <SharingSidebar />
            </div>
            {body}
        </section>
    )


}