import style from '@/styles/post.module.css'

export default function PostLayout({ children }) {
    return (
        <div className={style.postLayout}>
            <aside>
                <h2>Post Title</h2>
                <p>Post Subtitle</p>
                <p>Post Date</p>    
            </aside>
            {children}
        </div>
    )
}