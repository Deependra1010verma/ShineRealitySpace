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
                    {/* Google Markets Embed Placeholder */}
                    <div className={styles.mapPlaceholder}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184126272442!2d-73.9854283234255!3d40.74844057138814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1709664551381!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
