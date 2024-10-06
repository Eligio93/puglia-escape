import { options } from "@/config/contentful/RichTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from '@/styles/post.module.css'




export default function PostBody({ post }) {
    const body = documentToReactComponents(post.items[0].fields.postBody, options)

    return (
        <section className={styles.mainContent}>
            {body}
        </section>
    )


}