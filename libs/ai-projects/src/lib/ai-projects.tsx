import styles from './ai-projects.module.scss';

/* eslint-disable-next-line */
export interface AiProjectsProps {}

export function AiProjects(props: AiProjectsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiProjects!</h1>
    </div>
  );
}

export default AiProjects;
