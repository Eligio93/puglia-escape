import styles from '@/styles/home.module.css'
import unescoIcon from '@/public/unescoIcon.svg'
import touristIcon from '@/public/touristIcon.svg'
import flagIcon from '@/public/flagIcon.svg'
import earthIcon from '@/public/earthIcon.svg'
import Image from 'next/image'

export default function HomeInfo() {
    return (
        <section className={styles.homeInfo}>

            <div className={styles.infoItem}>
                <Image
                    src={touristIcon}
                    alt="Tourist icon" />
                <p>16.3M</p>
                <p>Happy tourists per year</p>
            </div>

            <div className={styles.infoItem}>
                <Image
                    src={unescoIcon}
                    alt="Unesco icon" />
                <p>5</p>
                <p>Unesco World Heritage Sites</p>
            </div>

            <div className={styles.infoItem}>
                <Image
                    src={flagIcon}
                    alt="Flag Icon" />
                <p>24</p>
                <p>Blue flags for the best beaches in Europe</p>
            </div>

            <div className={styles.infoItem}>
                <Image
                    src={earthIcon}
                    alt="Earth Icon" />
                <p>1</p>
                <p>Happy place on Earth</p>
            </div>
        </section>
    )
}