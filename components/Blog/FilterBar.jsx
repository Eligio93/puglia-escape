"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CityMultiSelect from "./CityMultiSelect";

export default function FilterBar({ tags }) {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setSelectedCategory(searchParams.get("category"));
    const cityParam = searchParams.get("city");
    setSelectedCities(cityParam ? cityParam.split(",") : []);
  }, [searchParams]);

  //get the categories from the tags
  const categories = tags.items
    .filter((tag) => tag.name.startsWith("Category:"))
    .map((tag) => tag.name.split(": ")[1]);
  //get the cities from the tags
  let cities = tags.items
    .filter((tag) => tag.name.startsWith("City:"))
    .map((tag) => tag.name.split(": ")[1]);
  //sort cities alphabetically
  cities = cities.sort();

  function setCategory(category) {
    const currentQuery = new URLSearchParams(searchParams.toString());
    if (currentQuery.has("searchValue")) {
      currentQuery.delete("searchValue");
    }
    //adds or updates the category
    if (category) {
      currentQuery.set("category", category);
    } else {
      currentQuery.delete("category");
    }
    setSelectedCategory(category);
    router.push(`/blog?${currentQuery.toString()}`);
  }

  function updateCities(updatedCities) {
    const currentQuery = new URLSearchParams(searchParams.toString());
    if (currentQuery.has("searchValue")) {
      currentQuery.delete("searchValue");
    }

    if (updatedCities.length) {
      currentQuery.set("city", updatedCities.join(","));
    } else {
      currentQuery.delete("city"); //remove the param when no city is selected
    }
    setSelectedCities(updatedCities);
    router.push(`/blog?${currentQuery.toString()}`);
  }

  return (
    <div className="flex flex-col gap-10">
      <section>
        <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          <li
            onClick={() => setCategory(null)}
            className={` ${selectedCategory === null ? "bg-terracotta font-dm-sans font-semibold text-white" : "border-terracotta font-light"} rounded-full border-1 px-4 py-1 hover:cursor-pointer`}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              onClick={(e) => setCategory(category)}
              className={` ${selectedCategory === category ? "bg-terracotta font-dm-sans font-semibold text-white" : "border-terracotta font-light"} rounded-full border-1 px-4 py-1 hover:cursor-pointer`}
            >
              {category}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-3">
        <CityMultiSelect
          cities={cities}
          selected={selectedCities}
          onChange={updateCities}
        />
      </section>
      <hr />
    </div>
  );
}
