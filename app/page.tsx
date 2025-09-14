"use client";
import {UserButton} from "@clerk/nextjs";
import styles from "../styles/authLayout.module.css";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <UserButton afterSignOutUrl="/sign-in" />
    </main>
  );
}
