import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface AiMachineLearningProps {}

export default function AiMachineLearning(props: AiMachineLearningProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiMachineLearning!</h1>
    </div>
  );
}
