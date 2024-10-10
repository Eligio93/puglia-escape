
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
                <div className={styles.category}>
                    <Image
                        src={categoryEatDrinkImage}
                        alt='A dinner table on the beach'
                    />
                    <Link href={'/blog?category=Eat+And+Drink'} className={styles.categoryCta}>
                        Eat and Drink
                    </Link>
                    <div className={styles.cover}></div>
                </div>

                <div className={styles.category}>
                    <Image
                        src={categoryExperienceImage}
                        alt='A person heading to the beach'
                    />
                    <Link href={'/blog?category=Experience'} className={styles.categoryCta}>
                        Experience
                    </Link>

                </div>


                <div className={styles.category}>
                    <Image
                        src={categoryDiscoverImage}
                        alt='Trullo at night with stars'
                    />
                    <Link href={'/blog?category=Discover'} className={styles.categoryCta}>
                        Discover
                    </Link>

                </div>
                <div className={styles.category}>
                    <Image
                        src={categoryEventsImage}
                        alt='Picture of the Polifonic Event in Puglia'
                    />
                    <Link href={'/blog?category=Events'} className={styles.categoryCta}>
                        Events
                    </Link>


                </div>
            </div>
        </section >
    )
}