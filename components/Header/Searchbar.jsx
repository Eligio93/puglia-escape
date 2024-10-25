'use client'
import Image from 'next/image'
import searchIcon from '@/public/searchIcon.svg'
import styles from '@/styles/header.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('')
    const router = useRouter()

    function handleSearch(e) {
        e.preventDefault();
        if (searchValue.trim() !== '') {
            router.push(`/blog?searchValue=${searchValue}`)
        }
    }

    return (
        <form className={styles.searchbar}>
            <label htmlFor="searchBar">
                <input type="text" name='searchValue' id='searchBar' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search Posts ...' />
            </label>
            <button className={styles.searchBtn} type='submit' onClick={handleSearch}>
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