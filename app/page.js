import Image from "next/image";
import heroImage from '@/public/PortaAzzurraOstuni.jpg'
import styles from '@/styles/home.module.css'
import CategoriesContainer from "@/components/Home/CategoriesContainer";
import LatestBlogPosts from "@/components/Home/LatestBlogPosts";
import HomeInfo from "@/components/Home/HomeInfo";
import FavouriteCities from "@/components/Home/FavouriteCities";
import Link from "next/link";

export const metadata = {
  title: "Home - From Puglia",
  description: "From Puglia, your insider’s guide to Puglia’s stunning coastlines, rich culture, and authentic cuisine. Discover destinations, hidden gems, and travel tips straight from the heel of Italy",
};

export default function Home() {

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <Image
          src={heroImage}
          alt="picture of Porta Azzurra in Ostuni"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
          priority
        />
        <section className={styles.heroDescription}>
          <p>FROM PUGLIA</p>
          <h1>Your Guide to Puglia, to Dive Into the Heel of Italy’s Coastlines, Culture, and Culinary Secrets.</h1>
          <Link href='/blog' className={styles.exploreBlogBtn}>Explore Blog</Link>
        </section>
      </div>
      <CategoriesContainer />
      <LatestBlogPosts />
      <HomeInfo />
      <FavouriteCities />

    </div>
  )
}
