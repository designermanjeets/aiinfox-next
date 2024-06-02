import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface DataScienceProps {}

export default function DataScience(props: DataScienceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DataScience!</h1>
    </div>
  );
}
