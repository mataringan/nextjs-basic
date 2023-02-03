import Layout from "@/components/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image src="/photo.jpg" alt="photo" width={500} height={500} />
        <h1 className={styles["title-homepage"]}>Welcome Taofik</h1>
      </Layout>
    </>
  );
}
