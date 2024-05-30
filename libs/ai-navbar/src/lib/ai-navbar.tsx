import styles from './ai-navbar.module.scss';

/* eslint-disable-next-line */
export interface AiNavbarProps {}

export function AiNavbar(props: AiNavbarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AiNavbar!</h1>
    </div>
  );
}

export default AiNavbar;
