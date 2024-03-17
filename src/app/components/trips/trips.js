'use client';

import { TripsService } from "@/services/tripsService";
import { useEffect, useState } from "react";
import Trip from "../trip/trip";
import styles from './trips.module.css';


function Trips() {

    const [trips, setTrips] = useState('');

    const api = TripsService();

    useEffect(() => {
        api.getTrips().then(res => {
            setTrips(res.data)
        }).catch(error => {
            console.error(error)
        })
    }, [])


  return (
    <div className={styles.ctTrips}>
        {
            !trips ? <h3 className={styles.txtError}>No hay destinos</h3> :
            trips.map((trip, index) => (
                <Trip trip={trip} key={index} />
            ))
        }
    </div>
  )
}

export default Trips