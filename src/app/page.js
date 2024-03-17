import Navbar from "./components/navbar/navbar";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <h1>Happy Travel</h1>
      <Link href={'/login'}>Login</Link>
    </main>
  );
}
