'use client'
import { useSearchParams, useRouter } from "next/navigation"
import styles from '@/styles/blog.module.css'
import { useEffect, useState } from "react";


export default function FilterBar({ tags }) {
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedCity, setSelectedCity] = useState()
    const router = useRouter();

    useEffect(() => {
        setSelectedCategory(searchParams.get('category'))
        setSelectedCity(searchParams.get('city'))
    }, [searchParams])




    //get the categories from the tags
    const categories = tags.items.filter((tag) => tag.name.startsWith('Category:')).map((tag) => tag.name.split(': ')[1])
    //get the cities from the tags
    let cities = tags.items.filter((tag) => tag.name.startsWith('City:')).map((tag) => tag.name.split(': ')[1]);
    //sort cities alphabetically
    cities = cities.sort();



    function setCategory(category) {
        const currentQuery = new URLSearchParams(searchParams.toString());
        if (currentQuery.has('searchValue')) {
            currentQuery.delete('searchValue');
        }
        //adds or updates the category
        if (category) {
            currentQuery.set('category', category);
        } else {
            currentQuery.delete('category');
        }
        setSelectedCategory(category);
        router.push(`/blog?${currentQuery.toString()}`);
    }

    function setCityQuery(e) {
        const city = e.target.value;
        const currentQuery = new URLSearchParams(searchParams.toString());
        if (currentQuery.has('searchValue')) {
            currentQuery.delete('searchValue');
        }
        if (city) {
            currentQuery.set('city', city);  //update the city with the new city selected
        } else {
            currentQuery.delete('city');     //remove the city if All is selected
        }
        router.push(`/blog?${currentQuery.toString()}`);
    }

    return (
        <aside className={styles.filterBar}>
            <section className={styles.filterCategories}>
                <hr className={styles.divider} data-content="Categories" />
                <ul className={styles.categoryList}>
                    <li onClick={() => setCategory(null)} className={selectedCategory === null ? styles.selectedCategory : undefined}>All</li>
                    {categories.map((category) =>
                        <li key={category} onClick={(e) => setCategory(category)} className={selectedCategory === category ? styles.selectedCategory : ""}>{category}</li>)}
                </ul>
            </section>
            <section className={styles.filterCities}>
                <hr className={styles.divider} data-content="Cities" />
                <select name="cityQuery" onChange={setCityQuery}>
                    <option value="" selected={selectedCity === null}>All</option>
                    {cities.map((city) => <option key={city} value={city} selected={selectedCity === city} >{city}</option>)}
                </select>
            </section>
        </aside>
    )

}