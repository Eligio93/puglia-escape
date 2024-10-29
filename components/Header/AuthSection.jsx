'use client'
import Link from "next/link"
import styles from '@/styles/header.module.css'
import Image from "next/image"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
export default function AuthSection() {
    const session = useSession()
    return (
        <div className={styles.authSection}>
            {session.status == 'unauthenticated' &&
                <>
                    <Link href='/login' className={styles.logInLink}>Login</Link>
                    <Link href='/register' className={styles.registerLink}>Register</Link>
                </>
            }
            {session.status == 'authenticated' &&
                <button className={styles.logoutBtn} onClick={()=>signOut()}>
                    <Image
                        src={session.data.user.image}
                        alt="user profile picture"
                        height={100}
                        width={100}
                    />
                    Sign Out
                </button>

            }

        </div>
    )

}