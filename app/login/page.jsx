import loginBackground from '@/public/loginBackground.jpg'
import googleIcon from '@/public/googleIcon.svg'
import Image from 'next/image'
import styles from '@/styles/login.module.css'

export default function Login() {
    return (
        <div className={styles.login}>
            <Image
                className={styles.loginImg}
                src={loginBackground}
                alt='Picture of a trullo in Alberobello'
                sizes='30vw'
            />
            <form action="" className={styles.form}>
                <h2>Log in to your account</h2>
                <label htmlFor="login-email">Email:</label>
                <input type="email" name="email" id="login-email" />
                <label htmlFor="login-password">Password:</label>
                <input type="password" name="password" id="login-password" />
                <button type='submit' className='primaryBtn'>Login</button>
                <hr className={styles.divider} data-content="OR" />
                <button className={styles.googleBtn}>
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
    )
}