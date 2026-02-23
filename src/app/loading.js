import styles from './Loading.module.css';

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinnerWrapper}>
                <div className={styles.spinner}></div>
                <div className={styles.spinnerRing}></div>
            </div>
            <p className={styles.loadingText}>Loading...</p>
        </div>
    );
}