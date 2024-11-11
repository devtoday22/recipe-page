import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";



export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe page</title>
        <meta name="description" content="repice page app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body part of web app */}
      <main className={styles.mainContainer}>
        <div className={styles.coverImage}>
        <Image
          src="/image-omelette.jpeg"
          width={600}
          height={600}
          alt="Picture of the author"
        />
         </div>
         {/* Introduce part */}
         <div className={styles.introduce}>
          <div>
           <h1>Simple Omelette Recipe</h1> 
          </div>
          <div>
            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          </div>
         </div>
      </main>

     
    </>
  );
}
