'use client';

import Trip from "../trip/trip";
import styles from './trips.module.css';


function Trips({trips}) {

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