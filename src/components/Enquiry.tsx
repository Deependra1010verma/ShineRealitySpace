"use client";

import styles from "./Enquiry.module.css";
import EnquiryForm from "./EnquiryForm";

const Enquiry = () => {
    return (
        <section id="enquiry" className={styles.enquiry}>
            <div className={`container ${styles.enquiryContainer}`}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Enquire Now</h2>
                    <p className={styles.subheading}>Tell us your requirements and we'll find the perfect space for you.</p>
                </div>

                <div className={styles.formWrapper}>
                    <EnquiryForm />

                    <div className={styles.whatsappContainer}>
                        <p>Or chat with us directly:</p>
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                        >
                            <span className={styles.whatsappIcon}>💬</span> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enquiry;
