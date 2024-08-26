'use client'
import Image from 'next/image'
import searchIcon from '@/public/searchIcon.svg'
import styles from '@/styles/searchbar.module.css'


export default function SearchBar() {
    return (
        <form className={styles.searchbar}>
            <input type="text" />
            <button className={styles.searchBtn} type='submit' onClick={() => alert('ciao')}>
                <Image
                    src={searchIcon}
                    alt='searchbar icon'
                    height={30}
                    width={30}
                    style={{
                        width: '20px',
                        height: 'auto'
                    }}

                />
            </button>
        </form>
    )
}