import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface GenerativeAiProps {}

export default function GenerativeAi(props: GenerativeAiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GenerativeAi!</h1>
    </div>
  );
}
