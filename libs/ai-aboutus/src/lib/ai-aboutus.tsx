import styles from './ai-aboutus.module.scss';

/* eslint-disable-next-line */
export interface AiAboutusProps {}

export function AiAboutus(props: AiAboutusProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiAboutus!</h1>
    </div>
  );
}

export default AiAboutus;
