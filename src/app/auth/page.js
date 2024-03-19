'use client'

import { useEffect, useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Trips from '../components/trips/trips';
import styles from '../page.module.css';
import { TripsService } from '@/services/tripsService';

function Page() {

  const [tripsAuth, setTripsAuth] = useState();
  const api = TripsService();

  useEffect(() => {
    api.getTripsOrderByAuthUser().then(res => {
      setTripsAuth(res.data)
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div className={styles.main}>
      <Navbar/>
      <Trips trips={tripsAuth}/>

    </div>
    
  )
}

export default Page