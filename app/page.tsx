import {UserButton} from "@clerk/nextjs";
import styles from "../styles/authLayout.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserButton />
    </main>
  );
}
