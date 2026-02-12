import Image from "next/image";
import styles from "./Clients.module.css";

const clients = [
    { name: "CoinCRED", industry: "Finance" },
    { name: "CounselIndia", industry: "Education" },
    { name: "AVCOM Infotech Pv Ltd", industry: "Technology" },
    { name: "Inverted", industry: "Energy" },
    { name: "PAHAL Design", industry: "Education" },
    { name: "SpecialChem", industry: "Chemicals" },
    { name: "Design Indya", industry: "Media" },
    { name: "Romsons", industry: "Healthcare" },
    { name: "Innovate Research", industry: "Research" },
    { name: "Blissful Emerging Technologies", industry: "Technology" },
    { name: "Tech Field", industry: "Technology" },
    { name: "Sakshi TV", industry: "Media" },
    { name: "Jetking", industry: "Education" },
    { name: "i Standards Solutions", industry: "Consulting" },
    { name: "Everfast Freight Forwarders", industry: "Logistics" },
    { name: "Qspear", industry: "Business Services" }
];

const Clients = () => {
    return (
        <section className={styles.clients}>
            <div className={`container ${styles.clientsContainer}`}>
                <h2 className={styles.heading}>Our Clients</h2>
                <div className={styles.underline}></div>
                <p className={styles.subheading}>Trusted by leading companies across industries</p>

                <div className={styles.clientImages}>
                    <Image src="/clients1.jpg" alt="Our Clients 1" width={400} height={200} className={styles.clientImg} />
                    <Image src="/clients2.jpg" alt="Our Clients 2" width={400} height={200} className={styles.clientImg} />
                    <Image src="/clients3.jpg" alt="Our Clients 3" width={400} height={200} className={styles.clientImg} />
                </div>

                <div className={styles.logoGrid}>
                    {clients.map((client, index) => (
                        <div key={index} className={styles.logoCard}>
                            <span className={styles.clientName}>{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
