import styles from './trip.module.css';
import Image from 'next/image';

function Trip({trip}) {

    const { title, location, image } = trip;

  return (
    <div className={styles.ctTrip}>
      <div className={styles.ctImg}>
        <Image
          src={`http://localhost:8000/storage/${image}`}
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