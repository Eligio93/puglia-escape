import styles from '@/styles/home.module.css'
import bariImg from '@/public/bari.jpg'
import lecceImg from '@/public/lecce.jpg'
import monopoliImg from '@/public/monopoli.jpg'
import polignanoImg from '@/public/polignanoAMare.jpg'
import gallipoliImg from '@/public/gallipoli.jpg'
import ostuniImg from '@/public/ostuni.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function FavouriteCities() {
    return (
        <section className={styles.favouriteCities}>
            <h2>Our Favourite Cities</h2>
            <p>From historic architecture to lively streets and breathtaking views, these cities capture the heart of Puglia and offer unique experiences that highlight the essence of this remarkable region.</p>
            <hr />
            <div className={styles.citiesGrid}>
                <Link href='/blog?city=Lecce' className={styles.gridItemLecce}>
                    <Image
                        src={lecceImg}
                        alt='Duomo of Lecce'
                    />
                    <p>Lecce</p>
                </Link>
                <Link href='/blog?city=Monopoli' className={styles.gridItemMonopoli}>
                    <Image
                        src={monopoliImg}
                        alt='Bay of Monopoli City'
                    />
                    <p>Monopoli</p>
                </Link>
                <Link href='/blog?city=Polignano A Mare' className={styles.gridItemPolignano}>
                    <Image
                        src={polignanoImg}
                        alt='High picture of Polignano a Mare'
                    />
                    <p>Polignano A Mare</p>
                </Link>
                <Link href='/blog?city=Gallipoli' className={styles.gridItemGallipoli}>
                    <Image
                        src={gallipoliImg}
                        alt='Harbour of Gallipoli'
                    />
                    <p>Gallipoli</p>
                </Link>
                <Link href='/blog?city=Bari' className={styles.gridItemBari}>
                    <Image
                        src={bariImg}
                        alt='Margherita Theater in Bari'
                    />
                    <p>Bari</p>
                </Link>
                <Link href='/blog?city=Ostuni' className={styles.gridItemOstuni}>
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
