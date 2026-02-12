"use client";

import { useState, useEffect } from "react";
import EnquiryForm from "./EnquiryForm";
import styles from "./EnquiryPopup.module.css";

const EnquiryPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenClosed, setHasBeenClosed] = useState(false);

    useEffect(() => {
        // Show popup after 3 seconds if it hasn't been closed before
        const timer = setTimeout(() => {
            const closedInSession = sessionStorage.getItem("enquiryPopupClosed");
            if (!closedInSession) {
                setIsVisible(true);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setHasBeenClosed(true);
        sessionStorage.setItem("enquiryPopupClosed", "true");
    };

    const handleSuccess = () => {
        // Optional: Close popup on success after a delay or immediately
        setTimeout(() => {
            handleClose();
        }, 2000);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={handleClose} aria-label="Close popup">
                    &times;
                </button>

                <div className={styles.header}>
                    <h2 className={styles.heading}>Get in Touch</h2>
                    <p className={styles.subheading}>Looking for the perfect space? Let us help you.</p>
                </div>

                <div className={styles.formContainer}>
                    <EnquiryForm onSuccess={handleSuccess} />
                </div>
            </div>
        </div>
    );
};

export default EnquiryPopup;
