'use client'
import { useSearchParams, useRouter } from "next/navigation"
import styles from '@/styles/blog.module.css'
import { useState } from "react";


export default function FilterBar({ tags }) {
    const [selectedCategory,setSelectedCategory] = useState(null)
    const router = useRouter();
    const searchParams = useSearchParams();



    //get the categories from the tags
    const categories = tags.items.filter((tag) => tag.name.startsWith('Category:')).map((tag) => tag.name.split(': ')[1])
    //get the cities from the tags
    const cities = tags.items.filter((tag) => tag.name.startsWith('City:')).map((tag) => tag.name.split(': ')[1])



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
                    <li onClick={() => setCategory(null)} className={selectedCategory === null && styles.selectedCategory}>All</li>
                    {categories.map((category) =>
                        <li key={category} onClick={(e) => setCategory(category)} className={selectedCategory === category ? styles.selectedCategory : ""}>{category}</li>)}
                </ul>
            </section>
            <section className={styles.filterCities}>
                <hr className={styles.divider} data-content="Cities" />
                <select name="cityQuery" onChange={setCityQuery}>
                    <option value="">All</option>
                    {cities.map((city) => <option key={city} value={city} >{city}</option>)}
                </select>
            </section>
        </aside>
    )

}