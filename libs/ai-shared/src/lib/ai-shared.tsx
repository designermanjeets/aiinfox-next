import styles from './ai-shared.module.scss';

/* eslint-disable-next-line */
export interface AiSharedProps {}

export function AiShared(props: AiSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiShared!</h1>
    </div>
  );
}

export default AiShared;
