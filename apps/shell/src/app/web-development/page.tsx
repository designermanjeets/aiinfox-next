import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface WebDevelopmentProps {}

export default function WebDevelopment(props: WebDevelopmentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebDevelopment!</h1>
    </div>
  );
}
