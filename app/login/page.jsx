'use client'
import loginBackground from '@/public/loginBackground.jpg'
import googleIcon from '@/public/googleIcon.svg'
import Image from 'next/image'
import styles from '@/styles/login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { Suspense, useEffect } from 'react'
import Loading from '../loading'
import { useRouter } from 'next/navigation'


export default function Login() {
    const router = useRouter()
    const session = useSession()
    useEffect(() => {
        if (session.status === 'authenticated') {
            router.push('/')
        }
    }, [session])

    //when getting the session, initally the status is loading so to avoid that the page render and then redirect i used this conditional
    if (session.status === 'loading') {
        return <Loading />
    }

    async function handleGoogleLogin(e) {
        e.preventDefault();
        await signIn('google', {
        })
        router.back();
    }
    async function handleCredentialsLogin(e) {
        e.preventDefault();
        const email = 'eligio.cristantielli@gmail.com';
        const password = 'ciaociao'
        const res = await signIn('credentials', {
            redirect: false,
            callbackUrl: router.back(),
            email: email,
            password: password
        })
        //if res.error
        //'Invalid Credentials
        //if res.url
        //redirect to the previous page
    }
    // if (session.status === 'authenticated') {
    //     return router.back()
    // }
    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <Image
                    className={styles.loginImg}
                    src={loginBackground}
                    alt='Picture of a trullo in Alberobello'
                    sizes='30vw'
                    priority={true}
                />
                <form action="" className={styles.form} onSubmit={handleCredentialsLogin}>
                    <h2>Log in to your account</h2>
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
                            width={30}
                            height={30}
                        />
                        Log in with Google
                    </button>
                </form>


            </div>

        </div>
    )
}