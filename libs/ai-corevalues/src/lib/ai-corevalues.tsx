import styles from './ai-corevalues.module.scss';

/* eslint-disable-next-line */
export interface AiCorevaluesProps {}

export function AiCorevalues(props: AiCorevaluesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiCorevalues!</h1>
    </div>
  );
}

export default AiCorevalues;
