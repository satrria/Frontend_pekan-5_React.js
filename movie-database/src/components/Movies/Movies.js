import styles from "./Movies.module.css";
import nangdee from './image/h.jpg';
import tenet from './image/Tenet_movie_poster.jpg';
import j from './image/j.jpg';
import venom from './image/Venom.png';
import rambo from './image/rambo.jpg';
import war from './image/war.jpg';
import G from './image/G.jpeg';
import cinema from './image/k.jpg';
import luca from './image/luca.jpg';
import raya from './image/rafa.jpg';
import RGW from './image/l.jpeg';


function Movies() {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={nangdee}
              alt="nangdee.com-2020"
              
            />
            <h3 className={styles.movie__title}>Nangdee.Com</h3>
            <p className={styles.movie__date}>2020</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={tenet}
              alt=""
            />
            <h3 className={styles.movie__title}>Tenet</h3>
            <p className={styles.movie__date}>2020</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image1}
              src={j}
              alt=""
            />
            <h3 className={styles.movie__title}>Dolittle</h3>
            <p className={styles.movie__date}>2020</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image2}
              src={venom}
              alt=""
            />
            <h3 className={styles.movie__title}>Venom 2</h3>
            <p className={styles.movie__date}>2021</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={rambo}
              alt=""
            />
            <h3 className={styles.movie__title}>RAMBO</h3>
            <p className={styles.movie__date}>2020</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={war}
              alt=""
            />
            <h3 className={styles.movie__title}>WAR</h3>
            <p className={styles.movie__date}>2019</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={G}
              alt=""
            />
            <h3 className={styles.movie__title}>BlackWidow</h3>
            <p className={styles.movie__date}>2021</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={cinema}
              alt=""
            />
            <h3 className={styles.movie__title}>Nightmare Cinema</h3>
            <p className={styles.movie__date}>2019</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={luca}
              alt=""
            />
            <h3 className={styles.movie__title}>Luca</h3>
            <p className={styles.movie__date}>2021</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={raya}
              alt=""
            />
            <h3 className={styles.movie__title}>Raya and the last dragon</h3>
            <p className={styles.movie__date}>2021</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={RGW}
              alt=""
            />
            <h3 className={styles.movie__title}>Ron's Gone Wrong</h3>
            <p className={styles.movie__date}>2021</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
