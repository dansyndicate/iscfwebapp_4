import Link from 'next/link';

import styles from '../styles/Home.module.css'
export default function Layout({ children }){
    return (
        <div>
            <main>{children}</main>
            <div className={styles.backToHome}>
                <Link href= '/'>← Back to home</Link>
            </div>
        </div>
    )
}