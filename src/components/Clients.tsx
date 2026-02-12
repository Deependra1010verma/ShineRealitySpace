"use client";

import Image from "next/image";
import styles from "./Clients.module.css";

// Import all client images
import img1 from "../assets/clients/Pasted image.png";
import img2 from "../assets/clients/Pasted image (2).png";
import img3 from "../assets/clients/Pasted image (3).png";
import img4 from "../assets/clients/Pasted image (4).png";
import img5 from "../assets/clients/Pasted image (5).png";
import img6 from "../assets/clients/Pasted image (6).png";
import img7 from "../assets/clients/Pasted image (7).png";
import img8 from "../assets/clients/Pasted image (8).png";
import img9 from "../assets/clients/Pasted image (9).png";
import img10 from "../assets/clients/Pasted image (10).png";
import img11 from "../assets/clients/Pasted image (11).png";
import img12 from "../assets/clients/Pasted image (12).png";
import img13 from "../assets/clients/Pasted image (13).png";
import img14 from "../assets/clients/Pasted image (14).png";
import img15 from "../assets/clients/Pasted image (15).png";
import img16 from "../assets/clients/Pasted image (16).png";
import img17 from "../assets/clients/Pasted image (17).png";
import img18 from "../assets/clients/Pasted image (18).png";
import img19 from "../assets/clients/Pasted image (19).png";
import img20 from "../assets/clients/Pasted image (20).png";
import img21 from "../assets/clients/Pasted image (21).png";
import img22 from "../assets/clients/Pasted image (22).png";
import img23 from "../assets/clients/Pasted image (23).png";
import img24 from "../assets/clients/Pasted image (24).png";
import img25 from "../assets/clients/Pasted image (25).png";
import img26 from "../assets/clients/Pasted image (26).png";
import img27 from "../assets/clients/Pasted image (27).png";
import img28 from "../assets/clients/Pasted image (28).png";

const clients = [
    { id: 1, src: img1, alt: "Client 1" },
    { id: 2, src: img2, alt: "Client 2" },
    { id: 3, src: img3, alt: "Client 3" },
    { id: 4, src: img4, alt: "Client 4" },
    { id: 5, src: img5, alt: "Client 5" },
    { id: 6, src: img6, alt: "Client 6" },
    { id: 7, src: img7, alt: "Client 7" },
    { id: 8, src: img8, alt: "Client 8" },
    { id: 9, src: img9, alt: "Client 9" },
    { id: 10, src: img10, alt: "Client 10" },
    { id: 11, src: img11, alt: "Client 11" },
    { id: 12, src: img12, alt: "Client 12" },
    { id: 13, src: img13, alt: "Client 13" },
    { id: 14, src: img14, alt: "Client 14" },
    { id: 15, src: img15, alt: "Client 15" },
    { id: 16, src: img16, alt: "Client 16" },
    { id: 17, src: img17, alt: "Client 17" },
    { id: 18, src: img18, alt: "Client 18" },
    { id: 19, src: img19, alt: "Client 19" },
    { id: 20, src: img20, alt: "Client 20" },
    { id: 21, src: img21, alt: "Client 21" },
    { id: 22, src: img22, alt: "Client 22" },
    { id: 23, src: img23, alt: "Client 23" },
    { id: 24, src: img24, alt: "Client 24" },
    { id: 25, src: img25, alt: "Client 25" },
    { id: 26, src: img26, alt: "Client 26" },
    { id: 27, src: img27, alt: "Client 27" },
    { id: 28, src: img28, alt: "Client 28" },
];

const Clients = () => {
    return (
        <section className={styles.clients}>
            <div className={`container ${styles.clientsContainer}`}>
                <h2 className={styles.heading}>Our Esteemed Clients</h2>
                <div className={styles.marquee}>
                    <div className={styles.track}>
                        {clients.concat(clients).map((client, index) => (
                            <div key={`client-${index}`} className={styles.logoWrapper}>
                                <Image
                                    src={client.src}
                                    alt={client.alt}
                                    width={120}
                                    height={80}
                                    className={styles.logo}
                                    style={{ width: "auto", height: "auto", maxHeight: "60px", maxWidth: "150px" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
