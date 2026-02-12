import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.jpeg";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={logo}
                            alt="Shine Reality Space"
                            width={150}
                            height={50}
                            className={styles.logoImage}
                        />
                    </Link>
                    <p className={styles.description}>
                        Premium commercial real estate solutions for your business growth.
                    </p>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Quick Links</h4>
                    <ul className={styles.linkList}>
                        <li><Link href="/" className={styles.link}>Home</Link></li>
                        <li><Link href="#properties" className={styles.link}>Properties</Link></li>
                        <li><Link href="#about" className={styles.link}>About Us</Link></li>
                        <li><Link href="#contact" className={styles.link}>Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Contact Us</h4>
                    <address className={styles.address}>
                        <p>123 Business Park, Suite 100</p>
                        <p>Metro City, ST 12345</p>
                        <p><a href="tel:+1234567890" className={styles.link}>+1 (234) 567-890</a></p>
                        <p><a href="mailto:info@shinereality.com" className={styles.link}>info@shinereality.com</a></p>
                    </address>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Follow Us</h4>
                    <div className={styles.socials}>
                        {/* Social Icons placeholders */}
                        <a href="#" className={styles.socialLink}>FB</a>
                        <a href="#" className={styles.socialLink}>IN</a>
                        <a href="#" className={styles.socialLink}>TW</a>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <div className="container">
                    <p>© 2026 Shine Reality Space. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
