import styles from './ai-missionvision.module.scss';

/* eslint-disable-next-line */
export interface AiMissionvisionProps {}

export function AiMissionvision(props: AiMissionvisionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiMissionvision!</h1>
    </div>
  );
}

export default AiMissionvision;
