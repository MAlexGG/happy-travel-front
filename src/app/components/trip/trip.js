import styles from './trip.module.css';
import test from './2021-03-19.jpg';
import Image from 'next/image';

function Trip({trip}) {

    const { title, location } = trip;
  return (
    <div className={styles.ctTrip}>
      <div className={styles.ctImg}>
        <Image
          src={test}
          height={300}
          width={300}
          alt={title}
        />
      </div>
      
      <div className={styles.ctTxt}>
          <h6>{title}</h6>
          <p>{location}</p>
      </div>
    </div>
  )
}

export default Trip