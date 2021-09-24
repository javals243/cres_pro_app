import Head from "next/head";
import Image from "next/image";
import Toolbar from "../component/toolbar";
import styles from "../styles/Header.module.css"
export default function Home() {
  return <div className="page-container">

  <Toolbar />
      <div className={styles.main}>
          <h1>Next.js News App</h1>
          <h3>Your one stop shop for the last news articles </h3>
      </div>
  </div>;
}
