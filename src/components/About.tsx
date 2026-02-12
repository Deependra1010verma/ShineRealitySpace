import styles from "./About.module.css";

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={`container ${styles.aboutContainer}`}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>About Shine Reality Space</h2>
                    <p className={styles.subheading}>Your Trusted Partner in Commercial Leasing</p>
                    <p className={styles.text}>
                        Shine Reality Space is a premier commercial real estate leasing company dedicated to connecting businesses with their ideal workspaces. With years of expertise in the property market, we specialize in providing top-tier office and industrial spaces that foster growth and innovation.
                    </p>
                    <p className={styles.text}>
                        Our mission is to simplify the leasing process while offering transparent, value-driven solutions tailored to your unique business needs. Whether you're a startup looking for a modern office or an enterprise seeking a large-scale industrial warehouse, we have the perfect space for you.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Years of Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Properties Leased</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Client Satisfaction</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        {/* Placeholder for About Image - could lead to a real image later */}
                        <span>About Us Image</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
