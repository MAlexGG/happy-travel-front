import { AuthContext, useAuthContext } from '@/context/authContext';
import styles from './trip.module.css';
import Image from 'next/image';

function Trip({trip}) {

    const { title, location, image } = trip;
    const { isAuthenticated } = useAuthContext();

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
      {
        isAuthenticated && 
        <div>
          <p>edit</p>
          <p>delete</p>
      </div>
      }
      
    </div>
  )
}

export default Trip