import Link from "next/link";
import styles from "./Properties.module.css";

const properties = [
    {
        id: 1,
        title: "Central Business Park",
        location: "Downtown District",
        size: "2,500 sq ft",
        price: "$3,500/mo",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Tech Hub Office",
        location: "Innovation Quarter",
        size: "1,200 sq ft",
        price: "$1,800/mo",
        image: "https://images.unsplash.com/photo-1497215438848-18ae455dccda?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Industrial Logistics Center",
        location: "Westside Industrial Zone",
        size: "10,000 sq ft",
        price: "$8,000/mo",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Skyline Executive Suites",
        location: "Financial District",
        size: "5,000 sq ft",
        price: "$6,500/mo",
        image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
    }
];

const Properties = () => {
    return (
        <section id="properties" className={styles.properties}>
            <div className={`container ${styles.propertiesContainer}`}>
                <h2 className={styles.heading}>Featured Properties</h2>
                <p className={styles.subheading}>Explore our latest available spaces</p>

                <div className={styles.grid}>
                    {properties.map((property) => (
                        <div key={property.id} className={styles.card}>
                            <div
                                className={styles.imagePlaceholder}
                                style={{ backgroundImage: `url(${property.image})` }}
                                role="img"
                                aria-label={`Image of ${property.title}`}
                            ></div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{property.title}</h3>
                                <p className={styles.location}>📍 {property.location}</p>
                                <div className={styles.details}>
                                    <span>📏 {property.size}</span>
                                    <span className={styles.price}>{property.price}</span>
                                </div>
                                <Link href="#enquiry" className={styles.enquireBtn}>
                                    Enquire Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Properties;
