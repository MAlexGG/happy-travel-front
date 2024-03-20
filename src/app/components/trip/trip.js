import { useAuthContext } from '@/context/authContext';
import styles from './trip.module.css';
import Image from 'next/image';
import Link from 'next/link';
import edit from '../../../../public/Edit-icon.svg';
import del from '../../../../public/Delete-icon.svg';

function Trip({trip}) {

    const { title, location, image } = trip;
    const { isAuthenticated, userId } = useAuthContext();

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
        <div>
          <h6>{title}</h6>
          <p>{location}</p>
        </div>
        {
        isAuthenticated && userId === trip.user_id &&
        <div>
          <Link href='/'>
            <Image
            src={edit}
            height={40}
            width={40}
            alt='edit destination'
            />
          </Link>
          <Link href='/'>
            <Image
            src={del}
            height={40}
            width={40}
            alt='delete destination'
            />
          </Link>
        </div>
      }
      </div>
      
      
    </div>
  )
}

export default Trip