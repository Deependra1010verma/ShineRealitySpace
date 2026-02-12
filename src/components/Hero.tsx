import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.heroContainer}`}>
                <h1 className={styles.headline}>
                    Premium Office & Industrial Spaces for Lease
                </h1>
                <p className={styles.subheadline}>
                    Helping businesses find the perfect workspace solutions.
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="#properties" className={`${styles.btn} ${styles.btnPrimary}`}>
                        View Properties
                    </Link>
                    <Link href="#enquiry" className={`${styles.btn} ${styles.btnSecondary}`}>
                        Enquire Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
