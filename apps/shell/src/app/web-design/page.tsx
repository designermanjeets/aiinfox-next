import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface WebDesignProps {}

export default function WebDesign(props: WebDesignProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebDesign!</h1>
    </div>
  );
}
