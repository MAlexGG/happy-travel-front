'use client'

import { TripsService } from "@/services/tripsService";
import Navbar from "./components/navbar/navbar";
import Trips from "./components/trips/trips";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {

  const [trips, setTrips] = useState('');

  const api = TripsService();

    useEffect(() => {
        api.getTrips().then(res => {
            setTrips(res.data)
        }).catch(error => {
            console.error(error)
        })
    }, []);

  return (
    <main className={styles.main}>
      <Navbar/>
      <Trips trips={trips}/>
    </main>
  );
}
