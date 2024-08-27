'use client'
import loginBackground from '@/public/loginBackground.jpg'
import googleIcon from '@/public/googleIcon.svg'
import Image from 'next/image'
import styles from '@/styles/login.module.css'
import { signIn } from 'next-auth/react';


export default function Login() {
    async function handleGoogleLogin(e) {
        e.preventDefault();
        await signIn('google')
        redirect
        console.log(response)

    }
    async function handleCredentialsLogin(e) {
        e.preventDefault();
        const email = 'ciaociao'
        const password = 'miao123'
        const response = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password
        })
        console.log(response)
    }
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