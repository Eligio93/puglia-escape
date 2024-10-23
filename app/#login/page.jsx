'use client'
import loginBackground from '@/public/loginBackground.jpg'
import googleIcon from '@/public/googleIcon.svg'
import Image from 'next/image'
import styles from '@/styles/login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Loading from '../loading'
import { useRouter } from 'next/navigation'


export default function Login() {
    const [error, setError] = useState()
    const router = useRouter()
    const session = useSession()
    // useEffect(() => {
    //     if (session.status === 'authenticated') {
    //         router.push('/')
    //     }
    // }, [session])

    //when getting the session, initally the status is loading so to avoid that the page render and then redirect i used this conditional
    if (session.status === 'loading') {
        return <Loading />
    }

    async function handleGoogleLogin(e) {
        //need to set the callbackUrl to redirect the user to the page before the loginPage
        e.preventDefault();
        await signIn('google')
    }
    async function handleCredentialsLogin(e) {
        e.preventDefault();
        const email = 'u2@u2.com';
        const password = 'u2'
        const res = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
        },
        )
        if (res.error) {
            setError(res.error)
            setTimeout(() => {
                setError()
            }, 2000)
        } else {
            console.log('ciao')
            router.back()
        }

    }
    return (
        <>
            <title>Login - From Puglia</title>
            <meta name="description" content="Login to your account - From Puglia" />
            <div className={styles.login}>
                <div className={styles.loginContainer}>
                    <Image
                        className={styles.loginImg}
                        src={loginBackground}
                        alt='Picture of a trullo in Alberobello'
                        priority={true}
                    />
                    <form action="" className={styles.form} onSubmit={handleCredentialsLogin}>
                        <h2>Log in to your account</h2>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <label htmlFor="login-email">Email:</label>
                        <input type="email" name="email" id="login-email" />
                        <label htmlFor="login-password">Password:</label>
                        <input type="password" name="password" id="login-password" autoComplete='true' />
                        <button type='submit' className='primaryBtn'>Login</button>
                        <hr className={styles.divider} data-content="OR" />
                        <button className={styles.googleBtn} onClick={handleGoogleLogin}>
                            <Image
                                src={googleIcon}
                                alt='Google Icon'
                            />
                            Log in with Google
                        </button>
                    </form>


                </div>

            </div>
        </>
    )
}