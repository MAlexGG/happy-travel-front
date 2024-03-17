import Image from 'next/image';
import logo from '../../../../public/Logo.svg';
import home from '../../../../public/Home-icon.svg';
import avatar from '../../../../public/Avatar-icon.svg';
import styles from './navbar.module.css';
import Link from 'next/link';

function Navbar() {

  return (
    <header className={styles.ctHeader}>
      <Image
        src={logo}
        width={165}
        height={78}
      />
      <nav className={styles.ctNav}>
        <Link href={'/'}>
          <Image
            src={home}
            width={40}
            height={40}
          />
        </Link>
        <Link href={'/login'}>
          <Image
            src={avatar}
            width={40}
            height={40}
          />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar