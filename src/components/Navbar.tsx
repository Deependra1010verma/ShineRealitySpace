"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.jpeg";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={logo}
                        alt="Shine Realty Space"
                        width={180}
                        height={60}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={`${styles.bar} ${isOpen ? styles.active : ""}`}></div>
                    <div className={`${styles.bar} ${isOpen ? styles.active : ""}`}></div>
                    <div className={`${styles.bar} ${isOpen ? styles.active : ""}`}></div>
                </div>

                <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
                    <li className={styles.navItem}>
                        <Link href="/" className={styles.navLink} onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#properties" className={styles.navLink} onClick={toggleMenu}>
                            Properties
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#about" className={styles.navLink} onClick={toggleMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#enquiry" className={styles.navLink} onClick={toggleMenu}>
                            Enquiry now
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#contact" className={styles.navLink} onClick={toggleMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
