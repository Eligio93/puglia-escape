'use client'

import styles from '@/styles/about.module.css'
import { useState } from "react"
import axios from "axios"
import spinner from '@/public/spinner.svg'
import Image from "next/image"

export default function About() {
    const [data, setData] = useState({
        name: '',
        lastName: '',
        email: '',
        message: ''
    })
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        const response = await axios.post('http://localhost:3000/api/submit-contact-form', data)
        if (response.status === 200) {
            setTimeout(() => {
                setSuccess(true)
                setLoading(false)
            }, 1000)
        } else {
            setTimeout(() => {
                setSuccess(false)
                setLoading(false)
            }, 1000)
        }
    }
    return (
        <>
            <title>About - From Puglia</title>
            <meta name="description" content="Learn more about From Puglia, created by a local, passionate about sharing the best of Puglia. Discover our mission to bring this region from Puglia to the World." />
            <div className={styles.about}>
                <section className={styles.aboutInfo}>
                    <h1>About FromPuglia.com</h1>
                    <p> Welcome to FromPuglia.com, a travel blog dedicated to bringing the magic of Puglia to the world.
                        I’m Eligio Cristantielli, a passionate traveler and programmer, and I created this blog to share my love for Puglia,
                        my homeland.<br />After years of exploring the world and honing my skills in technology, I wanted to give back to my roots
                        by promoting Puglia’s beauty, history, and unique experiences to an international audience. FromPuglia.com offers curated tips,
                        guides, and insights to help you uncover the hidden gems of this stunning region and make the most of your journey to Puglia.</p>
                </section>
                <section className={styles.aboutContact}>
                    {/*Success === null show the form*/}
                    <form className={styles.aboutForm} onSubmit={handleSubmit}>
                        {success === null &&
                            <>
                                <h2>Contact Us</h2>
                                <label htmlFor="name">Name *</label>
                                <input type="text" name="name" id="name" value={data.name} onChange={handleChange} required />
                                <label htmlFor="lastName">Last Name *</label>
                                <input type="text" name="lastName" id="lastName" value={data.lastName} onChange={handleChange} required />
                                <label htmlFor="email">Email *</label>
                                <input type="email" name="email" id="email" value={data.email} onChange={handleChange} required />
                                <label htmlFor="message">Your Message *</label>
                                <textarea name="message" id="message" value={data.message} onChange={handleChange} required></textarea>
                                {loading && <button disabled>
                                    <Image
                                        src={spinner}
                                        alt='spinner'
                                        width={30}
                                        height={30}
                                        style={{
                                            width: '20px',
                                            height: 'auto'
                                        }}
                                    />
                                </button>
                                }
                                {!loading && <button typeof="submit">Submit</button>}
                            </>
                        }

                        {/*success === true means the forms been submitted correctly*/}
                        {success === true &&
                            <>
                                <h2>Thank you for your message</h2>
                                <p>We will get back to you as soon as possible.</p>
                            </>}

                        {/*success === false means the form has not been submitted correctly*/}
                        {success === false &&
                            <>
                                <h2>Oops! Something went wrong</h2>
                                <p>Please try again later.</p>
                            </>}
                    </form>
                </section>
            </div>
        </>
    )
}