import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={`container ${styles.contactContainer}`}>
                <div className={styles.info}>
                    <h2 className={styles.heading}>Contact Us</h2>
                    <p className={styles.subheading}>Get in touch with our expert team today.</p>

                    <div className={styles.details}>
                        <div className={styles.detailItem}>
                            <span className={styles.icon}>📍</span>
                            <div>
                                <h3 className={styles.label}>Office Address</h3>
                                <p>E-48, Block E, Third Floor<br />Sector-3, Noida 201301</p>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <span className={styles.icon}>📞</span>
                            <div>
                                <h3 className={styles.label}>Phone Number</h3>
                                <p><a href="tel:+918368381334">+91 8368381334</a></p>
                                <p><a href="tel:+919455041161">+91 9455041161</a></p>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <span className={styles.icon}>✉️</span>
                            <div>
                                <h3 className={styles.label}>Email Address</h3>
                                <p><a href="mailto:shinerealtyspace24@gmail.com">shinerealtyspace24@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.map}>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=E-48,+Block+E,+Sector-3,+Noida+201301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mapLink}
                        title="Click to open in Google Maps"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.580630733568!2d77.31976697621455!3d28.58235288636195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f6578054b%3A0x6b87640245050df5!2sE-48%2C%20Block%20E%2C%20Sector%203%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1709664551381!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, pointerEvents: "none" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
