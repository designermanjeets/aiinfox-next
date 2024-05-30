import styles from './page.module.scss';
import Home from './home/page';
import AboutusPage from './aboutus/page';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <AboutusPage></AboutusPage>
        </div>
      </div>
    </div>
  );
}
