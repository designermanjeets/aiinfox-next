import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface MobileAppDevelopmentProps {}

export default function MobileAppDevelopment(props: MobileAppDevelopmentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MobileAppDevelopment!</h1>
    </div>
  );
}
