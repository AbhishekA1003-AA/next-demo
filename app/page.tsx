import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Our Website</h1>
          <p className={styles.heroSubtitle}>Experience the best services with us.</p>
          <Link href="/auth/register" className={styles.heroButton}>
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>Our Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🚀</span>
            <h3>Fast Performance</h3>
            <p>Optimized for speed and reliability.</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🔒</span>
            <h3>Secure Platform</h3>
            <p>Top-notch security to keep your data safe.</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>⚡</span>
            <h3>Seamless Experience</h3>
            <p>Easy to use and navigate.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
