"use client";

import { useState } from "react";
import styles from "./EnquiryForm.module.css";

const EnquiryForm = ({ onSuccess }: { onSuccess?: () => void }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        requirement: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log("Form submitted:", formData);
        alert("Thank you for your enquiry. We will contact you shortly.");
        setFormData({ fullName: "", phone: "", email: "", requirement: "", message: "" });
        if (onSuccess) onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="John Doe"
                />
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="+1 (555) 000-0000"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="requirement" className={styles.label}>Property Requirement</label>
                <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    className={styles.select}
                >
                    <option value="">Select Requirement</option>
                    <option value="Office Space">Office Space</option>
                    <option value="Industrial Warehouse">Industrial Warehouse</option>
                    <option value="Retail Space">Retail Space</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={styles.textarea}
                    placeholder="Details about your requirement..."
                ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
                Submit Enquiry
            </button>
        </form>
    );
};

export default EnquiryForm;
