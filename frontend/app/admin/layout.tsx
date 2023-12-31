import type { Metadata } from 'next'
import styles from './styles/layout.module.css'
import Header from './components/header/Header'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
    title: 'Next.js | 管理画面',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.wrap}>
            <div className={styles.flexColumn}>
                <Header />
                {children}
            </div>
            <Toaster />
        </div>
    )
}
