import Loading from "../loading"
import styles from '@/styles/about.module.css'

export const metadata = {
    title: "About - From Puglia",
    description: "Learn more about From Puglia, created by a local, passionate about sharing the best of Puglia. Discover our mission to bring this region from Puglia to the World.",
};

export default async function About() {
    return (
        <div className={styles.about}>
            <section className={styles.aboutInfo}>
                <h1>About FromPuglia.com</h1>
                <p>About FromPuglia.com
                    Welcome to FromPuglia.com, a travel blog dedicated to bringing the magic of Puglia to the world.
                    I’m Eligio Cristantielli, a passionate traveler and programmer, and I created this blog to share my love for Puglia,
                    my homeland. After years of exploring the world and honing my skills in technology, I wanted to give back to my roots
                    by promoting Puglia’s beauty, history, and unique experiences to an international audience. FromPuglia.com offers curated tips,
                    guides, and insights to help you uncover the hidden gems of this stunning region and make the most of your journey to Puglia.</p>
            </section>
            <section className={styles.aboutContact}>
                <form className={styles.aboutForm}>
                    <h2>Contact Us</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message"></textarea>
                    <button typeof="submit">Submit</button>
                </form>

            </section>


        </div>
    )
}