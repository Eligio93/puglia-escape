'use client'
import { useSearchParams, useRouter } from "next/navigation"


export default function FilterBar({ tags }) {

    const router = useRouter();
    const searchParams = useSearchParams();



    //get the categories from the tags
    const categories = tags.items.filter((tag) => tag.name.startsWith('Category:')).map((tag) => tag.name.split(': ')[1])
    //get the cities from the tags
    const cities = tags.items.filter((tag) => tag.name.startsWith('City:')).map((tag) => tag.name.split(': ')[1])



    function setCategory(category) {
        const currentQuery = new URLSearchParams(searchParams.toString());
        //adds or updates the category
        currentQuery.set('category', category);
        router.push(`/blog?${currentQuery.toString()}`);
    }

    function setCityQuery(e) {
        const city = e.target.value;
        const currentQuery = new URLSearchParams(searchParams.toString());
        if (city) {
            currentQuery.set('city', city);  //update the city with the new city selected
        } else {
            currentQuery.delete('city');     //remove the city if All is selected
        }
        router.push(`/blog?${currentQuery.toString()}`);
    }

    return (
        <aside className="filterBar">
            <div className="filterCategories">
                <p>Categories</p>
                <ul>
                    {categories.map((category) => <li key={category} onClick={() => setCategory(category)}>{category}</li>)}
                </ul>
            </div>
            <div className="filterCities">
                <p>Cities</p>
                <select name="cityQuery" onChange={setCityQuery}>
                    <option value="">All</option>
                    {cities.map((city) => <option key={city} value={city} >{city}</option>)}
                </select>
            </div>
        </aside>
    )

}