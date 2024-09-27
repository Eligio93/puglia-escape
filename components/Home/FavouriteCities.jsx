import styles from '@/styles/home.module.css'
import bariImg from '@/public/bari.jpg'
import lecceImg from '@/public/lecce.jpg'
import monopoliImg from '@/public/monopoli.jpg'
import polignanoImg from '@/public/polignanoAMare.jpg'
import gallipoliImg from '@/public/gallipoli.jpg'
import ostuniImg from   '@/public/ostuni.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function FavouriteCities() {
    return (
        <section className={styles.favouriteCities}>
            <h2>Our Favourite Cities</h2>
            <div className={styles.citiesGrid}>
                <Link href='/blog?city=lecce' className={styles.gridItemLecce}>
                    <Image
                        src={lecceImg}
                        alt='Duomo of Lecce'
                    />
                    <p>Lecce</p>
                </Link>
                <Link href='/blog?city=monopoli' className={styles.gridItemMonopoli}>
                    <Image
                        src={monopoliImg}
                        alt='Bay of Monopoli City'
                    />
                    <p>Monopoli</p>
                </Link>
                <Link href='/blog?city=polignano' className={styles.gridItemPolignano}>
                    <Image
                        src={polignanoImg}
                        alt='High picture of Polignano a Mare'
                    />
                    <p>Polignano A Mare</p>
                </Link>
                <Link href='/blog?city=gallipoli' className={styles.gridItemGallipoli}>
                    <Image
                        src={gallipoliImg}
                        alt='Harbour of Gallipoli'
                    />
                    <p>Gallipoli</p>
                </Link>
                <Link href='/blog?city=bari' className={styles.gridItemBari}>
                    <Image
                        src={bariImg}
                        alt='Bari Theatre'
                    />
                    <p>Bari</p>
                </Link>
                <Link href='/blog?city=ostuni' className={styles.gridItemOstuni}>
                    <Image
                        src={ostuniImg}
                        alt='High Picture of Ostuni'
                    />
                    <p>Ostuni</p>
                </Link>
            </div>

        </section>
    )
}
