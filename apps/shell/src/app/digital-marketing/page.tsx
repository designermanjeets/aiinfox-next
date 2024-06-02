import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface DigitalMarketingProps {}

export default function DigitalMarketing(props: DigitalMarketingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DigitalMarketing!</h1>
    </div>
  );
}
