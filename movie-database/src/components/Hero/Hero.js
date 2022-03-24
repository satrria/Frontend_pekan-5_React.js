import styles from "./Hero.module.css";
import spiderman from './image/spiderman1.jpg'

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>SPIDER-MAN</h2>
          <h4 className={styles.hero__judul}>Homecoming</h4>
          <h3 className={styles.hero__genre}>
            Genre: Action, Adventure, Sci-Fi
          </h3>
          <p className={styles.hero__description}>
          Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={spiderman}
            alt="spiderman-home-coming "
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
