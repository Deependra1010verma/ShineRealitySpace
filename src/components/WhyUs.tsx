import styles from "./WhyUs.module.css";

const benefits = [
    {
        title: "Trusted Service",
        description: "Built on integrity and transparency, ensuring your interests come first.",
        icon: "🛡️"
    },
    {
        title: "Verified Properties",
        description: "Every listing is thoroughly inspected and verified for quality and compliance.",
        icon: "✅"
    },
    {
        title: "Transparent Deals",
        description: "No hidden fees or surprises. We believe in clear, honest communication.",
        icon: "📝"
    },
    {
        title: "Dedicated Support",
        description: "Our expert team is with you at every step, from viewing to signing.",
        icon: "🤝"
    }
];

const WhyUs = () => {
    return (
        <section className={styles.whyUs}>
            <div className={`container ${styles.whyUsContainer}`}>
                <h2 className={styles.heading}>Why Choose Us</h2>
                <p className={styles.subheading}>Committed to excellence in commercial leasing</p>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.iconWrapper}>{benefit.icon}</div>
                            <h3 className={styles.itemTitle}>{benefit.title}</h3>
                            <p className={styles.itemDescription}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
