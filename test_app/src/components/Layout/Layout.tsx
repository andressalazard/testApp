import React from "react";
import Head from "next/head";
import styles from "./Layout.module.css";
import { UserContext } from "../../contexts/PostContext";

function Layout({ children, title = "Test App" }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>HEADER</header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Developed by{" "}
        <a href="https://github.com/andressalazard/">Andrés Salazar</a>
      </footer>
    </div>
  );
}

export default Layout;
