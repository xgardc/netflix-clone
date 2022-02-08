import Link from "next/link";
import { Avatar, Gift, Netflix, Notification, Search } from "./Icons";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Netflix />
        </div>
        <nav className={styles.nav}>
          <Link href="#">
            <a className={styles.active}>Ana Sayfa</a>
          </Link>
          <Link href="#">
            <a>Diziler</a>
          </Link>
          <Link href="#">
            <a>Filmler</a>
          </Link>
          <Link href="#">
            <a>Yeni ve Popüler</a>
          </Link>
          <Link href="#">
            <a>Listem</a>
          </Link>
        </nav>
      </div>
      <div className={`${styles.container} ${styles.right}`}>
        <Link href="#">
          <a>
            <Search />
          </a>
        </Link>
        <Link href="#">
          <a>Çocuk</a>
        </Link>
        <Link href="#">
          <a>
            <Gift />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Notification />
          </a>
        </Link>
        <div className={styles["dropdown-container"]}>
          <button className={styles["dropdown-button"]}>
            <Avatar />
          </button>
          <nav>
            <Link href="#">
              <a className={styles.profile}>
                <Avatar />
                <p>Efe</p>
              </a>
            </Link>
            <Link href="#">
              <a>Hesap Yönetimi</a>
            </Link>
            <Link href="#">
              <a>Çıkış</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
