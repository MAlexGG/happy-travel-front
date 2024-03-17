import Navbar from "./components/navbar/navbar";
import Trips from "./components/trips/trips";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Trips/>
    </main>
  );
}
