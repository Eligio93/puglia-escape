'use client'
import Image from 'next/image'


import categoryDiscoverImage from '@/public/categoryDiscover.jpg'
import styles from '@/styles/categoriesContainer.module.css'
export default function CategoriesContainer() {
    return (
        <section className={styles.categoriesContainer}>
            <h2>Journey through Puglia</h2>
            <p>Explore our insights</p>

            <div className={styles.categories}>
                <div className={styles.category}>
                    <Image
                        src={categoryDiscoverImage}
                        alt='Two guys walking in the streets of Puglia'
                        sizes="25vw"
                    />
                    <div className={styles.categoryCta}>
                        <button> Eat/Drink</button>
                    </div>

                </div>
                <div className={styles.category}>
                    <Image
                        src={categoryDiscoverImage}
                        alt='Two guys walking in the streets of Puglia'
                        sizes="25vw"
                    />
                    <div className={styles.categoryCta}>
                        <button> Travel</button>
                    </div>

                </div>
                <div className={styles.category}>
                    <Image
                        src={categoryDiscoverImage}
                        alt='Two guys walking in the streets of Puglia'
                        sizes="25vw"
                    />
                    <div className={styles.categoryCta}>
                        <button>Discover</button>
                    </div>


                </div>
                <div className={styles.category}>
                    <Image
                        src={categoryDiscoverImage}
                        alt='Two guys walking in the streets of Puglia'
                        sizes="25vw"
                    />
                    <div className={styles.categoryCta}>
                        <button onClick={()=>alert('ciao')}> Events</button>
                    </div>

                </div>



            </div>

        </section>
    )
}