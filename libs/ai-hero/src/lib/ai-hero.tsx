import styles from './ai-hero.module.scss';

/* eslint-disable-next-line */
export interface AiHeroProps {}

export function AiHero(props: AiHeroProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiHero!</h1>
    </div>
  );
}

export default AiHero;
