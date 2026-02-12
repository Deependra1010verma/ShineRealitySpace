import styles from "./Services.module.css";

const services = [
    {
        title: "Office Spaces for Lease",
        description: "Modern, fully-equipped office spaces designed for productivity and collaboration.",
        icon: "🏢"
    },
    {
        title: "Industrial Warehouses",
        description: "Spacious and secure warehousing solutions for your logistics and storage needs.",
        icon: "🏭"
    },
    {
        title: "Commercial Buildings",
        description: "Prime commercial real estate in high-traffic areas for maximum visibility.",
        icon: "🏬"
    },
    {
        title: "Property Consultation",
        description: "Expert advice on leasing terms, market trends, and property valuation.",
        icon: "🤝"
    }
];

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={`container ${styles.servicesContainer}`}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Our Services</h2>
                    <p className={styles.subheading}>Comprehensive Real Estate Solutions</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
