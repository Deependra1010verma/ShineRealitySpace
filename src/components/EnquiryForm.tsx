"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./EnquiryForm.module.css";

const EnquiryForm = ({ onSuccess, source = "Website" }: { onSuccess?: () => void, source?: string }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        requirement: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || serviceId === "YOUR_SERVICE_ID") {
            alert("EmailJS is not configured. Please check your .env.local file.");
            console.error("Missing EmailJS environment variables");
            setIsSubmitting(false);
            return;
        }

        try {
            // Prepare template parameters to match your EmailJS template
            const templateParams = {
                fullName: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                requirement: formData.requirement,
                message: formData.message,
                source: source,
                to_name: "Admin", // Or whoever receives the email
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            console.log("Form submitted via EmailJS:", formData);
            alert("Thank you for your enquiry. We will contact you shortly.");
            setFormData({ fullName: "", phone: "", email: "", requirement: "", message: "" });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send enquiry. Please try again later or contact us via WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
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
                    placeholder="Full Name"
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
                        placeholder="+919876543210"
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
                        placeholder="shine@gmail.com"
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

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
        </form>
    );
};

export default EnquiryForm;
