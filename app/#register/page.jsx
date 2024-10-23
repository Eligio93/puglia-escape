'use client'
import Image from 'next/image'
import googleIcon from '@/public/googleIcon.svg'
import registerBackground from '@/public/registerBackground.jpg'
import styles from '@/styles/login.module.css'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'




export default function Register() {
    const router = useRouter();
    const [registrationData, setRegistrationData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState();
    const [success, setSuccess] = useState()
    function onInputChange(e) {
        const { name, value } = e.target;
        setRegistrationData((prevData) => ({
            ...prevData, [name]: value
        }))

    }
    async function handleRegistration(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/register', registrationData)
            console.log(response)
            if (response.status == 200) {
                setSuccess(response.data)
                setTimeout(() => {
                    router.push('/login')
                    setError()
                    setSuccess()
                }, 2000)
            }
        } catch (err) {
            console.log(err)
            setError(err.response.data)
            setTimeout(() => {
                setError()
            }, 5000)
        }
    }
    return (
        <>
            <title>Register - From Puglia</title>
            <meta name="description" content="Register a new account - From Puglia" />
            <div className={styles.register}>
                {error && <p className='error-msg'>{error}</p>}
                {success && <p className='success-msg'>{success}</p>}

                <div className={styles.registerContainer}>
                    <Image
                        className={styles.registerImg}
                        src={registerBackground}
                        alt='Two people hugging in the streets of Otranto at sunset'
                        sizes='50vw'
                        priority
                    />

                    <form className={styles.form} onSubmit={handleRegistration}>
                        <h2>Register a new account</h2>

                        <label htmlFor="registerName">Name:</label>
                        <input type="text" id='registerName' name='name' autoComplete='true' onChange={onInputChange} required />
                        <label htmlFor="registerLastName">Last Name:</label>
                        <input type="text" id='registerLastName' name='lastName' onChange={onInputChange} required />
                        <label htmlFor="register-email">Email:</label>
                        <input type="email" name="email" id="register-email" autoComplete='true' onChange={onInputChange} required />
                        <label htmlFor="register-password">Password:</label>
                        <input type="password" name="password" id="register-password" autoComplete='true' onChange={onInputChange} required />
                        <button type='submit' className='primaryBtn'>Sign Up</button>

                        <button className={styles.googleBtn} onClick={() => signIn('google')}>
                            <Image
                                src={googleIcon}
                                alt='Google Icon'
                                width={30}
                                height={30}
                            />
                            Sign up with Google
                        </button>

                    </form>

                </div>


            </div>
        </>
    )
}