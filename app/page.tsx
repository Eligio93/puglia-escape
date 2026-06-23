import Image from "next/image";
import heroImage from "@/public/PortaAzzurraOstuni.jpg";
import styles from "@/styles/home.module.css";
import CategoriesContainer from "@/components/Home/CategoriesContainer";
import LatestBlogPosts from "@/components/Home/LatestBlogPosts";
import FavouriteCities from "@/components/Home/FavouriteCities";
import Link from "next/link";

export const metadata = {
  title: "From Puglia to the World: Welcome to Puglia",
  description:
    "From Puglia, your insider’s guide to Puglia’s stunning coastlines, rich culture, and authentic cuisine. Discover destinations, hidden gems, and travel tips straight from the heel of Italy",
};

export default function Home() {
  return (
    <div>
      <div
        className={`relative mx-auto flex h-[calc(90vh-100px)] max-w-[1440px]`}
      >
        <Image
          src={heroImage}
          alt="picture of Porta Azzurra in Ostuni"
          className="h-auto rounded-lg object-cover"
          priority
        />
        <div
          className={`bg-terracotta absolute right-0 bottom-[15%] flex w-2/3 flex-col gap-5 rounded-l-lg p-5 lg:w-1/2`}
        >
          <h1 className="font-source-serif text-2xl font-semibold text-white lg:text-4xl">
            Your Guide to Puglia, to Dive Into the Heel of Italy’s Coastlines,
            Culture, and Culinary Secrets.
          </h1>
          <Link
            href="/blog"
            className="bg-dark-blue w-fit self-end rounded-sm p-2 text-sm font-semibold text-white lg:p-3"
          >
            Explore Blog
          </Link>
        </div>
      </div>
      <CategoriesContainer />
      <LatestBlogPosts />
      <FavouriteCities />
    </div>
  );
}
