import React from "react";
import styles from "../../styles/authLayout.module.css";
import Image from "next/image";
import authImage from "../../public/images/auth.png";
export const metadata = {
  title: "Authentication",
};

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>{children}</div>
        <div className={styles.right}>
          <Image
            src={authImage}
            alt="Authentication Image"
            width={400}
            height={480}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
