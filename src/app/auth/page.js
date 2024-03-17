'use client'

import styles from '../page.module.css';
import Link from 'next/link';

function Page() {

  return (
    <div className={styles.main}>
      <h2>Rutas privadas</h2>
      <p>Esto puedes verlo solo si estás autenticado y autorizado</p>
      <Link href="/auth/logout">Logout</Link>
    </div>
    
  )
}

export default Page