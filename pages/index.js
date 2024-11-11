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
         {/* Preparation time part component */}
         <div className={styles.preparation}>
          <h2>Preparation time</h2>
          <ul>
            <li>
              Total: Approximately 10 minutes
              </li>
              <li>
              Preparation 5 minutes
              </li>
              <li>
              Coocing 5 minutes
              </li>
          </ul>
         </div>
         {/* Ingredients component */}
         <div className={styles.ingredients}>
          <h2>Ingredients</h2>
            <ul>
              <li>
                2-3 large eggs
                </li>
                <li>
                Salt, to taste
                </li>
                <li>
                Pepper, to taste
                </li>
                <li>
                1 tablespoon of butter or oil
                </li>
                <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
                </li>
            </ul>
         </div>
         {/* Instructions component part*/}
         <div className={styles.instructions}>
          <h2>Instructions</h2>
          <ol>
            <li>
            Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.You can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
            Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li>
            Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
            Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
            Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            <li>
            Enjoy: Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
         </div>


      </main>

     
    </>
  );
}
