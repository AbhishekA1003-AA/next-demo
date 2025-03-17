"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

/**
 * A helper component for active link styling
 * @param param0 
 * @returns 
 */
const NavLink = ({ href, text, activePath }: { href: string; text: string; activePath: string }) => {
    const isActive = activePath === href;
    
    return (
        <Link href={href} className={`${styles.navLink} ${isActive ? styles.active : ""}`}>
            {text}
        </Link>
    )
}

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
  
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>MyApp</Link>
                
                {/* Desktop Menu */}
                <div className={styles.menu}>
                    <NavLink href="/" text="Home" activePath={pathname} />
                    <NavLink href="/ssr" text="SSR Page" activePath={pathname} />
                    
                    {/* Dropdown for Auth Links */}
                    
                    <div className={styles.dropdown}>
                        <button className={styles.dropdownButton}>Auth</button>
                        
                        <div className={styles.dropdownContent}>
                            <NavLink href="/auth/login" text="Login" activePath={pathname} />
                            <NavLink href="/auth/register" text="Register" activePath={pathname} />
                            <NavLink href="/auth/forgot-password" text="Forgot Password" activePath={pathname} />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {
                menuOpen && (
                    <div className={styles.mobileMenu}>
                        <NavLink href="/" text="Home" activePath={pathname} />
                        <NavLink href="/ssr" text="SSR Page" activePath={pathname} />
                        <NavLink href="/auth/login" text="Login" activePath={pathname} />
                        <NavLink href="/auth/register" text="Register" activePath={pathname} />
                        <NavLink href="/auth/forgot-password" text="Forgot Password" activePath={pathname} />
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar;