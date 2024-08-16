
import { Toaster } from 'react-hot-toast';
import { Raleway } from 'next/font/google';
import Header from "@/components/Header/Header";
import "./globals.css";
import styles from "./layout.module.css"
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

const raleway = Raleway({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={styles.htmlSize}>
         <link rel="icon" type="image/png" href="/Logo.png" />
         <body className={`${raleway.className} ${styles.bodySize}`}>
         <Toaster
            reverseOrder={false}
            toastOptions={{
               style: {
                  fontSize: '1.5rem',
                  background: '#f0f0f0',
                  color: '#333',
                  border: '1px solid #ccc'
               },
            }}
         />
            <div className={`${styles.appContainer} ${styles.layoutDiv}`}>
               <div id={styles.header}>
                  <Header />
               </div>
               <div className={styles.navigation}>
                  <NavBar />
               </div>
               {children}
               <div id={styles.footer}>
                  <Footer />
               </div>
            </div>
         </body>
      </html>
   );
}
