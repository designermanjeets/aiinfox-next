import styles from './ai-ourjournal.module.scss';

/* eslint-disable-next-line */
export interface AiOurjournalProps {}

export function AiOurjournal(props: AiOurjournalProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiOurjournal!</h1>
    </div>
  );
}

export default AiOurjournal;
