
import Image from 'next/image'
import categoryEatDrinkImage from '@/public/categoryEatDrink.jpg'
import categoryExperienceImage from '@/public/categoryExperience.jpg'
import categoryDiscoverImage from '@/public/categoryDiscover.jpg'
import categoryEventsImage from '@/public/categoryEvents.jpg'
import styles from '@/styles/home.module.css'
import Link from 'next/link'
export default function CategoriesContainer() {
    return (
        <section className={styles.categoriesContainer}>
            <h2>Unveiling the Heart of Puglia</h2>
            <p>Discover hidden gems, immerse yourself in unique experiences, and explore all that Puglia has to offer. Navigate through authentic journeys and unforgettable moments that bring the essence of this extraordinary region to life</p>
            <hr />
            <div className={styles.categories}>

                <Link href={'/blog?category=Eat+And+Drink'} className={styles.category}>
                    <Image
                        src={categoryEatDrinkImage}
                        alt='A dinner table on the beach'
                    />
                    <div className={styles.categoryCta}>
                        Eat and Drink
                    </div>
                    {/* <div className={styles.cover}></div> */}
                </Link>

                <Link href={'/blog?category=Experience'} className={styles.category}>
                    <Image
                        src={categoryExperienceImage}
                        alt='A person heading to the beach'
                    />
                    <div className={styles.categoryCta}>
                        Experience
                    </div>

                </Link>


                <Link href={'/blog?category=Discover'} className={styles.category}>
                    <Image
                        src={categoryDiscoverImage}
                        alt='Trullo at night with stars'
                    />
                    <div className={styles.categoryCta}>
                        Discover
                    </div>

                </Link>
                <Link href={'/blog?category=Events'} className={styles.category}>
                    <Image
                        src={categoryEventsImage}
                        alt='Picture of the Polifonic Event in Puglia'
                    />
                    <div className={styles.categoryCta}>
                        Events
                    </div>


                </Link>
            </div>
        </section >
    )
}