import styles from './ai-foo.module.scss';

/* eslint-disable-next-line */
export interface AiFooProps {}

export function AiFoo(props: AiFooProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiFoo!</h1>
    </div>
  );
}

export default AiFoo;
