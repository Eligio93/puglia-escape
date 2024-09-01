
import Image from 'next/image'
import categoryEatDrinkImage from '@/public/categoryEatDrink.jpg'
import categoryDiscoverImage from '@/public/categoryDiscover.jpg'
import styles from '@/styles/home.module.css'
import Link from 'next/link'
export default function CategoriesContainer() {
    return (
        <section className={styles.categoriesContainer}>
            <h2>Journey through Puglia</h2>
            <p>Explore our insights</p>

            <div className={styles.categories}>

                <div className={styles.category}>
                    <Image
                        src={categoryEatDrinkImage}
                        alt='Two guys walking in the streets of Puglia'
                        sizes="25vw"
                    />
                    <Link href={'/blog/categories/eat_drink'} className={styles.categoryCta}>
                        Eat/Drink
                    </Link>
                </div>

                <div className={styles.category}>
                    <Image
                        src={categoryDiscoverImage}
                        alt='Two guys walking in the streets of Puglia'
                        sizes="25vw"
                    />
                    <Link href={'/blog/categories/travel'} className={styles.categoryCta}>
                        Travel
                    </Link>

                </div>


                <div className={styles.category}>
                    <Image
                        src={categoryDiscoverImage}
                        alt='Two guys walking in the streets of Puglia'
                        sizes="25vw"
                    />
                    <Link href={'/blog/categories/discover'} className={styles.categoryCta}>
                        Discover
                    </Link>

                </div>
                <div className={styles.category}>
                    <Image
                        src={categoryDiscoverImage}
                        alt='Two guys walking in the streets of Puglia'
                        sizes="25vw"
                    />
                    <Link href={'/blog/categories/events'} className={styles.categoryCta}>
                        Events
                    </Link>
                </div>
            </div>
        </section >
    )
}